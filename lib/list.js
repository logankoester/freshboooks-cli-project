(function() {
  exports.get = function(freshbooks, callback) {
    var project;
    this.freshbooks = freshbooks;
    project = new this.freshbooks.Project;
    return project.list(callback);
  };

  exports.formatters = {
    table: function(projects) {
      var cliff, keys, list, _;
      _ = require('lodash');
      cliff = require('cliff');
      keys = ['project_id', 'client_id', 'name', 'rate'];
      list = _.map(projects, function(project) {
        return [project.project_id, project.client_id, project.name, project.rate];
      });
      list.unshift(keys);
      return cliff.stringifyRows(list, ['white', 'white', 'blue', 'green']);
    }
  };

}).call(this);
