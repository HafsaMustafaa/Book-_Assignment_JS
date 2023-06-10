//---------------------QUESTIION NO 01----------------------------


//Write a program that takes a character (number or string) 
//in a variable & checks whether the given input is a 
//number, uppercase letter or lower case letter. (Hint: ASCII 
//codes:- A=65, Z=90, a=97, z=122).

//     var insan = prompt("Enter a character:");

//if (insan(character)){
 //    alert("The character is a number.");
 //}
//else if (character>= "A" && character<="Z"){
  //   alert("The character is an uppercase letter.");
 //}
// else if (character>= "a" && character<="z"){
   //  alert("The letter is a lowercase letter.");
 //}
 //else {
   //  alert("ERROR");
 //}


 //----------------------------QUESTION NO 02----------------------


 //Write a JavaScript program that accept two integers anddisplay the larger. Also show if the two integers are equal.

 //var firstNumber = prompt("Enter your 1st number");
 //var secondNumber = prompt("Enter your 2nd number");
//if (firstNumber>secondNumber) {                              
  //  alert("1st number" + firstNumber + "smaller 2nd number" + secondNumber);
//} 
//if(firstNumber<secondNumber){
 //   alert("1st number " + firstNumber +" is smaller than 2nd number "+ secondNumber );
//}
//if(firstNumber==secondNumber){
 //   alert("1st Number " + firstNumber +" is equal to 2nd number "+ secondNumber );
//}
//else{
  //  alert("invalid numbers");

//}


//--------------------------------------Question no 03------------------------------
//Write a program that takes input a number from user & state whether the number is positive, negative or zero.

//var input = parseFloat(prompt("Enter a number:"));
//if (input > 0) {
 //   alert("The number is positive." + input);
//} else if (number < 0) {
//    alert("The number is negative." + input);
//} else {
  //  alert("The number is zero." + input);
//}


//------------------------------------------QUESTION NO 04-------------------------

//Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var character = prompt("Enter any character:");

// if (character == "a"  || character == "e"  || character == "i"  || character == "o"  || character == "u" ){
//     console.log(true);

// }

// else{
//     console.log(false);
 

//---------------------------------QUESTION NO 05---------------------------------------

// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

// var passwordofJS = prompt("Enter your password:");
// var confirmPassword = prompt("Confirm pssword:");

// if (passwordofJS == confirmPassword) {
//     alert("Correct! The password you entered matches the original password.");
// }
// else {
//     alert("Incorrect password.");
// }

// ----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------TASK 06------------------------------------------------
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
//--------------------------------------ANSWERS---------------------------------
// var greeting;
// var hour = 13;

// if (hour < 18 ){
//     greeting = "Good day.";
// }
// else{
//     greeting = "Good evening."
// }

// --------------------------------------------------------------------------------------------------------
// ---------------------------------------TASK 07 ---------------------------------------------------------
// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statement

// var time = +prompt("Enter the time in 24-hour clock format (e.g., 1900):");

// if (time>= 0000 && time<1200 ){
//     alert("Good morning!");
// }
// else if(time>= 1200 && time<1700){
//     alert("Godd afternoon!");
// }
// else if (time>= 1700 && time<2100 ){
//     alert("Godd evening!");
// }
// else if (time>= 2100 && time<= 2359){
//     alert("Good night!");
// }

// -----------------------------------------------------------------------------------------------------