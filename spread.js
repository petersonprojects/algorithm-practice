
// simple spread

// let a, b, c, d, arr;

// a = [1, 2]
// b = [3, 4]
// c = [5, 6]
// d = 7


// arr = [...a, ...b, ...c, d]

// console.log(arr)


// push 6 to the sub array without mutating

// var c = [1,2,3,[4,5]]

// var d = [...c.slice(0,3), [...c[3], 6]]

// console.log(d)

// let arr = [1,2,3,4]

// let obj = {a:1, b:2, c:3}

// for(let el of arr){
//     console.log(el)
// }

// for(let key in obj){
//     let value = obj[key];
//     console.log(key, value)
// }

// let result = Object.values(obj)

// console.log(result)


// let nums = {
//     a: 10,
//     b: 20,
//     c: "string",
//     d: 12
// }

// Write code here

// let sumObjectValues = (obj) => {

//     let sum = 0;
//     for(let key in obj)
//     {
//         let value = obj[key]
//         if(typeof(value) === "number")
//         {
//             sum += value
//         }
//     }
//     return sum;
// }

// console.log(sumObjectValues(nums))



// let nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];


// let sumPlusMinus = (arr) => {

//     let result = {
//         plus: 0,
//         minus: 0
//     }

//     for(let val of arr)
//     {
//         val >= 0 ? result.plus += val : result.minus += val
//     }

//     return result;
// }


// using reduce

// let sumPlusMinus = arr => {
//     return arr.reduce((acc, elem) =>{
//         return (
//             {
//                 plus: elem > 0 ? acc.plus + elem : acc.plus,
//                 minus: elem < 0 ? acc.minus + elem : acc.minus
//             }
//         )
//     }, {plus: 0, minus: 0})
// }

// console.log(sumPlusMinus(nums))



