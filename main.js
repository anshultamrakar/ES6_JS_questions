//  ES6 Practice set 1

// 1.Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

// const isEligibleToVote = (age) => {
//   if(age >= 18){
//   return "Eligible to vote"
//   }else{
//     return "Not Eligible to vote"
//   }

// }

// console.log(isEligibleToVote(15))


//2. Write a function that takes two numbers as input and determines which one is greater.
//  function isGreater(num1 , num2){
//     if(num1 > num2){
//         return `${num1} is a greater number`
//     }else{
//         return `${num2} is a greater number`
//     }
//  }


//  console.log(isGreater(5,10))
//  console.log(isGreater(10 , 20))


// 3.Write a function that takes a number as input and determines if it is positive or negative.
//   function checkNum(num){
//     if(num > 0){
//         return `${num} is a positive number`
//     }else{
//         return `${num} is a negative number`
//     }
//   }

//   console.log(checkNum(10))
//   console.log(checkNum(-12))


// 4. Write a function that takes a number as input and determines if it is even or odd.
//    function isEvenOdd(num){
//     if(num % 2 === 0){
//         return `${num} is even number`
//     }else{
//         return `${num} is a odd number`
//     }
//    }

//    console.log(isEvenOdd(46))
//    console.log(isEvenOdd(15))



// 5.Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’
//  function checkForAlphabetA(str){
//      for(let i = 0 ; i < str.length ; i++){
//         if(str[i] === 'a' || str[i] === "A"){
//             return  true
//         }else{
//             return false
//         }
//      }
//  }

//  console.log(checkForAlphabetA("anshul"))
//  console.log(checkForAlphabetA("pinku"))


// .6 Write a function that takes a string as input and determines if it is longer than 5 characters.
    //  function checkLength(str){
    //     if(str.length > 5){
    //         return "Longer than 5 character"
    //     }else{
    //         return "Not longer than 5 character"
    //     }
    //  }

    //  console.log(checkLength("Anshul"))
    //  console.log(checkLength("Jane"))



    
// 7. Write a function that takes a number as input and determines if it is between 1 and 10.
    // function isBetweenOneAndTen(num){
    //    if(num > 1 && num < 10){
    //     return true
    //    }else{
    //     return false
    //    }
    // }

    // console.log(isBetweenOneAndTen(5))
    // console.log(isBetweenOneAndTen(11))




// 8. Write a function that takes a string as input and determines if it contains the word "hello".
 

//     *`// Your ES6 code here* console.log(isHelloPresent('Hello World'))` 
    
//     *`// true* console.log(isHelloPresent('World'))` 
    
//     *`// false`*
    

// 9. Write a function that takes a number as input and determines if it is a multiple of 3.
    //   function isMultipleOfThree(num){
    //     if(num % 3 === 0){
    //         return true
    //     }else{
    //         return false
    //     }
    //   }

    //   console.log(isMultipleOfThree(5))
    //   console.log(isMultipleOfThree(9))


 
// 10 . Write a function which takes in a number as input and returns it after multiplying by 10.
    //  function multiplyByTen(num){
    //    return num * 10
    //  }

    //  console.log(multiplyByTen(5))

    
    
// 11. Console individual values of the product object using object destructuring.
    
    //  const product = {title: 'iPhone',  price: 5999,  description: 'The iPhone is a smartphone developed by Apple'}
   
    //  const {title , price , description  } = product
    //  console.log(title)
    //  console.log(price)
    //  console.log(description) 

    
    
// 12. Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as 
       // a parameter and returns if the book has more than 100 pages.
    //    const book = { title : "Almanica"  , author : "Naval" , pages : 1200}
    //     function getBookDetails({pages}){
    //       if(pages > 100){
    //         return true
    //       }else{
    //         return false
    //       }
    //     }

    //     console.log(getBookDetails(book))


    
  // 13. Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property 
    // of the person object to the newOccupation. 
  // Log the person object to the console before and after calling the function.
      

    //  const person = { name: 'Amit', age: 25, occupation: 'Software Engineer' }

    //   function changeOccupation(obj , newOccupation){
    //     return {...obj ,occupation : newOccupation }
    //   }

    //   console.log(changeOccupation(person , "Product Coordinator"))
  
    
    
// 14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.
    
