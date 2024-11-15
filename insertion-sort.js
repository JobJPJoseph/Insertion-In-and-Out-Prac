// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  // console.log(arr); // [2,4,6,8,1,3,5,7,9];
  let sorted = [];

  // First attempt
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(sorted.join())
    let num = arr[i];
    sorted.push(num);
    let idx = sorted.length - 1;
    let temp = sorted[sorted.length - 1];

    for (let j = sorted.length - 1; j > 0; j--) {

      if (sorted[idx - 1] > temp) {
        sorted[idx] = sorted[idx - 1];
        idx--;
      }

    }

    sorted[idx] = temp;
  }

  // Second Attempt
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   let num = arr[i];
  //   sorted.unshift(num);
  //   let idx = 0;
  //   // We would need to sort.unshift(num) with this strat
  //   // We still have the logic of keeping the left side sorted and
  //   // the right unsorted

  //   while (idx < sorted.length - 1) {

  //     if (sorted[idx] > sorted[idx + 1]) {
  //       // sorted[idx + 1] = sorted[idx];
  //       [sorted[idx], sorted[idx + 1]] = [sorted[idx  + 1], sorted[idx]];
  //     }

  //     idx++;
  //   }
  //   console.log(sorted.join());
  // }

  // let unsorted = arr.slice();

  // let divide = 0;
  // let temp = arr[divide];

  // for (let i = 0; i < unsorted.length; i++) {
  //   let idx = divide;

  //   while(unsorted[idx - 1] > temp) {
  //     unsorted[idx] = unsorted[idx - 1];
  //     idx--;
  //   }
  //   // Once false we insert the temp
  //   unsorted[idx] = temp;
  //   divide++;
  //   temp = unsorted[divide];
  //   console.log(unsorted.join());
  // }

  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here // [2,4,6,8,1,3,5,7,9];
  let divide = 0;
  let temp = arr[divide];

  for (let i = 0; i < arr.length; i++) {
    let idx = divide;

    while(arr[idx - 1] > temp) {
        arr[idx] = arr[idx - 1];
        idx--;
    }
    // Once false we insert the temp
    arr[idx] = temp;
    divide++;
    temp = arr[divide];
    console.log(arr.join());
  }

  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
