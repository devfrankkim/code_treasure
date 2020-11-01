## Node Package Manager

NPM was created for developers to be able to share JavaScript code that they have written.

Push it to NPM Registry for other people to use.

- Not all codes are good
- Each one has to be sent from the server to the browser
- Three types of packages
  
1. Front End Developer
2. The second types are ones that give you new commands that you can use on the command line
3. Node.js on the back end

Three must do things

- html + css + JS

- Github repo + git

- Package.json file

`npm install npm@latest -g`

`npm init` → create package.json file

[https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)

Two ways of installing

1. Globally (-g) (able to use it outside the folder anywhere my computer) - you can run in the terminal
2. Locally ( only able to run in the folder ) 

ex) lodash

→ more javascript function

`npm install [package name]`

### `Lodash`

import { without } from 'lodash'

some browsers don't work with new syntax

Module bundler

might need to use 'require' syntax

ex) es6 + webpack

`npm install -g browserify` (global install)

it allows us to use the `require syntax`

### We give a script file → it outputs another script file → we can use in the browser

### Terminal: `browserify script.js > bundle.js` (getting bundle.js)

- It has created for us a `bundle file` that adds what we wanted so that `the browser understands it`.
- `Browserfiy` allows us to use the syntax that was used in Node.js, on the browser.
- All we had to do was input our script files into `browserify` and then it outputs the bundle for us.

```jsx
<script src="bundle.js">`
```

```jsx
npm i -g npm
npm i --save lodash

var _ = require('lodash');
var arr = [1,2,3,4,5];

// second parameter would be what I want it to be without
console.log('answer', _.without(array, 3));
// [1,2,4,5];
```

### Problems → too massive. Need certain version for work.

### Benefits → Semantic Versioning(Semver)

```jsx
"dependencies":{
	"lodash": "^3.17.5" 
 //  3(Major release) it might break some websites dependend earlier version   
 // 17(minor release - new features)
 //  5(bugs)
}
```

### Tip: I will never put the node modules into my github repo

### All you need is `package.json`file

### - `You can just add npm install` to start the project with exact same version of all the files that everybody has

### Another dependency  →

### `dev dependency(Only needed for development and testing`

so it will never be shipped to a website so that an end user can't see and you can do many many things. 

### NPM scripts will allow you to do comments from package.json file

```jsx
- npm run test // "echo \"Error: no test specified""
- npm run build // I can run the scripts a "build" script that automatically runs.

"scripts":{
	"test" : *"echo \"Error: no test specified"",
	"build" : "browserify script.js > bundle.js && live-server"*
}
```

 

### Why update packages?

- Library is constantly evolving (new features & fixes & security issues)