

# SMALL


# Madlib


# def madLib(name, subject):
#     return f'{name}\'s favorite subject is {subject}.'

# myString = madLib("Micah", "Recess")

# print(myString)


# Celcius to Fahrenheit

# def c_to_f(temperature_c):
#     return (temperature_c * (9/5)) + 32

# result = c_to_f(35)

# print(result)

#F to C

# def f_to_c(temperature_f):
#     return (temperature_f - 32) * (5/9)

# result2 = f_to_c(95)

# print(result2)

# is_even

def is_even(number):

    if(number % 2 == 0):
        return True
    else:
        return False
    
    
# print(is_even(103))


# is_odd

# def isOdd(number):

#     if(is_even(number) == False):
#         return True
#     else:
#         return False
    
# print(isOdd(12))

# only_evens

# def only_evens(numList):
    
#     temp = []
#     for item in numList:
#         if(is_even(item) == True):
#             temp.append(item)
            
#     return temp


# evensOnly = only_evens([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 20, 23, 40])

# print(evensOnly)

# only_odds

# def only_odds(numList):
    
#     temp = []
#     for item in numList:
#         if(is_even(item) == False):
#             temp.append(item)
            
#     return temp


# oddsOnly = only_odds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 20, 23, 40])

# print(oddsOnly)




####   M E D I U M




# def smallest(numList):
#     numList.sort()
#     return numList[0]

# numberList = [-2000, 5 , 10, -15000 , 20, 25, 30]

# result = smallest(numberList)

# print(f'Smallest number in the list is: {result}')

# def largest(numList):
#     numList.sort()
#     length = len(numList)
#     return numList[length-1]

# numberList = [-2000, 5 , 10, -15000 , 20, 25, 30]

# result = largest(numberList)

# print(f'Largest number in the list is: {result}')


# def shortest(stringList):
#     temp = len(stringList[0])
#     for val in stringList:
#         if(len(val) < temp):
#             shortString = val
#     return shortString

# strings = ["these", "are", "some", "example", "strings", "and", "should", "return", "hi"]
# result = shortest(strings)
# print(f'Shortest string in the list is: {result}')


# def longest(stringList):
#     temp = len(stringList[0])
#     for val in stringList:
#         if(len(val) > temp):
#             longString = val
#     return longString

# strings = ["these", "are", "some", "example", "strings", "and","it", "should", "return", "oogabooga"]
# result = longest(strings)
# print(f'Longest string in the list is: {result}')





### L A R G E


# Write a function move that accepts three arguments:

# board a 2-dimensional array that represents a 3x3 tic-tac-toe board
# location a 2-item tuple that specifies an cell on the board
# player a String, either "X" or "Y"
# Return a copy of the board with the player String placed at the location.

# Throw an error if:

# The board is the wrong size
# The location is already occupied by a player
# The location is invalid
# The player String is something other than "X" or "Y"

board_state =  [
    
                    (0,0),(0,1),(0,2),
                    (1,0),(1,1),(1,2),
                    (2,0),(2,1),(2,2)
                
                ]

def move(board_state, cell_to_move, player_string):

    if(len(board_state) != 9):
        print("Board wrong size")
    
    else:
        for x in range(len(board_state)):
            if(board_state[x] == cell_to_move):
                board_state[x] = player_string
        
    return board_state





move(board_state, (0,0), "X")
move(board_state, (0,1), "O")
move(board_state, (0,1), "X")

print(board_state)