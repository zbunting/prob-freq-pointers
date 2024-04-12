// set pointers at the start / end of nums
// Check if avg of nums at pointers === target
// While start less than end
// If result === target, return true
// If result greater than target, decrement the end pointer
// If result < target, increment the start pointer
// return false

// [1, 2, 3], 2.5 => true
// [3, 3, 6, 12, 19], 8 => false

/**
 * Determine wheter the average of any pair of nums in nums array is equal
 * to target number.
 * Inputs: SORTED nums, targetAvg
 * Returns: boolean
 * Time Complexity: O(n)
 */

function averagePair(nums, targetAvg) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const currAvg = (nums[start] + nums[end]) / 2;

        if (currAvg === targetAvg) return true;

        if (currAvg > targetAvg) {
            end--;
        } else {
            start++;
        }
    }

    return false;
}

export { averagePair };
