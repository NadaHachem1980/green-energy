// Load your images on page-load
const images = [];

function preloader() {
    const imagesPaths = [
        "./img/solar.jpg",
        "./img/wind.jpg",
        "./img/hydro.jpg"
        ];
    
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }
    
    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    
    setResources();
};    

function setResources(){

    resource["solar"] = {headingContent: "Solar Power", bodyText: "Solar power is the most common and efficient green energy. An array of panels together converts energy from sunlight to electricity. Today this technology is used for small to large scale applications and it produces very efficient green energy to both individuals and business.", imgUrl: images[0].src, imgAlt: ""};
    resource["wind"] = {headingContent: "Wind Power", bodyText: "Wind power is also a type of affordable and efficient green energy. A set of fan blades connected to a turbine will convert the power of air into selectivity. There are many areas where we get string air flows throughout the year. In this areas we can user this technology and generate electricity efficiently.", imgUrl: images[1].src, imgAlt: ""};
    resource["hydro"] = {headingContent: "Hydro Power", bodyText: "Hydro power is also a type of green energy which is used as a main energy source. Here a turbine is rotated using a water flow which runs strongly. So that the turbine converts the hydraulic power into electricity. A tank fold of water can be used to stop the water turbine and generate electricity. Most importantly this technology can be used by individuals or the government as their main source of energy.", imgUrl: images[2].src, imgAlt: ""};
    
    contentHead.innerHTML = (resource["solar"].headingContent);
    contentImg.src = (resource["solar"].imgUrl);
    contentImg.alt = (resource["solar"].imgAlt);
    contentBody.innerHTML = (resource["solar"].bodyText);
}

window.addEventListener("load", preloader);

    
/* Get all buttons in a NODE LIST of buttons (array like structure) */
var buttons = [];
buttons[0] = document.getElementsByName("solar")[0];
buttons[1] = document.getElementsByName("wind")[0];
buttons[2] = document.getElementsByName("hydro")[0];
    
/* Complete your resource-object that will store the dynamic content.
Resource object should 3 sub-objects. Give your sub-objects
meaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. */
var resource = [];

/* Get the reference to your HTML-container
that will be dynamically loaded from the resource-object. */

var contentHead = document.getElementById("content-head");
var contentImg = document.getElementById("content-img");
var contentBody = document.getElementById("content-body");
    
/* 
The first button in a NODE LIST of buttons will initially 
have the id: active-button - this will uniquely style 
the active button (CSS rule). 
    
The first content from the resource-object will be loaded on the page load:
`<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>` */
    
/* Start your handleSelection function here. */ 
function handleSelection(evt){
        
/* Remove the id active-button from the element that
contains it prior to the click-event. 

This will require the loop throught the NODE LIST of buttons. 
Inside the loop, use conditional and the element object method
hasAttribute() to check if the current button in the loop containes the id.
If it does, use element-object property removeAttribute()
to remove the id. */
    for (i = 0; i < buttons.length; i++) { 
      if(buttons[i].hasAttribute("id")){
          buttons[i].removeAttribute("id");
          break;
      }
    }

/* Use the element-object method setAttribute() to set the id active-button 
to the currently clicked button. */
    
    this.setAttribute("id", "active-button");
    
/* Use conditional and event-object to check which button is clicked
and based on that, create HTML with the data inside the backticks:
`<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>`
Assign this content to to your HTML-container that will 
be dynamically loaded (you already got the reference to 
this container before you started the function handleSelection) */
    
    if(buttons[0]===this){
        contentHead.innerHTML = (resource["solar"].headingContent);
        contentImg.src = (resource["solar"].imgUrl);
        contentImg.alt = (resource["solar"].imgAlt);
        contentBody.innerHTML = (resource["solar"].bodyText);
    }
    
    if(buttons[1]===this){
        contentHead.innerHTML = (resource["wind"].headingContent);
        contentImg.src = (resource["wind"].imgUrl);
        contentImg.alt = (resource["wind"].imgAlt);
        contentBody.innerHTML = (resource["wind"].bodyText);
    }
    
    if(buttons[2]===this){
        contentHead.innerHTML = (resource["hydro"].headingContent);
        contentImg.src = (resource["hydro"].imgUrl);
        contentImg.alt = (resource["hydro"].imgAlt);
        contentBody.innerHTML = (resource["hydro"].bodyText);
    }
    
/* Close your handleSelection function here. */  
}


    
/*  Register all buttons to click event. The event-handler handleSelection will listen 
for this event to happen. */
for (i = 0; i < buttons.length; i++) { 
    buttons[i].onclick = handleSelection;
}
