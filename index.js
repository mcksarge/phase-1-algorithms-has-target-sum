
//Method 1 *******************

// function hasTargetSum(array, target) {
//     // Write your algorithm here
//     let sums = [];
//     let prevSums = [];
  
// //First loop through the array
//     for (let x in array){
//       let first = array[x];
// //Second loop through the array
//       for (let y in array){
//         let second = array[y];
//         //Adds the elements of the first and second loop
//         if (first + second === target){
//           if(!!array.length){ //Checks if array has elements in it
//             if(!prevSums.includes(array[x]) && !prevSums.includes(array[y])){ //Checks if prevSums array contains the current elements from passed array.  
//               prevSums.push(array[x]); //Pushes element from passed array into prevSums array if the element is not already in there
//             } else { //Otherwise pushes the two elements that, when added together equal the target value, into the sums array and pushes the current element from the first loop into the prevSums array.
//               sums.push([array[x], array[y]]);
//               prevSums.push(array[x]);
//             }
//           }
//         } 
//       }
//     };
//     //Uses reduce() method to add the two elements together
//     let totalSum = prevSums.reduce((accumulator, currentValue) => { 
//       return accumulator + currentValue; 
//     }, 0)
//     //If totalSum is equal to target, returns true
//     if(totalSum === target){
//       return true;
//     }else{
//       return false;
//     };
    
//   };
  //End of Method 1**************

  //Method 2 *****************

  function hasTargetSum(array, target){
    let obj = {}
    
    for (i = 0; i < array.length; i++){
      let difference = target - array[i]

      obj.push([difference, array[i]])
      console.log(obj)
    }


  };


  //End of Method 2 *****************
 
  /* 
    Write the Big O time complexity of your function here

    Method 1 Big O Complexity:
    With Method 1, I'm using a nested for loop to iterate through the array twice with variables x and y.  I believe this is an O(n2) (Quadratic time) complexity, which is not great.  This needs to be cleaned up.

  */
  
  /* 
    Add your pseudocode here
    
    Take an array of integers and a target integer
    Iterate through the array to find two numbers that add up to the target integer passed


    
    Test 1

      function hasTargetSum(array, target){
        for (let x in array){
          for (let y in array){
            if (array[x] + array[y] === target){
              return true
            } else {
              return false
            }
          }
        }

      }

    If I do the code above, the first loop will start with the first integer, then the second loop will loop through and run an if statement to see if both numbers in the array add up to the target.

    ex.
    first loop:
    [1, 2, 3, 4, 5]
    X               
    Y

    second loop:
    [1, 2, 3]
     X               
        Y

    Third loop:
    [1, 2, 3]
     X               
           Y   

    Fourth loop:
    [1, 2, 3]
        X               
     Y  


  */
  
  /*
    Add written explanation of your solution here
  */
  
  // You can run `node index.js` to view these console logs
 // if (require.main === module) {
    // add your own custom tests in here
    // console.log("Expecting: true");
    // console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
    // console.log("");
  
    // console.log("Expecting: true");
    // console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
    // console.log("");
  
    // console.log("Expecting: false");
    // console.log("=>", hasTargetSum([1, 2, 5], 4));

    // console.log("");

    // console.log("Expecting: false");
    // console.log("=>", hasTargetSum([10, 15, 6, 12, 4], 43));

    // console.log("");

    // console.log("Expecting: true");
    // console.log("=>", hasTargetSum([1, -2, 5, 3, -7, -3], 0));
    
    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 1, 4, -3, 1], 2));

  //}
  
 // module.exports = hasTargetSum;
