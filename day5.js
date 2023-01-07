// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let combined_array = [...nums1, ...nums2];
    console.log("Combined Array", combined_array);

    let sorted_array = combined_array.sort((a,b) => a-b);
    console.log("Sorted Array :", sorted_array)

    let midpoint = Math.floor(sorted_array.length /2);
    let median = sorted_array.length % 2 === 1 ? 
                    sorted_array[midpoint] :  
                    (sorted_array[midpoint - 1] + sorted_array[midpoint]) / 2;
    return median;
};