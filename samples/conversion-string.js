const faker = require("faker");
const { benchmarktool } = require("../tool");

// MOCK DATA
const limit = 1000;
const list = Array(limit)
  .fill(0)
  .map(() => faker.datatype.number(9999999));

// TEST LIMITS
const steps = 10;
const loops = 10000;

// METHODS
function convertUsingTemplate(data) {
  for (let i = 0; i < data.length; i++) {
    const x = `${data[i]}`;
  }
}
function convertUsingToString(data) {
  for (let i = 0; i < data.length; i++) {
    const x = data[i].toString();
  }
}

// BENCHMARKS
benchmarktool(() => convertUsingTemplate(list), {
  name: convertUsingTemplate.name,
  steps,
  loops,
});
benchmarktool(() => convertUsingToString(list), {
  name: convertUsingToString.name,
  steps,
  loops,
});
