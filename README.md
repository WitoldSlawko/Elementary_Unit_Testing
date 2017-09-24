# Elementary_Unit_Testing
Single JS file for making basic unit tests based on goods of object prototyping.
</br>
### https://www.npmjs.com/package/eut

</br>
# Below test file eut_test_examples.js: ...
var eut = require('./eut_tests.js');</br>
eut.name('adding').sum(1,4).eq(7).log();</br>
eut.name('guess the type').type(123).eq('number').log();</br>
eut.name('compare if equal').eq1(5).eq2(5).log();</br>
eut.name('substract').remain(1,-2,5,12).eq(2).log();</br>
eut.name('double check').sum(2,2).multi(2,2).eq(2).log();</br>
eut.name('divide one by anoter').divide(46,2).eq(23).log();</br>
eut.name('what is the reminder?').modulo(9,2).eq(1).log();</br>
eut.name('is first number greater than another').great(1,2).log();</br>
eut.name('logic').type(true).eq('boolean').log();</br>
eut.name('array test').sum([2,2]).eq(4).log();</br>
eut.name('another adding').sum(2,4).eq(6).log();</br>
eut.name('single').sum(2).eq(2).log();</br>
var obj1 = { prop1: 'val', prop2: 123, props3: true};</br>
var obj2 = { prop1: 'val', prop2: 123, props3: false};</br>
eut.name('compare two objects').eq1(obj1).eq2(obj2).log();</br>
eut.name('two arrays').eq1([1,true,'abc']).eq2([1,true,'abc']).log();</br>
eut.name('two arrays 2').eq1([1,345,'abc']).eq2([1,true,'abc']).log();</br>
eut.name('nothing').falsy(0).log();</br>
eut.name('does it contain?').contain_var_arr(3,[2,3,4]).log();</br>
eut.name('prop in object').contain_prop_obj('prop1',obj1).log();</br>
eut.name('val in object').contain_val_obj(true,obj1).log();</br>
eut.name('testing regular expresions').reg_exp('ab','01abcdef').log();</br>
</br>
# Will provide this log of console: ...
adding :  sum() :  FAILED</br>
guess the type :  type() :  PASSED</br>
compare if equal :  eq1().eq() :  PASSED</br>
substract :  remain() :  FAILED</br>
double check :  sum() :  FAILED</br>
double check :  multi() :  FAILED</br>
divide one by anoter : divide() :  PASSED</br>
what is the reminder? :  modulo() :  FAILED</br>
is first number greater than another : great():  FAILED</br>
logic :  type() :  PASSED</br>
array test :  sum() :  PASSED</br>
another adding :  sum() :  PASSED</br>
single :  sum() :  PASSED</br>
compare two objects :  eq1().eq2() :  FAILED</br>
two arrays :  eq1().eq2() :  PASSED</br>
two arrays 2 :  eq1().eq2() :  FAILED</br>
nothing : falsy() :  PASSED</br>
does it contain? : contain_var_arr() : PASSED</br>
prop in object : contain_prop_obj() : PASSED</br>
val in object : contain_val_obj() : PASSED</br>
testing regular expresions : reg_exp() : PASSED</br>
