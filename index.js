//our goal is to modify the tutorials array 
//and capitalize the first letter of
//each word in the array
//we need to iterate through each element
//we need to iterate through each word in each element
//so, we need to iterate within an interator
//we need to create a new array with .map


//we need to iterate through each element in our array
//to create new objects for each element within a new array
//take each element in the new array and split it into
//new objects with each word held as an object
//capitalize the substring(0,1) of each word
//take each word and combine back into a string
//take each string and add them as new items in an array
//return the new array with the updated items

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


  // function titleCased() {
    
  //   const titleCased = tutorials.map((tut) => {
  //     let eachTut = tut.toLowerCase()
  //             .split(' ')
  //             .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  //             .join(' ');    
  //             return eachTut
  //   })
  //   return titleCased
  // }

  //this works to capitalize the first letter and sanitze the rest
  //but it needs another layer to decide if each letter is capitalized
  //so maybe we need to map each letter, and compare it to the whole
  //word to decide if should be capitalized - if we use a concat on two
  //arrays, which letter takes precedence?
  function titleCased() {
    
    const titleCased = tutorials.map((tut) => {
      let eachTut = tut
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ');    
              return eachTut
    })
    return titleCased
  }
  

titleCased()

  //const map1 = array1.map(x => x * 2);
  //console.log(eachTut)  
  //return eachTut
  //console.log(eachTut)
  //        I now have a single string
  //        now I need to break down each sentence by word
 
  //const eachWord = eachTut

  // var text = "foo bar loo zoo moo";
  //     eachWord = eachTut.toLowerCase()
  //         .split(' ')
  //         .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  //         .join(' ');

  
  
  //        into a series of objects

  //        we can separatate this at each space between words
  //        then each word needs to have the first letter capitalized
