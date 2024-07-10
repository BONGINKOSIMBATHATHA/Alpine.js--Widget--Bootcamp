
    // Split the projected usage string into individual actions
    var actions = projectedUsage.split(',');

    // Initialize variables to keep track of total cost and remaining airtime
    var totalCost = 0;

    // Calculate the total cost based on the type of action
    for (var i = 0; i < actions.length; i++) {
        if (actions[i] === 'call') {
            totalCost += 1.88;
        } else if (actions[i] === 'data') {
            totalCost += 12;
        } else if (actions[i] === 'sms') {
            totalCost += 0.75;
        }
    }

    // Calculate the remaining airtime
    var remainingAirtime = availableAirtime - totalCost;// Ensure remaining airtime is non-negative
    if (remainingAirtime < 0) {
        remainingAirtime = 0;
    }

    // Return the remaining airtime rounded to 2 decimal places
    return "R" + remainingAirtime.toFixed(2);


// Example usage:
var projectedUsage = 'call,call,call,data,sms,sms,call,data';
var availableAirtime = 50;
console.log(enoughAirtime(projectedUsage, availableAirtime)); // Output: R16.98
  
  