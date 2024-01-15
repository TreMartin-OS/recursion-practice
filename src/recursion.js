// Solve all of the following prompts using recursion.
// When checking code via the SpecRunner.html, we /dont/ have to complete the tests already highlighted in blue, unless we want extra practice.
// part1.js & part2.js in the spec folder has hints on what needs to be covered in the below codes.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n, total = 1) {
  // 2 hours & 9 mins in, he gives an example of how to solve this problem. ///////////////////
  // Base
  if (n === 0) {
    return total;
  }
  else if (n < 0) {
    return null;
  }
  // Recursion
  if (n > 0) {
    total *= n;
  }
  return factorial(n - 1, total);
};


// 2. Compute the sum of an array of integers. /////////////////////////////////
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (arr, total = 0) {
  // Base
  if (arr.length === 0) {
    return total;
  }
  // Recursion
  total += arr[0];
  return sum(arr.slice(1), total)
};

// 3. Sum all numbers in an array containing nested arrays. //////////////////////////////
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (arr, total = 0) {
  // Base
  if (arr.length === 0) {
    return total;
  }
  // Recursion
  total += arr.flat(2)[0];
  return arraySum(arr.flat(2).slice(1), total)
};
// console.log(arraySum([[2, -3, 1, 5, 4],[3, 3, 6, -6], -7, 9])) // expected => 17 // 17 is loggin but I can't tell if this is passing with the Blue

// 4. Check if a number is even. ////////////////////////////////
var isEven = function (n) {
  // Base
  if (n === 1) {
    return false;
  } else if (n === 0) {
    return true;
  }
  // Recursion
  if (n < 0) {
    return isEven(n + 2);
  } else {
    return isEven(n - 2);
  }
};
// console.log(isEven(-6));

// 5. Sum all integers below a given integer. ///////////////////////////////
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n, sTotal = 0) {
  // Base
  if (n === 0) {
    return sTotal;
  }
  // Recursion - Need to add all digits between n & 0
  if (n > 0) { // If n is Positive
    sTotal += (n - 1);
    return sumBelow(n - 1, sTotal);
  } else if (n < 0) { // If n is Negative
    sTotal += (n + 1);
    return sumBelow(n + 1, sTotal);
  }
};
// console.log(sumBelow(-2)); // Returning correctly


// 6. Get the integers in range (x, y). //////////////////////////////
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y, rList = []) {
  // Base
  if (y === undefined) {
    return rList;
  } else if (x === y) {
    return rList.slice(1);
  }
  // Recursion
  if (x < y) {
    rList.push(x);
    return range(x + 1, y, rList);
  } else if (x > y) {
    rList.push(x);
    return range(x - 1, y, rList);
  }
};
// console.log(range(2, 9));

// 7. Compute the exponent of a number. /////////////////////////////////////////////////////////////////////////////////////////
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp, eTotal = 1) {
  // Base 
  if (exp === 0) {
    return eTotal;
  }
  // Recursion
  if (exp > 0) { // If Even
    eTotal *= base;
    return exponent(base, exp - 1, eTotal);
  } else if (exp < 0) { // If Odd
    eTotal *= (1 / base); // <= Gotta do something weird here: https://www.geeksforgeeks.org/negative-exponents/
    return exponent(base, exp + 1, eTotal);
  }
};
// console.log(exponent(5, -4)); // (4, 2) Returns 16 - (4, -2) Returns 0.0625 - (2,-5) Returns 0.03125;
// (5,-4) wants 0.0016 but gives 0.0016000000000000005 & this fails the test
// So total needs a digit limit? Using .toFixed(#) fails the other tests, move on for now
// Theres way to round down I can look up but he says ignore this for now

// 8. Determine if a number is a power of two. //////////////////////////////////////////////////////////////////////////////////
// If a number is reached by multiplying 2 several times.
// powerOfTwo(1); // true // 1 x 1 = 1
// powerOfTwo(16); // true // 4 x 4 = 16
// powerOfTwo(10); // false // 5 x 5 = 25, !10
var powerOfTwo = function (n, count = 1) {
  // Base
  if (count === n) {
    return true;
  } else if (count > n) {
    return false;
  }
  // Recursion
  // mutiply 2x2 into count & check results till it matches or exceeds n.  // If it matches n exactly, return true, if it goes over, return false
  count = count * 2;
  return powerOfTwo(n, count);
};

