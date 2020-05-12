let firstName = "Rodrigo";
let middleName = "Adrian";
let lastName = "Arambula";
let fullName = firstName + " " + middleName + " " + lastName;
let fullNameCaps = fullName.toUpperCase(); 
// Should modify string to ALL CAPS.

displayPosition(fullNameCaps, "Full Stack Developer", "I am Hispanic");


function displayPosition(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription );
}


console.log("My Interests: ");

displayInterests("Video Games");
displayInterests("Sports & eSports"); 
displayInterests("Anime"); 
displayInterests("Spending time with my girlfirend"); 
displayInterests("Learning how to code!"); 






