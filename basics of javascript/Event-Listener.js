//we can obeserve events ocuured in DOM like click, mouse movements, button press etc

//Mouse and Pointer events

//Click:

document.addEventListener('click',function(event){
    //code which we have to execute when on document clicked 
});

//Mouseover:

document.addEventListener('mouseover',function(event)
{
    //code which we have to execute when mouse is hovered on document
});

//Mouseout:

document.addEventListener('mouseout',function(event){
    //code which we have to execute when mouse is not hovered on document
});


//Mousemove:

document.addEventListener('click',function(event){
    //code which we have to execute when mouse moves
});


//Note: "this" keyword in event listeners refers to element which event listener points to







//syntax is same as others:

//Keyboard Events:

//keydown: used to listen when a key is pressed on key board (any key on keyboard) 

//keyup: used to listen when a key is released after pressing

//keypress: similar to keydown but it only listens when alphanumric keys are pressed






//Form events:

//submit: used to listen when a form is submitted

//change: used to listen when a value of any form element is changed 






//Other events:

//load:used to listen when the document is loaded (we can also use 'onload' but its less flexible and harder to maintain)

window.addEventListener('load',function(event){ 
//code to execute
});

//it can also be used to listen to the elements that we are embbeding like <img> <link> <video>  etc



//resize: it's used to listen when the window resizes


//scroll: listens when the element's scrollbar is scrolled