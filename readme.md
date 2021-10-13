# Purpose

This repo is a starting point (eg. project skeleton) for purely client-side-rendered apps using webpack. If starting a
new project, simply fork this repo and begin development.

# Features

The following is already setup and ready for you to take advantage of.

- Unit Tests (jest)
- Webpack
  - Separate bundles per webpage. Allows for multiple "SPA" pages per application.
- Babel es5 pre-processing
- React JSX pre-processing
- SCSS pre-processing

# Getting Started

1. Install dependencies: `npm i `
2. Run tests: `npm run test`
3. Build dev environment and watch for changes to source: `npm run buildDev-watch`
4. View your work: open HTML files under `/dist` using your browser
5. Build for production: `npm run buildProd`

# Project Structure

There is no backend in this repo. Therefore, the `app` directory captures a purely frontend application. If this app ever
requires data from services, those services must be built in a separate codebase, or else this codebase modified
significantly.

```
webpack-example/
├─ app/                     # All source which composes this frontend app, uncompiled/processed
│  ├─ html/                 # HTML - react apps will be initialized on some of these pages
│  ├─ js/                   # JavaScript applications which can be initialized and run on html pages
│  │  ├─ components/        # React components
│  │  ├─ page-components/   # The root React components which render themselves onto a DOM element
├─ test/                    # Unit Tests (run with `npm run test`)
├─ dist/                    # Build output. These are the fully processed HTML & assets, ready to be served to browsers.
```

