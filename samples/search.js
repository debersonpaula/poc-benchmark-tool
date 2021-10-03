const { insertionSort } = require("./sort");

/**
 * basic loop search
 * @param {string[]} list
 * @param {string} filter
 */
function search(list, filter) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === filter) {
      return i;
    }
  }
  return -1;
}

/**
 * basic loop search
 * @param {string[]} list
 * @param {string} filter
 */
function jsSearch(list, filter) {
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i] === filter) {
  //     return i;
  //   }
  // }
  // return -1;
  return list.findIndex((item) => item === filter);
}

/**
 * @param {string[]} list
 * @param {string} filter
 */
// function binarySearch(list, filter) {
//   const sortedList = insertionSort(list);

//   console.log(sortedList);

//   let l = 0,
//     r = sortedList.length - 1;
//   while (l <= r) {
//     let m = l + Math.floor((r - l) / 2);

//     let res = filter.localeCompare(sortedList[m]);

//     // middle check
//     if (res == 0) return m;
//     // left half check
//     if (res > 0) l = m + 1;
//     // right half check
//     else r = m - 1;
//   }

//   return -1;
// }

// function binarySearch(list, filter) {
//   const sortedList = insertionSort(list);
//   console.log(sortedList);

//   let startIndex = 0,
//     stopIndex = sortedList.length - 1,
//     middle = Math.floor((stopIndex + startIndex) / 2);

//   while (sortedList[middle] != filter && startIndex < stopIndex) {
//     //adjust search area
//     if (filter < sortedList[middle]) {
//       stopIndex = middle - 1;
//     } else if (filter > sortedList[middle]) {
//       startIndex = middle + 1;
//     }

//     //recalculate middle
//     middle = Math.floor((stopIndex + startIndex) / 2);
//   }

//   //make sure it's the right value
//   return sortedList[middle] != filter ? -1 : middle;
// }

function binarySearch(list, filter, start, end) {
  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (list[mid] === filter) return true;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (list[mid] > filter) return binarySearch(list, filter, start, mid - 1);
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return binarySearch(list, filter, mid + 1, end);
}

module.exports = { search, jsSearch, binarySearch };
