const db = require('./expenseModel');
const bcrypt = require('bcrypt');
const authController = {};

authController.createAccount = (req, res, next) => {
    // console.log(req.body);
    // console.log('creating a new account');
  const password = req.body.password;
  const userName = req.body.userName;

  bcrypt.hash(req.body.password, 5, (err, hash) => {
    // const values = [req.body.userName, req.body.income, hash];
    const values = [userName, hash];
    const queryStr = 'INSERT INTO accounts (username, bcrypt) VALUES ($1, $2)';
    const nestedQueryStr = 'SELECT id FROM accounts WHERE userName = $1';
    // const nestedQueryStr = 'SELECT * FROM accounts WHERE userName = $1';
    console.log(`hash working`, hash);

    // refactor into promises

    db.query(queryStr, values, (err, response) => {
      if (err) {
        console.log('Database createAccount error: ', err);
        return next(err);
      }
      const userName = [req.body.userName];
      console.log('first db query in hash hash baby');
      db.query(nestedQueryStr, userName, (err, response) => {
        if (err) {
          console.log('Database nestedQuery error: ', err);
          return next(err);
        }
        // res.locals.userID = response.rows[0].id;
        res.locals.userID = response.rows[0].id;
        res.locals.income = 0;
        res.locals.userName = userName;

        console.log(response.rows);
        return next();
      })
    })
  });
}

authController.login = (req, res, next) => {

// extract the username & password from req body
  const { userName, password } = req.body;
  // console.log(userName, password);

// grab hash from DB
  const values = [userName];
  const queryStr = 'SELECT id, income, bcrypt FROM accounts WHERE userName = $1';
  let hashFromDB = '';
  
  
  db.query(queryStr, values, (err, response) => {
    if (err) {
      console.log('database error: login', err);
      return next(err);
    }
    // console.log(response);    
    hashFromDB = response.rows[0].bcrypt;
    const id = response.rows[0].id;
    const income = response.rows[0].income;
    console.log(id, income, hashFromDB);
    //compare database hash to plaintext password
    bcrypt.compare(password, hashFromDB, (err, result) => {
      if (err) {
        console.log('Bcrypt compare error: ', err);
        return next(err);
      }
      //Stores boolean returned from bcrypt.compare()
      res.locals.auth = result;
      if (result) {
        console.log('login successful');
        res.locals.id = id;
        res.locals.income = income;
        res.locals.userName = userName;
        return next();
      } else {
        console.log('login failed');
        return next();
      }
    })
  
  });

// compare given values against hash

// if/else depending on authentication
  // if they match => redirect to the user home page

  // else redirect to login page
  // message: "password/username did not match"

}

authController.updateIncome = (req, res, next) => {
    console.log('Update income for user');
    //tell front end we will need user id for this method
    const {id, income} = req.body;
    const text = 'UPDATE accounts SET income=$1 WHERE id=$2';
    const values = [income, id];
    db.query(text, values, (err, response) => {
        if (err) {
            console.log('Database error: ', err);
            return next(err);
        }
        return next();
    })
}

module.exports = authController;