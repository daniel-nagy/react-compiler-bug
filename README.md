# React Compiler Bug

This is a repo of a bug with the React Compiler, Vite, and the Vite plugin for React which facilitates Fast Refresh.

## Instructions

1. Clone this repo

```sh-session
git clone git@github.com:daniel-nagy/react-compiler-bug.git
```

2. Install dependencies

```sh-session
npm install
```

3. Start the dev server

```sh-session
npm run start
```

4. Edit the markdown file and observe that Fast Refresh is broken.

5. Comment out the React Compiler plugin in the Vite config and observe Fast Refresh works when the markdown changes.

This is likely because the React Compiler cache is global and because it treats imports as constants.
