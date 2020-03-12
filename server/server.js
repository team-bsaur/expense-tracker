const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const PORT = 8000;
const app = express();

const ExpenseController = require("./ExpenseController.js");
const authController = require("./authController.js");

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../assets")));

app.get(
  "/expense/getExpenses/:id",
  authController.verifyUser, ExpenseController.getExpenses,
  (req, res) => {
    res.status(200).send(res.locals.expenses);
  }
);
//Middleware call is to authController b/c income data is stored on accounts (user) table
app.put("/auth/updateIncome", authController.verifyUser, authController.updateIncome, (req, res) => {
  res.sendStatus(200);
});

// route for addExpense
app.post("/expense/addExpense", authController.verifyUser, ExpenseController.addExpense, (req, res) => {
  res.sendStatus(200);
});

// route for delete
app.delete(
  "/expense/deleteExpense/:id",
  authController.verifyUser, ExpenseController.deleteExpense,
  (req, res) => {
    res.status(200).send(res.locals.deleted);
  }
);

// route for signup
app.post("/auth/signup", authController.createAccount, (req, res) => {
  // must redirect to home page
  const userInfo = {
    id: res.locals.userID,
    userName: res.locals.userName,
    income: res.locals.income
  };
  res.set(200).cookie('user', userName, {httpOnly: true}).send(userInfo);
});

app.post("/auth/login", authController.login, (req, res) => {
  if (res.locals.auth) {
    const userInfo = {
      id: res.locals.id,
      userName: res.locals.userName,
      income: res.locals.income
    };
    res.set(200).cookie('user', 'token', {httpOnly: true}).send(userInfo);
  } else res.set(400).send(res.locals.auth);
  //Redirect to home page if res.locals.auth is true, otherwise redirect back to login; failure message?
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
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
