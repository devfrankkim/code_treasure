let user = {
    id: 1,
    email: "frank@gmail.com",
    password: 1234,
    entries: 0
}

user = Object.assign(user, {entries : 100})

// ex) In React 


this.setState(Object.assign(this.state.user, {entries: count}))

