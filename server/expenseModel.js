const { Pool } = require('pg');
const myURI = '';
const pool = new Pool({ connectionString: myURI });

// const queryStr = 'CREATE TABLE IF NOT EXISTS accounts (id SERIAL PRIMARY KEY, userName VARCHAR NOT NULL, hashpass VARCHAR);'

// pool.query(queryStr, err) => {
//   console.log(err);
// }

module.exports = {
  query: (text, params, callback) => {
    console.log(`query is`, text);
    return pool.query(text, params, callback);
  },
}
