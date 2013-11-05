nixt = require 'nixt'

showHelp = (result) ->
  if !(result.stdout.match(/--help/))
    return new Error('--help should be mentioned')

exports.group =

  'No options': (test) ->
    test.doesNotThrow ->
      nixt()
        .expect(showHelp)
        .run('bin/freshbooks-project')
        .code(0)
        .end(test.done)

  '--help': (test) ->
    test.doesNotThrow ->
      nixt()
        .expect(showHelp)
        .run('bin/freshbooks-project --help')
        .code(0)
        .end(test.done)

  '--list': (test) ->
    test.doesNotThrow ->
      nixt()
        .expect (result) ->
          if !(result.stdout.match(/Simulated project/))
            return new Error('Simulated project should be listed')
        .run('freshbooks_config=tests/config_file bin/freshbooks-project --list')
        .code(0)
        .end(test.done)
