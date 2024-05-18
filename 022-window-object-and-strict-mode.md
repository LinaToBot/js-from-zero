# Window Object

## EventTarget

The window object inherits from EventTarget, allowing it to
handle events through methods such as addEventListener,
removeEventListener, and dispatchEvent.

## AbstractView

The AbstractView interface is an abstract interface in the DOM, and window
implements this interface. AbstractView is a parent interface for views in
the document object model (DOM). A view in this context is a visual
representation of the document, and window is a concrete implementation of
this view.

In practice, AbstractView is not used directly, but provides a basis for
views such as window. The main use of AbstractView is to allow rendering a
view of the document and access properties like document.

EventTarget
|
v
window (Also implements AbstractView)
|
v
document

window.addEventListener('myCustomEvent', () => {
console.log('Custom event dispatched');
});

# Strict mode

It was introduced in ECMAScript 5 (ES5), 2009. Strict mode is a feature of
JavaScript that allows code to be executed in a more restrictive context,
helping to identify potential errors and bad programming practices.

SM helps to show errors when:

1. Assignments to undeclared variables.
   "use strict";
   x = 3.14; // Error: x is not defined

2. Avoid using reserved words.
   "use strict";
   var implements, interface, let, package, private, protected, public, static, yield; // Error: Unexpected strict mode reserved word

3. Prohibit the deletion of variables, functions and parameters.
   "use strict";
   var x = 3.14;
   delete x; // Error: Cannot delete variable

4. Avoid Declaring Variables with the Same Name in an Object.
   "use strict";
   var obj = {
   prop1: "value1",
   prop1: "value2" // Error: Duplicate data property in object literal
   };

5. Duplicate Parameters Not Allowed in Functions.
   "use strict";
   function sum(a, a, c) { // Error: Duplicate parameter name not allowed in this context
   return a + a + c;
   }

6. Prohibit the use of "with".
   "use strict";
   with (Math) { // Error: Strict mode code may not include a with statement
   var x = cos(2);
   }

7. Security with "this" Object. In strict mode, "this" inside a function will not become the global object if it is not specified.
   "use strict";
   function showThis() {
   console.log(this);
   }
   showThis(); // undefined
