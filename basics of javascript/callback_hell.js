//callback hell is multiple callback function which nested within each other leading code hard to read and maintain(also called callback pyramid)

function  firstOperation(callback){
    setTimeout(()=>{
    console.log("this is first function");
    callback();
},1000);
}

function secondOperation(callback){
    setTimeout(() => {
        
   
    console.log("this is second function");
    callback();
}, 1000);
}

function  thirdOperation(callback) {
    setTimeout(()=>{

    console.log("this is third function");
    callback();
},1000);
 
}


firstOperation(()=>{
    secondOperation(()=>{
        thirdOperation(()=>{

        });
    });

});
