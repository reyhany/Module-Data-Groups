function sum(arr) {
  let total = 0;

  for (const item of arr) {
    if (typeof item === "number" && !Number.isNaN(item)) {
      total += item;
    }
  }

  return total;
}

module.exports = sum;
