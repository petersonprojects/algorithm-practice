/*

For example, 2 is written as II in Roman numeral,
just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest
from left to right. However, the numeral for four is not IIII. 
Instead, the number four is written as IV. Because the one is 
before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.


Given a roman numeral, convert it to an integer.

*/

const romanToInt = function(s) {
    
    // gonna start by making sure I convert this to capital letters

    let romanNumerals = s.toUpperCase();

    let arrayNumerals = romanNumerals.split('');

    let total = 0;

    for(let i = 0; i < arrayNumerals.length; i++)
    {
        if(arrayNumerals[i] === 'M')
        {
            total = total + 1000
        }
        if(arrayNumerals[i] === 'D')
        {
            total = total + 500
        }
        if(arrayNumerals[i] === 'C')
        {
            total = total + 100
        }
        if(arrayNumerals[i] === 'L')
        {
            total = total + 50
        }
        if(arrayNumerals[i] === 'X')
        {
            total = total + 10;
        }
        if(arrayNumerals[i] === 'V')
        {
            total = total + 5
        }
        if(arrayNumerals[i] === 'I')
        {
            total = total + 1;
        }


        //subtraction cases

        if(arrayNumerals[i] === 'X' && arrayNumerals[i-1] === 'I' && arrayNumerals[i-1])
        {
            total = total - 1;

            if(arrayNumerals[i] === 'X' 

                && arrayNumerals[i-1] === "I" 
                && arrayNumerals[i-2] === "I" 

                && arrayNumerals[i-1] 
                && arrayNumerals[i-2])
            {
                total = total - 1;
            }
        }
        

        // just need a bunch of test cases
        // L, C, D, M and place I, V, X, and C before V, X, C, and M cases
    }

    return total;
}


console.log(romanToInt('xvIII')) // output should be 18