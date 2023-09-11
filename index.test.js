const process = require('process')

// shows how the runner will run a javascript action with env / stdout protocol
test('test run', () => {
  process.env['GITHUB_REPOSITORY'] = '__TEST_VALUE__'
  process.env['INPUT_TOKEN'] = '__TEST_VALUE__'
  process.env['INPUT_FROMTAG'] = '__TEST_VALUE__'
  process.env['INPUT_TOTAG'] = '__TEST_VALUE__'
  process.env['INPUT_WRITETOFILE'] = 'false'
  process.env['INPUT_INCLUDEREFISSUES'] = 'true'
  process.env['INPUT_USEGITMOJIS'] = 'true'
  process.env['INPUT_INCLUDEINVALIDCOMMITS'] = 'false'
  process.env['INPUT_REVERSEORDER'] = 'false'
  process.env['INPUT_EXCLUDETYPES'] = 'fix,perf,refactor,test,build,doc,style,chore,other'
  process.env['INPUT_GOOGLEPLAYMODE'] = 'true'

  require('./index.js')
})
