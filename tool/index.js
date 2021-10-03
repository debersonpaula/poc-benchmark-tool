/**
 * Test callback function by n `steps` with x `loops` each
 * @param {string} caption
 * @param {Function} callback
 * @param {{
 *  name: string;
 *  steps: number;
 *  loops: number;
 * }} options
 */
function benchmarktool(callback, options) {
  let currentTime = getTime();
  const stepTimes = [];
  let n, x;
  const max_step = options.steps;
  const max_loops = options.loops;

  // execute callbacks and gather times
  if (callback) {
    for (n = 0; n < max_step; n = n + 1) {
      for (x = 0; x < max_loops; x = x + 1) {
        callback();
      }
      const stepTime = getTime();
      stepTimes.push(stepTime - currentTime);
      currentTime = stepTime;
    }
  }

  // reports
  const report = getReport(stepTimes);

  // const t2 = new Date();
  console.log(
    "================================================================"
  );
  console.log(
    `Test Case "${options.name}" with ${options.steps} steps (${options.loops} loops each):`
  );
  console.log(`
    - Average: ${report.avg} ms
    - Min: ${report.min} ms
    - Max: ${report.max} ms

    - Total: ${report.total} ms
  `);
  console.log(
    "================================================================"
  );
}

function getTime() {
  return new Date().getTime();
}

/**
 *
 * @param {number[]} stepTimes
 */
function getReport(stepTimes) {
  const results = {
    max: 0,
    min: null,
    avg: 0,
    total: 0,
    count: stepTimes.length,
    steps: stepTimes,
  };

  stepTimes.forEach((time) => {
    results.total += time;
    if (time > results.max) {
      results.max = time;
    }
    if (time < results.min || results.min === null) {
      results.min = time;
    }
  });

  results.avg = results.total / results.count;

  return results;
}

module.exports = benchmarktool;
