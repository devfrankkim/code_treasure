## JWT

- JSON Web Tokens
- JTWs can be considered to `be a form of user identification` that is issued `after the initial user authentication takes place`.
- JTW는, 첫번째 유저 인증이 일어나게 되면, 유저를 확인 해주는 폼이야.

`npm i dotenv jsonwebtoken cookie-parser`
`require('crypto').randomBytes(64).toString('hex')` - This will give us random crypto bytes string that we can use as our access token secret

```js
  "dependencies": {
    "express": "^4.17.3",
    "bcrypt": "^5.0.1",
    "dotenv": "^16.0.0",
    "cookie-parser": "^1.4.6",
    "jsonwebtoken": "^8.5.1",
  }
```

- `node` has a common core module called crpyto

  - In terminal, `node` `require('crypto').randomBytes(64).toString('hex')`
  - This will give us random crypto bytes string that we can use as our access token secret

- Make sure we end the .env file in gitignore file.

### refresh token vs access token

- The refresh token has a longer lifespan.
- It should only be stored in an httpOnly cookie that is not accessible by Javascript.
- The access token has a short lifespan.
- It should only be stored in the state of the frontend app.
- Neither should be stored in local storage.

```js
// ========================= before clean up =========================
const jwt = require("jsonwebtoken");
require("dotenv").config();
const fsPromises = require("fs").promises;
const path = require("path");
```

```js
const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  // try to find the user that's sent in. make sure if the username exists even before checking the password.
  const foundUser = usersDB.users.find((person) => person.username === user);
  if (!foundUser) return res.sendStatus(401); // Unauthorized

  // evaluate password
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    // Create JWT (to send) to use with other routes that we want protected in our API.
    // We would actually create and send a couple of JWTs which would be normal token and then refresh token.
    // add protected routes to our express api (jwts)
    // ============  Protect Routes with json web tokens  ============
    // create JWTs
    // Define access token
    // the first thing we need to pass into the jwt ((1) payload (2))
    // don't pass password that will hurt your security. ex) username

    // To create access tokens -> secret we defined in our .env file
    // ({username}, .env, option value)

    // create JWTs
    const accessToken = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    // Saving refreshToken with current user
    const otherUsers = usersDB.users.filter(
      (person) => person.username !== foundUser.username
    );
    const currentUser = { ...foundUser, refreshToken };

    usersDB.setUsers([...otherUsers, currentUser]);

    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );

    // ======== Need to send both refreshToken & accessToken to the user ========
    // cookie is sent with every request.
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // sameSite: "None",
      // secure: true,
    });

    res.json({ accessToken });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

module.exports = { handleLogin };

// 사용자 -> 액션 취하면 -> 컨트롤러가 일을 시작해 -> 모델로 가는 라우팅을 설정해줘 -> (우리는 여기서 server에 라우팅 config 설정 해줘야한다.)
```
