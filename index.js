(function() {
  var conf, displayHelp, exec, getFreshbooks, list, nopt, parsedOptions, path;

  path = require('path');

  nopt = require('nopt');

  conf = require('freshbooks-cli-config').getConf();

  exec = require('child_process').exec;

  displayHelp = function() {
    var cmd, manpage;
    manpage = path.join(__dirname, 'man', 'freshbooks-project.1');
    cmd = "man --local-file " + manpage;
    return exec(cmd, function(err, stdout, stderr) {
      process.stdout.write("" + stdout);
      process.stderr.write("" + stderr);
      if (err) {
        return console.error(err);
      }
    });
  };

  getFreshbooks = function() {
    var Freshbooks, base_uri;
    if (conf.get('simulate')) {
      Freshbooks = require('./lib/mock_freshbooks');
    } else {
      Freshbooks = require('freshbooks');
    }
    base_uri = "" + (conf.get('api:url')) + "/" + (conf.get('api:version')) + "/xml-in";
    return new Freshbooks(base_uri, conf.get('api:token'));
  };

  parsedOptions = nopt({
    list: Boolean,
    help: Boolean,
    debug: Boolean
  }, {
    l: ['--list'],
    h: ['--help']
  }, process.argv, 2);

  if (parsedOptions.help) {
    displayHelp();
  } else if (parsedOptions.list) {
    list = require('./lib/list');
    list.get(getFreshbooks(), function(err, projects) {
      if (err) {
        console.error;
      }
      return console.log(list.formatters.table(projects));
    });
  } else {
    displayHelp();
  }

}).call(this);
