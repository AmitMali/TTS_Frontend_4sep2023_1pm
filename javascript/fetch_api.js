// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((resp) => resp.json())
//   .then((result) => {
//     console.log(users);
//   });

async function logUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await resp.json();
  console.log(result);
}

logUsers();
