The following code snippet demonstrates a common error when using Firebase's Realtime Database.  It attempts to access a property of a snapshot before checking if the property exists. This leads to an error if the data structure doesn't match expectations.

```javascript
const snapshot = await db.ref('users/uid').once('value');
const username = snapshot.val().username;
// This will error if 'username' is missing from the database
console.log(username);
```