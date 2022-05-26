/**
 * 
 * @param {*} number_array the given array of numbers
 * @param {*} target_sum is the target value that we are looking for
 * @returns a print of the entire array of individual values as an array
 */
exports.sumPairs = function(number_array, target_sum) {
    //Initialize variables for later usage
    nums = []
    answer_array = []
    //Let's loop through the given array of numbers
    for (let i = 0; i < number_array.length; i++) {
        //We get the difference of the target and current number being evaluated
        const potential_match = target_sum - number_array[i]
        //If the difference value is in the temporary array then
        if (nums.includes(potential_match)) {
            //Add the two values that give us the match
            answer_array.push([number_array[i], potential_match])
        }
        //The difference is not present in the array
        else {
            //Add the number to the array for later checking
            nums.push(number_array[i])
        }
    }
    //Return the answer array of numbers
    return console.log(answer_array)
};
