// let f = function () {
//   this.a = 1;
//   this.b = 2;
// };

// let o = new f();
// console.log("o", o);
// console.log("o.a", o.a); // = 1
// console.log("o.b", o.b); // = 2

// f.prototype.b = 3; // will not change, because 'o' already have 'b'
// f.prototype.c = 4; // will include to 'o'

// console.log("o.c", o.c); // = 4

var x = 1;

(function () {
  var x = 2;
  console.log("inside closure", x);
})();

console.log("outside closure", x);
