/** 
 * Determine if you can use the letters and frequencies in the letter
 * string to construct a word
 * Input: 2 strings, words and letters
 * Return: boolean
 */

/*
find the letters and frequencies in letters
iterate through the characters in word
check if the character is in the letters cache
if it is, reduce the number
if it isn't or if the number is 0, return false;
if we exit the loop return true
*/

// 'aa', 'abc'
// charFreqs = {a: 1, b: 1}


function canConstructWord(word, letters) {

    function _getFreqs(letters) {
        const charFreqs = {};

        for(const char of letters) {
            charFreqs[char] = (charFreqs[char] || 0) + 1;
        }

        return charFreqs;
    }

    const charFreqs = _getFreqs(letters);

    for(const char of word) {
        if(char in charFreqs === false || charFreqs[char] === 0) return false;
        charFreqs[char]--;
    }

    return true;
}

export { canConstructWord };
