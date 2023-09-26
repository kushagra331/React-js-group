23 -09-23
createTextNode  => testing.html

Q > Defining Method 
function x(){
    var b = a = 3;
    const c = 50;
}

x();    // we must call the function before console logging
console.log(b); // undefined
console.log(a); //3

** if we are defining variable without var , let or const it is considered as a global variable.


2>  17 no question Learning
when reverse method is called it returns the reference of the original array, & it's going to refer both the original array & new array (where we store the reverse value). 
hence both original & new array are going to get changed.