//   const numbers = [1, 2, 3]
//   const [a , b , c] = numbers
//   console.log(a)
//   console.log(b)
//   console.log(c)

    
// Practice set 2


// 1.Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

//  const person = {name: 'John',age: 30};
//  person.age = 35
//  console.log(person.age)

// 2.Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)
// const car1 = {
//     make: 'Porsche',
//     model: '911',
//     horsepower: 450
//   }
  
//   const car2 = {
//     make: 'Toyota',
//     model: 'Camry',
//     horsepower: 200
//   }
  

//   function isSportsCar({horsepower}){
//     if(horsepower >= 300){
//         return true
//     }else{
//         return false
//     }
    
//   }

//   console.log(isSportsCar(car1))
//   console.log(isSportsCar(car2))


// 3.Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than 21. Otherwise, it should return false

// const person1 = { name: 'Ajay', age: 20 }
 

// function isEligible({age} , num){
//   if(age + num > 21){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(isEligible(person1 , 1))
// console.log(isEligible(person1 , 5))

//4. Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)
 
// const blog1 = {  title: 'How to Learn JavaScript',  author: 'John Doe',  views: 1430,}

// const blog2 = {  title: '10 Reasons to Start a Blog',  author: 'Jane Smith',  views: 500,}


// function getViews({views}){
//   if(views > 1000){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(getViews(blog1))
// console.log(getViews(blog2))


// 5.Swap the values of two variables using array destructuring
// let a = 1 ;
// let b = 2;
// [a , b] = [2 , 1]
// console.log(a)
// console.log(b)

// 6.Convert this function into ES6 with least amount of characters.
// function add(a = 30, b = 0) {  return a + b}console.log(add(2, 3))

// const add = (a , b ) => a + b
// console.log(add(2,3))


// 7.Write an ES6 function combineObjects with least amount of characters which merges two objects into one
// const obj1 = { a: 1, b: 2 } 
// const obj2 = { c: 3, d: 4 } 

// const combinedObj = (obj1 , obj2) => {
//     return {...obj1 , ...obj2}
// }

// console.log(combinedObj(obj1, obj2))


// 8.Convert the function getData, into an ES6 function with last amount of characters.

// function getData(person) {  
//     const name = person.name  
//     const address = person.address.city  
//     console.log(name)
//  }


// const person = {name: 'John Doe',  address: { city: 'New York', state: 'NY'}}

// const getData = ({name , address : {city , state}}) => {
//     console.log(name)
//     console.log(city)
//     console.log(state)
// }

// getData(person)

// 9.Write a function that takes a string as input and returns the string in all uppercase letters.

// const stringToUpperCase = (str) => {
//   return str.toUpperCase()
// }
// console.log(stringToUpperCase("hello"))

// 10. Write a function that takes two strings as input and concatenates them together.

// const concatenateStrings = (str1 , str2) => {
//    return str1 + str2
// }

// console.log(concatenateStrings("hello" , "world"))



// 11.Write a function that takes an array and returns the last element in the array.

// const lastElement = (arr) => {
//    return arr[arr.length - 1]
// }

// console.log(lastElement([1, 2, 3, 4, 5]))


// 12.Write a function that takes an array and returns the first element of the array.


// const firstElement = (arr) => {
//   return arr[0]
// }

// console.log(firstElement([1, 2, 3, 4, 5]))


// 13.Write a function that takes an array and a number and returns the sum of first element and the number.
//   const sumFirstAndLast = (arr , num) => {
//     return arr[0] + num
//   }

//   console.log(sumFirstAndLast([1, 2, 3], 5))


//   14.Write a function that takes an array and returns the sum of first and last element.
//   const sumFirstAndLast = (arr) => {
//     return arr[0] + arr[arr.length -1]
//   }

//   console.log(sumFirstAndLast([1, 2, 3, 4, 8]))


// 15.Write a function that takes an object representing a person's information (name, age, occupation) 
// and returns a template literal that includes the person's name and age in a sentence.

// const person1 = { name: 'John', age: 25, occupation: 'Software Engineer'}
// const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }


// const personInfo = ({name , age}) => {
//    return `${name} is ${age} old`
// }

// console.log(personInfo(person1))
// console.log(personInfo(person2))



//  ----------------------------   ES6 Set 3 ---------------------------------

