const curry = func => {
  //get all arguments passed into original function
  console.log('Parameters expected: ', func.length);
  return (...args) => {
    //if enough arguments are passed in to 'complete' the original
    //function, just return and invoke the original function with passed
    //in arguments.
    if (args.length >= func.length) {
      return func(...args);
    } else {
      //If fewer arguments are passed in than required by the function,
      //bind those arguments to the function: that is, "pre-load" those
      //arguments and create a new function that is awaiting fewer args.
      const partiallyAppliedFn = func.bind(null, ...args);
      //Finally, call 'curry' on the bound function. Continue doing this
      //until the function has received enough arguments to fulfill
      //the original function's parameters.
      return curry(partiallyAppliedFn);
    }
  };
};

const createCapstoneTeam = (s1, s2, s3, s4) => {
  return `Your team is ${s1}, ${s2}, ${s3}, and ${s4}`;
};

const curried = curry(createCapstoneTeam);

console.log('After adding member1: ');
const member1 = curried('Erica');
console.log(member1);
//prints [Function]

console.log('After adding member2: ');
const member2 = member1('Dan');
console.log(member2);
//prints [Function]

console.log('After adding member3: ');
const member3 = member2('Wendy');
console.log(member3);
//prints [Function]

console.log('After adding member4: ');
const member4 = member3('Jamal');
console.log(member4);
//prints [Function]

console.log('When passing in 4 params one at a time:');
console.log(curried('Erica')('Dan')('Wendy')('Jamal'));
//prints [Function]

console.log('When passing in all 4 params at once:');

console.log(curried('Erica', 'Dan', 'Wendy', 'Jamal'));
