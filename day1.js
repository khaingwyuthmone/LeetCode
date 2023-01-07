// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output = [];
    for(let i=0; i<nums.length; i++){
        let subtract = target-nums[i];
        let index = nums.lastIndexOf(subtract);
        if(index > 0 && index != i){
            output.push(index);
            output.push(i);
            return output;
        }
    }
};
