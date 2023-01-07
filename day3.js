// Given a string s, find the length of the longest 
// substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substr = [];
    let maxLen = 0;
    for(let i=0; i<s.length ; i++){
        let char = s[i];
        
        if(substr.includes(char)){
            let index = substr.indexOf(char);
            substr.splice(0, index+1);
        }
        substr.push(char);

        maxLen = Math.max(maxLen, substr.length);
    }
    return maxLen;
}