// 1. Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.
// const items = ['apple', 'banana', 'orange']

// const formatArray = (items) => {
//   const noOfItems = items.length
//   const firstItem = items[0]
//   const lastItem = items[items.length - 1]
//   console.log(`The array has ${noOfItems} and the first item is ${firstItem}, and the last item is ${lastItem}`)
// }

// const message = formatArray(items)
// console.log(message)


// 2.Create a function that takes a product object as an argument and returns a string that includes the product name, price, 
// and a message based on whether it is in stock or not.

// const product = {  name: 'Socks',  price: 249,  inStock: true}


// const formatProduct = ({name , price }) => {
//    console.log(`${name} costs INR ${price} and is in stocks`)
// }

// const message = formatProduct(product)
// console.log(message)


// 3. Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.


// const person =[{name : "Amay" , age : 25} , {name : "Akhil" , age : 25}] 

// const findPerson = (person , name) => {
  
// }



// 4.Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'


// const pickFirstAndSecond = ([a , b ]) => {
//   return {first : a , second : b}
// }

// console.log(pickFirstAndSecond(['orange', 'banana', 'apple']))
// console.log(pickFirstAndSecond(['red', 'blue', 'green']))


// 5. Convert the following code to ES6+ syntax with minimum number of characters.
    
// function startsWithA(str){  
//     if (str.charAt(0) === 'A'){   
//          return true  
//         }else {    
//             return false  
//         }}


// const startsWithA = (str) => str.charAt(0) === "A" ? true : false
        
// console.log(startsWithA('Rakshu'))
// console.log(startWithA('Jeena'))

// 6.Write an ES6 function to return only the first character of the given array.
 

//  const printFirstCharacter = (arr) => {
//     return arr[0]
//  }

//  console.log(printFirstCharacter([1, 2, 3, 5, 8]))

// 7.Write a function to return the last 5 characters as an array from the given array.

  //   const printLastFive = (arr) => {
  //       let newArr = [];
  //       for(let i = arr.length - 5 ; i < arr.length ; i++ ){
  //         newArr.push(arr[i])
  //       }
  //       return newArr ;
  //   }
  // console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))

// 8.Write an ES6 function to return the second element of the given array by multiplying 20 to it.
// const printSecondCharacter = (arr) => {
//    return arr[1] * 20
// }

// console.log(printSecondCharacter([1, 2, 3, 5, 8]))

// 9.Write an ES6 function to return the second element of the given array by adding “Hello” before it.

// const sayHello = (arr) => "Hello"+ " " +  arr[1] 
// console.log(sayHello(['Akshay', 'Sweta', 'Prerana', 'Vinay'])) 
// console.log(sayHello(['Kanika', 'Rakesh', 'Prerana', 'Puja']))

// 10. Write an ES6 function to return sum of all numbers at even indices of the given array.
//    const arr = [1,2,3,4,9]
//    const sumOfArray = (arr) => {
//     let sum = 0 ;
//      for(let i = 0 ; i < arr.length ; i++){
//         sum = arr[i] + sum
//      }
//     return sum
//  }

//    console.log(sumOfArray(arr))


// 11. Write an ES6 function to return sum of all numbers at even indices of the given array.

//   const sumOfEvenIndices = (arr) => {
//     let sum = 0 ; 
//     for(i = 0 ; i < arr.length ; i++){
//         if(i % 2 === 0){
//             sum = arr[i] + sum
//         }
//     }
//     return sum
//   } 
//   console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25]))

// 12 .Write an ES6 function to return the sum of only first 2 elements of the array 

//  const sumFirstTwoElements = (arr) => {
//     let sum = 0 ;
//        sum = arr[0] + arr[2]
//     return sum
//  }
//  console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5]))


// 13. Write an ES6 function to return the first element which is a multiple of 5 in the given array. 

//   const printMultipleOfFive = (arr) => {
//     let num = 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] % 5 === 0){
//            num = arr[i]  
//         }
//     }
//     return num;
//   }

//   console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3]))
//   console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3]))



// 14.Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.

// const userData = {  name: 'Jane Doy',  postalCode: '12134',  city: 'Germany'}

// const getAddress = ({postalCode ,  city}) => {
//   return {postalCode , city}
// }


