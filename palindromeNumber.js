// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.


 //@param {number} x
 //@return {boolean}

 // space-time complexity is linear -- O(n) I believe

const isPalindrome = function(x) {
    
    // converting number parameter to a string
    let stringVersion = x.toString();

    // converting string to an array (not sure if necessary)
    // this just makes it easier to visualize and test in my opinion
    let arrayNums = stringVersion.split('');

    // creating a reversed version of the string
    // we must use spread operator here to create a new mem address for 
    // the reversed array that we will compare later
    let reversed = [...arrayNums].reverse();

    // initializing count that will be used to increment when 
    // a match is found
    let count = 0;

    // looping through the arrays and comparing them
    // in order for it to be a palindrome it should be the same
    // forward and reverse

    for(let i = 0; i < arrayNums.length; i++)
    {

        if(arrayNums[i] === reversed[i])
        {
            count++;
        }
    }

    // if the count is the same as the length of the array,
    // that means every digit is the same as the reversed version of it
    if(count === arrayNums.length)
    {
        return true;
    }

    else
    {
        return false;
    }

}

console.log(isPalindrome(-12))