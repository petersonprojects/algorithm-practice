// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.


 //@param {number} x
 //@return {boolean}

const isPalindrome = function(x) {
    
    // converting number to a string
    let stringVersion = x.toString();

    // converting string to an array (not sure if necessary)
    let arrayNums = stringVersion.split('');

    // creating a reversed version of the string
    let reversed = [...arrayNums].reverse();

    let count = 0;

    console.log(arrayNums)
    console.log(reversed)

    // looping through the arrays and comparing them
    // in order for it to be a palindrome it should be the same
    // in forward and in reverse

    for(let i = 0; i < arrayNums.length; i++)
    {

        if(arrayNums[i] === reversed[i])
        {
            count++;
        }
    }

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