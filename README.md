# Forge Test Jam

A Forge app that automatically generates test jam spreadsheets from Jira tickets. This tool helps streamline the test planning process by converting user scenarios from Jira tickets into a structured Excel spreadsheet format.

## Features

- Automatically generates Excel spreadsheets from Jira tickets
- Extracts user scenarios from ticket descriptions
- Organizes test cases in a clear, structured format
- Supports hierarchical ticket relationships (Epic/Story -> Tasks)

## Requirements

- A parent ticket (Epic, Story)
- A ticket (Task) with a linked parent ticket
- A ticket containing bullet list of user scenarios in the description

## How to use

1. Install the Forge app on your Jira instance
2. Navigate to a parent ticket (Epic or Story)
3. Click the "Generate" button in the issue panel
4. The app will automatically create and download an Excel spreadsheet containing:
   - Task information (key and summary)
   - User scenarios from the ticket descriptions
   - Status tracking columns

## Quick start

- Modify your app frontend by editing the `src/frontend/index.jsx` file.

- Modify your app backend by editing the `src/resolvers/index.js` file to define resolver functions. See [Forge resolvers](https://developer.atlassian.com/platform/forge/runtime-reference/custom-ui-resolver/) for documentation on resolver functions.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