// 9. Write a function that accepts a string a reverses it. ////////////////////////////////////////////////////////////////////
var reverse = function (str, rArr = []) {
  // Base
  if (str.length === 0) {
    str = rArr.join('');
    return str;
  }
  // Recursion
  rArr.unshift(str[0]);
  return reverse(str.slice(1), rArr);
};
// console.log(reverse("ฅ/ᐠ•⩊•^ฅ H-Hewwo?? HEWWWOOO??? ฅ^•ﻌ•^ฅ"));



// 10. Write a function that determines if a string is a palindrome. ///////////////////////////////////////////////////////////////////////////
var palindrome = function (str, x = 0, pArr = []) {
  // REGEX var to get rid of unwanteds
  let newStr = str.replace(/\s/g, "").toLowerCase(); // Needed to create a var that removed spaces & caps diffs
  // Base
  if (newStr.length === pArr.length) {
    if (newStr === pArr.join('')) { // Removed 'toLowerCase()' from str be REGEX has to cover cases
      return true;
    } else {
      return false;
    }
  }
  // Recursion
  // If I push str to an Arr then use slice, str will be empty & ill have nothing to compare
  pArr.unshift(newStr[x]);
  return (palindrome(newStr, x + 1, pArr));
};

// let testStr = 'Race Car';
// console.log(palindrome('Rotor')); // passing true
// console.log(palindrome('Race car')); // not passing due to space
// console.log(palindrome('example')); // passing false



// 11. Write a function that returns the remainder of x divided by y without using the modulo (%) operator. ////////////////////////////////////
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {  //// Solve later for Extra practice // ************************************
  // Base

  // Recursion


};

// 12. Write a function that multiplies two numbers without using the * operator  or JavaScript's Math object. -  //////////////////////////////
// multiply(2, 4); => 4 + 4
// He recommends default parameters
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function (x, y, count = 0) {
  if (y === 0) {
    return count;
  }
  if (y > 0) {
    count += x;
    return multiply(x, y - 1, count);
  } else if (y < 0) {
    count -= x;
    return multiply(x, y + 1, count);
  }
};



// 13. Write a function that divides two numbers without using the / operator  or - //////////////////////////////
// JavaScript's Math object.
var divide = function (x, y, count = 0) {
  if (x === 0) {
    return count;
  }

  if (x > y) {
    x -= y;
    count += 1;
    return divide(x - y, y, count);
  }
  else if (x < y) {
    y -= x;
    count += 1;
    return divide(x + y, y, count);
  }
};
// start with x & subtract y until x = 0 - count how many times you sub y from x
// console.log(divide(10, 2)); // 10-2, 8-2, 6-2, 4-2, 2-2: count=5
// console.log(divide(2, 10)); // Work on later this is optional, & it keeps returning undefined

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two - //////////////////////////////
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
  // Base

  // Recursion



};

// 15. Write a function that compares each character of two strings and returns true if -  //////////////////////////////
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2, ans = []) {
  // Base
  if (str1.length === 0 && str2.length === 0) {
    if (ans.includes(1)) {
      return false;
    } else {
      return true;
    }
  }
  // Recursion
  if (str1[0] === str2[0]) {
    ans.push(0);
    return compareStr(str1.slice(1), str2.slice(1), ans)
  } else {
    ans.push(1);
    return compareStr(str1.slice(1), str2.slice(1), ans)
  }
};
// console.log(compareStr('banana', 'banana'));
// console.log(compareStr('banana', 'bananas'));

// 16. Write a function that accepts a string and creates an array where each letter -  //////////////////////////////
// occupies an index of the array.
var createArray = function (str, arr = []) {
  // Base
  if (str.length === 0) {
    return arr;
  }
  // Recursion
  arr.push(str[0])
  return createArray(str.slice(1), arr)
};
// console.log(createArray('Test This Thang'));

