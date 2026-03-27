//a -z : range: 97 -122
//A -Z : range: 65 -90
// 0-9: range: 48 -57

console.log('A'.charCodeAt(0)); //65
console.log('A'.charCodeAt(1)); //NaN
console.log('AB'.charCodeAt(0)); //65
console.log('AB'.charCodeAt(1)); //66
console.log('A'.charCodeAt(0)+'B'.charCodeAt(0)); //131

