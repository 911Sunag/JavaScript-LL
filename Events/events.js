let modebtn = document.querySelector(".mode")

let currmode = "Light";

modebtn.addEventListener("click", ()=> {
    // console.log("you are trying to change mode");
    if(currmode == "Light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currmode= "Light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console,log(currmode);
});