// 17. Reverse the order of an array //////////////////////////////
var reverseArr = function (arr, arr2 = []) {
  // Base
  if (arr.length === 0) {
    return arr2;
  }
  // Recursion
  arr2.unshift(arr[0]);
  return reverseArr(arr.slice(1), arr2)
};
// console.log(reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 18. Create a new array with a given value and length. //////////////////////////////
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (val, len, bArr = []) {
  // Base
  if (bArr.length === len) {
    return bArr;
  }
  // Recursion
  if (bArr.length < len) {
    bArr.push(val);
    return buildList(val, len, bArr);
  }
};
// console.log(buildList(0, 5)); // Work on this tomorrow

// 19. Count the occurence of a value inside a list. //////////////////////////////
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (arr, val, count = 0) {
  // Base
  if (arr.length === 0) {
    return count;
  }
  // Recursion
  if (arr[0] === val) {
    count += 1;
    return countOccurrence(arr.slice(1), val, count);
  } else {
    return countOccurrence(arr.slice(1), val, count);
  }
};
// console.log(countOccurrence([1, 2, 3, 4, 5, 3], 3));

// 20. Write a recursive version of map. //////////////////////////////
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback, output = []) {
  // // Base
  if (array.length === 0) {
    return output;
  }
  // Recursion
  output.push(callback(array[0]));
  return (rMap(array.slice(1), callback, output));
};

// 21. Write a function that counts the number of times a key occurs in an object. //////////////////////////////
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key) {
  // Base

  // Recursion


};

// 22. Write a function that counts the number of times a value occurs in an object. //////////////////////////////
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function (obj, value) {
  // Base

  // Recursion


};

// 23. Find all keys in an object (and nested objects) by a provided name and rename //////////////////////////////
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey) {
  // Base

  // Recursion


};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent //////////////////////////////
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n) {
  // Base

  // Recursion


};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence. //////////////////////////////
// https://en.wikipedia.org/wiki/Fibonacci_sequence
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n, next = 0, fArr = [0, 1]) { // Do I have to make the fSequence or enter it as an arr?
  // // Base
  if (n < 0) {
    return null;
  } else if (fArr.length > n) { // Without the +1 it wont return index n, because arrays start at 0
    return fArr[n];
  }
  // // Recursion
  if (fArr.length < (n + 1)) {
    next = fArr[fArr.length - 1] + fArr[fArr.length - 2]
    fArr.push(next); // trying to add last 2 nums together & push result to arr
    return nthFibo(n, next, fArr)
  }
};


// 26. Given an array of words, return a new array containing each word capitalized. //////////////////////////////
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input, cArr = []) {
  // Base
  if (input.length === 0) {
    return cArr;
  }
  // Recursion
  cArr.push(input[0].toUpperCase())
  return capitalizeWords(input.slice(1), cArr);
};

// 27. Given an array of strings, capitalize the first letter of each index. //////////////////////////////
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (arr, cfArr = []) {
  // Base
  if (arr.length === 0) {
    return cfArr;
  }
  // Recursion
  cfArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  return capitalizeFirst(arr.slice(1), cfArr);
};
// console.log(capitalizeFirst(['car', 'poop', 'banana']));


// 28. Return the sum of all even numbers in an object containing nested objects. //////////////////////////////
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
  // Base

  // Recursion


};

// 29. Flatten an array containing nested arrays. //////////////////////////////
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (arrs) {
  // Base

  // Recursion


};

// 30. Given a string, return an object containing tallies of each letter. //////////////////////////////
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj = {}) {
  // Base
  if (str.length === 0) {
    return obj;
  }
  // Recursion
  if (obj.hasOwnProperty(str[0])) {
    obj[str[0]] += 1;
    return letterTally(str.slice(1), obj);
  } else {
    obj[str[0]] = 1;
    return letterTally(str.slice(1), obj);
  }
};
// console.log(letterTally("potato"));


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated //////////////////////////////
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list, prev, cArr = []) {
  // Base
  if (list.length === 0) {
    return cArr;
  }
  // Recursion
  if (prev != list[0]) {
    cArr.push(list[0]);
    prev = list[0];
    return compress(list.slice(1), prev, cArr);
  } else {
    prev = list[0];
    return compress(list.slice(1), prev, cArr);
  }
};
// console.log(compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]));


