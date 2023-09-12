/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

Igoa = "akrotiri"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.getElementById('Igoa');

// Step 3: declare and instantiate a variable to hold the current year

currentYear = new Date(4/24).getFullYear(2023);

// Step 4: place the value of the current year variable into the HTML file

document.getElementById("year").innerHTML = currentYear; 

// Step 5: declare and instantiate a variable to hold the name of your picture

myPicture = "images/44BE0482-3E70-45C7-B989-8CC46C34A1C4.jpeg";

// Step 6: copy your image into the "images" folder

document.querySelector("#photo").setAttribute("src", myPicture);

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector("#photo").src = myPicture;

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

favFood = ["Fa'ausi", "Pani Po Po", "Half Moon Pie", "Kopai" ];

// Step 2: place the values of the favorite foods variable into the HTML file

document.getElementByld("food").innerHTML = favFood;

// Step 3: declare and instantiate a variable to hold another favorite food

favFood2 = "Rice Pudding";

// Step 4: add the variable holding another favorite food to the favorite food array

favoriteFood = favFood.concat(favFood2);

// Step 5: repeat Step 2

document.getElementById("food").innerHTML = favoriteFood

// Step 6: remove the first element in the favorite foods array

favoriteFood.splice(0,1);

// Step 7: repeat Step 2

document.getElementryByld("food").innerHTML = favoriteFood;

// Step 8: remove the last element in the favorite foods array

favoriteFood.splice(2,1);

// Step 7: repeat Step 2

document.getElementById("food").innerHTML = favoriteFOOD;

