
switch (shift) {
    case "morning":
        return "R20"; // Morning shift: transport cost is R20
    case "afternoon":
        return "R10"; // Afternoon shift: transport cost is R10
    case "nightshift":
        return "free"; // Night shift: transport cost is free
    default:
        return "Invalid shift"; // Handle invalid shift input
}

console.log(transportFee('morning'), 'R20');
console.log(transportFee('afternoon'), 'R10');
console.log(transportFee('nightshift'), 'free', 'for night shift return free');