



const findMedianSortedArrays = function(nums1, nums2) {
    
    let sortedFirst = nums1.sort();
    let sortedSecond = nums2.sort();

    let combinedArray = [...sortedFirst, ...sortedSecond];


    let median = 0;


    if((combinedArray.length % 2) === 0)
    {
        let x = (combinedArray.length / 2)
        let y = (combinedArray.length / 2) + 1

        median = (combinedArray[x] + combinedArray[y]) / 2
    }
    else
    {
        median = (combinedArray.length / 2)
    }

    return combinedArray;
    
}


console.log(findMedianSortedArrays([1,2], [3,4]))