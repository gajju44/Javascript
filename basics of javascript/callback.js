//its used to manage aysncronous operations
//callback is a function that takes another function as an argument
function processUserInput(callback) {
    var name = "Gajendra";
    callback(name);
}

// A callback function
function greet(name) {
    console.log('Hello ' + name);
}

// Passing the callback function to the processUserInput function
processUserInput(greet);




//Callbacks are especially useful for handling asynchronous operations. For instance, in the case of making an HTTP request, you might want to execute some code only after the request completes



function fetchData(callback) {
    // Simulating an asynchronous operation (like an HTTP request)
   
    setTimeout(function() {//setTimeout function is used to run a block of code after specified time 
      
        let data = { name: 'John', age: 30 }; // Simulated data

        callback(data); // Calling the callback function with the data
    
    }, 2000); // 2 seconds delay
}

// A callback function to process the fetched data
function processData(data) {
    console.log('Received data:', data);
}

// Calling fetchData and passing processData as the callback
fetchData(processData);
