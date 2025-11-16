function trackFrequencies(list) {
  const freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") continue;
    freqs.set(num, (freqs.get(num) || 0) + 1);                     //map counting
  }

  return freqs;
}

function findHighestMode(freqs) {
  let maxFreq = 0;
  let mode;

  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      maxFreq = freq;
      mode = num;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

function calculateMode(list) {
  const freqs = trackFrequencies(list);   // stage 1
  return findHighestMode(freqs);          // stage 2
}

module.exports = calculateMode;
