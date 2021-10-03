function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

/**
 *
 * @param {number[]} list
 * @returns number[]
 */
function insertionSort(list) {
  const clonedList = [...list];

  for (let i = 1; i < clonedList.length; i++) {
    const currentValue = clonedList[i];
    let j = i - 1;

    while (j >= 0 && clonedList[j] > currentValue) {
      clonedList[j + 1] = clonedList[j];
      j--;
    }
    clonedList[j + 1] = currentValue;
  }

  return clonedList;
}

/**
 *
 * @param {number[]} list
 * @returns number[]
 */
function selectionSort(list) {
  const clonedList = [...list];

  for (let i = 0; i < clonedList.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < clonedList.length; j++) {
      if (clonedList[j] < clonedList[min]) {
        min = j;
      }
    }
    if (i != min) {
      aux = clonedList[i];
      clonedList[i] = clonedList[min];
      clonedList[min] = aux;
    }
  }

  return clonedList;
}

/**
 *
 * @param {number[]} list
 * @returns number[]
 */
function bubbleSort(list) {
  const arr = [...list];
  const n = list.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

module.exports = { insertionSort, selectionSort, bubbleSort, quickSort };
