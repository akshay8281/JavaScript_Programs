const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Async Task - In Process");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  // console.log("Task Completed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Promise Three");
    resolve({ username: "Akshay8281", Password: "MyPassword123" });
  }, 1000);
});

promiseThree.then(function (user) {
  // console.log(user.Password);
});

const PromiseFour = new Promise(function (resolve, reject) {
  let error = true;
  setTimeout(function () {
    if (!error) {
      //   console.log("Promise Four");
      resolve({ username: "Akshay8281", Password: "123456" });
    } else {
      reject("Error : 401 The Data does not Found");
    }
  }, 1000);
});

PromiseFour.then(function (user) {
  //   console.log(user);
  return user.username;
})
  .then(function (myUsername) {
    // console.log(myUsername);
  })
  .catch(function (err) {
    // console.log(err);
  })
  .finally(function () {
    // console.log("Promsie Either Resolved or Rejected");
  });

const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ language: "JavaScript", name: "Akshay" });
    } else {
      reject("Error : User Data were not Found"); 
    }
  }, 1000);
});

async function consumePromise() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise();
