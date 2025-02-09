The following code provides a robust solution that handles missing properties gracefully.

```javascript
const snapshot = await db.ref('users/uid').once('value');
const userData = snapshot.val();
const username = userData?.username ?? 'Guest'; // Optional chaining and nullish coalescing
console.log(username); // 'Guest' if username is missing
```
This approach ensures that the code doesn't crash if the `username` property is missing. It uses the default value 'Guest' in that case.  You can adapt this method to handle other potential missing properties and provide appropriate default values according to your application's logic.