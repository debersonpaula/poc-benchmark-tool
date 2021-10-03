const {
  insertionSort,
  selectionSort,
  bubbleSort,
  quickSort,
} = require("./sort");

const benchmarktool = require("../tool");

const list = [10, 50, 30, 70, 80, 60, 20, 90, 40, 1, 9, 7, 6, 2, 1, 7, 900, 0];

// const loops = 1000000;

// testcase("insertionSort", () => insertionSort(list), loops);
// testcase("selectionSort", () => selectionSort(list), loops);
// testcase("bubbleSort", () => bubbleSort(list), loops);
// testcase("quickSort", () => quickSort(list, 0, list.length - 1), loops);

benchmarktool(() => insertionSort(list), {
  name: insertionSort.name,
  steps: 10,
  loops: 1000000,
});

benchmarktool(() => selectionSort(list), {
  name: selectionSort.name,
  steps: 10,
  loops: 1000000,
});
