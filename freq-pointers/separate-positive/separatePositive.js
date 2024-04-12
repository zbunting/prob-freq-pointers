// Add whatever parameters you deem necessary & write a docstring

//eg [2,-1,-3,6] -> [2,6,-1,-3]
//left = 0; right = 3


//initialize a left pointer at 0
//initialize a right pointer at the length of the array minus 1
//iterate while left is less than right
//if the left pointer is positive, increment it
//if the right pointer is negative, decrement it
//if the left pointer is negative and the right pointer is positive,
//switch places and then increment left and decrement right
//return the array

/** Move the positive numbers in an array to the left and the negative
 * numbers to the right
 * Input: an array of numbers
 * Output: the array sorted IN PLACE
 * Time Complexity: O(n)
 */

function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {

        if(nums[left] > 0) left++;

        if(nums[right] < 0) right--;

        if(nums[left] < 0 && nums[right] > 0) {

            [nums[left],nums[right]] = [nums[right],nums[left]];
            left++;
            right--;

        }
    }

    return nums;
}

export { separatePositive };
