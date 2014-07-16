'use strict';

require('should');
var join = require('path').join;
var fs = require('fs');
var File = require('gulp-util').File;
var ranma = require('..');
var fixtures = join(__dirname, 'fixtures');

describe('gulp-ranma', function() {

  it('should throw when unmatched type', function() {
    (function() {
      ranma();
    }).should.throw('available type is cjs/commonjs/amd/cmd');

    (function() {
      ranma('');
    }).should.throw('available type is cjs/commonjs/amd/cmd');

    (function() {
      ranma('type');
    }).should.throw('available type is cjs/commonjs/amd/cmd');

    ranma('cjs');
  });

  it('should transport to commonjs', function(done) {
    var stream = ranma('commonjs')
    .on('data', function(file) {
      var filepath = join(fixtures, 'jquery.expect.js');
      var actual = fs.readFileSync(filepath).toString();
      file.contents.toString().should.equal(actual);
      done();
    });

    var filepath = join(fixtures, 'jquery.js');
    var fakeFile = new File({
      path: filepath,
      contents: fs.readFileSync(filepath)
    });
    stream.write(fakeFile);
    stream.end();
  });

});
