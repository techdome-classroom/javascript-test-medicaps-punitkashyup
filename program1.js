function longestSubstring(s) {
    let maxLength = 0; // Initialize the maximum length of substring
    let start = 0; // Initialize the start index of the substring
    const charIndexMap = {}; // Map to store the index of each character
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        
        // If the character is already in the map and its index is after the start index
        // Update the start index to the next index of the repeating character
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }
        
        // Update the index of the current character in the map
        charIndexMap[char] = end;
        
        // Update the maximum length of substring
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

module.exports = { longestSubstring };

// Test
console.log(longestSubstring("abcabcbb")); // Output: 3
