//Martin Sosa

/* 1. Write a for loop to log the message “I am love making pizza pies!”
10 times to the console. */

for (i = 0; i < 10; i++){
  console.log("I love making pizza pies!");
}

/* 2 Create a variable with the name counter with the value 1. Write a for loop
to count from 1 to 100 by adding 1 to the variable counter at the end of the
loop. Display what the current value of the variable counter is within the loop.
*/

for (counter = 1; counter < 101; counter++){
  console.log(counter);
}

/* 3. Create a variable that stores an array of 5 words. Each word should a
particular type of fruit. (e.g [“banana”, “apple”, …] Write a for loop to
display every element of the array in order.

Challenge: Try doing some research to find a different way to loop through
the array.
Bonus Challenge: Try displaying every element of the array using a while loop.
*/

var words = ["banana", "apple", "pear", "peach", "grape"];

for(i = 0; i < words.length; i++){
  console.log(words[i]);
}

// Challenge
for (x in words) {
  console.log(words[x]);
}

// Bonus Challenge
var whileCounter = 0;
while (whileCounter < 5){
  console.log(words[whileCounter]);
  whileCounter++;
}

/* 4. Write a while loop to prompt the user to guess a word and exit
the while loop only if the word entered is “NYCDA”. */

var guessWord;

while(guessWord != "NYCDA"){
  guessWord = window.prompt("Guess the word!", "word");
}
