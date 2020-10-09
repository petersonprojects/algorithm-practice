// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.


 //@param {number} x
 //@return {boolean}

const isPalindrome = function(x) {
    
    let stringVersion = x.toString();
    let arrayNums = stringVersion.split('');
    let reversed = arrayNums.reverse();

    let count = 0;

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

    // if(arrayNums.length % 2 !== 0)
    // {
    //     return false;
    // }

    // else
    // {


    // }


    console.log(reversed)


}

console.log(isPalindrome(21))