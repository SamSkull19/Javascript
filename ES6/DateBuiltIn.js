// Create a new Date object with the current date and time
const now = new Date();
console.log(now);  // Logs the current date and time

// Create a Date object with a specific date (YYYY-MM-DD format)
const myDate = new Date('2025-11-19');
console.log(myDate);  // Logs November 19, 2025

// Create a Date object with full date and time components
// Note: Month is 0-indexed, so 2 = March
const fullDate = new Date(2025, 2, 19, 10, 30, 0);
console.log(fullDate);  // Logs March 19, 2025 10:30:00

// Get different components from the current date
console.log(now.getFullYear());  // Gets the year (e.g., 2025)
console.log(now.getMonth());     // Gets the month (0 = Jan, 11 = Dec)
console.log(now.getDate());      // Gets the day of the month (1-31)
console.log(now.getDay());       // Gets the day of the week (0 = Sunday)
console.log(now.getHours());     // Gets the hour (0-23)
console.log(now.getMinutes());   // Gets the minutes (0-59)
console.log(now.getSeconds());   // Gets the seconds (0-59)

// Set different components of the current date
now.setFullYear(2026);  // Change the year to 2026
now.setMonth(0);        // Change the month to January (0-indexed)
now.setDate(1);         // Change the day of the month to 1
now.setHours(12);       // Change the hour to 12 (noon)
console.log(now);       // Logs the updated date and time

// Create a new Date object for demonstration of string conversion and timestamp
const date = new Date();

console.log(date.toDateString());  // Converts date to a readable date string (e.g., "Mon Oct 06 2025")
console.log(date.toTimeString());  // Converts date to a readable time string (e.g., "23:48:10 GMT+0600")

// Get the timestamp (milliseconds since January 1, 1970)
console.log(date.getTime());       // Logs the timestamp in milliseconds
