//eg ['x', 'y', 'z'], [1, 2]
//{x: 1, y: 2, z: null}

//eg ['a', 'b', 'c'], [1, 2, 3, 4]
//{a: 1, b: 2, c: 3}

//if there are more values than keys, ignore
//loop through the keys
//look at the first item of each array and turn those into key-value pairs
//in the object
//check if there is no value at that spot, substitute null
//return the object

/**
 * Take 2 arrays and make a object from them
 * Input: array of keys and an array of values
 * Return: object made with the keys and values from the arrays
 * Time Complexity: O(n)
 */

function twoArrayObject(keys, vals) {
    const object = {};

    for (let i = 0; i < keys.length; i++) {
        if (vals[i] === undefined) {
            object[keys[i]] = null;
        } else {
            object[keys[i]] = vals[i];
        }
    }

    return object;
}

export { twoArrayObject };
