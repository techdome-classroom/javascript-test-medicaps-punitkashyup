function smallestMissingPositiveInteger(nums) {
  // Step 1: Remove non-positive integers and duplicates
  nums = nums.filter(num => num > 0);
  nums = Array.from(new Set(nums)); // Remove duplicates
  
  // Step 2: Sort the list
  nums.sort((a, b) => a - b);
  
  // Step 3: Iterate through the sorted list to find the smallest missing positive integer
  let smallestMissing = 1;
  for (const num of nums) {
      if (num === smallestMissing) {
          smallestMissing++;
      } else {
          return smallestMissing;
      }
  }
  
  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;

// Test cases
console.log(smallestMissingPositiveInteger([3, 4, -1, 1])); // Output: 2
console.log(smallestMissingPositiveInteger([1, 2, 0])); // Output: 3
console.log(smallestMissingPositiveInteger([-1, -3, 4, 2])); // Output: 1
