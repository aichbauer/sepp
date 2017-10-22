# sepp

> A cli tool to initialize and build boilerplates and projects

[![Build Status](https://travis-ci.org/aichbauer/sepp.svg?branch=master)](https://travis-ci.org/aichbauer/sepp)
[![Build status](https://ci.appveyor.com/api/projects/status/ir6sa68k4at1s0cm?svg=true)](https://ci.appveyor.com/project/aichbauer/sepp)
[![Coverage Status](https://coveralls.io/repos/github/aichbauer/sepp/badge.svg?branch=master)](https://coveralls.io/github/aichbauer/sepp?branch=master)

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [Create a template](#create-a-template)
* [Commands](#commands)
  * [sepp start](#sepp-start)
  * [sepp add <url>](#sepp-add-url)
  * [sepp search](#sepp-search)
  * [sepp list](#sepp-list)
  * [sepp version](#sepp-version)
* [Options](#options)
  * [sepp --help](#sepp---help)

## Installation

```sh
$ npm i -g sepp
```
or
```sh
$ yarn global add sepp
```

## Usage

Forget the times where you git clone a boilerplate or copy a folder and changing packagenames, authors, and readmes. Now just type: 
```sh
$ sepp start
```

## Create a template

Create a new folder.
```sh
# cd into your project directory
cd path/to/your/projects
# create a new folder
mkdir my-sepp-template
```

Create a sepp folder inside of your new template file. This is the directory to place al information that it can be used with the `sepp` command line interface. This directory will not be copied (e.g. `sepp` directory is excluded) if you create a new project with sepp.
```sh
# cd into your template directory
cd my-sepp-template
# create a new sepp folder
mkdir sepp
```

Inside of your sepp directory you can create file called `sepp-questions.json`.

```sh
# cd into the sepp directory
cd sepp
# create a sepp-questions.json
touch sepp-questions.json
```

Inside the `sepp-questions.json` you can define the variables that you can use inside of your template files.
For the questions we use the library [inquirer](https://github.com/SBoudrias/Inquirer.js#questions). When you create a new project with `sepp start` you got requested to answer this questions.

```json
{
  "questions": [
    {
      "type": "input",
      "name": "projectName",
      "message": "The name of your project: "
    },
    {
      "type": "input",
      "name": "projectDesc",
      "message": "The description of your project: "
    },
  ]
}
```

Now create your template files. For example, a `package.json` file. Inside your templates you can use the variables difined inside your `sepp-questions.json` as `name`.

```json
{
  name: "{{projectName}}",
  version: "0.0.0",
  description: "{{projectDesc}}"
}
```

Use this template with `sepp`.

You can either create a `.sepp/templates` folder and copy/paste `my-sepp-template` into this directory or you can push it to a remote git repositiry and use [sepp add <url>](#sepp-add-url) to add it to your `.sepp/templates` directory.

If you decide to make it available as a public sepp template, you can host your `sepp template` on github and add the tags `sepp` and `template` to this repository, and anyone using `sepp` can find your `sepp template` using `sepp search`.

## Commands

Sepp was build to be as simple as possible, so there are just a few commands you need to know.

* [sepp start](#sepp-start)
* [sepp add <url>](#sepp-add-url)
* [sepp search](#sepp-search)
* [sepp list](#sepp-list)
* [sepp version](#sepp-version)

## Options

Sepp was build to be as simple as possible, so there are just a few options you need to know.

* [sepp --help](#sepp---help)

### sepp start

With `sepp start` you can create a new project.

This command will search for templates inside your `home directory` for a `.sepp/templates` directory. This is the place where you can save your templates. You can either add them manually or by adding `git repositories` via the `sepp add <url>` command.

```sh
# create a new project
$ sepp start
```

### sepp add <url>

With `sepp add <url>` you can add new template project from any git remote repository.

This command will search for the repository behind the `<url>` you provided and clone it to `.sepp/templates`. If you use `username/repositoryname`, this command will search by default repositories on [github](https://github.com).

```sh
# add the node-module template
$ sepp add aichbauer/node-module
```

### sepp remove 

With `sepp remove` you can remove a installed `sepp template`.

```sh
# remove the node-module template
$ sepp remove node-module
```

### sepp search 

With `sepp search` you can display all `sepp templates` available on [github](https://github.com).

```sh
# list all available templates on github
$ sepp search
```

### sepp list 

With `sepp list` you can display all `sepp templates` that are installed.

```sh
# list all installed templates
$ sepp list
```

### sepp version 

With `sepp version` you can display the current version of `sepp`.

```sh
# current version
$ sepp version
```

### sepp --help

With `sepp --help` you can display usage of sepp.

```sh
# usage of cli
$ sepp --help
```

## LICENSE

MIT © Lukas Aichbauer
