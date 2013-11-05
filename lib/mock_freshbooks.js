(function() {
  var Freshbooks, nodemock;

  nodemock = require('nodemock');

  module.exports = Freshbooks = (function() {
    var Project;

    function Freshbooks(base_uri, api_token) {}

    Freshbooks.prototype.Project = Project = (function() {
      function Project() {
        return nodemock.mock('list').takes(function(err, projects) {
          return projects;
        }).calls(0, [
          void 0, [
            {
              project_id: '1',
              client_id: '1',
              name: 'Simulated project',
              rate: 99.99
            }
          ]
        ]);
      }

      return Project;

    })();

    return Freshbooks;

  })();

}).call(this);
