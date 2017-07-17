var Eut = function(){
  this.name_set;
  this.type_of;
  this.truthy_var;
  this.falsy_var;
  this.equal1;
  this.equal2;
  this.greater;
  this.greater_equal;
  this.lower;
  this.lower_equal;
  this.sum_eq;
  this.remain_eq;
  this.multi_eq;
  this.divide_eq;
  this.modulo_eq;
  this.contain_arr;
  this.equal;
  this.log;
}

// Eut Prototypes : ------------------------------------------------------------------------------

Eut.prototype.name = function(name) { this.name_set = name; return this; }
Eut.prototype.type = function(type) { this.type_of = typeof type; return this; }
Eut.prototype.truthy = function(truthy) {this.truthy_var = truthy; return this; }
Eut.prototype.falsy= function(falsy) {this.falsy_var = falsy; return this; }
Eut.prototype.eq1 = function(equal1) { this.equal1 = equal1; return this; }
Eut.prototype.eq2 = function(equal2) { this.equal2 = equal2; return this; }

Eut.prototype.great = function (compared, to) {
  if (compared > to) {
    this.greater = true;
  }
  else {
    this.greater = false;
  }
  return this;
}

Eut.prototype.great_eq = function (compared, to) {
  if (compared >= to) {
    this.greater_equal = true;
  }
  else {
    this.greater_equal = false;
  }
  return this;
}

Eut.prototype.low = function (compared, to) {
  if (compared < to) {
    this.lower = true;
  }
  else {
    this.lower = false;
  }
  return this;
}

Eut.prototype.low_eq = function (compared, to) {
  if (compared <= to) {
    this.lower_equal = true;
  }
  else {
    this.lower_equal = false;
  }
  return this;
}

Eut.prototype.sum = function(){
  var temp = 0;
  if (arguments.length > 1) {
    for (var i=0; i < arguments.length; i++){
      temp += arguments[i]
     }
  }
  else if (arguments.length = 1 && typeof arguments[0] == 'object'){
      for (var i=0; i < arguments[0].length; i++){
        temp += arguments[0][i]
     }
  }
  else if (arguments.length = 1 && typeof arguments[0] == 'number'){
    temp = arguments[0];
  }
  this.sum_eq = temp;
  return this;
}


Eut.prototype.remain= function(){
  var temp = 0;
  if (arguments.length > 1) {
    for (var i=0; i < arguments.length; i++){
      temp -= arguments[i]
     }
  }
  else if (arguments.length = 1 && typeof arguments[0] == 'object'){
      for (var i=0; i < arguments[0].length; i++){
        temp -= arguments[0][i]
     }
  }
  else if (arguments.length = 1 && typeof arguments[0] == 'number'){
    temp = arguments[0];
  }
  this.remain_eq = temp;
  return this;
}

Eut.prototype.multi= function(){
  var temp = 1;
  if (arguments.length > 1) {
    for (var i=0; i < arguments.length; i++){
      temp *= arguments[i]
     }
  }
  else if (arguments.length = 1 && typeof arguments[0] == 'object'){
      for (var i=0; i < arguments[0].length; i++){
        temp *= arguments[0][i]
     }
  }
  else if (arguments.length = 1 && typeof arguments[0] == 'number'){
    temp = arguments[0];
  }
  this.multi_eq = temp;
  return this;
}

Eut.prototype.divide= function(){
  var temp = 0;
  if (arguments.length > 1) {
    temp = arguments[0]
    for (var i=1; i < arguments.length; i++){
      temp /= arguments[i]
     }
  }
  else if (arguments.length = 1 && typeof arguments[0] == 'object'){
    temp = arguments[0][0];
      for (var i=1; i < arguments[0].length; i++){
        temp /= arguments[0][i]
     }
  }
  else if (arguments.length = 1 && typeof arguments[0] == 'number'){
    temp = arguments[0];
  }
  this.divide_eq = temp;
  return this;
}

Eut.prototype.modulo= function(){
  var temp = 0;
  if (arguments.length > 1) {
    for (var i=0; i < arguments.length; i++){
      temp %= arguments[i]
     }
  }
  else if (arguments.length = 1 && typeof arguments[0] == 'object'){
      for (var i=0; i < arguments[0].length; i++){
        temp %= arguments[0][i]
     }
  }
  else if (arguments.length = 1 && typeof arguments[0] == 'number'){
    temp = arguments[0];
  }
  this.modulo_eq = temp;
  return this;
}

Eut.prototype.contain_var_in_array = function(num,arr) {
  var temp = 0;
  if (arr.length > 1) {
    for (var i=0; i < arr.length; i++){
      if(arr[i] === num){
        temp += 1;
      }
     }
    if (temp !== 0){
        this.contain_arr = true;
        return this;
      }
    else {
        this.contain_arr = false;
        return this;
    }
  }
  else if (arr.length == 1){
       if(arr[0] === num){
        this.contain_arr = true;
        return this;
      }
      else {
        this.contain_arr = false;
        return this;
      }
  }
}

Eut.prototype.eq = function(equal){
  this.equal = equal;
  return this;
}

// Logging the results : -----------------------------------------------------------------

