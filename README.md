# roam-research-js

Javascript client for Roam Research. Roam Alpha API interface adapted from [roam-client](https://github.com/dvargas92495/roam-client) by David Vargas.

## Quick Usage

1. `npm install roam-research-js`
2. In your entry file, import `import * as roamAPI from 'roam-research-js'` (does nothing, it's just necessary to get global types for window.roamAlphaAPI)

## Local development

1. `git clone https://github.com/shanrauf/roam-research-js`
2. `yarn && yarn link`
3. (In another local project) `yarn link roam-research-js`
