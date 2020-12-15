

// cache to reduce run-time

// const isUnique = (arr) => {

//     let result = true;

//     let cache = {};

//     for (let i = 0; i < arr.length; i++) {

//         // arr[i]
//         // if the number has been cached... its not unqiue
//         if(cache[arr[i]])
//         {
//             result = false;
//         }
//         // add it to the cache
//         else
//         {
//             cache[arr[i]] = true;
//         }

//     }

//     return result;
// };


// console.log(isUnique([1,2,3]))


// const uniqSort = (arr) => {

//     let cache = {};

//     let result = [];

//     for(let i = 0; i < arr.length; i++)
//     {
//         // if there is not a value of arr[i] in the cache then add it
//         if(!cache[arr[i]])
//         {
//             result.push(arr[i])
//             cache[arr[i]] = true;
//         }
//     }

//     result.sort((a, b) => a - b)

//     return result;

// }

// let arr = [1, 5, 2, 10, 1, 1, 2, 2, 5, 5];

// console.log(uniqSort(arr));


// Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters im the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same lower case



// const isAnagram = (str1, str2) => {

//     // normalizing the text
//     let toLower1 = str1.toLowerCase();
//     let toLower2 = str2.toLowerCase();
//     let phrase1 = toLower1.replace(/[^\w]/g, "")
//     let phrase2 = toLower2.replace(/[^\w]/g, "")

//     let cache = {}
    
//     // creating the dict for the first string
//     for(let letter of phrase1)
//     {
//         // if the letter already exists, increment the count
//         if(cache[letter])
//         {
//             cache[letter] += 1;
//         }
//         // if it's not in the cache.. then add it, and initalize count to 1
//         else
//         {
//             cache[letter] = 1;
//         }
//     }

//     // do the same for the second phrase, but subtract
//     for(let letter of phrase2)
//     {
//         if(cache[letter])
//         {
//             cache[letter] -= 1;
//         }
//     }

//     let count = 0;

//     for(let key in cache)
//     {
//         if(cache[key] === 0)
//         {
//             count++;
//         }
//     }

//     if(count === Object.keys(cache).length)
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }

// }

// console.log(isAnagram("Dormitory", "Dirty room"))
// console.log(isAnagram("Doormitory", "Dirty room"))



// must be global in this situation
const cache = {};

const memoTimes10 = (n) => {

    if(n in cache)
    {
        console.log(`Fetching ${n} from cache`)
    }
    else
    {
        // store new value in cache
        cache[n] = n * 10
        // message 
        console.log(`Calculating results..`)
        // return n * 10
    }

    return cache[n]

}


console.log(memoTimes10(9))
console.log(memoTimes10(9))