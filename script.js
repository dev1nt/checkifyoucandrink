// define function called canYouDrink
function canYouDrink () {
// do while loop will keep prompt user to enter their age.
    do {
// define age variable and sends a prompt with a question to the user.
        var age = prompt("What is your age?");
//  user will keep being prompted until a number is entered and makes this conditional true.
    } while (Number.isNaN(parseInt(age)));   
// if statement to check if the users age is 21.
    if (Number(age) === 21){
// this alert will give a response to the user telling them that they're now eligible to drink.
        alert("You're" + " NOW " + "LEGAL to drink anywhere.");
// this else if checks if user is less than 21.
    } else if (Number(age) < 21) {
// this alert will give a response to the user telling them that they're not eligible to drink.
        alert("You're" + " NOT " + "LEGAL to drink in the U.S.");
// this will close your window after you hit ok.
        window.close();
// this else if checks if user is over 21.
    } else if (Number(age) > 21) {
// this alert will give a response to the user telling them that they're eligible to drink.
        alert("You're" + " LEGAL " + "to drink anywhere.")
    }
}
canYouDrink();