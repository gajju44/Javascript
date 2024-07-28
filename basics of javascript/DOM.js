//Document Object Model is a programming interface for HTML aand XML, represents structure of document

//selecting elements in DOM


<html>
    <body>
        <div id='example' class='class-example'>ababababab</div>
    </body>
</html>


// selecting by ID
const myElement=document.getElementById('example');



//selecting element by Class name
const myElementClass=document.getElementsByClassName('class-example');



//selecting by tag name
const myElementTag=document.getElementsByTagName('div');



//selecting single element using query selector
const myElementquery=document.querySelector('div');//select the first div tag from html document 

//use # for id for example : ('#example');
//use . for class for example : ('.example-class');



//selecting all elements using query selector 

const myElementqueryall=document.querySelectorAll('div'); //select all the div elements from html document 

//use foreach to iterate selected elements one by one





// Modifying content in DOM
 const myElementmod=document.querySelector('div');

 myElementmod.textContent="modify";//will change the text content of the div element



 //Manipulating Attribute in DOM
myElementmod.setAttribute('href','google.com');//set href to google.com


//Manipulating Style in DOM
myElementmod.style.backgroundColor='black';//set background color to black



//Class list property
//we can add class to a element even if he have one or doesnt have one that we can apply the style of other class on it including the existing one:

myElement.classList.add('class2');

//removing class
myElement.classList.add('class-example');



//accessing parent element of a element 

console.log(myElement.parentNode);//will return the parent element of div which is body here(because we are getting div as elemet to perform this operation)


//accessing siblings of a child node

console.log(myElement.previousSibling);//will return previous sibling of div 

console.log(myElement.nextSibling)//will return next siblings of div



//adding and removing elements from DOM

//adding:
const Element=document.createElement('p');

document.appendChild(Element);//we can use parent element instead of document


//removing:
document.removeChild('p');//removing p from document


