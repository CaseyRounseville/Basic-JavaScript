/* The principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window is the default binding for "this"
* 2. If a function is called on an object(a method being called), the object is the "this binding"
* 3. For a constructor function, "this" refers to the object being constructed
* 4. It is possible to use "call()" to explicitly provide the "this" binding as the first argument
*
* write out a code example of each explanation above
*/

// Principle 1 - Window Global Binding
// outputs a window on the console
function f1() {
	console.log(this);
}
f1();

// Principle 2 - Implicit Binding
function f2() {
	console.log(this.x);
}
var obj = { x: 23 };
obj.f2 = f2;
obj.f2();

// Principle 3 - New Binding
function Rect(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}
var rect = new Rect(10, 12, 5, 5);
console.log(rect);

// Principle 4 - Explicit Binding
f1.call({ x: 3, y: 2 });
