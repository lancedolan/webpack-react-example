# Purpose

Project skeleton for purely client-side-rendered apps using webpack and react. If 
starting a new project, simply click "Use This Template" above, or fork this repo, 
and begin development.

This serves as a starting point for my personal projects which share a common tech
stack, but probably won't be highly useful to devs/orgs beyond myself.

# Features

The following is already setup and ready for you to take advantage of.

- Unit Tests (jest)
- Webpack
  - Separate bundles per webpage. Allows for multiple "SPA" pages per application.
- Sourcemaps
- Babel es5 pre-processing
- React JSX pre-processing
- SCSS pre-processing
- TODO: Twitter Bootstrap

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
webpack-react-skeleton/
├─ app/                     # All source which compose this frontend app, uncompiled/unprocessed
│  ├─ html/                 # HTML - react apps will be initialized on some of these pages
│  │                        #    Note: script tags will be injected to the <head> at build time
│  ├─ js/                   # JavaScript applications which can be initialized and run on html pages
│  │  ├─ components/        # React components
│  │  ├─ page-components/   # The root React components which render themselves onto a DOM element
├─ test/                    # Unit Tests (run with `npm run test`)
├─ dist/                    # Build output. Fully processed HTML & assets, ready to be served.
```