// 32. Augment every element in a list with a new value where each element is an array //////////////////////////////
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (arr, aug) {
  // Base

  // Recursion


};

// 33. Reduce a series of zeroes to a single 0. //////////////////////////////
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (arr, prev, mArr = []) {
  // Base
  if (arr.length === 0) {
    return mArr;
  }
  // Recursion
  if (prev != arr[0]) {
    mArr.push(arr[0]);
    prev = arr[0]
    return minimizeZeroes(arr.slice(1), prev, mArr);
  } else if (prev === 0 && arr[0] === 0) {
    prev = arr[0]
    return minimizeZeroes(arr.slice(1), prev, mArr);
  }
};
// console.log(minimizeZeroes([2,0,0,0,1,0,0,4]));


// 34. Alternate the numbers in an array between positive and negative regardless of //////////////////////////////
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (arr, prev = 0, newArr = []) {
  // Base
  if (arr.length === 0) {
    return newArr;
  }
  // Recursion
  // if newArr is empty, make sure 1st val pushed is positive
  if (newArr.length === 0) {
    // if arr[0] is positive, push it without edits
    if (arr[0] > 0) {
      newArr.push(arr[0]);
      prev = arr[0];
      return alternateSign(arr.slice(1), prev, newArr);
    } else if (arr[0] < 0) { // else if arr0 is negative, push it after inverting
      newArr.push(-arr[0]);
      prev = -arr[0];
      return alternateSign(arr.slice(1), prev, newArr);
    }
    //   do I need to return after these? alternateSign(arr.slice(1), asArr);
  } // if previous is Positive, current needs to be pushed but negative
  if (prev > 0 && arr[0] > 0) { // if prev & current are positive, push inverted current 
    newArr.push(-arr[0]);  //
    prev = -arr[0]
    return alternateSign(arr.slice(1), prev, newArr);
  } else if (prev < 0 && arr[0] < 0) {
    newArr.push(-arr[0]);  //
    prev = -arr[0]
    return alternateSign(arr.slice(1), prev, newArr);
  } else {
    newArr.push(arr[0]);  //
    prev = arr[0]
    return alternateSign(arr.slice(1), prev, newArr);
  }
};
// console.log(alternateSign([-2,-7,8,3,-1,4]));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str, TF = 0, splitStr, newStr = []) {
  const chart = { 5: "five", 6: "six" };
  let checkNums = [];
  for (let keys in chart) {
    checkNums.push(keys);
  } // console.log(checkNums); // Logs right
  // split input str into arr - required for recursion to not skip letters
  splitStr = str.split(" "); // console.log(splitStr); // logging correctly

  // Base
  if (newStr.length === splitStr.length) {
    return newStr; // Add .join(' ') after I get the rest to work
  }

  // Recursion
  // Compare all vals in checkNums to 1st val in splitStr  // Verify vals are not already in newStr
// splitStr should be getting checked & sliced b4 checkNums?

  // Outside Rloop checks checkNums length to make sure every val has been compared to splitStr[0]
  if (splitStr.length > 0) {    // This means there's still vals to compare
    if (splitStr[0] === checkNums[0]) { // if they DO match
      TF = 0; // Might not need a True-False var?
      newStr.push(chart[0]); // Meant to push charts value of the key to the array
        return numToText(str, TF, splitStr.slice(1), checkNums, newStr); // returning everything needed for next loop
    } 
    else if (splitStr[0] !== checkNums[0] && !newStr.includes(splitStr[0])) { // if they DONT match & its not already in newStr
      TF = 1; // Needed?
      newStr.push(splitStr[0]); // Push val to new Arr if its not already in there
        return numToText(str, TF, splitStr.slice(1), checkNums, newStr);
    } 
    else if (splitStr[0] !== checkNums[0] && newStr.includes(splitStr[0])) { // if they DONT match & its already in newStr
        // No need to push anything if the val is already in the newArr
        return numToText(str, TF, splitStr, checkNums.slice(1), newStr);
    } 
    return numToText(str, TF, splitStr, checkNums.slice(1), newStr); 
  } 
  else if (splitStr.length === 0) {
    return numToText(str, TF, splitStr.slice(1), newStr); // Resets checkNums & goes to next val in splitStr
  }

