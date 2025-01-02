'use strict';
const bcrypt = require('bcrypt');
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
    } else {
      console.log('Hashed password (async):', hash);
  
      // Verify the password (optional)
      bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
        if (err) {
          console.error('Error comparing password:', err);
        } else if (result) {
          console.log('Password matches (async).');
        } else {
          console.log('Password does not match (async).');
        }
      });
    }
  });


//END_ASYNC
//START_SYNC
try {
  const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
  console.log('Hashed password (sync):', hash);

  // Verify the password (optional)
  const isMatch = bcrypt.compareSync(myPlaintextPassword, hash);
  if (isMatch) {
    console.log('Password matches (sync).');
  } else {
    console.log('Password does not match (sync).');
  }
} catch (err) {
  console.error('Error hashing or comparing password (sync):', err);
}
//END_SYNC

//START_SYNC
/*/Hash and Compare Passwords Asynchronously
/try {
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    console.log('Hashed password (sync):', hash);
  
    // Verify the password (optional)
    const isMatch = bcrypt.compareSync(myPlaintextPassword, hash);
    if (isMatch) {
      console.log('Password matches (sync).');
    } else {
      console.log('Password does not match (sync).');
    }
  } catch (err) {
    console.error('Error hashing or comparing password (sync):', err);
  }
*/
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Synchronous hash:', hash);

// Compare the plaintext password with the hash
const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log('Password comparison result (sync):', result);

//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
