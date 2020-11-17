
## FUNCTION EXERCISES - MEDIUM 1, 2


# 1.

# Write a function "smallest" that accepts a List of numbers as an argument.
# It should return the smallest number in the List.


# def smallest(numList):
    
#     smallest = numList[0]
    
#     for number in numList:
#         if(number < smallest):
#             smallest = number
    
#     return smallest

# def smallest(numList):
    
#     numList.sort()
#     return numList[0]



# result = smallest(numberList)

# print(f'Smallest number in the list is: {result}')










#2. 
# Write a function "largest" that accepts a List of numbers as an argument.
# It should return the largest number in the List.


numberList = [2000, 5 , 10, 15000 , 20, 25, 30]

def largest(numList):
    
    largest = numList[0]

    for number in numList:
        if(number > largest):
            largest = number

    return largest


result = largest(numberList)

print(f'Largest number in the list is: {result}')