Eut.prototype.log = function(){

  // testing equals
  if (this.equal1 !== undefined && this.equal2 !== undefined) {
    if (typeof this.equal1 === 'object' && typeof this.equal2 === 'object' && Object.keys(this.equal1).length === Object.keys(this.equal2).length){
      var temp = 1;
      for (var i = 0; i < Object.keys(this.equal1).length; i++){
        if ((this.equal1[Object.keys(this.equal1)[i]] === this.equal2[Object.keys(this.equal2)[i]]) /*&& (Object.values(this.equal1)[i] ===  Object.values(this.equal2)[i])*/){
          temp *= 1;
        }
        else {
          temp *= 0;
        }
      }
      if (temp === 1){
        console.log(this.name_set + ' :  eq1().eq2() :  ' + 'PASSED');
      }
      else {
        console.log(this.name_set + ' :  eq1().eq2() :  ' + 'FAILED');
      }
    }
    else if (this.equal1 === this.equal2){
      console.log(this.name_set + ' :  eq1().eq() :  ' + 'PASSED');
    }
    else {
      console.log(this.name_set + ' :  eq1().eq() :  ' + 'FAILED');
    }
  }

  // testing if truthy
  if (this.truthy_var !== undefined) {
    if (!!this.truthy_var){
      console.log(this.name_set + ' : truthy() :  ' + 'PASSED');
    }
    else {
      console.log(this.name_set + ' : truthy() :  ' + 'FAILED');
   }
  }

   // testing if falsy
  if (this.falsy_var !== undefined) {
    if (!(!!this.falsy_var)){
      console.log(this.name_set + ' : falsy() :  ' + 'PASSED');
    }
    else {
      console.log(this.name_set + ' : falsy() :  ' + 'FAILED');
    }
  }

  // testing greater
  if (this.greater != undefined) {
    if (this.greater === true){
      console.log(this.name_set + ' : great() :  ' + 'PASSED');
    }
    else {
      console.log(this.name_set + ' : great() :  ' + 'FAILED');
    }
  }

  // testing greater or equal
  if (this.greater_equal != undefined) {
    if (this.greater_equal === true){
      console.log(this.name_set + ' : great_eq() :  ' + 'PASSED');
    }
    else {
      console.log(this.name_set + ' : great_eq() :  ' + 'FAILED');
    }
  }

  // testing lower
  if (this.lower != undefined) {
    if (this.lower === true){
      console.log(this.name_set + ' : low() :  ' + 'PASSED');
    }
    else {
      console.log(this.name_set + ' : low() :  ' + 'FAILED');
    }
  }

  // testing lower or equal
  if (this.lower_equal != undefined) {
    if (this.lower_equal === true){
      console.log(this.name_set + ' : low_eq() :  ' + 'PASSED');
    }
    else {
      console.log(this.name_set + ' : low_eq() :  ' + 'FAILED');
    }
  }

  // testing type of
  if (this.type_of !== undefined) {
    if (this.type_of === this.equal) {
      console.log(this.name_set + ' :  type() :  ' + 'PASSED');
    }
    else {
      console.log(this.name_set + ' :  type() :  ' + 'FAILED');
    }
  }

  // testing  adding
  if (this.sum_eq !== undefined){
    if (this.sum_eq === this.equal){
      console.log(this.name_set + ' :  sum() :  ' + 'PASSED');
    }
    else {
       console.log(this.name_set + ' :  sum() :  ' + 'FAILED');
    }
  }

  // testing  substraction
  if (this.remain_eq !== undefined){
    if (this.remain_eq === this.equal){
      console.log(this.name_set + ' :  remain() :  ' + 'PASSED');
    }
    else {
       console.log(this.name_set + ' :  remain() :  ' + 'FAILED');
    }
  }

  // testing  multiplication
  if (this.multi_eq !== undefined){
    if (this.multi_eq === this.equal){
      console.log(this.name_set + ' : multi() :  ' + 'PASSED');
    }
    else {
       console.log(this.name_set + ' :  multi() :  ' + 'FAILED');
    }
  }

  // testing  division
  if (this.divide_eq !== undefined){
    if (this.divide_eq === this.equal){
      console.log(this.name_set + ' : divide() :  ' + 'PASSED');
    }
    else {
       console.log(this.name_set + ' :  divide() :  ' + 'FAILED');
    }
  }

  // testing  modulo
  if (this.modulo_eq !== undefined){
    if (this.modulo_eq === this.equal){
      console.log(this.name_set + ' : modulo() :  ' + 'PASSED');
    }
    else {
       console.log(this.name_set + ' :  modulo() :  ' + 'FAILED');
    }
  }

  // testing contain_in_array
  if (this.contain_arr !== undefined){
    if (this.contain_arr) {
      console.log(this.name_set + ' : contain() : ' + 'PASSED');
    }
    else {
      console.log(this.name_set + ' : contain() : ' + 'FAILED');
    }
  }

  // Reset ALL : ------------------------------------------------------------------------------
  for (var prop in this){
    if (this.hasOwnProperty(prop)){
      this[prop] = undefined;
    }
  }
  return this;
}

// Exporting the constructor instance : ------------------------------------------

const  eut = new Eut();
//export default eut;
module.exports = eut;
