
# Write a program that accepts a number from a user.  
# Test the number to see if it is an even number or an odd number. 
# Print to the screen “This is an even number”
# or “This is an odd number” based on the result.

            # number = int(input("Enter a number: "))

            # if(number % 2 == 0):
            #     print(f"{number} is an even number.")
                
            # if(number % 2 == 1):
            #     print(f"{number} is an odd number.")
            
# baseLength = int(input("Enter triangle base size: "))
# count = 1

# while (count <= baseLength):
#     print("*"*(count))
#     count += 1


## reverse a string using recursion

def revstr(a):
    
    if len(a) <= 1:
        return a
    
    return revstr(a[1:]) + a[0]


result = revstr("hi my name is soup")
print(result)

