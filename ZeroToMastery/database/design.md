## Design

- HTTP: ---> JSON 


[Source for KNEX.JS](http://knexjs.org/)
- `$ npm install pg`
- Connect DB and Server ----> Knex.js
- 

```js
const pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
});
```

```
When you use the knex function to connect to a database,
make sure you type your pgsql details when you created your database. Otherwise, it will give you errors (no password provided):
---- Unhandled rejection error: password authentication failed for user "postgres"


const db = knex({
        client: 'pg',
        connection: {
          host : '127.0.0.1', //localhost
          user : 'postgres', //add your user name for the database here
          password : '', //add your correct password in here
          database : 'smartweb' //add your database name you created here
        }
});
```