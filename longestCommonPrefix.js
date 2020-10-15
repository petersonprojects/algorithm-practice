var longestCommonPrefix = function(strs) {
    
    let result = "";
    
    for(let i = 0; i < strs.length; i++)
    {
        
        for(let j = 0; j < strs[i].length; j++)
            {
                if(strs[i][j] === strs[i+1][j])
                    {
                        result = result + strs[i][j]
                    }
                
            }

    }
    
    return result;
}