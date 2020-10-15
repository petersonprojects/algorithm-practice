

const longestCommonPrefix = function(strs) {
    
    let result = "";
    let twoDeeArray = [];
    
    strs.forEach(item => {

        let array = item.split('');
        
        twoDeeArray.push(array);

        console.log(twoDeeArray)

        // for(let i = 0; i < array.length; i++)
        // {
        //     if(array[i])
        // }
    })
    
    return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))