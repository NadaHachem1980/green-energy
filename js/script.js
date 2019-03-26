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

    
/* Get all buttons in a LIST of buttons (array like structure) */
var buttons = [];
buttons[0] = document.getElementsByName("solar")[0];
buttons[1] = document.getElementsByName("wind")[0];
buttons[2] = document.getElementsByName("hydro")[0];
    

var resource = [];



var contentHead = document.getElementById("content-head");
var contentImg = document.getElementById("content-img");
var contentBody = document.getElementById("content-body");
    

    

function handleSelection(evt){
        

    for (i = 0; i < buttons.length; i++) { 
      if(buttons[i].hasAttribute("id")){
          buttons[i].removeAttribute("id");
          break;
      }
    }

   this.setAttribute("id", "active-button");
    

    
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
    
 
}


    
for (i = 0; i < buttons.length; i++) { 
    buttons[i].onclick = handleSelection;
}
