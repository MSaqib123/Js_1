//1. Create User Profile: Define an object called userProfile with properties like username, age, and friendsList. Initialize the friendsList property as an empty array.
//2. Add Friends: Write a function addFriend that takes a friend's name as a parameter and adds it to the friendsList array in the userProfile object.
//3. Print Friends: Write a function printFriends that prints the list of friends from the friendsList array in the userProfile object.
//4. Update Friends: update Friend
//5. Remove Friend: Write a function removeFriend that takes a friend's name as a parameter and removes it from the friendsList array in the userProfile object.
//6. Print Friend Count: Write a function friendCount that prints the total number of friends in the friendsList array.
//7. Print Oldest Friend: Write a function oldestFriend that prints the oldest friend's name and their birth year from the years array.
//8. Print Youngest Friend: Write a function youngestFriend that prints the youngest friend's name and their birth year from the years array.
//9. Update Profile: Write a function updateProfile that allows the user to update their profile information such as username and age.




// -----------------------------
// User Profile Using Arrays Only
// -----------------------------

// We'll use arrays for everything
let userProfile = ["JohnDoe", 25, true];  // index 0 = username, index 1 = age, index 2 = isLoggedIn
let friendsList = [];                    // Stores arrays of friends => [id, name, birthYear]
let nextFriendId = 1;                    // Simple ID counter for friends

// Default values for profile
const DEFAULT_USERNAME = "Guest";
const DEFAULT_AGE = 18;

// 1. Create User Profile (already created above)

// 2. Add Friend (Create)
function addFriend(name, birthYear) {
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to add friends.");
        return;
    }
    if (!name || typeof birthYear !== "number" || birthYear < 1900 || birthYear > new Date().getFullYear()) {
        console.log("⚠️ Invalid friend data. Name must not be empty, and birth year must be valid.");
        return;
    }
    friendsList.push([nextFriendId++, name, birthYear]); // store each friend as [id, name, birthYear]
    console.log(`✅ ${name} added successfully with ID: ${nextFriendId - 1}!`);
}

// 3. Print Friends (Read)
function printFriends() {
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to view friends.");
        return;
    }
    if (friendsList.length === 0) {
        console.log("⚠️ No friends added yet.");
        return;
    }

    console.log("👥 Friends List:");
    friendsList.forEach((friend) => {
        console.log(`ID: ${friend[0]}. ${friend[1]} (Born: ${friend[2]})`);
    });
}

// 4. Remove Friend (Delete)
function removeFriend(id) {
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to remove friends.");
        return;
    }
    let index = friendsList.findIndex(friend => friend[0] === id);

    if (index !== -1) {
        let removed = friendsList.splice(index, 1);
        console.log(`🗑️ Friend ${removed[0][1]} (ID: ${removed[0][0]}) removed successfully.`);
    } else {
        console.log(`⚠️ Friend with ID "${id}" not found!`);
    }
}

// 5. Update Friend (Update)
function updateFriend(id, newName, newBirthYear) {
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to update friends.");
        return;
    }
    if (!newName || typeof newBirthYear !== "number" || newBirthYear < 1900 || newBirthYear > new Date().getFullYear()) {
        console.log("⚠️ Invalid update data. Name must not be empty, and birth year must be valid.");
        return;
    }
    let friend = friendsList.find(friend => friend[0] === id);

    if (friend) {
        friend[1] = newName;
        friend[2] = newBirthYear;
        console.log(`📝 Friend with ID ${id} updated: ${newName} (Born: ${newBirthYear})`);
    } else {
        console.log(`⚠️ Friend with ID "${id}" not found!`);
    }
}

// 6. Print Friend Count
function friendCount() {
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to view friend count.");
        return;
    }
    console.log(`👥 Total Friends: ${friendsList.length}`);
}

// 7. Print Oldest Friend
function oldestFriend() {
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to view friends.");
        return;
    }
    if (friendsList.length === 0) {
        console.log("⚠️ No friends available.");
        return;
    }

    let oldest = friendsList.reduce((prev, curr) =>
        prev[2] < curr[2] ? prev : curr
    );

    console.log(`👴 Oldest Friend: ${oldest[1]} (ID: ${oldest[0]}, Born: ${oldest[2]})`);
}

// 8. Print Youngest Friend
function youngestFriend() {
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to view friends.");
        return;
    }
    if (friendsList.length === 0) {
        console.log("⚠️ No friends available.");
        return;
    }

    let youngest = friendsList.reduce((prev, curr) =>
        prev[2] > curr[2] ? prev : curr
    );

    console.log(`👶 Youngest Friend: ${youngest[1]} (ID: ${youngest[0]}, Born: ${youngest[2]})`);
}

// 9. Update Profile (Improved Update)
function updateProfile(newUsername, newAge) {
    if (!userProfile[2]) {
        console.log("⚠️ Please log in to update profile.");
        return;
    }

    // Validate and set defaults
    const username = newUsername && typeof newUsername === "string" && newUsername.trim() ? newUsername.trim() : DEFAULT_USERNAME;
    const age = typeof newAge === "number" && newAge >= 0 && newAge <= 120 ? newAge : DEFAULT_AGE;

    userProfile[0] = username;
    userProfile[1] = age;
    console.log(`📝 Profile Updated: Username: ${userProfile[0]}, Age: ${userProfile[1]}`);
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
// Example Usage
// ---------------------------

// Simulate login
login();

// Add some friends
addFriend("Ali", 1998);
addFriend("Sara", 2002);
addFriend("Hassan", 1995);
addFriend("Zara", 2005);

// Print friends
printFriends();

// Show total friends
friendCount();

// Update a friend
updateFriend(2, "SaraUpdated", 2003);

// Remove a friend
removeFriend(1);

// Print again
printFriends();

// Show oldest and youngest friend
oldestFriend();
youngestFriend();

// Update profile with valid data
updateProfile("JohnUpdated", 30);

// Update profile with invalid data (should use defaults)
updateProfile("", -5);

// Test without login
logout();
updateProfile("TestUser", 25); // Should fail
addFriend("TestFriend", 2000); // Should fail

// Final user profile and friends
console.log("📌 Final Profile:", userProfile);
console.log("📌 Final Friends List:", friendsList);