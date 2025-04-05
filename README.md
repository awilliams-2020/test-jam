# Forge Test Jam

A simple MVP Forge app that creates a test jam excel spreadsheet.

|Generate|Test Jam|
------|----------
|![Generate](https://github.com/awilliams-2020/test-jam/tree/main/src/frontend/images/generate.png)|![Generate](https://github.com/awilliams-2020/test-jam/tree/main/src/frontend/images/testjam.png)|


## Requirements

- A parent ticket (Epic, Story)
- A ticket (Task) with a linked parent ticket.
- A ticket container bullet list of user scenarios.

## How to use

- Forge app is installed on parent ticket
- Clicking "Generate" creates the spreadsheet

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
