

const longestCommonPrefix = function(strs) {
    
    let result = "";
    let twoDeeArray = [];
    
    strs.forEach(item => {

        let array = item.split('');

        twoDeeArray.push(array);

        console.log(twoDeeArray)

        for(let i = 0; i < array.length; i++)
        {
            for(let j = [0] j < twoDeeArray.length; j++)
            {
                if(twoDeeArray[i][j] === twoDeeArray[i+1][j])
                {
                    result = result + twoDeeArray[i][j]
                    console.log(result)
                }
            }
        }
    })
    
    return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))