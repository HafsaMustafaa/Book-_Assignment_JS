//--------------------------------question no 01----------------------------

//Declare an empty array using JS literal notation to storestudent names in future.

//var storestudent = [];

///-------------------------------question n0 02----------------------------


//Declare an empty array using JS object notation to storestudent names in future.

//var storestudent = [];

//------------------------------question no 03-----------------------------

//Declare and initialize a strings array

//var string = ["garlic , potato , chilli , brinjal , cabbage"];


//-----------------------------question no 04------------------------------

//Declare and initialize a numbers array.


//var num = ["1 , 2 , 9 , 5 , 8"];


//-----------------------------question no 05----------------------------

//Declare and initialize a boolean array.

//var boolean array = ["true , false , true , false , true"];


//------------------------------question no 06--------------------------

//Declare and initialize a mixed array.

//var mixedarray = ["rehana , vegetables , 44 , fruits"];


//------------------------------question no 07--------------------

//Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

  //var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

 //document.write("<h1>QUALIFICATIONS</h1>" + "<br>");
 //document.write("1)" + qualifications[0] + "<br>");
 //document.write("2)" + qualifications[1] + "<br>");
 //document.write("3)" + qualifications[2] + "<br>");
 //document.write("4)" + qualifications[3] + "<br>");
 //document.write("5)" + qualifications[4] + "<br>");
 //document.write("6)" + qualifications[5] + "<br>");
 //document.write("7)" + qualifications[6] + "<br>");
 //document.write("8)" + qualifications[7]);

 ///---------------------------------question no 08-------------------

// Write a program to store 3 student names in an array.Takeanother array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

//var studentname = ["alaina", "memona" , "mirha"];
//var scores = ["400 , 320, 370"];
//var totalMarks =500;

//var percentageofalaina = (score = 0/totalMarks)*100;
//var percentageofmemona = (score = 1/totalMarks)*100;
//var percentageofmirha = (score = 2/totalMarks)*100;
 
//document.write("Student of alaina is " + scores[0] + "totalMarks" +  " %" + "<br>");
//document.write("Student of memona is " + scores[1] + "totalMarks" +  " %" + "<br>");
//document.write("student of mirha is " + scores[2]  + "totalMarks" + " %");

//-----------------------------------question no 09--------------------------

// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// // Initialize an array with color names
// var colorArray = ["Red", "Yellow", "Green"];
// document.write("Original Array: " + colorArray.join(", ") + "<br>");

// // a. Add a color to the beginning of the array
// var colorToAddAtBeginning = prompt("Enter a color to add to the beginning of the array:"+ colorArray);
// colorArray.unshift(colorToAddAtBeginning);
// document.write("Array after adding color at the beginning: " + colorArray.join(", ") + "<br>");

// // b. Add a color to the end of the array
// var colorToAddAtEnd = prompt("Enter a color to add to the end of the array:");
// colorArray.push(colorToAddAtEnd);
// document.write("Array after adding color at the end: " + colorArray.join(", ") + "<br>");

// // c. Add two more colors to the beginning of the array
// colorArray.unshift("Purple", "Yellow");
// document.write("Array after adding two colors at the beginning: " + colorArray.join(", ") + "<br>");

// // d. Delete the first color in the array
// colorArray.shift();
// document.write("Array after deleting the first color: " + colorArray.join(", ") + "<br>");

// // e. Delete the last color in the array
// colorArray.pop();
// document.write("Array after deleting the last color: " + colorArray.join(", ") + "<br>");

// // f. Add a color at a specific position/index
// var indexToAddColor = +prompt("Enter the index at which you want to add a color:");
// var colorToAddAtIndex = prompt("Enter the color to add at the desired index:");
// colorArray.splice(indexToAddColor, 0, colorToAddAtIndex);

// document.write("Array after adding color at the desired index: " + colorArray.join(", ") + "<br>");

// // g. Delete color(s) from a specific position/index
// var indexToDeleteFrom = +prompt("Enter the index from which you want to delete color(s):");
// var numberOfColorsToDelete = +prompt("Enter the number of colors to delete:");
// colorArray.splice(indexToDeleteFrom, numberOfColorsToDelete);

// document.write("Array after deleting color(s) from the desired index: " + colorArray.join(", ") + "<br>");

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------TASK 10 ---------------------------------------------------------
// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.


// var scores = [87, 92, 78, 95, 84];

// document.write("Original Scores:", scores + "<br>");

// scores.sort(function(a, b) {
//   return a - b;
// });

// document.write("Sorted Scores:", scores + "<br>");

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------TASK 11 ---------------------------------------------------------
// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// var cities = ["Karachi", " Islamabad", " Quetta"," Lahore", " Sialkot", " Rawalpindi"];
// document.write("Cities: " + cities + "<br>");

// var selectedCities = [];
// selectedCities = cities.slice(0, 3);
// document.write("Sellceted Cities: " + selectedCities);

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------TASK 12 ---------------------------------------------------------
// Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)

// var array = ["This", "is", "my", "cat"];
// var singleString = array.join(" ");

// document.write("Array: " + array + "<br>");
// document.write("Single String: " + singleString );

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------TASK 13 ---------------------------------------------------------
// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var devices = ["Keyboard ", " Mouse" , " Printer", " Monitor"];

// document.write("Devices: " + devices + "<br>");
// document.write("Out: " + devices[0] + "<br>");
// document.write("Out: " + devices[1] + "<br>");
// document.write("Out: " + devices[2] + "<br>");
// document.write("Out: " + devices[3]);

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------TASK 14 ---------------------------------------------------------
// Create a new array. Store values one by one in such a way that you can access the values in reverse order.

// var devices = ["Keyboard ", " Mouse" , " Printer", " Monitor"];

// document.write("Devices: " + devices + "<br>");
// document.write("Out: " + devices[3] + "<br>");
// document.write("Out: " + devices[2] + "<br>");
// document.write("Out: " + devices[1] + "<br>");
// document.write("Out: " + devices[0]);

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------TASK 15 ---------------------------------------------------------
// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your  browser using document.write() method:
    
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write('<select>');
// for (var i = 0; i < phoneManufacturers.length; i++) {
//   document.write('<option>' + phoneManufacturers[i] + '</option>');
// }
// document.write('</select>');

// -------------------------------------------------------------------------------------------------------
