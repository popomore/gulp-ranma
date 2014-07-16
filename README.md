# gulp-ranma [![Build Status](https://travis-ci.org/popomore/gulp-ranma.png?branch=master)](https://travis-ci.org/popomore/gulp-ranma) [![Coverage Status](https://coveralls.io/repos/popomore/gulp-ranma/badge.png?branch=master)](https://coveralls.io/r/popomore/gulp-ranma?branch=master) 

Gulp plugin wrapped [ranma](https://github.com/army8735/ranma)

---

## Install

```
$ npm install gulp-ranma -g
```

## Usage

Transform js to commonjs

```
var ranma = require('gulp-ranma');

gulp.src('*.js')
.pipe(ranma('commonjs'))
.pipe(gulp.dest('dest'));
```

## LISENCE

Copyright (c) 2014 popomore. Licensed under the MIT license.
