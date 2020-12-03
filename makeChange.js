

// return the smallest number of coins used to make change for a cent value
let calcCoins = (amount) => {
    
    let count = 0;

    while(amount > 0)
    {

        // quarters
        if(amount / 25 >= 1)
        {
            amount = amount - 25;
            count++;
            continue;
        }

        // dimes
        if(amount / 10 >= 1)
        {
            amount = amount  - 10;
            count++;
            continue;
        }

        // nickels
        if(amount / 5 >= 1)
        {
            amount = amount  - 5;
            count++;
            continue;
        }

        // pennies
        if(amount % 5 > 0)
        {
            count = count + (amount % 5)
            amount = 0
        }
        else
        {
            break;
        }
    }

    return count;

}

console.log(calcCoins(99));