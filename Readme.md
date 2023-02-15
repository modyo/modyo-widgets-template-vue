# initialize this template

to initialize the repo you must run:

```ssh
modyo-cli get modyo-widgets-template-vue "WIDGET_NAME" 
```

## Widget Name

​
Layout "**Layout Name**" in the Modyo Platform.
Widget name is "**Widget Name**".

## Table of Contents

- [initialize this template](#initialize-this-template)
  - [Widget Name](#widget-name)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Environments](#environments)
  - [Layouts](#layouts)
  - [Getting Started](#getting-started)
    - [Installing](#installing)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Services](#services)
  - [Other Scripts](#other-scripts)
  - [Github Actions](#github-actions)
  - [Extra Documentation](#extra-documentation)

## [About](#about)

Widget built with vue-cli that allows the user to ...
This is a # version, available since Month 202X.

## [Environments](#environments)

here is a table with the Modyo® environments where this widgets is available.

| Environments | Action to push |  Url Base |
|-|-|
| Development | push to develop branch | <https://un.modyo.cloud> |
| Production | Publish a version |<http://un.modyo.be> |

Despite this table we need to instantiate the environments to allow push the widget from local devices this env file must accomplish with the .env.example file but should be renamed and this file cant be pushed to the GitHub repo to avoid pass valid token to the git history

## [Layouts](#layouts)

here is a table with the layouts where the widget is instantiated in Modyo®.

| Layouts |
|-|
| Home |
| Summary |

## [Getting Started](#getting_started)

for local dev activation of linter run 
     
```yarn install --dev-dependencies```
or 
```npm install --only=dev```

to only run in docker for develop 
```docker-compose --env-file .env up```

to run push in docker 
```docker-compose --env-file .env run widget_cli modyo-push```
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Installing

​
Clone the repository from **develop branch** using SSH
​

```shell
git@github.com:modyo/widget-name.git
```

​
Once cloned pull any existing changes and install all dependencies to be up to date.
​

```shell
git pull origin develop
npm install
```

​
Create a new branch with accurate naming conventions (type of prefix, issue tracker ID and what change was made there.)
​

```shell
git branch feat/0000-change-made
```

## [Usage](#usage)

​
Here we describe in detail the widget flow including what endpoints are used, steps needed to go through the widget flow, if we need any dependencies and which version is being used, if we need to use some data from the platform instead of locally, the available views and what can we do inside each of them, and if we want we can include a table with mobile and desktop versions of said view to make things easier visually:
​
`widgetViewMobileVersion.vue` for mobile devices | ``widgetViewDesktopVersion.vue` for mobile devices | `panelMenu.vue` for desktop
.vue` for desktop
------------ | -------------
![alt text](src/assets/readme/widgetViewMobileVersion.png "widgetView component mobile") | ![alt text](src/assets/readme/widgetViewDesktopVersion.png "widgetView component desktop")
​

## [Deployment](#deployment)

Once all changes are made in the new branch, we can publish changes to the Modyo Platform following a GitHub workflow:
​

+ To publish to **Certification**:
+ first make sure the file _.github/workflows/publish-to-certification.yml_ exists.
+ we commit the changes and push the branch with:

```shell
    git add .
    git commit -m "feat(where the change was made): what did we change there"
    git push origin branch-name
```

+ we create a new Pull Request to merge the branch into _develop_ branch.
+ To publish to **Prodution**:
+ first make sure the file _.github/workflows/publish-to-production.yml_ exists. 
+ we create a new Pull Request to merge the _develop_ branch into _master_ branch.
+ create a new Release with the new version (the first time it will probably have to be manually), following naming convention such as v1.0.0., and make sure its published and doesn't stay as a draft.
​
Some things to consider:
+ Don't create the widget manually on the Modyo platform, when the workflow runs the widget will automatically create itself and then we can add it to the Layout we need.
+ Name the widget after the same name of the repo (_larrainvial-repo-name_ instead of _Repo Name_), so we can know this is a widget with the latest settings.
​
In the event that we need to make a hotfix in a hurry we can also use the vue-cli interface. First we need to adjust the _.env_ file with the *MODYO_ACCOUNT_URL* and *MODYO_TOKEN* values so we aim to Certification or Production environment. Write in the console:
​

```shell
vue ui
```

​
There, go to _Tasks_ and just run *build* and *modyo-push*, now you can see your changes uploaded to the widget in the builder. Ideally, we run the normal workflow afterwards.

## [Services](#services)

Please add the list of services and endpoints that this widget consumes data.

| Services | Endpoints |
|-|-|
| Service 1 | <https://endpoint.com> |
| Service 2 | <https://endpoint.com> |

## [Other Scripts](#other-scripts)

```s
    yarn build #or
    npm run build
```

to Make the production build of the widget

```s
    yarn test:unit #or
    npm run test:unit
```

to Run unit test

```s
    yarn lint #or
    npm run lint
```

to Run linter issues

```s
    yarn i18n:report #or
    npm run i18n:report
```

to generate a translation report

```s
    yarn lint:style #or
    npm run lint:style
```

to lint styles

```s
    yarn modyo-push #or
    npm run modyo-push
```

to make build and push to Modyo® (we need the .env file or the environment variables set in the machine or we can pass the options to push the widget to the Modyo® account)

## [Github Actions](#github-actions)

to automate the process of deployment we recommend some actions descrbed [here](/.github/workflows/Readme.md)

## [Extra Documentation](#extra-documentation)

+ A more thorough documentation on the flow can be found at [TBC link](#).
+ *If there's another essential documentation required to understand this widget include it here.
