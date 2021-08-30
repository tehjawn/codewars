// 1163. Last Substring in Lexicographical Order

/**
Given a string s, return the last substring of s in lexicographical order.

Example 1:
Input: s = "abab"
Output: "bab"
Explanation: The substrings are ["a", "ab", "aba", "abab", "b", "ba", "bab"]. 
The lexicographically maximum substring is "bab".

Example 2:
Input: s = "leetcode"
Output: "tcode"


Constraints:
1 <= s.length <= 4 * 105
s contains only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {string}
 */
 var lastSubstring = function(s) {

    // Potential Solution A. Trie + Post-Order Traversal
    // 1. Create Trie with "" as root and all possible substrings as paths.
    // 2. Get right-most path of Trie.
    // --- Super Suboptimal ---

    // Best Solution B. Three Pointers

    let finalStringIndex = 0 // index of final substring.
    let lookAheadIndex = 1 // index of lookahead possible substring.
    let iOffsetLookAhead = 0 // moving offset to compare finalStringIndex & lookAheadIndex.
  
    // While we're still looking ahead by a certain offset...
    while (lookAheadIndex + iOffsetLookAhead < s.length) {
      // If our final string + offset is less than the look ahead string + offset...
      if (s[finalStringIndex + iOffsetLookAhead] < s[lookAheadIndex + iOffsetLookAhead]) {
        // The final string index is the max value between...
        finalStringIndex = Math.max(
          finalStringIndex + iOffsetLookAhead + 1,  // (final string index + offset + 1)
          lookAheadIndex                            // or the current look ahead index
        )
        lookAheadIndex = finalStringIndex + 1       // Start looking ahead starting from the final string index + 1
        iOffsetLookAhead = 0                        // Reset the final string index to look ahead index offset
      }
  
      // If the final string index + offset is the same as our look ahead index + offset...
      if (s[finalStringIndex + iOffsetLookAhead] === s[lookAheadIndex + iOffsetLookAhead]) {
        // Increase the offset by 1
        iOffsetLookAhead += 1
      }
  
      // If the final string index + offset is greater than our look ahead index + offset...
      if (s[finalStringIndex + iOffsetLookAhead] > s[lookAheadIndex + iOffsetLookAhead]) {
        // Set our look ahead index to the current look ahead index + offset + 1
        lookAheadIndex = lookAheadIndex + iOffsetLookAhead + 1
        // And reset the final string index to look ahead index offset
        iOffsetLookAhead = 0
      }
    }
  
    // Now that we have the substring index of the final string, return that substring!
    return s.substring(i)
};