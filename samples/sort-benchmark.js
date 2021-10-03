const faker = require("faker");
const {
  jsSort,
  insertionSort,
  selectionSort,
  bubbleSort,
  quickSort,
} = require("./sort");

const { benchmarktool } = require("../tool");

// MOCK DATA
const limit = 1000;
const list = Array(limit)
  .fill("")
  .map(() => faker.name.firstName() + " " + faker.name.lastName());

// TEST LIMITS
const steps = 10;
const loops = 1000;

// BENCHMARKS
benchmarktool(() => jsSort(list), {
  name: jsSort.name,
  steps,
  loops,
});

benchmarktool(() => insertionSort(list), {
  name: insertionSort.name,
  steps,
  loops,
});

// EXTREMELY SLOW
// benchmarktool(() => selectionSort(list), {
//   name: selectionSort.name,
//   steps,
//   loops,
// });

// EXTREMELY SLOW
// benchmarktool(() => bubbleSort(list), {
//   name: bubbleSort.name,
//   steps,
//   loops,
// });

benchmarktool(() => quickSort(list, 0, list.length - 1), {
  name: quickSort.name,
  steps,
  loops,
});
