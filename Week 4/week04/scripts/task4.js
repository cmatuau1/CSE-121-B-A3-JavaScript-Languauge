/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {
};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Creed"
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "Creed.jpeg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["Faosi", "Kopai", "PaniPopo"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["Hiking", "Training", "Lifting", "Swimming", "Reading"];
// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = ["Western Samoa", "American Samoa", "New Zealand", "Hawaii", "Jackson Hole Wyoming", "St.George Utah", "Orem Utah"];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived.push({place: "", length: ""});
// Step 8: For each property, add appropriate values as strings
myInfo.placesLived.push({place: "Santorini", length: "4 years"});
// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived.push({place: "Western Samoa", length: "4 years"});
myInfo.placesLived.push({Place: "American Samoa", Length: "1 year"});
myInfo.placesLived.push({Place: "New Zealand", Length: "1 year"});
myInfo.placesLived.push({Place: "Jackson Hole Wyoming", Length: "4 years"});
myInfo.placesLived.push({Place: "St.George Utah", Length: "16 years"});
myInfo.placesLived.push({Place: "Orem Utah", Length: " 10 years"});

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerHTML = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = myInfo.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = myInfo.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

for (let i = 0; i <myInfo.favoriteFoods.length; i++) {
    let food = myInfo.favoriteFoods[i];
    let foodItem = document.createElement("li");
    foodItem.innerHTML = food;
    document.getElementById("favorite-foods").appendChild("Faosi")   
}

for (let i = 0; i <myInfo.favoriteFoods.length; i++) {
    let food = myInfo.favoriteFoods[i];
    let foodItem = document.createElement("li");
    foodItem.innerHTML = food;
    document.getElementById("favorite-foods").appendChild("Kopai")   
}

for (let i = 0; i <myInfo.favoriteFoods.length; i++) {
    let food = myInfo.favoriteFoods[i];
    let foodItem = document.createElement("li");
    foodItem.innerHTML = food;
    document.getElementById("favorite-foods").appendChild("PaniPopo")   
}


// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

document.getElementById("favorite-foods").appendChild(foodItem);

// Step 6: Repeat Step 4 for each hobby in the hobbies property

for (let i = 0; i < myInfo.hobbies.length; i++) {
    let hobby = myInfo.hobbies[i];
    let hobbyItem = document.createElement("li");
    hobbyItem.innerHTML = hobby;
    document.getElementById("hobbies").appendChild("Hiking");
  }

  for (let i = 0; i < myInfo.hobbies.length; i++) {
    let hobby = myInfo.hobbies[i];
    let hobbyItem = document.createElement("li");
    hobbyItem.innerHTML = hobby;
    document.getElementById("hobbies").appendChild("Training");
  }

  for (let i = 0; i < myInfo.hobbies.length; i++) {
    let hobby = myInfo.hobbies[i];
    let hobbyItem = document.createElement("li");
    hobbyItem.innerHTML = hobby;
    document.getElementById("hobbies").appendChild("Lifting");
  }

  for (let i = 0; i < myInfo.hobbies.length; i++) {
    let hobby = myInfo.hobbies[i];
    let hobbyItem = document.createElement("li");
    hobbyItem.innerHTML = hobby;
    document.getElementById("hobbies").appendChild("Swimming");
  }

  for (let i = 0; i < myInfo.hobbies.length; i++) {
    let hobby = myInfo.hobbies[i];
    let hobbyItem = document.createElement("li");
    hobbyItem.innerHTML = hobby;
    document.getElementById("hobbies").appendChild("Reading");
  }
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

document.getElementById("hobbies").appendChild(hobbyItem);

// Step 8: For each object in the <em>placesLived</em> property:

  for (let i = 0; i < myInfo.placesLived.length; i++) {
    let place = myInfo.placesLived[i];
    let placeName = document.createElement("dt");
    placeName.innerHTML = place.place;
    let placeLength = document.createElement("dd");
    placeLength.innerHTML = place.length;
    document.getElementById("places-lived").appendChild("Western Samoa");
    document.getElementById("places-lived").appendChild("4 Years");
  }

  for (let i = 0; i < myInfo.placesLived.length; i++) {
    let place = myInfo.placesLived[i];
    let placeName = document.createElement("dt");
    placeName.innerHTML = place.place;
    let placeLength = document.createElement("dd");
    placeLength.innerHTML = place.length;
    document.getElementById("places-lived").appendChild("American Samoa");
    document.getElementById("places-lived").appendChild("1 Year");
  }

  for (let i = 0; i < myInfo.placesLived.length; i++) {
    let place = myInfo.placesLived[i];
    let placeName = document.createElement("dt");
    placeName.innerHTML = place.place;
    let placeLength = document.createElement("dd");
    placeLength.innerHTML = place.length;
    document.getElementById("places-lived").appendChild("New Zealand");
    document.getElementById("places-lived").appendChild("1 Year");
  }

  for (let i = 0; i < myInfo.placesLived.length; i++) {
    let place = myInfo.placesLived[i];
    let placeName = document.createElement("dt");
    placeName.innerHTML = place.place;
    let placeLength = document.createElement("dd");
    placeLength.innerHTML = place.length;
    document.getElementById("places-lived").appendChild("Jackson Hole Wyoming");
    document.getElementById("places-lived").appendChild("4 Years");
  }

  for (let i = 0; i < myInfo.placesLived.length; i++) {
    let place = myInfo.placesLived[i];
    let placeName = document.createElement("dt");
    placeName.innerHTML = place.place;
    let placeLength = document.createElement("dd");
    placeLength.innerHTML = place.length;
    document.getElementById("places-lived").appendChild("St. George Utah");
    document.getElementById("places-lived").appendChild("16 Years");
  }

  for (let i = 0; i < myInfo.placesLived.length; i++) {
    let place = myInfo.placesLived[i];
    let placeName = document.createElement("dt");
    placeName.innerHTML = place.place;
    let placeLength = document.createElement("dd");
    placeLength.innerHTML = place.length;
    document.getElementById("places-lived").appendChild("Orem Utah");
    document.getElementById("places-lived").appendChild("10 Years");
  }

// - Create an HTML <dt> element and put its place property in the <dt> element

document.getElementById("places-lived").appendChild(placeName);

// - Create an HTML <dd> element and put its length property in the <dd> element

document.getElementById("places-lived").appendChild(placeLength);

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
