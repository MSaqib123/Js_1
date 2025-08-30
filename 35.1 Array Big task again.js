

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
// User Profile Using Arrays Only (Enhanced with ES6)
// -----------------------------


// -----------------------------
// User Profile Using Arrays Only (Enhanced with ES6)
// -----------------------------

// Constants for default values
const DEFAULT_USERNAME = "Guest";
const DEFAULT_AGE = 18;
const CURRENT_YEAR = new Date().getFullYear();

// State management with arrays
let userProfile = ["JohnDoe", 25, false]; // [username, age, isLoggedIn]
let friendsList = []; // Stores friend arrays: [id, name, birthYear]
let nextFriendId = 1;

// Helper functions for validation
const isValidName = (name) => typeof name === "string" && name.trim().length > 0;
const isValidBirthYear = (year) => Number.isInteger(year) && year >= 1900 && year <= CURRENT_YEAR;
const isValidAge = (age) => Number.isInteger(age) && age >= 0 && age <= 120;


// Helper function to validate login and friend data
const validateFriendInput = (name, birthYear, action) => {
  if (!userProfile[2]) {
    console.log(`⚠️ Please log in to ${action} friends.`);
    return false;
  }
  if (!isValidName(name) || !isValidBirthYear(birthYear)) {
    console.log("⚠️ Invalid friend data. Name must be a non-empty string, and birth year must be valid.");
    return false;
  }
  return true;
};

// 1. Add Friend (Create)
const addFriend = (name, birthYear) => {
  if (!validateFriendInput(name, birthYear, "add")) return;

  const friend = [nextFriendId++, name.trim(), birthYear];
  friendsList = [...friendsList, friend];
  console.log(`✅ ${name.trim()} added successfully with ID: ${friend[0]}!`);
};

// 2. Print Friends (Read)
const printFriends = () => {
  if (!userProfile[2]) return console.log("⚠️ Please log in to view friends.");
  if (!friendsList.length) return console.log("⚠️ No friends added yet.");

  console.log("👥 Friends List:");
  friendsList.forEach(([id, name, birthYear]) => 
    console.log(`ID: ${id}. ${name} (Born: ${birthYear})`)
  );
};

// 3. Remove Friend (Delete)
const removeFriend = (id) => {
  if (!userProfile[2]) return console.log("⚠️ Please log in to remove friends.");
  const index = friendsList.findIndex(([friendId]) => friendId === id);

  if (index === -1) return console.log(`⚠️ Friend with ID "${id}" not found!`);

  const [[, name]] = friendsList.splice(index, 1);
  console.log(`🗑️ Friend ${name} (ID: ${id}) removed successfully.`);
};

// 4. Update Friend (Update)
const updateFriend = (id, newName, newBirthYear) => {
  if (!validateFriendInput(newName, newBirthYear, "update")) return;

  const friend = friendsList.find(([friendId]) => friendId === id);
  if (!friend) return console.log(`⚠️ Friend with ID "${id}" not found!`);

  friend[1] = newName.trim();
  friend[2] = newBirthYear;
  console.log(`📝 Friend with ID ${id} updated: ${newName.trim()} (Born: ${newBirthYear})`);
};

// 5. Print Friend Count
const friendCount = () => {
  if (!userProfile[2]) return console.log("⚠️ Please log in to view friend count.");
  console.log(`👥 Total Friends: ${friendsList.length}`);
};

// 6. Print Oldest Friend
const oldestFriend = () => {
  if (!userProfile[2]) return console.log("⚠️ Please log in to view friends.");
  if (!friendsList.length) return console.log("⚠️ No friends available.");

  const [id, name, birthYear] = friendsList.reduce((prev, curr) => 
    prev[2] < curr[2] ? prev : curr
  );
  console.log(`👴 Oldest Friend: ${name} (ID: ${id}, Born: ${birthYear})`);
};

// 7. Print Youngest Friend
const youngestFriend = () => {
  if (!userProfile[2]) return console.log("⚠️ Please log in to view friends.");
  if (!friendsList.length) return console.log("⚠️ No friends available.");

  const [id, name, birthYear] = friendsList.reduce((prev, curr) => 
    prev[2] > curr[2] ? prev : curr
  );
  console.log(`👶 Youngest Friend: ${name} (ID: ${id}, Born: ${birthYear})`);
};

// 8. Update Profile
const updateProfile = (newUsername, newAge) => {
  if (!userProfile[2]) return console.log("⚠️ Please log in to update profile.");

  const username = isValidName(newUsername) ? newUsername.trim() : DEFAULT_USERNAME;
  const age = isValidAge(newAge) ? newAge : DEFAULT_AGE;

  userProfile = [username, age, userProfile[2]];
  console.log(`📝 Profile Updated: Username: ${username}, Age: ${age}`);
};

// 9. Login Simulation
const login = () => {
  userProfile[2] = true;
  console.log(`🔐 Logged in as ${userProfile[0]}`);
};

// 10. Logout Simulation
const logout = () => {
  userProfile[2] = false;
  console.log("🔓 Logged out");
};

// ---------------------------
// Example Usage
// ---------------------------
login();
addFriend("Ali", 1998);
addFriend("Sara", 2002);
addFriend("Hassan", 1995);
addFriend("Zara", 2005);
printFriends();
friendCount();
updateFriend(2, "SaraUpdated", 2003);
removeFriend(1);
printFriends();
oldestFriend();
youngestFriend();
updateProfile("JohnUpdated", 30);
updateProfile("", -5);
logout();
updateProfile("TestUser", 25);
addFriend("TestFriend", 2000);
console.log("📌 Final Profile:", userProfile);
console.log("📌 Final Friends List:", friendsList);