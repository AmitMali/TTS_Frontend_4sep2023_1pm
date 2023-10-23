trainer = {
  name: "amit mali",
  email: "amit@gmail.com",
  courses: ["Full Stack", "Python", "c,c++"],
  address: {
    country: "india",
    state: "maharastra",
  },
};

console.log(trainer.name);
console.log(trainer.courses[0]);
console.log(trainer.address.country);
console.log(trainer["address"]["country"]);
console.log(trainer.email);
console.log(trainer["email"]);

t1 =
  '{"name":"amit mali","email":"amit@gmail.com","courses":["Full Stack","Python","c,c++"],"address":{"country":"india","state":"maharastra"}}';
console.log(JSON.parse(t1));
console.log(JSON.stringify(trainer));
