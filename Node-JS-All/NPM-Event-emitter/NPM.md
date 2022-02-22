`========== nodemon -> looking for index.js ==========`

- CLI = Command Line Interface
- `nodemon` -> looks for index.js by default
- `npm install -g nodemon` Download globally.
- Listen to the changes and restart the server without us constantly having to type.

```js
  "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },
```

`========== dev dependencies ==========`

npm i nodemon -D
npm i nodemon --save-dev

```js
  "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },
```

`========== start project ==========`

1. npm init
2. package.json installed
3. npm i date-fns (one of the packages)

`========== ignore packages for github ==========`

.gitignore
node_modules

`========== update package ==========`

"uuid": "^8.3.2"
`"uuid": "\*"` -> use latest version all the time.

- download specific verison @
  `npm i uuid@8.3.1`
- minor verison
  `npm update`

`========== uninstall package ==========`

- npm un
- npm uninstall
- npm rm nodemon -D
- npm rm nodemon -g

_if you uninstall a package, it does not remove it from your scripts._
