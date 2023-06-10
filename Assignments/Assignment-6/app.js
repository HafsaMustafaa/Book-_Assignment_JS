//----------------------------------QUESTION NO 01-------------------------------------------

//Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

//var a = 10;

   // document.write("RESULT:" + "<br>");
   // document.write("The value of a is " + a + "<br>");
   // document.write("The value of ++a is " + (++a) + "<br>");
   // document.write("Now the value of a is " + a + "<br>");
   // document.write("The value of a++ is " + (a++) + "<br>");
   // document.write("Now the value of a is " + a + "<br>");
   // document.write("The value of --a is " + (--a) + "<br>");
   // document.write("Now the value of a is " + a + "<br>");
   // document.write("The value of a-- is " + (a--) + "<br>"); 
   // document.write("Now the value of a is " + a + "<br>");


//------------------------------------question no 02-----------------------------------------------

//What will be the output in variables a, b & result after execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;


//var a = 2 , b = 1 ;
//var result = --a - --b + ++b + b--

//document.write("The value of --a is " + (--a) + "<br>");
//document.write("The value of --a - --b is " + (--a - --b) + "<br>");
//document.write("The value of --a - --b + ++b is " + ((--a - --b) + ++b ) + "<br>");
//document.write("The value of --a - --b + ++b + b-- is " + (--a - --b + ++b + b--) + "<br>")

//-----------------------------------QUESTION NO 03----------------------------------------


//03.Write a program that takes input a name from user & greet the user.


//var user = prompt("enter your name");
//document.write("<h1>welcome</h1>" + user);



//--------------------------------------QUESTioN no 05-----------------------

//Write a program to take input a number from user & 
//display it’s multiplication table on your browser. If user 
//does not enter a new number, multiplication table of 5 
//should be displayed by default.

//06 Take
//Take three subjects name from user and store them in 3 different variables.
// Total marks for each subject is 100, store it in another variable.
// Take obtained marks for first subject from user and stored it in different variable.


//function displaymultiplicationtable(number) {
 //document.write("<h2>Multiplication Table of " + number + "</h2>");
  // for (let i = 1; i <= 10; i++) {
    //document.write(number + " x " + i + " = " + (number * i) + "<br>");
     
   // }
   //}
//let userInput = prompt("Enter a number:");
  //if (userInput === "" || isNaN(userInput)) {
  //    displayMultiplicationTable(5);
  //  } else {
  //    displayMultiplicationTable(parseInt(userInput));
  //  }

//var subj1 = prompt("enter first subject name");
//var subj2 = prompt("enter second subject name");
//var subj3 = prompt("enter third subject name");
//var total_marks=300;
//var marks_subj1 = +prompt("Enter marks obtained in subject 1");
//var marks_subj2 = +prompt("Enter marks obtained in subject 2");
//var marks_subj3 = +prompt("Enter marks obtained in subject 3");
//var total_obtained_marks= marks_subject1 + marks_subject2 + marks_subject3;
//var percentage= (total_obtained_marks/total_marks)*100;




