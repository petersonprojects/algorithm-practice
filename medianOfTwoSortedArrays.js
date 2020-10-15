



const findMedianSortedArrays = function(nums1, nums2) {

    let combinedArray = [...nums1, ...nums2].sort(function(a, b){return a-b});

    let median = 0;
    let length = combinedArray.length;

    console.log(combinedArray)

    // if there's an even number of items in the array
    if(length%2 === 0)
    {
        let firstIndex = (length / 2) - 1;
        let secondIndex = (length / 2);

        median = (combinedArray[firstIndex] + combinedArray[secondIndex]) / 2
    }
    // if theres an odd number of items in the array
    else if(length%2 === 1)
    {
        let index = length/2;
        let integer = index.toFixed(0)

        console.log(`integer: ${integer}`)


        let answer = (length - (integer))

        console.log(`index of answer: ${answer}`)

        median = combinedArray[answer]
    }

    return median;
    
}


console.log(findMedianSortedArrays([1,3,5,18,19], [2,4]))