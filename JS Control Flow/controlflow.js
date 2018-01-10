//Martin Sosa

/*  1. Prompt the user for their name then store this is a variable. Write an if
statement that checks to see if this variable is equal to Abraham Lincoln. If it
 does, then alert the text “Four score and seven years ago!” to the screen.*/

var name;
name = window.prompt("What is your name?","Martin");
if (name == "Abraham Lincoln"){
  alert("Four score and seven years ago!");
}

/* 2. Prompt the user for a number that is greater than 22 and store this
as a variable. Write an if statement that checks to see if this variable is
greater than 22. If it is then it should alert “This number is greater than
22” to the screen. */

var greater_than_twenty_two;

greater_than_twenty_two = window.prompt("Write a number greater than 22!", 23);
if (greater_than_twenty_two > 22){
  alert("This number is greater than 22");
}

/* 3. Prompt the user for a number that is greater than 100 but less
than 2000 and store this as a variable. Write an if statement that checks
to see if this variable is greater than 100 and less than 2000. If it is then
it should alert “You are amazingly correct!” to the screen. If it is not then
it should alert “Awww, it looks that number is not correct…. Try again!” to
the screen. */

var over_hundred_under_two_thousand;

over_hundred_under_two_thousand = window.prompt("Write a number between 100 and 2000!", 101);
if(over_hundred_under_two_thousand > 100 && over_hundred_under_two_thousand < 2000){
  alert("You are amazingly correct!");
}
else
  alert("Awww, it looks like that number is not correct... Try again!");

/* 4. Prompt the user to choose a number between 1 and 5 and store this in a
variable. Write an if statement that checks to see if the variable is either 1
or 2 and if so it should alert “You have just won a car!”. Write another if
statement that checks to see if the variable is between 3 and 4 and if so it
should alert “You have just won a gallon of milk!”. Lastly, write another if
statement to check if the variable is equal to 5 and if so it should alert
“Awww, sorry… it seems like you didn’t choose the right number… No worries!
Try again!”.  */

var between_one_and_five;

between_one_and_five = window.prompt("Write a number between 1 and 5!" , 2);
if(between_one_and_five == 1 || between_one_and_five == 2){
  alert("You have just won a car!");
}
else if(between_one_and_five > 3 && between_one_and_five < 4){
  alert("You have just won a gallon of milk!");
}
else if(between_one_and_five == 5){
  alert("Awww, sorry... it seems like you didn't choose the right number... No worries! Try again!");
}
