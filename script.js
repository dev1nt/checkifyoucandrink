// define age variable and sends a prompt with a question to the user. 
var age = prompt("What is your age?");
// if statement to check if the users age is 21.
if (Number(age) === 21){
// this alert will give a response to the user telling them that they're now eligible to drink.
    alert("You're Now Legal to drink anywhere.");
// this else if checks if user is less than 21.
} else if (Number(age) < 21) {
// this alert will give a response to the user telling them that they're not eligible to drink.
    alert("You're not legal to drink anywhere.");
// this will close your window after you hit ok.
    window.close(); 
// this else if checks if user is over 21.
} else if (Number(age) > 21) {
// this alert will give a response to the user telling them that they're eligible to drink.
    alert("You're legal to drink anywhere.");
} 
