const faker = require("faker");
const { benchmarktool, validateCallback } = require("../tool");
const { search, jsSearch, binarySearch } = require("./search");

// MOCK DATA
const limit = 1000;
const list = Array(limit)
  .fill("")
  .map(() => faker.name.firstName() + " " + faker.name.lastName());
const randomIndex = Math.round(limit * 0.8); //faker.datatype.number(limit);
const searchFor = list[randomIndex];

// TEST LIMITS
const steps = 10;
const loops = 10000;

// CALLBACKS
const searchCallback = () => search(list, searchFor);
const jsSearchCallback = () => jsSearch(list, searchFor);
const binarySearchCallback = () =>
  binarySearch(list, searchFor, 0, list.length - 1);

// VALIDATIONS
validateCallback(searchCallback, randomIndex);
validateCallback(jsSearchCallback, randomIndex);
validateCallback(binarySearchCallback, randomIndex);

// BENCHMARK
// benchmarktool(searchCallback, {
//   name: search.name,
//   steps,
//   loops,
// });
// benchmarktool(jsSearchCallback, {
//   name: jsSearch.name,
//   steps,
//   loops,
// });
// benchmarktool(binarySearchCallback, {
//   name: binarySearch.name,
//   steps,
//   loops,
// });
