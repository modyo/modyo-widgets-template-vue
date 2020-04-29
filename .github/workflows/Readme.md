# Example of github action in case you need it

## Build and publish to modyo

```yml
name: Build and Publish
on:
  push:
    branches:
      - master
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
      run: yarn
      env:
        NODE_AUTH_TOKEN: ${{ secrets.TOKEN_REG }}
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # This gets generated automatically
    - name: Build Package
      run: yarn build
    - name: Push to Modyo Site
      run: yarn modyo-push "$MODYO_WIDGET_NAME"
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # This gets generated automatically
        MODYO_ACCOUNT_URL: ${{secrets.BASE_URL}}
        MODYO_VERSION: ${{secrets.VERSION}}
        MODYO_TOKEN: ${{secrets.TOKEN}}
        MODYO_SITE_ID: ${{secrets.SITE_ID}}
        MODYO_WIDGET_NAME: ${{secrets.WIDGET_NAME}}
    - name: Push to Spanish Modyo Site
      run: yarn modyo-push "$MODYO_WIDGET_NAME"
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # This gets generated automatically
        MODYO_ACCOUNT_URL: ${{secrets.BASE_URL}}
        MODYO_VERSION: ${{secrets.VERSION}}
        MODYO_TOKEN: ${{secrets.TOKEN}}
        MODYO_SITE_ID: ${{secrets.SITE_ID_ES}}
        MODYO_WIDGET_NAME: ${{secrets.WIDGET_NAME}}
    - name: Release Draft
      uses: release-drafter/release-drafter@v5
      with:
        # (Optional) specify config name to use, relative to .github/. Default: release-drafter.yml
        config-name: release-drafter.yml
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Run ESLint on pull requests

```yml
name: ESLint

on:
  pull_request:
    branches:
      - master
      - develop
    types: [ opened, edited, reopened, synchronize ]
jobs:
  run-eslint:
    name: Run ESLint
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
        run: yarn
        env:
          NODE_AUTH_TOKEN: ${{ secrets.TOKEN_REG }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      - name: Lint Package
        run: yarn lint
```

## Run Stylelint on pull requests

```yml
name: Stylelint

on:
  pull_request:
    branches:
      - master
      - develop
    types: [ opened, edited, reopened, synchronize ]
jobs:
  run-stylelint:
    name: Run Stylelint
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
        run: yarn install
        env:
          NODE_AUTH_TOKEN: ${{ secrets.TOKEN_REG }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      - name: Lint Package
        run: yarn lint:style
```
