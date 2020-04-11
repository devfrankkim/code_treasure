# How to use Axios(Creating an instance)

How to get API
[axios reference](https://github.com/axios/axios)

Axios의 좋은 점은, 우리가 Axios의 인스턴스를 configure(설정) 해줄 수 있다.  
which means baseURL, headers, timeout 같은 것들을 여러곳에서 반복해서 작성해줄 필요가 없다.

"Creating an instance"  
You can create a new instance of axios with a custom config.

[api.js]

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "your/api/key",
    language: "en-US"
  }
});

[axios v.0.19.2]

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

api.interceptors.request.use(config => {
    config.params = config.params || {};
    config.params['api_key'] = "YourAPIKey";
    config.params['language'] = "en-US";
    return config;
});

api.get("/tv/popular"); // absoulte URL => you have to be careful.
api.get("tv/popular"); // relative URL

export default api;
```

```js
/*Instance methods
The available instance methods are listed below.
The specified config will be merged with the instance config.
*/

axios#request(config)
axios#get(url[, config])
axios#delete(url[, config])
axios#head(url[, config])
axios#options(url[, config])
axios#post(url[, data[, config]])
axios#put(url[, data[, config]])
axios#patch(url[, data[, config]])
axios#getUri([config])
```
