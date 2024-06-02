// Closures - it is a function bind together with its lexical env or in simple terms a 
// function along with its loxical environments budle together forms the closure

function x(){
    var a = 10
    function y(){
        console.log(a)
    }
    a = 100;    // a will print in the console as the reference to variable will persist or exist
  return y
}
// uses of closure

// - Module design pattern 
// - Currying
// - memoize
// - settimeout
// -iterators
// - maintianing state  in async world
// - and many more