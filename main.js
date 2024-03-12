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


  // Write an ES6 function which checks if a student already has a team. 
  // If team is not given then add them to team “A” and return the object else do nothing and return the same object.
  //  Avoid using in-built methods.

  // const checkForTeams = (arr) => {
  //   if("teams" in arr){
  //     return arr
  //   }else{
  //     return {...arr , teams : "A"}
  //   }
  // }

  // console.log(checkForTeams({ firstName: 'Penn', lastName: 'Ma' }))
  // console.log(checkForTeams({ firstName: 'John', lastName: 'Dee', team: B }))



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

  // const book = { title: 'JavaScript: The Definitive Guide',  authors: [{ name: 'David Flanagan', age: 49 },    { name: 'Yukihiro Matsumoto', age: 57 },  ],  publisher: { name: "O'Reilly Media", location: 'CA' },}// Your ES6 code hereconsole.log(title) 

  // const { title , authors , publisher : {name, location}} = book
  

  // console.log(title)
  // console.log(authors)
  // console.log(publisher)

  // JavaScript: The Definitive Guideconsole.log(author1) 
  // David Flanaganconsole.log(author2) 
  // Yukihiro Matsumotoconsole.log(publisherName) 
  // O'Reilly Media

  // Your ES6 code here console.log(title) 
  // JavaScript: The Definitive Guide console.log(author1) 
  // David Flanaganconsole.log(author2) 
  // Yukihiro Matsumoto console.log(publisherName) 


  // --------------- Async and Await -------------------------------------------

  // 1. Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.
    
  // *`// Your Code here*delayedGreeting();*// Hello, welcome to my portfolio!*`
  // const delayedGreeting = () => {
  //   setTimeout(() => {
  //    console.log("Hello, Welcome to my Portfolio")
  //   },2000)
  // }

  // delayedGreeting()


  // Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. 
  // You can practice this question in any JS editor or your browser console.

  // const delayedAddition = (num1 , num2) => {
  //   setTimeout(() => {
  //      console.log(num1 + num2)
  //   },4000)
  // }

  // delayedAddition(5,2)

// const delayedAlert = (msg , time) => {
//   setTimeout(() => {
//     console.log(msg)
//   }, time * 1000)
// }

// delayedAlert("Hello World" , 4)


// Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. 
// You can practice this question in any JS editor or your browser 





// Functional Practice Question Set 1


// Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

// const numbers = [1, 2, 3, 4, 5]

// const incrementNumbers= (arr) => {
//    return arr.map(item => item + 3)
// }

// console.log(incrementNumbers(numbers))

// Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.
// const myArray = ['apple', 'banana', 'cherry']
// const capitalizeArray = (arr) => {
//  return arr.map(item => item.toUpperCase())
// } 

// console.log(capitalizeArray(myArray))




// Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

// const people = [{ name: 'Ankit', age: 25 },{ name: 'Vinit', age: 24 },{ name: 'Shashi', age: 29 }]

// const getAges = (arr) => {
//   let myArr = [];
//   arr.map(item => myArr.push(item.age))
//   return myArr
// }

// const age = getAges(people)
// console.log(age)


// Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

// const products = [{ name: 'Lip Balm', stock: 100 },{ name: 'PERFUME', stock: 400 },{ name: 'Socks', stock: 200 }]
 

// const getProductNamesInLowerCase = (arr) => arr.map(item => {
//    return item.name.toLowerCase()
// })
// console.log(getProductNamesInLowerCase(products))



// Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.
// const cities = [  { name: 'New York', population: 8538000 },  { name: 'Los Angeles', population: 3976000 },  { name: 'Bangalore', population: 13608000 }] 


// const getCityNames = (arr) => {
//     return arr.map(item => item.name)
// }

// console.log(getCityNames(cities))


// Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

// const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple']

// const filterLongStrings = (arr) => {
//   return arr.filter(item => item.length > 5  )
// }

// console.log(filterLongStrings(fruits))


// Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

// const numbers = [1, 2, 30, 4, 15] 
// const isDivisibleBy3and5 = (arr) => {
//   return arr.filter(arr => arr % 3 === 0 && arr % 5 === 0)
// }

// console.log(isDivisibleBy3and5(numbers))


// Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.
// const people = [{ name: 'Rahul', age: 25 },  { name: 'Raj', age: 35 },  { name: 'Vijay', age: 45 }]

// const filterByAge = (arr) => {
//   return arr.filter(item => item.age > 30)
// }

// console.log(filterByAge(people))


// Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.


// const students = [{ name: 'Aditya', score: 85 },{ name: 'Bob', score: 75 },{ name: 'Charlie', score: 90 }]


// const filterByScore = (arr) => {
//   return arr.filter(item => item.score > 80)
// }


// console.log(filterByScore(students))


// Write an ES6 function that takes an array of objects with the properties name, 
// age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

// const people = [{ name: 'Ridhima', age: 75, city: 'Indore' },  { name: 'Akshay', age: 60, city: 'Delhi' },  { name: 'Udit', age: 80, city: 'Indore' },  { name: 'Venki', age: 80, city: 'Bangalore' }]


// const filterByCityAndAge = (arr) => {
//    return arr.filter(item => item.city === "Indore" && item.age > 70)
// }

// console.log(filterByCityAndAge(people))


// Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

//  const books = [{ title: "The Hitchhiker's Guide to the Galaxy",    author: 'Douglas Adams',    genre: 'Science Fiction'},  { title: 'To Kill a Mockingbird',    author: 'Harper Lee',    genre: 'Fiction'},{ title: '1984', author: 'George Orwell', genre: 'Science Fiction' }, { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },]


// const filterByGenre = (arr) => {
//   return arr.filter(item => item.genre === "Science Fiction")
// }

// console.log(filterByGenre(books))


// Write an ES6 function that takes an array of objects containing employee information (name, age, salary) 
// and returns an array with only the employees who earn a salary above 22000 and age is above 25.


// const employees = [  { name: 'Abhay', age: 25, salary: 20000 },  { name: 'Joice', age: 30, salary: 35000 },  { name: 'Reena', age: 35, salary: 15000 },  { name: 'Jeena', age: 40, salary: 50000 },] 


// const filterBySalary = (arr , salary, age) => {
//   return arr.filter(item => item.salary > salary && item.age > age)
// }


// const filteredEmployees = filterBySalary(employees, 22000, 25)
// console.log(filteredEmployees)

// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]






// Practice set 2 ----------------------------------------------------------------------------------------------------------------------


// Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.
// const people = [ { name: 'Raj', age: 28 },  { name: 'Swapnil', age: 42 },  { name: 'Anushka', age: 35 }]

// const getNames = (arr) => {
//   return arr.map(({name}) => name)
// }

// console.log(getNames(people))



// Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

// const numbers = [1, 2, 3, 4];
// const multiplyByFive = (arr) => {
//  return arr.map(item => item * 5)
// }

// console.log(multiplyByFive(numbers))

// Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

// const employeeData = [	{name: "ram", dept: "marketer"}, 	{name: "Radha", dept: "SDE"},	{name: "shyam", dept: "finance professional"},]


// const greetEmployeeMessages = (arr) => {
//   return  arr.map(({name , dept}) => `Hello ${name} , we are glad to have you as a ${dept}` )
// }

// console.log(greetEmployeeMessages(employeeData))


// Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.

// const books = [{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },  { title: '1984', author: 'George Orwell' },  { title: 'Pride and Prejudice', author: 'Jane Austen' }];

// const getBookTitles = (arr) => {
//  return arr.map(({title}) => title)
// }

// const titles = getBookTitles(books)
// console.log(titles)



// Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

// const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]


// const studentNames = (arr) => {
//   return arr.filter(item => item.charAt(0) === "A")
// }

// console.log(studentNames(studentName))


// Write an ES6 function which filters out the products which have a price greater than 40.

// const productData = [
//   {prodName: "Dairy Milk", price: 10},	

// {prodName: "Dairy Milk Silk", price: 70},

// {prodName: "Five Star", price: 20},	

// {prodName: "Mars", price: 50}]


// const getProducts = (arr) => {
//   return arr.filter(({price}) => price > 40)
// } 


// console.log(getProducts(productData))


// Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

// const numbers = [1, 2, 3, 21, 14, 7];

// const isDivisibleBy7 = (arr) => {
//   return arr.find(item => item % 7 === 0)
// }

// console.log(isDivisibleBy7(numbers))


// Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.

// const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]


// const isNamesGreaterThan8 = (arr) => {
//   return arr.find(item => item.length > 8)
// }

// console.log(isNamesGreaterThan8(names))


// Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".
// const students = [ { name: "John", grade: "B" },  { name: "Mary", grade: "A" },  { name: "Sam", grade: "C" },  { name: "Sarah", grade: "A" }];

// const findStudentWithGradeA = (arr) => {
//   return arr.find(item => item.grade === "A")
// }

