function tally() {
  const frequency = {};

   for (const item of items) {
    frequency[item] = (frequency[item] || 0) + 1;
  }
  return frequency;
}

module.exports = tally;
