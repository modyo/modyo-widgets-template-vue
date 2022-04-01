# Widget Name

## Table of Contents

+ [About](#about)
+ [Getting Started](#getting_started)
+ [Usage](#usage)
+ [Add Ons](#add_ons)
+ [Contributing](#contributing)
+ [Licence](#license)

## About <a name="about"></a>

Description of the widget and functionalities

| Functionality   | Description       |
|:----------------|:------------------|
| Functionality A | short description |
| Functionality B | short description |
| Functionality C | short description |

## Getting Started

These instructions will get you a copy of the template Widget up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on Modyo.

### Development Setup

This project requires NodeJS (version LTS or later), NPM and YARN.
[Node](http://nodejs.org/), [NPM](https://npmjs.org/) and [YARN](https://yarnpkg.com/) are really easy to install. To make sure you have them available on your machine, try running the following command.

```sh
node -v
npm -v
yarn -v
```

Also you will need the [Modyo CLI](https://docs.modyo.com/platform/channels/widgets.html#modyo-cli) tool installed globally on your local machine.

```sh
npm i -g @modyo/cli #via npm
yarn global add @modyo/cli #via yarn
```

### Installing

**BEFORE YOU INSTALL:** please read the **Development Setup** above.

To install a copy of this Widget on your local machine:

```sh
modyo-cli get modyo-widgets-template-vue [DIRECTORY]
```

This command will clone the template Widget and install it's dependencies.

## Usage

### Serving the Widget

```sh
yarn serve
```

### Running the tests and linters

```sh
yarn test:unit
yarn lint
yarn lint:styles
```

### Get a I18N report to check for missing translations or status

```sh
yarn i18n:report
```

### To create a production build

```sh
yarn build
```

This task will create a distribution version of the Widget inside your local `dist/` folder

### Serving a production version

```sh
yarn serve --mode=production
```

## Features

### Bootstrap

### Fontawesome

### VeeValidate

### Vue I18n

### LiquidJS

### Vue Axe

### ESLint

### Stylelint

### PurgeCSS

## Contributing

Please make sure to read the [Contributing Guide](/.github/CONTRIBUTING.md) before making a pull request.

## License

SEE LICENSE IN [LICENSE.md](/LICENSE.md)
