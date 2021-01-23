## Webpack

[source for webpack](https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/)

- Now since we are working with React, we must keep in mind that React uses ES6 classes and import statements, something that all the browsers may not be able to understand.
-  To make sure that the code is readable by all browsers, we need a tool like babel to transpile our code to normal readable code for browsers.

```js
// Let’s start by adding a webpack.config.js file in the root of our application structure
// Add the following code in your webpack.config file

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = { 
     //This property defines where the application starts  
    entry:'./src/index.js',
     // This property defines the file path and the file name which will be used for deploying the bundled file 
    output:{ path: path.join(__dirname, '/dist'),    
             filename: 'bundle.js'  
            }, 
     // Setup loaders  
     module: { rules: [ {test: /\.js$/,
               exclude: /node_modules/, use: {loader: 'babel-loader'} }
               ]
             },
    // Setup plugin to use a HTML file for serving bundled js files
     plugins: [ new HtmlWebpackPlugin({template: './src/index.html'})]
     }
```
- First we start by requiring the default path module to access the file location and make changes to the file location.
- Next we require the HTMLWebpackPlugin to generate an HTML file to be used for serving bundled JavaScript file/files.
- Then we have the export.module object with some properties in them. 
- The first one is the entry property, which is used to specify which file webpack should start with to get the internal dependency graph created.

1. ENTRY: To specify which file webpack should start with to get the internal dependency graph created.
2. OUTPUT: specifying where the bundled file should be generated and what the name of the bundled file would be. This is done by the output.path and output.filename properties.
3. LOADERS: To specify what webpack should do for a specific type for file. 
   - Remember that webpack out of box only understands JavaScript and JSON, but if your project has any other language used, this would be the place to specify what to do with that new language.
   - The information should be specified in an object for each module property, which further has an array of rules. 
   - There will be an object for every case.

4. PLUGINS: This is used to extend the capabilities of webpack. 
 - Before a plugin can be used in the plugin array inside the module exports object, we need to require the same.
 - This particular plugin, as explained earlier, will use the specified file in our src folder. It’ll then use that as a template for our HTML file where all the bundled files will be automatically injected.

5. create a .babelrc file: To use the babel preset we installed and take care of the ES6 classes and import statements in our code. 
   - `{"presets": ["env", "react"]}`
6. Now babel will be able to use those presets.


```js
// index.js

// Since the starting point for the application is the index.js file in src folder, let’s start with that. 
// We will start by requiring both React and ReactDOM for our use in this case. Add the below code in your index.js file.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

ReactDOM.render(<App />, document.getElementById('app'));

// So we simply import another file from our components folder, which you will create, and add another file in the folder called App.js. So let’s see what’s inside the App.js file:
```

```js
// App.js
import React, { Component } from 'react'

class App extends Component {  
    render() {   
         return (     
              <div>  
                <h1>Webpack + React setup</h1>      
              </div>    
                )  
            }
        }

export default App;
```

- We are almost done. The only thing left now is to enable hot reloading. 
- This means that every time a change is detected, the browser auto reloads the page and has the ability to build and bundle the entire application when the time comes.
- We can do this by adding script values in the package.json file. 
- Remove the test property in the scripts object of your package.json file and add these two scripts:
  ***`"start": "webpack-dev-server --mode development --open --hot", "build": "webpack --mode production"`***


- You are all set! Go to your terminal, navigate to the root folder, and run npm start. It should start a dev server on your computer and serve the HTML file in your browser.
-  If you make any minor/major changes and save the code, your browser will be automatically refreshed to show the latest set of changes.
-  Once you think you are ready to get the app bundled, you just need to hit the command, npm build, and webpack will create an optimised bundle in your project folder which can be deployed on any web server.