// console.log(getAddress(userData))


// 15.Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.
// const userData1 = {  name: 'Gaurav',  postalCode: '12134',  country: 'Japan',}
 
//  const printData = ({name , country}) =>  {
//     return `${name} lives in a ${country}`
//  }

// console.log(printData(userData1))


// 16.Create a function which takes a product object and returns a sentence about the product using ES6 features.
// Your ES6 code here
//  const product = { name: 'Apple MacBook Air 2020',  specification: { capacity: '256GB',    size: '13.3 Inch',  }, price: 82900}
  
//  const printProductDetails = ({name , specification : {size} }) => {
//    return `${name} which is of ${size}, has a cap`
//  }


//  console.log(printProductDetails(product)) // Apple MacBook Air 2020 which is of 13.3 Inch, has a cap





//  ------------------------------------------- ES6 set 4 --------------------------------------------------------------

// Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

//  let array = [4, 78, 8, 3, 6, 0, 12, 34]
  
//  const getMaxElement = (arr) => {
//    let maxEle = arr[0]
//    for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] > maxEle){
//       maxEle = arr[i]
//     }
//    }
//    return maxEle
//  }

//  console.log(getMaxElement(array))

// Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

// const calculateAverage = (arr) => {
//    let sum = 0
//    for(let i = 0 ; i < arr.length ; i++){
//     sum = arr[i] + sum
//    }
//    return sum/arr.length
// }
//  console.log(calculateAverage([1, 2, 3, 4, 5]))



// write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number

// const convertEvenToOdd = (arr) => {
//   let myArr = [];
//   for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] % 2 === 0){
//       myArr.push(arr[i] + 1)
//     }else{
//       myArr.push(arr[i])
//     }
//   }

//   return myArr
// }


// console.log(convertEvenToOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]))


// Write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

//  const filterWords = (arr) => {
//    let myArr = [];
//    for(let i = 0 ; i < arr.length ; i++){
//      if(arr[i].length > 5){
//       myArr.push(arr[i])
//      }
//    }
//    return myArr
//  }

//  console.log(filterWords( ['eat', 'sleep', 'code', 'repeat', 'neog', 'community']))



// Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

    // const capitalizeWords = (arr) => {
    //  let myArr = [];
    //  for(let i = 0 ; i < arr.length ; i++){
    //   myArr.push(arr[i].toUpperCase())
    //  }
    //   return myArr;
    // }

    // console.log(capitalizeWords(['eat', 'sleep', 'code', 'repeat']))

// Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. 

  //  Avoid using in-built methods.

  // const getValues = (arr ) => {
  //    let newArray = [];
  //    for(let i = 0 ; i < arr.length ; i++){
  //      newArray.push(arr[i].name)
  //    }
  //    return newArray;
  // }

  // console.log(getValues([{ name: 'John', age: 21 }, { name: 'Mary', age: 22 }, { name: 'Peter', age: 23 }]))


  // Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.
  

  // {firstName: 'John', lastName: 'Dee', teamId: 667543}


  // const podAndTeamAllocation = (arr) => {
  //       return {...arr , teamId : "68886"}
  // }

  // console.log(podAndTeamAllocation({ firstName: 'John', lastName: 'Dee' }))


  // Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object.
  //  Avoid using in-built methods.



  // Write an ES6 function that takes an array of objects and returns the sum of all ages
    

  // const sumOfAges = (arr) => {
  //   let sum = 0
  //   for(let i = 0 ; i < arr.length ; i++){
  //     sum = arr[i].age + sum
  //   }
  //   return sum
  // }

  // console.log(sumOfAges([{name: 'Jay', age: 60},  {name: 'Gloria',    age: 36 },  { name: 'Manny', age: 16 },  { name: 'Joe', age: 9,  }]))


  // Destructure the following code to get the desired outputs. Avoid using in-built methods

  const book = { title: 'JavaScript: The Definitive Guide',  authors: [{ name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  publisher: { name: "O'Reilly Media", location: 'CA' }}

  const {title , authors : [author1 , author2] } = book
  const {name} = author1
  

  // Your ES6 code here console.log(title) 
  // JavaScript: The Definitive Guide console.log(author1) 
  // David Flanaganconsole.log(author2) 
  // Yukihiro Matsumoto console.log(publisherName) 
