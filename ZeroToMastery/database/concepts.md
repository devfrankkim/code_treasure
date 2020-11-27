## Database

To practice:
[Practice1](https://www.khanacademy.org/computing/computer-programming/sql)
[Practice2](https://www.codecademy.com/learn/learn-sql)

`brew install postgresql`

`brew services start postgresql`

`brew services stop postgresql`

### To create DB

- Now in order for us to use Postgres we need to create a database.      

- And the way we do that is to use the `createdb [test]`  command that has come once we've installed Postgres.

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

## Joining tables

`CREATE TABLE login(`

`ID serial NOT NULL PRIMARY KEY,` 

`secret VARCHAR (100) NOT NULL,` 

`name text UNIQUE NOT NULL`

`);`

`PRIMARY KEY`

- We're creating an ID for each login entry here.
- `Not null` means that this has to be a filled in property.
- Setting `PRIMARY KEY` is one of the most important things.
- `PRIMARY KEY` is always unique to each row.
- `PRIMARY KEYS` are only one per table.
- Usually something like an `ID` or something unique like an `email`.

`VARCHR (100)`

- For the string datatype variable character has a size
- We can say that numeric characters to store.
- So we're saying that the secret value in our case this will be the hash will not be greater than a 100.

`UNIQUE`

- The `UNIQUE` Keyword says that if a name already exists well then we can't insert into it.

`INSERT INTO VALUES`

```jsx
INSERT INTO login(secret, name) VALUES ('secret key', 'Frank');
```

- We don't need to now insert anything in the ID because that's actually done for us because it's serial
- it will just automatically increment. But for the secret
- we can say that secret will be a hash and the name will be some sort of a text. Let's format this a little bit.

`SELECT * FROM login;`

`INSERT INTO login(secret, name) VALUES ('secret key3', 'Frank3');`

## Relational Database - connect two tables ( Joins )

`Connect → primary key - foreign key`
```
Databases aren't designed to just have- just like an Excel sheet tons of rows and columns and have all

that information in one place because it's not efficient.

It'll be a lot slower,

it'll be really, really hard to manage.

And the bigger and bigger your company grows it's going to be really, really tough.

A good way to design a database is to have these small little tables that are just concerned,

just like separation of concerns, concerned with their minimal needed information.

And if something else is needed we can just join tables together to grab information.

Remember how we created a primary key. 
```
### `login_id_seq` - `sequence`

`The way relational databases work is when you create a primary key`

`it creates another file that contains this primary key. And you can see that the type is sequence.`
```
Now this is a file that most likely we won't access but internally Postgres is going to make sure because

we set this primary key it's gonna be really, really fast to grab data from the login table when we

request it.

Let's say I wanted to get information from login and users. Perhaps I want to get Sally's information

but I need her birthday, score, age as well as her secret. By using JOINs we can do this.
```
### `SELECT * FROM users JOIN login ON users.name = login.name;`
```
name  | age |   birthday | score | id | secret | name
Frank | 100 | 1992-09-20 |  1    | 1  | secret key | Frank
```
### TO DELETE FROM

`SELECT * FROM users;`

`DELETE FROM users WHERE name = 'KIM';`

### TO DELETE TABLES

`DROP TABLE hi;`