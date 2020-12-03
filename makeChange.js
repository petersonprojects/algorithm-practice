

// return the smallest number of coins used to 
// make change for a cent value

let calcCoins = (amount) => {

    let count = 0;
    let coinTypes = [25, 10, 5, 1];

    while(amount > 0)
    {
        // quarters
        if((amount / coinTypes[0]) >= 1)
        {
            amount = amount - coinTypes[0];
            count++;
            continue;
        }
        // dimes
        if((amount / coinTypes[1]) >= 1)
        {
            amount = amount - coinTypes[1];
            count++;
            continue;
        }
        // nickels
        if((amount / coinTypes[2]) >= 1)
        {
            amount = amount - coinTypes[2];
            count++;
            continue;
        }
        // pennies
        if((amount % coinTypes[2]) > 0)
        {
            count = count + (amount % coinTypes[2]);
            amount = 0;
        }
    }

    return count;
}

console.log(calcCoins(99));