# sepp

> A cli tool to initialize and build boilerplates and projects

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

## Commands

Sepp was build to be as simple as possible, so there are just a few commands you need to know.

* [sepp start](#sepp-start)
* [sepp add <url>](#sepp-add-url)
* [sepp search](#sepp-search)
* [sepp list](#sepp-list)
* [sepp version](#sepp-version)

## Options

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

```
# add my node-module template
$ sepp add aichbauer/node-module-template
```

### sepp remove 

With `sepp version` you can remove a installed `sepp template`.

```sh
# remove my node-module template
$ sepp remove node-module
```

### sepp search 

With `sepp search` you can display all `sepp templates` available on [github](https://github.com).

```sh
# list all available templates on github
$ sepp search
```

### sepp list 

With `sepp version` you can display all `sepp templates`, already installed.

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
