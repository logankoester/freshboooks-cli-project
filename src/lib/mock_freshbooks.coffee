nodemock = require 'nodemock'

module.exports = class Freshbooks
  constructor: (base_uri, api_token) ->

  Project: class Project
    constructor: ->
      return nodemock
        .mock('list')
        .takes (err, projects) ->
          projects
        .calls(0, [
          undefined, [
            {
              project_id: '1',
              client_id: '1',
              name: 'Simulated project',
              rate: 99.99
            }
          ]
        ])
