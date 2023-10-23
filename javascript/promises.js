function fakePromise() {
  let msg;
  setTimeout(() => {
    msg = "dulhan ki wadai ka waqt aa chuka hai";
  }, 100);

  console.log(msg);
}

fakePromise();
