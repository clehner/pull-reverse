var test = require('tape')
var reverse = require('.')
var pull = require('pull-stream')

var vals = [1,2,3,4,5,4,'foo',null,Object()]

test('reverse', function (t) {
  var reverseCache = reverse(pull.values(vals))
  t.test('1', doIt)
  t.test('2', doIt)
  function doIt(t) {
    pull(reverseCache(), pull.collect(function (err, values) {
      t.error(err, 'collect')
      t.deepEquals(values.reverse(), vals, 'values reverse')
      t.end()
    }))
  }
})
