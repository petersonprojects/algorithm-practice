
# If you get stuck... look up "kendrick lamar swimming pools lyrics"


def kendrick(lyric):
    
    if(lyric == 'pour'):
        return "drank"
    elif(lyric == 'head shot'):
        return "drank"
    elif(lyric == 'sit down'):
        return "drank"
    elif(lyric == 'stand up'):
        return "drank"
    elif(lyric == 'pass out'):
        return "drank"
    elif(lyric == 'wake up'):
        return "drank"
    elif(lyric == 'faded'):
        return "drank"
    else:
        return "Oh no! That's not the lyric. \n Run the file again!"

status = ""
points = 0
answers_submitted = []

while(status != "Oh no! That's not the lyric. \n Run the file again!"):
    
    userInput = input("Enter all the lyrics correctly to win: ").lower()
    
    status = kendrick(userInput)
    
    if(status == "drank" and (userInput not in answers_submitted)):
        answers_submitted.append(userInput)
        points += 1
        
    print(status)
    
    if(points == 7):
        print("""

                \n\n\n
                
                **********************************************
                
                Congratulations! You are a true Kendrick fan.
                
                **********************************************
                
                \n\n
                
            """)
        break

