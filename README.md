# freshbooks-cli-project 
[![Build Status](https://secure.travis-ci.org/logankoester/freshbooks-cli-project.png?branch=master)](http://travis-ci.org/logankoester/freshbooks-cli-project)

> A command-line interface for interacting with FreshBooks Projects

## Overview

[freshbooks-cli](https://github.com/logankoester/freshbooks-cli) is a
command-line interface to the [FreshBooks](http://freshbooks.com/) API.

`freshbooks-cli-project` implements the `project` subcommand for
[freshbooks-cli](https://github.com/logankoester/freshbooks-cli).


## Usage

    --list, -l - Display a full list of projects
    --help, -h - Display this message


## Examples

    # Displaying the full list of projects
    $ freshbooks --list
    project_id client_id name              rate                                     
    1          1         Example project   99.99                                    


## Contributing

The test suite is implemented with
[nodeunit](https://github.com/caolan/nodeunit) and
[nixt](https://github.com/vesln/nixt).

To rebuild & run the tests

    $ git clone https://github.com/logankoester/freshbooks-cli-project.git
    $ cd freshbooks-cli-project
    $ npm install
    $ grunt test

You can use `grunt watch` to automatically rebuild and run the test suite when
files are changed.

Use `npm link` from the project directory to tell `freshbooks-cli` to use
your modified `freshbooks-cli-project` during development.

To contribute back, fork the repo and open a pull request with your changes.


## License

Copyright (c) 2013 Logan Koester
Licensed under the MIT license.


