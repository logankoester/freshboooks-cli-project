# FreshBooks: CLI Project
> A command-line interface for interacting with FreshBooks Projects

[![Build Status](http://ci.ldk.io/logankoester/freshboooks-cli-project/badge)](http://ci.ldk.io/logankoester/freshboooks-cli-project/)
[![status](https://sourcegraph.com/api/repos/github.com/logankoester/freshboooks-cli-project/badges/status.png)](https://sourcegraph.com/github.com/logankoester/freshboooks-cli-project)
[![Gittip](http://img.shields.io/gittip/logankoester.png)](https://www.gittip.com/logankoester/)

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


[![xrefs](https://sourcegraph.com/api/repos/github.com/logankoester/freshboooks-cli-project/badges/xrefs.png)](https://sourcegraph.com/github.com/logankoester/freshboooks-cli-project)
[![funcs](https://sourcegraph.com/api/repos/github.com/logankoester/freshboooks-cli-project/badges/funcs.png)](https://sourcegraph.com/github.com/logankoester/freshboooks-cli-project)
[![top func](https://sourcegraph.com/api/repos/github.com/logankoester/freshboooks-cli-project/badges/top-func.png)](https://sourcegraph.com/github.com/logankoester/freshboooks-cli-project)
[![library users](https://sourcegraph.com/api/repos/github.com/logankoester/freshboooks-cli-project/badges/library-users.png)](https://sourcegraph.com/github.com/logankoester/freshboooks-cli-project)
[![authors](https://sourcegraph.com/api/repos/github.com/logankoester/freshboooks-cli-project/badges/authors.png)](https://sourcegraph.com/github.com/logankoester/freshboooks-cli-project)
[![Total views](https://sourcegraph.com/api/repos/github.com/logankoester/freshboooks-cli-project/counters/views.png)](https://sourcegraph.com/github.com/logankoester/freshboooks-cli-project)
[![Views in the last 24 hours](https://sourcegraph.com/api/repos/github.com/logankoester/freshboooks-cli-project/counters/views-24h.png)](https://sourcegraph.com/github.com/logankoester/freshboooks-cli-project)
