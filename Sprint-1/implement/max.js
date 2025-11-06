function findMax(elements) {
   const numbers = elements.filter(item => typeof item === "number" && !Number.isNaN(item));
   
   if (numbers.length === 0) return -Infinity;
      return Math.max(...numbers); 
}

module.exports = findMax;