////////////////
  // Outside Rloop checks checkNums length to make sure every val has been compared to splitStr[0]
  // if (checkNums.length > 0) {    // This means there's still vals to compare
  //   if (checkNums[0] === splitStr[0]) { // if they DO match
  //     TF = 0; // Might not need a True-False var?
  //     newStr.push(chart[0]); // Meant to push charts value of the key to the array
  //       return numToText(str, TF, splitStr, checkNums.slice(1), newStr); // returning everything needed for next loop
  //   } 
    // else if (checkNums[0] != splitStr[0] && !newStr.includes(splitStr[0])) { // if they DONT match & its not already in newStr
    //   TF = 1; // Needed?
    //   newStr.push(splitStr[0]); // Push val to new Arr if its not already in there
    //     return numToText(str, TF, splitStr, checkNums.slice(1), newStr);
    // } 
    // else if (checkNums[0] != splitStr[0] && newStr.includes(splitStr[0])) { // if they DONT match & its already in newStr
    //     // No need to push anything if the val is already in the newArr
    //     return numToText(str, TF, splitStr, checkNums.slice(1), newStr);
    // } 
    // return numToText(str, TF, splitStr, checkNums, newStr); 
  // } 
  // else if (checkNums.length === 0) {
  //   return numToText(str, TF, splitStr.slice(1), newStr); // Resets checkNums & goes to next val in splitStr
  // }


  // else if (checkNums.length === 0) {
  //     if (TF === 0) {
  //   newStr.push(splitStr[0]);
  //     } else {

  //     }

  // }

  //   // If they DONT match & newStr DOESNT contain splitStr[0]
  //   if (checkNums[0] !== splitStr[0] && !newStr.includes(splitStr[0])) {
  //     TF = 1; // Dont push till all comparisons are complete
  //     return numToText(str, TF, splitStr, checkNums.slice(1), newStr);
  //   }

  //   //   // Do I need something for if they DONT match but newStr DOES contain splitStr[0]?
  //   else if (checkNums[0] !== splitStr[0] && newStr.includes(splitStr[0])) {

  //     return numToText(str, TF, splitStr, checkNums.slice(1), newStr);
  //   }

  //   // If they DO match - this is where the swap happens
  //   else if (checkNums[0] == splitStr[0]) {
  //     // newStr.push(chart[0]); // checkNums & chart are connected // This isnt pushing anything????
  //     return numToText(str, TF, splitStr, checkNums.slice(1), newStr);
  //   }
  //   // Once all comparisons are done:
  // } else if (checkNums.length === 0) {
  //   // Comparisons are over, lets mark the results
  //   if ((TF = 1)) { // NOW you push the word that didn't match
  //     newStr.push(splitStr[0]);
  //     return numToText(str, TF, splitStr.slice(1), checkNums, newStr); // NOW you slice splitStr
  //   } else if ((TF = 0)) {

  //     return numToText(str, TF, splitStr.slice(1), checkNums, newStr); // No carrying TF or checkNums bc they need to reset
  //   }
  // }
};

console.log(numToText("I have 5 dogs and 6 ponies"));
// console.log(numToText(chart[2]));





// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM. //////////////////////////////
var tagCount = function (tag, node) {
  // Base

  // Recursion


};

// 37. Write a function for binary search. //////////////////////////////
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function (arr, target, min, max) {
  // Base

  // Recursion


};

// 38. Write a merge sort function. //////////////////////////////
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function (arr) {
  // Base

  // Recursion


};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------