// const studentWithGradeA = findStudentWithGradeA(students);
// console.log(studentWithGradeA)


// Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. 
// Return the first student object that has a grade of "A" or they are a scholarship student.

// const students = [{ name: "John", grade: "B", scholarship: false },  { name: "Mary", grade: "A", scholarship: true },  { name: "Sam", grade: "A", scholarship: false },  { name: "Sarah", grade: "B", scholarship: true }];

// const findStudent = (arr) => {
//   return arr.find(item => item.grade === "B" && item.scholarship )
// }

// const student = findStudent(students)
// console.log(student)



// Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) 
// and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0.


// const bollywoodMovies = [{ title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },  { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },  { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },  { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },  { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },  { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },  { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }];

// const getBestOldBollywoodMovies = (arr) => {
//    return arr.filter(item => item.year < 1990 && item.rating > 8.0).map(item => item.title)
// } 

// const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies)
// console.log(bestOldMovies)






// FP Set 3 ----------------------------------------------------------------------------------------------------

// Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. 
// Return the first car object that is a Toyota and the year is after 2010.

// const cars = [{
//   make: 'Toyota',
//   model: 'Corolla',
//   year: 2010
// }, {
//   make: 'Honda',
//   model: 'Civic',
//   year: 2012
// }, {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2015
// }, {
//   make: 'Ford',
//   model: 'Mustang',
//   year: 2018
// }]

// const findToyotaCar = (arr) => {
//  return arr.find(item => item.make === "Toyota" && item.year > 2010)
// }

// const toyotaCar = findToyotaCar(cars)
// console.log(toyotaCar)


// Write an ES6 function that takes an array of objects containing car information (make, model, year) 
// and returns an array with only the cars that were made after the year 2012.
// const cars = [  { make: 'Toyota', model: 'Corolla', year: 2010 },  { make: 'Honda', model: 'Civic', year: 2012 },  { make: 'Toyota', model: 'Camry', year: 2015 },  { make: 'Ford', model: 'Mustang', year: 2018 }]

//  const getCarDetails = (arr) => {
//   return arr.filter(item => item.year > 2012) 
//  }

//  console.log(getCarDetails(cars))


// Write an ES6 function that takes an array of objects representing products with properties name, price, and category. 
// Return the first product object that is in the category "electronics".


// const products = [{ name: 'Toothbrush', price: 29, category: 'health' },  { name: 'Coffee Maker', price: 99, category: 'home' },  { name: 'iPad', price: 799, category: 'electronics' },  { name: 'Smartwatch', price: 199, category: 'electronics' }]

// const findElectronicsProduct  = (arr) => {
//   return arr.find(item => item.category === "electronics")
// }

// console.log(findElectronicsProduct(products))



// Write an ES6 function that takes an array of objects representing products with properties name, price and category. 
// Return all the products object that are in the category "electronics".

// const products = [  { name: 'Toothbrush', price: 29, category: 'health' },  { name: 'Coffee Maker', price: 99, category: 'home' },  { name: 'iPad', price: 799, category: 'electronics' },  { name: 'Smartwatch', price: 199, category: 'electronics' }]

// const getAllElectronicProducts = (arr) => {
//   return arr.filter(item => item.category === "electronics") 
// }

// console.log(getAllElectronicProducts(products))


// Write an ES6 function that takes an array of objects containing student information (name, age, grade) 
// and returns an array with only the students who have a grade above a certain value.

// const students = [ { name: 'Alice', age: 16, grade: 90 },  { name: 'Bob', age: 17, grade: 80 },  { name: 'Charlie', age: 15, grade: 95 },  { name: 'David', age: 16, grade: 85 }]

// const highGradeStudents = (arr , val) => {
//   return arr.filter(item => item.grade > val)
// }

// console.log(highGradeStudents(students , 85))



// Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. 
// Return the first book object that has more than 500 pages.

// const books = [{ title: 'The Lord of the Rings', author: 'J.R.R. Tolkien',pageCount: 1178,  },  { title: 'To Kill a Mockingbird', author: 'Harper Lee', pageCount: 281 },  { title: "The Hitchhiker's Guide to the Galaxy", author: 'Douglas Adams',  pageCount: 193,  },  { title: 'The Name of the Wind',    author: 'Patrick Rothfuss',    pageCount: 662 }]



// const findBookWithMoreThan500Pages = (arr) => {
//    return arr.find(item => item.pageCount > 500)
// }


// console.log(findBookWithMoreThan500Pages(books))


