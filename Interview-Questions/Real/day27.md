### What is throttling?

- Throttling is a technique used to limit the execution of an event handler function, even when this event triggers continuously due to user actions. The common use cases are browser resizing, window scrolling etc.

- The below example creates a throttle function to reduce the number of events for each pixel change and trigger scroll event for each 100ms except for the first event.

- API throttling is the process of limiting the number of API requests a user can make in a certain period

### How Does API Throttling Work?

- While there are various algorithms for API throttling, here are the basic steps in any API throttling algorithm:

- A client/user calls an API that interfaces with a web service or application.
  The API throttling logic checks if the current request exceeds the allowed number of API calls.
  If the request is within limits, the API performs as usual and completes the user’s task.
  If the request exceeds the limit, the API returns an error response to the user.
  The user will have to wait for a pre-agreed time period, or pay to make any more API calls.

### Why do Businesses Need API Throttling?

- APIs are one of the biggest assets of organizations. APIs help the users of a website or mobile applications fulfil their tasks. As the number of users increases, the websites or the mobile application starts showing the signs of performance degradation. As a result, users with better connections or faster interfaces might get a better experience than others. API throttling is an elegant solution that helps organizations to ensure fair use of their APIs.

- API throttling also helps to fight back denial of service (DoS) attack, where a malicious user sends enormous volumes of requests to bring down a website or a mobile application. As the number of online users increases, businesses need to implement API throttling mechanisms to ensure fair usage, data security, and prevent malicious attacks.

```js
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
x`
window.addEventListener("scroll", () => {
  throttle(handleScrollAnimation, 100);
});
```
