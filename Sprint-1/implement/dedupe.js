function dedupe(arr) {
    if (!Array.isArray(arr)) {     //invalid input control
        return null;
    } else {
        return [...new Set(arr)]   //Remove reps with sets
    }
}

module.exports = dedupe;
