//promises are just like callback but the are desiged with some extra things to avoid the callback hell while executing multiple aysncronous operations 


//there are three states of a promise:
//Pending: The initial state, neither fulfilled nor rejected.
//Fulfilled: The operation completed successfully.
//Rejected: The operation failed.



//resolve():it get executed when the current operation is executed successfully
//reject():it get executed when there is a error while execution of previous operation




let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operation = true; // simulate a successful operation
        if (operation) {
            resolve("Operation Successful");
        } else {
            reject("Operation Failed");
        }
    }, 1000);
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

//then() is used to catch whatever returned by the resolve()
//and catch() is used to catch whatever returned by the reject() 



//Avoiding callback hell using promises(also called chaining of promises):

function firstOperation() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("First operation done");
            resolve();
        }, 1000);
    });
}

function secondOperation() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Second operation done");
            resolve();
        }, 1000);
    });
}

function thirdOperation() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Third operation done");
            resolve();
        }, 1000);
    });
}


//chaining the promises
firstOperation()
    .then(secondOperation)
    .then(thirdOperation)
    .then(() => {
        console.log("All operations done");
       
    })
  .catch(function(error){
    console.log("an error occured",error);
  });
