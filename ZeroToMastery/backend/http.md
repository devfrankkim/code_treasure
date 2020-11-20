## HTTP

- Frontend and Backend need to communicate so they use one language to communicate
- JSON & AJAX can help them communicate dynamically

- Server is responsible for whatever you get in the browser.

- Server is just a computer. Somewhere in the world listening to HTTP connection asking to see if there are any files


### Can I own server from my computer?

- yes but without having a server software, our computer is unreachable.
- Nobody over the internet can access our computer because our computer is not a server.
- It has no code that tells that "Hey, if I get a request, send this out"


### Application server

`Server is listening to requests(functions as post, login, sign up and etc)`

1) "Frank just `posted messages that is in JSON format`"

2) Node.js and Express.js file on the `server will read it`.

3) "Ah, we want to store `this post` in our `database`" 

4) The `database` is going to `store the post`, so that `when I come back next time, it's still there.`

5) `Once it's done`, it's going to `response with a success saying "My post is a success"`

6) `Now, it displays in my timeline`


[Another example]

1) I can edit the post, I can delete the post, and again 

2) `Node Server can edit or delete that post from the database` 

3) and then `send a response and remove it from the timeline.`

4) It has the power to constantly be interacting with the Front-end.


## Load Balancer

- This is similar to what Apache or NginX would do.

- Where it listens for an HTTP request and it notices that 

- "Hmmm, this one server here in North America is really busy right now, I am going to transfer this person to this server over here"

- It balances the load of the servers.

- Each one maintains a copy of the other.

- `To work with Back-end, the main goal is to make sure that when we make a HTTP request from the Front-end that we get a response back as fast as possible with correct data.`
- `Make sure that we return those resources well so that our Front-end team can be confident that they are going to receive exactly what we need.`

