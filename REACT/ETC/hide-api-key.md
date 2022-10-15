[CRA - hide api key]
https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app

```js
To to use the env variables in your code:

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
In order to read env variables after having added them to .env, restart your server.
```
