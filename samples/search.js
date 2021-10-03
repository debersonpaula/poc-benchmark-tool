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
function binarySearch(list, filter, start, end) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);

  if (list[mid] === filter) return mid;

  if (list[mid] > filter) return binarySearch(list, filter, start, mid - 1);
  else return binarySearch(list, filter, mid + 1, end);
}

module.exports = { search, jsSearch, binarySearch };
