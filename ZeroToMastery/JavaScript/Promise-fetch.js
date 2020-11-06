// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000)
  });
  
  // #2) Run the above promise and make it console.log "success"
  promise.then(console.log)
  // or
  promise.then(resp => console.log(resp))
  
  // #3) Read about Promise.resolve() and Promise.reject(). How can you make
  // the above promise shorter with Promise.resolve() and console loggin "success"
  const promise = Promise.resolve(
    setTimeout(() => {
      console.log("success");
    }, 4000)
  );
  
  // #4) Catch this error and console log 'Ooops something went wrong'
  Promise.reject('failed')
    .catch(console.log('Ooops something went wrong'))
  
  // #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
  // Console.log the output and make sure it has a catch block as well.
  
  const urls = [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/3/',
    'https://swapi.dev/api/people/4/'
  ]
  
  let requests = urls.map(url => fetch(url).then(res => res.json()));
  
  console.log(requests); //  (4) [Promise, Promise, Promise, Promise]
  
  Promise.all(requests).then(data => console.log(data)) // (4) [{…}, {…}, {…}, {…}]
  
  Promise.all(requests)
    .then(data => data.forEach(response => console.log(response))) // {...}, {...}, {...}, {...}
    .catch(err => console.log("Error Message will show up here", err)); // Error Message pop up if there's any Errors.
  