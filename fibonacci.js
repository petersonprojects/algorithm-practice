
// fast fib

// n is a 1-based number in the fib sequence. the first fibbonaci(1)
// number in the fib array is 0

let fibonacci = (n) => {


    let arr = [0, 1];

    if(n <= 0)
    {
        return "Parameter must be an integer >= 1"
    }

    for(let i = 2; i < n+1; i++)
    {
        let a = arr[i-1]
        let b = arr[i-2]

        arr.push(a + b)
    }

    return arr[n-1]
}

let result = fibonacci(0)

console.log(result)