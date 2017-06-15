var Eut = function(){
  this.name_set;
  this.type_of;
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
  this.equal;
  this.log;
}

Eut.prototype.name = function(name) { this.name_set = name; return this; }
Eut.prototype.type = function(type) { this.type_of = typeof type; return this; }
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
  if (compared > to) {
    this.greater_equal = true;
  }
  else {
    this.greater_equal = false;
  }
  return this;
}

Eut.prototype.low = function (compared, to) {
  if (compared > to) {
    this.lower = true;
  }
  else {
    this.lower = false;
  }
  return this;
}

Eut.prototype.low_eq = function (compared, to) {
  if (compared > to) {
    this.lower_equal = true;
  }
  else {
    this.lower_equal = false;
  }
  return this;
}

Eut.prototype.sum = function(){
  var temp = 0;
  for (var i=0; i < arguments.length; i++){
    temp += arguments[i]
  }
  this.sum_eq = temp;
  return this;
}

Eut.prototype.remain= function(){
  var temp = 0;
  for (var i=0; i < arguments.length; i++){
    temp -= arguments[i]
  }
  this.remain_eq = temp;
  return this;
}

Eut.prototype.multi= function(){
  var temp = 1;
  for (var i=0; i < arguments.length; i++){
    temp *= arguments[i]
  }
  this.multi_eq = temp;
  return this;
}

Eut.prototype.divide= function(){
  var temp = arguments[0];
  if (arguments.length > 1){
    for (var i=1; i < arguments.length; i++){
      temp /= arguments[i]
    }
    this.divide_eq = temp;
  }
  else {
    this.divide_eq = temp;
  }
  return this;
}

Eut.prototype.modulo= function(){
  var temp = arguments[0];
  if (arguments.length > 1){
    for (var i=1; i < arguments.length; i++){
      temp %= arguments[i]
    }
    this.modulo_eq = temp;
  }
  else {
    this.modulo_eq = temp;
  }
  return this;
}

Eut.prototype.eq = function(equal){
  this.equal = equal;
  return this;
}

Eut.prototype.log = function(){

  // testing equals
  if (this.equal1 !== undefined && this.equal2 !== undefined) {
    if (this.equal1 === this.equal2){
      console.log(this.name_set + ' :  eq1().eq() :  ' + 'PASSED');
    }
    else {
      console.log(this.name_set + ' :  eq1().eq() :  ' + 'FAILED');
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

  // Reset ALL
  for (var prop in this){
    if (this.hasOwnProperty(prop)){
      this[prop] = undefined;
    }
  }
  return this;
}

const  eut = new Eut();
//export default eut;
module.exports = eut;