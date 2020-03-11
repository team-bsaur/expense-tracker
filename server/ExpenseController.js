const db = require('./expenseModel');
const ExpenseController = {};

ExpenseController.getExpenses = (req, res, next) => {
    console.log('Get all expenses for user');
    
    // tell Izumi
    const id = req.params.id;
    const text = 'SELECT * FROM history WHERE userid=$1';
    const values = [id];
    db.query(text, values, (err, response) => {
        if (err) {
            console.log('Database error: ', err);
            return next(err);
        }
        if (response.rows.length > 0) {
            res.locals.expenses = response.rows;
        }
        return next();
    })
}

// add expense(
ExpenseController.addExpense = (req, res, next) => {
  console.log('add expense');
  
  const queryStr = 'INSERT INTO history (category, amount, notes, userid) VALUES ($1, $2, $3, $4)';

// extract info from req.body
  const values = [req.body.category, req.body.amount, req.body.notes, req.body.userid];

  db.query(queryStr, values, (err, response) => {
    if (err) {
      console.log('Database addExpense error: ', err);
      return next(err);
    }
    return next();
  });
}

// delete expense
ExpenseController.deleteExpense = (req, res, next) => {
  
  const id = req.params.id;
  const values = [id];
  const text = 'DELETE FROM history WHERE id = $1';
  db.query(text, values, (err, response) => {
    if (err) {
      console.log('database error: ', err);
      return next(err);
    }
    res.locals.deleted = response.rows;
    return next();
  });

};





module.exports = ExpenseController;