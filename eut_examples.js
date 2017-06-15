//import eut from './eut_tests.js';
var eut = require('./eut_tests.js');

eut.name('adding').sum(1,4).eq(7).log();

eut.name('another adding').sum(2,4).eq(6).log();

eut.name('guess the type').type(123).eq('number').log();

eut.name('compare if equal').eq1(5).eq2(5).log();

eut.name('substract').remain(1,-2,5,12).eq(2).log();

eut.name('double check').sum(2,2).multi(2,2).eq(2).log();

eut.name('divide one by anoter').divide(46,2).eq(23).log();

eut.name('what is the reminder?').modulo(9,2).eq(1).log();

eut.name('is first number greater than another').great(1,2).log();