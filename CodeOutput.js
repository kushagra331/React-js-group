var myObject = {
    foo: "bar",
    func: 
        // var self = this;

        // console.log("outer func: this.foo = " + this.foo);  //bar
        // console.log("outer func: self.foo = " + self.foo);  // bar

        (function () {                                      // Immediately Invoked Function Expression (IIFE):
            var self = this;
            console.log("inner func: this.foo = " + this.foo);
            console.log("inner func: self.foo = " + self.foo);
        }())
    
}

myObject.func;