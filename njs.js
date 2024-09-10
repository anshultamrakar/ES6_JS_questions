// Closures - it is a function bind together with its lexical env or in simple terms a 
// function along with its loxical environments budle together forms the closure

// function x(){
//     var a = 10
//     function y(){
//         console.log(a)
//     }
//     a = 100;    // a will print in the console as the reference to variable will persist or exist
//   return y
// }
// uses of closure

// - Module design pattern 
// - Currying
// - memoize
// - settimeout
// -iterators
// - maintianing state  in async world
// - and many more





// seTimeout + Closure interview Question - Akshay Saini

// function x(){
//    for(var i = 1 ; i <= 5 ; i++){
//     setTimeout(() => {
//     console.log(i)
//     }, i * 1000)
//    }
//    console.log("Hello Anshul")
// }

// x()

// What setTime does it store the function and attached the timer in it and remember its reference to its 
// variable . Just because of this the above programme will print 6 in console and to fix the above 
// Issue we will have to use let instead of var , because let has a block scope and create a new copy everytime the loop execute


// Fixing the above issue with var only 

// function x(){
//     for(var i = 1 ; i <= 5 ; i++){
//         function c(x){
//           setTimeout(function(){
//            console.log(x)
//           }, x*1000)
//         }
//     }
//   c(i)

//   console.log("hello")
// }
// x()

