// Add whatever parameters you deem necessary & write a docstring

//main function pseudocode
//count the frequency of digits in the first number
//count the frequency of digits in the second number
//if the length of the frequency counters differ, return false
//otherwise loop through one of the counters
//if the key isn't in the other frequency counter or the values don't match
//for that key, then return false

//frequency counter pseudocode
//while loop while number is greater than 0
//number mod 10 will give us a digit
//number will be floor of number divided by 10
//if that digit exists in object, increment, otherwise set to 1
//return frequency of digits object

/** 
 * Checks to see if 2 numbers have the same frequency of digits
 * Inputs: 2 positive integers
 * Return: boolean
 * Time Complexity: O(n + m)
 */

function sameFrequency(num1, num2) {
    const num1Freqs = getDigitFreqs(num1);
    const num2Freqs = getDigitFreqs(num2);

    if (Object.keys(num1Freqs).length !== Object.keys(num2Freqs).length) {
        return false;
    }

    for (const num in num1Freqs) {
        if (num2Freqs[num] !== num1Freqs[num]) {
            return false;
        }
    }

    return true;
}

/** Create an object using the digits in a number as keys and the frequency
 * of each digit in the number as values
 */

function getDigitFreqs(num) {
    const freq = {};

    while (num > 0) {
        const digit = num % 10;
        num = Math.floor(num / 10);
        freq[digit] = (freq[digit] || 0) + 1;
    }

    return freq;
}

export { sameFrequency };
