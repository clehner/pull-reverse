module.exports = function (read, onEnd) {
  var vals = []

  read(null, function next(end, data) {
    if (end) return onEnd && onEnd(end === true ? null : end)
    vals.push(data)
    read(null, next)
  })

  return function () {
    var i = vals.length - 1
    return function (end, cb) {
      if (end) cb()
      else if (i < 0) cb(true)
      else cb(null, vals[i--])
    }
  }
}
