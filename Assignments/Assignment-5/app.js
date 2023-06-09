//-------------------------------------QUESTION NO 01-------------------------


//Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//var num1 = "3";
//var num2 = "5";
//var sum = parseInt(num1) + parseInt(num2);
//document.write("Sum of 3 and 5 is 8");



//-----------------------------QUESTION NO 02------------------------------------------


//Repeat task1 for subtraction, multiplication, division & modulus.
//3. Do the following using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value
//after variable declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial value: 5”.
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value after increment is: 6”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value after addition is: 13”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Valueafter decrement is: 12”.
//k. Show the remainder after dividing the variable’s value by 3. 
//l. Output : “The remainder is : 0”.



///----------------------------------------------------------ANSWER---------------------------


//var userInput1 = +prompt("Please Enter first number");
//var userInput2 = +prompt("Please Enter second number");

//var subtraction = userInput1 - userInput2;

//document.write("the subtraction of " + userInput1+ " and " + userInput2 + " is " + subtraction);

//---------------------------------------------------------------------------
//var userInput1 = +prompt("Please Enter first number");
//var userInput2 = +prompt("Please Enter second number");

//var multiplication = userInput1 * userInput2;

//document.write("the multiplication of " + userInput1+ " and " + userInput2 + " is " + multiplication);

//--------------------------------------------------------------------

//var userInput1 = +prompt("Please Enter first number");
//var userInput2 = +prompt("Please Enter second number");

//var division = userInput1 / userInput2;

//document.write("the division of " + userInput1+ " and " + userInput2 + " is " + division);

//---------------------------------------------------------------------
//var userInput1 = +prompt("Please Enter first number");
//var userInput2 = +prompt("Please Enter second number");

//var modulus = userInput1 % userInput2;
//document.write("the modulus of " + userInput1+ " and " + userInput2 + " is " + modulus);

// -------------------------------QUESTION NO 04------------------------------

//Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 
//tickets to a movie. Example output:

//var movieticket_price =600;
//var cost_of_five_movietickets = ticket_price * 5;


//document.write("total cost to buy 5 movieticket is " + cost_of_five_movietickets + "3000");



//-----------------------------QUESTION NO 05-------------------

//Write a script to display multiplication table of any number in your browser. E.g

//var num = +prompt("Enter the number of table");
//document.write("<br>")
//document.write("Table of " + num);

//for (let i = 1; i < 11; i++) {
//    document.write(num + " X " + i +" = "  + num*i + "<br>" );
//  }


//-----------------------------------QUESTION NO 06------------------------


//The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.

//var celcuis = 25°C;
//var farenheit= (celcuis * 9/4 ) +77;
//document.write(celcuis + "C is " + farenheit +"F" + "<hr/>");


//var farenheit = 70°;
//var celcuis= (farenheit - 32) * 5/9;
//document.write(farenheit + "F is " + celcuis +"C");




//------------------------------QUESTION NO 07------------------------------



//Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//Compute the total cost & show the receipt in your browser



//var item1 = 650;
//var item2 = 100;

//var quantity1 = 4;
//var quantity2 = 5;

//var shipment_charges = 100;

//var price1= item1 * quantity1;
//var price2= item2 * quantity2;

//var total_cost = price1 + price2 + shipment_charges;


//document.write("<h1> Shopping Cart </h1>");
//document.write("Price of item 1 is " + item1 + "<br>");
//document.write("quantity of item 1 is " + quantity1 + "<br>");
//document.write("Price of item 2 is " + item2 + "<br>");
//document.write("quantity of item 2 is " + quantity2 + "<br>");

//document.write("shipment charges " + shipment_charges + "<br>");
//document.write("Total cost of your order is " +  total_cost);


//----------------------------------------QUESTION N0 08-----------------------------------------


//Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
 
//var total_marks = "980";
//var obtained_marks = "804";

//var percentage = (804/980)*100;

//document.write("<h1>Mark Sheet</h1>")
//document.write("total_marks" + 980 + "<br>");
//document.write("obtained_marks" + 804 + "<br>");
//document.write("percentage" + percentage + "%");


//------------------------------QUESTION N0 09----------------------------------------


//Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
//Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
//and 1 Saudi Riyal = 28 Pakistani Rupee)

//var totalcurrency = (104.80*10) + (28*22);

//document.write("<h1>Currency In PKR</h1>");
//document.write("<br>");
//document.write("Total currency is PKR " + totalcurrency);



//-------------------------Question no 10------------------------------------------

//Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

//var num = 5;
//var number = (((num +5)*10)/2);

//document.write(number);

//------------------------------QUESTION NO 11------------------------------

//11. The Age Calculator: Forgot how old someone is? Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN


//var current_year = 2023;
//var birth_year= 2003;
//var age=current_year-birth_year;
//document.write("<h1>Age Calculator</h1>");
//document.write("current_year:2023");

//document.write("birth_year:2003");


//document.write("Your age is : "+ age);

//--------------------------------------------QUESTION NO 12------------------


//12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and
//output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The 
//area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

//var radius = 20;
//document.write("the radius of a circle : " + radius + "<br>");


//var circumference = 2*(3.142)*(radius);
//document.write("the circumference is : " + circumference + "<br>");


//var area=3.142*(radius)*(radius);
//document.write("the area is : " + area );



// ------------------------------------QUESTION NO 13-------------------------------

//The Lifetime Supply Calculator: Ever wonder how
//much a “lifetime supply” of your favorite snack is? 
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of
//your life.
//Output the result to the screen like so: “You will need 


//var fav_snack= "noodles";
//var current_age=23;
//var estimated_maximum_age=65;
//var amount_per_day=3;
//var total_age=(65+23);
//var days=total_age*365;
//var calculation = days*3;


//document.write("Favourate snack: " + fav_snack + "<br>");
//document.write("current_age: " + current_age + "<br>");
//document.write("Extimated_maximun_age: " + estimated_maximum_age + "<br>");
//document.write("Amount of snack per day: " + amount_per_day + "<br>")


//document.write("You will need " + calculation + " to last you until the ripe old age of 65");