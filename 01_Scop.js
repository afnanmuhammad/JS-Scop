// Block Scop and Globle Scop
// Block Scop {<------->} Related with function , if, if els statment and loops

/*{-------------------.         {  ......     
                    :               ...............
This is Globle scope:                        
let a =200; ^       :               This is block scop
    ^            ^  :                       ......
         ^          :           } 
  ^                  *
*/

var a = 100;
let b = 300;          /* let is used both out and inner */

if (true) {
    var a = 10     /* This is a block scop*/
    let b = 30     /* Globle scop */
    const c = 40

    console.log('Enternal log', b);
    console.log(a);

}
// console.log(a);
console.log(b);
// console.log(c);