

## Fib without recusion

# def fib(n):
    
#     arr = [0, 1]
    
#     for i in range(2, n + 1):
#         a = arr[i - 1]
#         b = arr[i - 2]
        
#         arr.append(a + b)
        
#     return  arr[n]


# result = fib(6)

# print(result)


## Fib with recursion

# def fib(n):
    
#     if(n < 2):
#         return n
    
#     return fib(n-1) + fib(n-2)


# result = fib(5)

# print(result)