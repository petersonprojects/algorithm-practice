
## Small

## 1 Sum the numbers

# numList = [1,2,3,4,5,6,7]
# index = 0
# sum = sum(numList)   
# print(f"Sum: {sum}")


## 2 Largest number

# numList = [89,2,17000,105,512,74,7,600]

# numList.sort()
# length = len(numList)
# print(f'Largest number in the list is: {numList[length-1]}')

## 3 Smallest number

# numList = [89,2,17000,105,512,74,7,600]

# numList.sort()

# print(f'Smallest number in the list is: {numList[0]}')

## 4 Even numbers

# num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,100200,12347]
# length = len(num)

# for x in range(length):
#     if num[x] % 2 == 0:
#         print(num[x])
        

## 5 Positive numbers

# nums = [-10069,-5,-2,-1,0,1,2,5]
# length = len(nums)

# for x in range(length):
#     if nums[x] < 0:
#         print(nums[x])
        

## 6 Positive Numbers 2

# nums = [-10069,-5,-2,-1,0,1,2,5,200,25000]
# length = len(nums)
# posNums = []

# for x in range(length):
#     if nums[x] > 0:
#         posNums.append(nums[x])
        
# print(posNums)

## 7 Multiply a list

# nums = [5,10,15,20,25,30]
# length = len(nums)
# factor = 5
# numsMult = []

# for x in range(length):
#     numsMult.append(nums[x]*factor)

# print(numsMult)

## 8 Reverse a string

# myString = "aManaPlanaCanalPanama"
# reversedStringList = []
# length = len(myString)

# for x in range(length):
#     reversedStringList.append(myString[length-1])
#     length = length - 1


# result = ''.join(reversedStringList) ## does not mutate

# print(result)



## Medium Probs

# Multiply Vectors

# listOne = [2,4,5]
# listTwo = [2,3,6]

# length = 3

# multipliedList = []

# for x in range(length):
#     multipliedList.append(listOne[x]*listTwo[x])
    
# print(multipliedList)

## Matrix addition 2

# a = [ [1,3], [2,4], [69,70]]
# b = [ [5,2], [1,0], [100,45] ]

# i_index = 0
# o_index = 0

# while o_index < len(a):
#     while i_index < len(a[o_index]):
#         newNum = a[o_index][i_index] + b[o_index][i_index]
#         print(f'{newNum}')
#         i_index += 1
#     i_index = 0
#     o_index += 1

## De-dup

# myClass = [
#             "Veronica", "Jordan", "Micah",
#             "Ally", "Andrea", "Kanny", "Adam",
#             "Jacob", "Layne", "Claude", "Matthew C",
#             "Michael", "Zach", "Matthew R", "Ian", "Cedael", "Kim",
#             "Susan", "Joe", "Rick", "Rick" "Matt"
#         ]

# mySet = set(myClass)

# print(mySet)

## Leetspeak

# myString = "I am a leet programmer".lower()

# myLeetSpeak = ""

# length = len(myString)

# for x in range(length):
    
#     if(myString[x] == 'a'):
#         myLeetSpeak = myLeetSpeak + '4'
#     elif(myString[x] == 'i'):
#         myLeetSpeak = myLeetSpeak + '1'
#     elif(myString[x] == 'e'):
#         myLeetSpeak = myLeetSpeak + '3'
#     elif(myString[x] == 'g'):
#         myLeetSpeak = myLeetSpeak + '6'
#     elif(myString[x] == 'o'):
#         myLeetSpeak = myLeetSpeak + '0'
#     elif(myString[x] == 's'):
#         myLeetSpeak = myLeetSpeak + '5'
#     elif(myString[x] == 't'):
#         myLeetSpeak = myLeetSpeak + '7'
#     else:
#         myLeetSpeak = myLeetSpeak + myString[x]
        
# print(myLeetSpeak)

## Long long vowels

# myWord = "cheese".lower()

# result = ""

# for x in range(len(myWord)):
    
#     if(myWord[x] == 'o' and myWord[x+1] == 'o'):
#         result = result + 'oooo'
#     elif(myWord[x] == 'e' and myWord[x+1] == 'e'):
#         result = result + 'eeee'
#     else:
#         result = result + myWord[x]

# print(result)

## Caesar Cipher

alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
            'x', 'y', 'z']

shiftFactor = 13

myString = "lbh zhfg hayrnea jung lbh unir yrnearq"

lengthString = len(myString)
alphabetLength = len(alphabet)

cipher = ""

for x in range(lengthString):
    
    temp = myString[x]
    
    if (temp == ' '):
        cipher = cipher + ' '
    
    for y in range(alphabetLength):
        
        if(temp == alphabet[y]):
            
            if(y + shiftFactor > 25):
                newIndex = ((y + shiftFactor) % 25) - 1
            else:
                newIndex = y + shiftFactor
                
            cipher = cipher + alphabet[newIndex]
            
            
print(cipher)
