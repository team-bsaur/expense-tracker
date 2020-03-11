const path = require('path');
const express = require('express');
const cookieParser = require('cookieParser');

const PORT = 8000;
const app = express();

const ExpenseController = require('./ExpenseController.js');
const authController = require('./authController.js');

app.use(express.json());
app.use(express.urlencoded());
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../assets')));


app.get('/getExpenses/:id', ExpenseController.getExpenses, (req, res) => {
  res.status(200).send(res.locals.expenses);
});
//Middleware call is to authController b/c income data is stored on accounts (user) table
app.post('/updateIncome', authController.updateIncome, (req, res) => {
  res.sendStatus(200);
})

// route for addExpense
app.post('/addExpense', ExpenseController.addExpense, (req, res) => {
  res.sendStatus(200);
});

// route for delete
app.delete('/deleteExpense/:id', ExpenseController.deleteExpense, (req, res) => {
  res.status(200).send(res.locals.deleted);
});

// route for signup
app.post('/signup', authController.createAccount, (req, res) => {
  // must redirect to home page
  const userInfo = {
    id: res.locals.id,
    userName: res.locals.userName,
    income: res.locals.income
  };
  res.set(200).send(userInfo);
});

app.post('/login', authController.login, (req, res) => {
  if(res.locals.auth) {
    const userInfo = {
      id: res.locals.id,
      userName: res.locals.userName,
      income: res.locals.income
    };
    res.set(200).send(userInfo);
  } else res.set(400).send(res.locals.auth);
  //Redirect to home page if res.locals.auth is true, otherwise redirect back to login; failure message?
});



app.get('/', (req, res)=>  {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.use((req, res) => res.sendStatus(404));

// global error handling
  // catches errors server side 
app.use((err, req, res, next) => {
  console.log(err.stack);
  if (!res.headerSent) {
    res.status(500);
    res.render(err, { error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
//   console.log('this is the dirname', __dirname);
});