# Firebase: Handling Missing Properties in Database Snapshots

This repository demonstrates a common error when working with Firebase's Realtime Database: accessing properties that might not exist in the data snapshot.  The `bug.js` file shows the error-prone code, while `bugSolution.js` provides a solution using optional chaining and nullish coalescing.

## Problem

Directly accessing nested properties in a Firebase snapshot can throw an error if those properties are missing from the database. This often occurs when dealing with asynchronous data or varying data structures.

## Solution

The solution uses optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access properties. Optional chaining checks if a property exists before accessing it, preventing errors.  Nullish coalescing provides a default value if the property is missing or null.