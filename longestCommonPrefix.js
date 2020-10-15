

const longestCommonPrefix = function(strs) {
    
    // the variable we are gonna push common prefixes to
    let result = "";

    if(strs.length > 0)
    {

        if(strs[0][0] === strs[1][0] && strs[1][0] === strs[2][0])
        {
            result = result + strs[0][0]
    
            if(strs[0][1] === strs [1][1] && strs [1][1] === strs[2][1])
            {
                result = result + strs[0][1]
    
                if(strs[0][2] === strs[1][2] &&  strs[1][2] === strs[2][2])
                {
                    result = result + strs[0][2]
    
                    if(strs[0][3] === strs[1][3] &&  strs[1][3] === strs[2][3])
                    {
                        result = result + strs[0][3]
                    }
                }
            }
        }

    }


    
    return result;
}

console.log(longestCommonPrefix(["prefix", "preacher", "presaved"]))