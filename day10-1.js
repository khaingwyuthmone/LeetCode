
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let wordArr = s ? s.split(' ') : [];
    if(pattern.length != wordArr.length){
        return false;
    }
    let wordMap = {};
    for(let i=0; i<pattern.length; i++){
        let char = pattern[i];
        let word = wordArr[i];
        if(wordMap[char]){
            if(wordMap[char] != word){
                return false;
            }
        }else{
            if(Object.values(wordMap).includes(word)){
                return false;
            }
            wordMap[char] = word;
        }
    }
    return true;
};