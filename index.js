'use strict';

var ranma = require('ranma');
var through = require('through2');
var PluginError = require('gulp-util').PluginError;

module.exports = function(type) {
  var available = ['cjs', 'commonjs', 'amd', 'cmd'];
  if (available.indexOf(type) === -1) {
    throw new Error('available type is ' + available.join('/'));
  }
  if (type === 'commonjs') type = 'cjs';

  return through.obj(function transform(file, enc, callback) {
    if (file.isStream()) {
      return callback(new PluginError('gulp-ranma', 'Streaming not supported.'));
    }

    var code = file.contents.toString();
    code = ranma[type + 'ify'](code);
    file.contents = new Buffer(code);
    this.push(file);
    callback();
  });
};
