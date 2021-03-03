// Solve the below problems:

// #1) Convert the below promise into asy nc await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);


  async function fetchUser(){
     let fetchResponse = await fetch("https://jsonplaceholder.typicode.com/users/")          
     let response = await fetchResponse.json()      
     console.log(response)        
  }
  fetchUser()

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// const getData = async function () {
//   const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url).then((resp) => resp.json())),
//   );
//   console.log("users", users);
//   console.log("posta", posts);
//   console.log("albums", albums);
// };


  var urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];

  var getData = async function () {
    try{
      let requests = urls.map(async(url) => await fetch(url))
      const [users, posts, albums] = await Promise.all(requests);
      let usersRes = await users.json()
      let postsRes = await posts.json()
      let albumsRes = await albums.json()  
      console.log(usersRes, postsRes, albumsRes)
    } catch(e){
      console.log('Error Message', e)
    }
  };

  getData()

