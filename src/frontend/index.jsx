import React, { useEffect, useState } from 'react';
import ForgeReconciler, { useProductContext } from '@forge/react';
import { requestJira } from '@forge/bridge';
import { Spinner, LoadingButton } from '@forge/react';
import writeXlsxFile from 'write-excel-file'

const App = () => {
  const context = useProductContext();
  const [ isLoading, setIsLoading] = useState(true)
  const [ isGenerating, setIsGenerating] = useState(false)
  const [ epicKey, setEpicKey ] = useState()

  const HEADER_ROW = [
    {
      value: 'Task',
      fontWeight: 'bold',
      span: 5,
      backgroundColor: '#adb5bd'
    },
    null,
    null,
    null,
    null,
    {
      value: 'Test',
      fontWeight: 'bold',
      span: 10,
      backgroundColor: '#adb5bd'
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      value: 'Status',
      fontWeight: 'bold',
      backgroundColor: '#adb5bd'
    }
  ]

  const fetchEpic = async (issueId) => {
    const res = await requestJira(`/rest/api/3/search/jql?jql=parent='${issueId}'`);
    const data = await res.json();
    return data.issues;
  };

  const fetchIssue = async (issueKey) => {
    const res = await requestJira(`/rest/api/3/issue/${issueKey}`);
    const data = await res.json();
    return data;
  }

  const flattenList = (bulletList) => {
    const flatList = []
    bulletList.forEach(bulletPoint => flatList.push(
      [
        {value: null, span: 5},
        null,
        null,
        null,
        null,
        {
          value: bulletPoint.content[0].content[0].text,
          span: 10
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ))
    return flatList
  }

  const writeExcelFile = async (ROWS) => {
    await writeXlsxFile([HEADER_ROW, ...ROWS], {
      fileName: `${epicKey} - Test Jam.xlsx`
    })
  }

  const generateTests = async () => {
    setIsGenerating(true)
    let tests = []
    const issues = await fetchEpic(epicKey);
    for(let i = 0; i< issues.length; i++) {
      const issue = await fetchIssue(issues[i].id)
      const content = issue.fields.description.content
      tests.push([
        {
          value: `${issue.key} - ${issue.fields.summary}`, span: 5, backgroundColor: '#e9ecef',
        },
        null,
        null,
        null,
        null,
        {
          span: 10,
          backgroundColor: '#e9ecef'
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null

      ])
      content.forEach(items => {
        if (items.type === "bulletList") {
          const bulletList = items.content
          tests.push(...flattenList(bulletList))
          return
        }
      })
    }
    if(tests.length) {
      writeExcelFile(tests)
      setIsGenerating(false)
    }
  }

  useEffect(() => {
    if (context) {
      setEpicKey(context.extension.issue.key)
      setIsLoading(false)
    }
  }, [context]);

  return (
    <>
      {isLoading ? (
        <Spinner label="loading" />
      ) : (
        <LoadingButton
          appearance="primary"
          isLoading={isGenerating}
          spacing="compact"
          onClick={generateTests}
        >
          Generate
        </LoadingButton>
      )}
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
