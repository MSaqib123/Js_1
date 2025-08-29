// 1. Create User Profiles
// Create an array called userProfiles to store multiple user profiles.
// Each profile should be an array containing the user's username, age, and a friendsList (initialized as an empty array).

// 2. Add Friend
// Write a function addFriend that takes two parameters:
// userIndex → the index of the user in userProfiles
// friendName → the friend's name to add
// Add the friend's name into the friendsList of the specified user.

// 3. Print Friends
// Write a function printFriends that takes userIndex as a parameter and prints the list of friends for that user from userProfiles.

// 4. Update Friend
// Write a function updateFriend that takes three parameters:
// userIndex → the index of the user
// oldName → the existing friend's name
// newName → the updated friend's name
// Replace the old friend's name with the new one in the user's friendsList.

// 5. Remove Friend
// Write a function removeFriend that takes two parameters:
// userIndex → the index of the user
// friendName → the friend's name to remove
// Remove the friend's name from the friendsList of that user.

// 6. Print Friend Count
// Write a function friendCount that takes userIndex as a parameter and prints the total number of friends for that user.

// 7. Print Oldest Friend
// Assume you have a separate years array storing birth years of each friend for a specific user.
// Write a function oldestFriend that takes userIndex as a parameter and prints the oldest friend's name and their birth year.

// 8. Print Youngest Friend
// Similarly, write a function youngestFriend that takes userIndex as a parameter and prints the youngest friend's name and their birth year.

// 9. Update Profile
// Write a function updateProfile that allows the user to update their own profile information such as username and age by specifying the userIndex.





// -----------------------------
// User Profile Using Arrays Only
// -----------------------------



// 1. Create User Profiles
// Create an array called userProfiles to store multiple user profiles.
// Each profile should be an array containing the user's username, birthYear, and a friendsList (initialized as an empty array).
// We'll use arrays for everything
let userProfile = ["JohnDoe", 25, false];  // index 0 = username, index 1 = birthYear, index 2 = isLoggedIn
let friendsList = [];                    // Stores arrays of friends => [id, name, birthYear]
let nextFriendId = 1;                    // Simple ID counter for friends


// 2. Add Friend
// Write a function addFriend that takes two parameters:
// userIndex → the index of the user in userProfiles
// friendName → the friend's name to add
// Add the friend's name into the friendsList of the specified user.
function addFriend(name,birthYear){
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to add friends.");
        return;
    }
    if (!name || typeof birthYear !== "number") {
        console.log("⚠️ Invalid friend data. Name must not be empty, and birth year must be valid.");
        return;
    }
    friendsList.push([nextFriendId++,name,birthYear]);
    console.log(`${name} added successfully with ${nextFriendId-1}`);
}

// 3. Print All Friends
// Write a function printFriends that takes userIndex as a parameter and prints the list of friends for that user from userProfiles.
let printAllFriends = () => {
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to add friends.");
        return;
    }
    console.log(friendsList)
}

// 4. Update Friend
// Write a function updateFriend that takes three parameters:
// userIndex → the index of the user
// oldName → the existing friend's name
// newName → the updated friend's name
// Replace the old friend's name with the new one in the user's friendsList.
function updateFriend(indexofArray,name,birthYear){
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to add friends.");
        return;
    }
    if (!name || typeof birthYear !== "number" ) {
        console.log("⚠️ Invalid friend data. Name must not be empty, and birth year must be valid.");
        return;
    }

    friendsList[indexofArray];
    friendsList[indexofArray][1] = name;
    friendsList[indexofArray][2] = birthYear;
    console.log(`Updated Successfully ${friendsList[indexofArray]}`)
}

// 5. Remove Friend
// Write a function removeFriend that takes two parameters:
// userIndex → the index of the user
// friendName → the friend's name to remove
// Remove the friend's name from the friendsList of that user.
function removeFriend(indexofArray){
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to add friends.");
        return;
    }
    friendsList.splice(indexofArray,1);
    console.log(`Removed Successfully ${friendsList[indexofArray]}`)
}

// 6. Print Friend Count
// Write a function friendCount that takes userIndex as a parameter and prints the total number of friends for that user.
function totalFriends(){
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to add friends.");
        return;
    }
    console.log("Your Total Friends : ", friendsList.length);
}

// 7. Print Oldest Friend
// Assume you have a separate years array storing birth years of each friend for a specific user.
// Write a function oldestFriend that takes userIndex as a parameter and prints the oldest friend's name and their birth year.

function printOldestFriends(){
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to add friends.");
        return;
    }
    console.log("After Loop learning");
}

// 8. Print Youngest Friend
// Similarly, write a function youngestFriend that takes userIndex as a parameter and prints the youngest friend's name and their birth year.
function printYoungestFriends(){
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to add friends.");
        return;
    }
    console.log("After Loop learning");
}

// 9. Update Profile
// Write a function updateProfile that allows the user to update their own profile information such as username and birthYear by specifying the userIndex.
function updateProfile(newUsername, newbirthYear) {
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to update profile.");
        return;
    }

    // Validate and set defaults
    const username = newUsername && typeof newUsername === "string" && newUsername.trim() ? newUsername.trim() : DEFAULT_USERNAME;
    const birthYear = typeof newbirthYear === "number" && newbirthYear >= 0 && newbirthYear <= 120 ? newbirthYear : DEFAULT_birthYear;

    userProfile[0] = username;
    userProfile[1] = birthYear;
    console.log(`📝 Profile Updated: Username: ${userProfile[0]}, birthYear: ${userProfile[1]}`);
}


// 10. Login Simulation (for testing purposes)
function login() {
    userProfile[2] = true;
    console.log(`🔐 Logged in as ${userProfile[0]}`);
}


// 11. Logout Simulation
function logout() {
    userProfile[2] = false;
    console.log("🔓 Logged out");
}


// ---------------------------
// Example UsbirthYear
// ---------------------------
login();
addFriend("SAQIB",25);

printAllFriends();

updateFriend(0,"Billal",27);
printAllFriends();

removeFriend(0);
printAllFriends();


totalFriends();
addFriend("SAQIB",25);
addFriend("Nomi",25);
addFriend("Akram",25);

totalFriends();