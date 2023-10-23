setTimeout(() => {
  console.log("hello");
}, 2000);
setInterval(() => {
  let date = new Date();
  console.log(date.getHours(), date.getMinutes(), date.getSeconds());
}, 1000);
