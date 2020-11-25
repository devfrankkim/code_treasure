## Database

`brew install postgresql`

`brew services start postgresql`

`brew services stop postgresql`

### To create DB

Now in order for us to use Postgres we need to create a database.      

And the way we do that is to use the `createdb [test]`  command that has come once we've installed Postgres.

### To connect DB

`psql [test]`

[https://dbeaver.io/](https://dbeaver.io/)

### Database in terminal

`create table users (name text, age smallint, birthday date);`

- `\d` → shows our table
```
Schema |  Name  | Type  |  Owner

- -------+--------+-------+----------

public | users  | table | frankkim

public | users1 | table | frankkim

public | users2 | table | frankkim

public | users3 | table | frankkim

public | users4 | table | frankkim

public | users5 | table | frankkim
```
- `\q` →  We exit out of here and we're back to the terminal.

### To insert invalues

`INSERT INTO users (name, age, birthday) VALUES ('Frank', 100, '1992-09-20');`

### To get database

`SELECT * FROM users;`

`SELECT name, age, birthday FROM users;`

### To alter values

`ALTER TABLE users ADD score smallint;`

### To update values
```
UPDATE  table_name
SET some_column = some_value
WHERE some_column = some_value;
```
`UPDATE users` 

`SET score = 50` 

`WHERE name = 'Frank'`

- UPDATE multiple values

`UPDATE users SET score = 1 WHERE name='KIM' OR name='Frank';`

### To get multiple values with condition

`SELECT * FROM users WHERE name LIKE 'F%';`

`SELECT * FROM users WHERE name LIKE '%k';`

### To get values with order

`SELECT * FROM users ORDER BY score ASC;`

`SELECT * FROM users ORDER BY score DESC;`

### Functions

`SELECT AVG(score) FROM users;`

`SELECT SUM(age) FROM users;`

- if we want to find out how many users we have in our database, we can just say COUNT name and we have


- `SELECT COUNT(name) FROM users;`