// Write an ES6 function that takes an array of objects containing customer information (name, age, gender) 
// and returns an array with only the customers who are of gender Male.

// const customers = [  { name: 'John', age: 25, gender: 'Male' },  { name: 'Jane', age: 30, gender: 'Female' },  { name: 'Bob', age: 40, gender: 'Male' },  { name: 'Alice', age: 35, gender: 'Female' },]

// const getMaleCustomers = (arr) => {
//   return arr.filter(item => item.gender === "Male")
// }

// console.log(getMaleCustomers(customers))



// Write an ES6 function that takes an array of objects containing game information (title, developer, genre) 
// and returns an array with all the games of a certain genre.


// const games = [{ title: 'The Witcher 3: Wild Hunt', developer: 'CD Projekt Red',    genre: 'RPG',  },  {    title: 'Grand Theft Auto V', developer: 'Rockstar North',    genre: 'Action',  },  { title: 'Portal 2', developer: 'Valve Corporation', genre: 'Puzzle' },  {    title: 'The Legend of Zelda: Breath of the Wild', developer: 'Nintendo',    genre: 'Adventure'}]

// const filterByGenre = (arr , valGenre ) => {
//   return arr.filter(item => item.genre === valGenre)
// }

// console.log(filterByGenre(games , "RPG"))

// Write an ES6 function that takes an array of objects containing car information (make, model, year) 
// and returns an array with only the car model that were made after the year 2012.


// const cars = [{ make: 'Toyota', model: 'Corolla', year: 2010 },{ make: 'Honda', model: 'Civic', year: 2012 },  
// { make: 'Toyota', model: 'Camry', year: 2015 },  { make: 'Ford', model: 'Mustang', year: 2018 }]


// const getCarModel = (arr) => {
//   return  arr.filter(item => item.year > 2012).map(item => item.model)
// }


// console.log(getCarModel(cars))

// Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 700 pages.

// const books = [  {    title: 'The Lord of the Rings',    author: 'J.R.R. Tolkien',    pageCount: 1178,  },  { title: 'To Kill a Mockingbird', author: 'Harper Lee', pageCount: 281 },  {    title: "The Hitchhiker's Guide to the Galaxy",    author: 'Douglas Adams',    pageCount: 193,  },  {    title: 'The Name of the Wind',    author: 'Patrick Rothfuss',    pageCount: 662,  }]


// const bookWith700Pages = (arr) => {
//    return arr.filter(item => item.pageCount > 700)
// }


// console.log(bookWith700Pages(books))


// Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function

// const numbers = [12, 23, 4, 2, 11, 21]


// const sumOFNumbers = (arr) => {
//   const initalVal = 0 
//   return arr.reduce((acc , val) => acc + val , initalVal)
// }

// console.log(sumOFNumbers(numbers))


// const sumEvenNumbers = (arr) => {
//   const initalVal = 0
//   return arr.reduce((acc, val) => val % 2 === 0 ? acc + val : acc , initalVal)
// }

// console.log(sumEvenNumbers(numbers))




// Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.

// const students = [{ name: 'John', score: 80 },  { name: 'Jane', score: 90 },  { name: 'Bob', score: 75 },  { name: 'Alice', score: 85 }]

// const getAverageScore = (arr) => {
//    const initialVal = 0;
//    return arr.reduce((acc , {score}) => acc + score , initialVal)
// }

// console.log(getAverageScore(students))
// Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and 
// returns the total cost of all the products using the reduce function.


// const products = [  { name: 'Shirt', price: 20, quantity: 2 },  { name: 'Pants', price: 30, quantity: 1 },  { name: 'Shoes', price: 50, quantity: 1 },  { name: 'Hat', price: 10, quantity: 3 }]


// const getTotalCost = (arr) => {
//   const initalVal = 0;
//    return arr.reduce((acc , {price , quantity}) => acc + price * quantity ,initalVal) 
// }

// console.log(getTotalCost(products))



// Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.


// const strings = ['Hello', ' ', 'world', '!']


// const concatenateStrings = (arr) => {
//   return arr.reduce((acc , value) => acc + value)
// }

// console.log(concatenateStrings(strings))


// Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

// const numbers = [10, 5, 8, 3, 6  ]

// const getMinimumNumber = (arr) => {
//   const initialVal = arr[0]
//  return arr.reduce((acc , val) => acc < val ? acc : val , initialVal)
// }

// console.log(getMinimumNumber(numbers))




// FP Programming set 4  (Reduce , Filter and map, Find) 