//import eut from './eut_tests.js';
var eut = require('./eut_tests.js');

eut.name('adding').sum(1,4).eq(7).log();

eut.name('guess the type').type(123).eq('number').log();

eut.name('compare if equal').eq1(5).eq2(5).log();

eut.name('substract').remain(1,-2,5,12).eq(2).log();

eut.name('double check').sum(2,2).multi(2,2).eq(2).log();

eut.name('divide one by anoter').divide(46,2).eq(23).log();

eut.name('what is the reminder?').modulo(9,2).eq(1).log();

eut.name('is first number greater than another').great(1,2).log();

eut.name('logic').type(true).eq('boolean').log();

eut.name('array test').sum([2,2]).eq(4).log();

eut.name('another adding').sum(2,4).eq(6).log();

eut.name('single').sum(2).eq(2).log();

var obj1 = { prop1: 'val', prop2: 123, props3: true};
var obj2 = { prop1: 'val', prop2: 123, props3: false};

eut.name('compare two objects').eq1(obj1).eq2(obj2).log();

eut.name('two arrays').eq1([1,true,'abc']).eq2([1,true,'abc']).log();

eut.name('two arrays 2').eq1([1,345,'abc']).eq2([1,true,'abc']).log();

eut.name('nothing').falsy(0).log();

eut.name('does it contain?').contain_var_arr(3,[2,3,4]).log();

eut.name('prop in object').contain_prop_obj('prop1',obj1).log();

eut.name('val in object').contain_val_obj(true,obj1).log();
