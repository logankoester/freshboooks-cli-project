exports.get = (@freshbooks, callback) ->
    project = new @freshbooks.Project
    project.list callback

exports.formatters =
  table: (projects) ->
    _ = require 'lodash'
    cliff = require 'cliff'

    keys = [
      'project_id',
      'client_id',
      'name',
      'rate'
    ]

    list = _.map projects, (project) ->
      [
        project.project_id,
        project.client_id,
        project.name,
        project.rate
      ]

    list.unshift(keys)

    cliff.stringifyRows list, [
      'white',
      'white',
      'blue',
      'green'
    ]
