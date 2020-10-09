

const findLongestSubString = (s) => {


    // using a set data structure because they do not allow duplicate values
    let set = new Set();

    //pointers
    let left = 0;
    let right = 0;

    // initialize max length of the substring
    let maxLength = 0;

    while(right < s.length)
    {
        // if it does not already contain the letter we are pointing at
        if(!set.has(s.charAt(right)))
        {
            set.add(s.charAt(right));
            maxLength = Math.max(maxLength, set.size)
            right++;
        }
        // if the set already contains the letter we are pointing at, delete the first letter and move the left pointer up
        else
        {
            set.delete(s.charAt(left))
            left++;
        }
    }
    
    return maxLength;

}

console.log(findLongestSubString('thisishowwedoit')); //6