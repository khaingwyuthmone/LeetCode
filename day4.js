// Given an integer x, return true if x is a 
// palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = ''+x;
    let half = Math.floor(str.length/2);
    let length = str.length - 1;

        
        for(let i=half; i<str.length; i++){
            for(let j= length-i ; j>=length-i ; j--){
                if(!(str[i] == str[j])){
                    return false;
                }
            }
        }
        
        return true;
    
};