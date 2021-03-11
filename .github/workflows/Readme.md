# Github Actions

Here are some examples you can use to automate different process using github actions for CI/CD.

*(The names of the files are as an example, you can name them as you want, the location of them is the important thing).*

## Build and publish to modyo

put this in `.github/workflows/build-publish.yml`

```yml
name: Build and Publish
on:
  push:
    branches:
      - master # replace with the name of your production branch
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js 12.x
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
        registry-url: https://npm.pkg.github.com/
        scope: '@modyo'
    - name: Install dependencies with yarn
      # if your project use more than one private registry you cad add it like this:
      # run: |
      #   echo "@fortawesome:registry=https://npm.fontawesome.com/" >> .npmrc
      #   echo "//npm.fontawesome.com/:_authToken=$FORTAWESOME_TOKEN" >> .npmrc
      #   yarn
      # if not do this:
      run: yarn
      env:
        # And add the additional registry token here:
        # FORTAWESOME_TOKEN: ${{secrets.FORTAWESOME_TOKEN}}
        NODE_AUTH_TOKEN: ${{ secrets.TOKEN_REG }}
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # This gets generated automatically
    - name: Build and Push to Modyo Site
      run: yarn modyo-push "$MODYO_WIDGET_NAME"
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # This gets generated automatically
        MODYO_ACCOUNT_URL: ${{secrets.MODYO_ACCOUNT_URL}}
        MODYO_VERSION: ${{secrets.MODYO_VERSION}}
        MODYO_TOKEN: ${{secrets.MODYO_TOKEN}}
        # Use the site id option
        MODYO_SITE_ID: ${{secrets.MODYO_SITE_ID}}
        # or the site host option, but not both
        MODYO_SITE_HOST: ${{secrets.MODYO_SITE_HOST}}
        MODYO_WIDGET_NAME: ${{secrets.MODYO_WIDGET_NAME}}
    - name: Release Draft
      uses: release-drafter/release-drafter@v5
      with:
        config-name: release-drafter.yml
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Run ESLint, Stylelint and Unit Tests on pull requests

put this in `.github/workflows/linters.yml`

```yml
name: Linters and Test

on:
  pull_request:
    branches:
      - master
      - develop
    types: [ opened, edited, reopened, synchronize ]
jobs:
  run-linters-tests:
    name: Run Linters and Tests
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: '12.x'
          registry-url: 'https://npm.pkg.github.com'
          scope: '@modyo'
      - name: Get yarn cache directory path
        id: yarn-cache-set-path
        run: echo "::set-output name=dir::$(yarn cache dir)"
      - uses: actions/cache@v1
        id: yarn-cache # use this to check for `cache-hit` (`steps.yarn-cache.outputs.cache-hit != 'true'`)
        with:
          path: ${{ steps.yarn-cache-set-path.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-
      - name: Install packages
        if: steps.yarn-cache-set-path.outputs.cache-hit != 'true'
        # if your project use more than one private registry you cad add it like this:
        # run: |
        #   echo "@fortawesome:registry=https://npm.fontawesome.com/" >> .npmrc
        #   echo "//npm.fontawesome.com/:_authToken=$FORTAWESOME_TOKEN" >> .npmrc
        #   yarn
        # if not do this:
        run: yarn
        env:
          # And add the additional registry token here:
          # FORTAWESOME_TOKEN: ${{secrets.FORTAWESOME_TOKEN}}
          NODE_AUTH_TOKEN: ${{ secrets.TOKEN_REG }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      - name: Lint JS
        run: yarn lint
      - name: Lint Styles
        run: yarn lint:style
      - name: Unit Tests
        run: yarn test:unit --passWithNoTests

```

## Publish package on Github registry

put this in `.github/workflows/publish-package.yml`

```yml
name: Publish Repo

on:
  release:
    types: [published]
jobs:
  publish-library:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js 12.x
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
        registry-url: https://npm.pkg.github.com/
        scope: '@modyo'
    - name: Install dependencies with yarn
      # if your project use more than one private registry you cad add it like this:
      # run: |
      #   echo "@fortawesome:registry=https://npm.fontawesome.com/" >> .npmrc
      #   echo "//npm.fontawesome.com/:_authToken=$FORTAWESOME_TOKEN" >> .npmrc
      #   yarn
      # if not do this:
      run: yarn
      env:
        # And add the additional registry token here:
        # FORTAWESOME_TOKEN: ${{secrets.FORTAWESOME_TOKEN}}
        NODE_AUTH_TOKEN: ${{ secrets.TOKEN_REG }}
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # This gets generated automatically
    - name: Build Library
      run: yarn build:lib
    - name: Versioning
      run : |
          echo $GITHUB_REF
          TAG=$(echo $GITHUB_REF | cut -c 11-)
          echo $TAG
          git config user.email echo $EMAIL
          git config user.name echo $NAME
          yarn version --new-version  $TAG
      env:
        EMAIL: ${{ secrets.EMAIL }}
        NAME: ${{ secrets.NAME }}
    - name: Publish to GitHub Package Registry
      run: yarn publish
      env:
        NODE_AUTH_TOKEN: ${{github.token}}
```

## Release draft

put this in `.github/workflows/release-draft.yml`

[View docs](https://github.com/release-drafter/release-drafter)

```yml
name: Release Drafter

on:
  push:
    # branches to consider in the event; optional, defaults to all
    branches:
      - master

jobs:
  update_release_draft:
    runs-on: ubuntu-latest
    steps:
      # Drafts your next Release notes as Pull Requests are merged into "master"
      - uses: release-drafter/release-drafter@v5
        with:
          # (Optional) specify config name to use, relative to .github/. Default: release-drafter.yml
          config-name: release-drafter.yml
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```

## Release drafter config

put this in `.github/release-drafter.yml`

```yml
name-template: 'v$RESOLVED_VERSION'
tag-template: '$RESOLVED_VERSION'
change-template: '- $TITLE @$AUTHOR (#$NUMBER)'
template: |
  ## What’s Changed
  $CHANGES

  ## Contributors
  $CONTRIBUTORS
categories:
  - title: '🚀 Features'
    labels:
      - 'feature'
      - 'feat'
  - title: '🐛 Bug Fixes'
    labels:
      - 'fix'
  - title: '🎨 Refactor'
    labels:
      - 'refactor'
      - 'style'
  - title: '🧰 Maintenance'
    labels:
      - 'chore'
      - 'ci'
  - title: '📝 Docs/Test'
    labels:
      - 'docs'
      - 'test'
version-resolver:
  major:
    labels:
      - 'major'
  minor:
    labels:
      - 'minor'
  patch:
    labels:
      - 'patch'
  default: patch
```

## PR Labeler

put this in `.github/workflows/pr-labeler.yml`

[View docs](https://github.com/TimonVS/pr-labeler-action)

```yml
name: PR Labeler
on:
  pull_request:
    types: [opened]

jobs:
  pr-labeler:
    runs-on: ubuntu-latest
    steps:
      - uses: TimonVS/pr-labeler-action@v3
        with:
          configuration-path: .github/pr-labeler.yml # optional, .github/pr-labeler.yml is the default value
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## PR Labeler config

put this in `.github/pr-labeler.yml`

```yml
chore: 'chore/*'
ci: 'ci/*'
docs: 'docs/*'
feature: ['feature/*', 'feat/*']
fix: 'fix/*'
refactor: 'refactor/*'
style: 'style/*'
test: 'test/*'
```
