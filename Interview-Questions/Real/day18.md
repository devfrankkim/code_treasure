### Explain what is the difference between cookies and local storage?

### Client Side/ Server Side

```js
/* 
    Cookies

    Data accessible both at client side and server side. The data is sent to the serverside with every cookie request.

    Cookies have expiration and cookie data gets deleted after some time

    Storage capacity of cookies is 4095 bytes/cookie
*/
```

```js
/*
    Local Storage

    Only at the local browser side data is accessible. Server cannot use local storage until deliberately sent a request to the server via POST or GET

    There is no expiration and has to remove manually

    Storage capacity of local storage is 5MB per domain
*/
```
