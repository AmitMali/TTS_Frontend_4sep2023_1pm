function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "john", email: "john@test.com" },
        { username: "jane", email: "jane@test.com" },
      ]);
    }, 1000);
  });
}

function findUser(username) {
  getUsers().then((users) => {
    user = users.find((user) => (user.name = username));
    console.log(user);
  });
}

findUser("john");

// const mypromise = new Promise((resolve, reject) => {
//   // resolve("success");
//   reject("failed");
// });

// mypromise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => console.log(err));
