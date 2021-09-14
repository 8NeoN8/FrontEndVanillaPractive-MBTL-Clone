//HOW TO PLAY VARIABLES
let battleBtn = document.getElementById("battle-system-btn"),
battleContainer = document.getElementById("battle-container"),
modesBtn = document.getElementById("play-modes-btn"),
modesContainer = document.getElementById("modesContainer");
//HOW TO PLAY VARIABLES

//BATTLE SYSTEM DISPLAY


/*let giveheight = () =>{
  alert(modesContainer.scrollHeight);
}
giveheight();*/

let checkDisplay = (btn) => {
  if(btn==="battle-system-btn"){
    if(!battleContainer.classList.contains("showIt")){;
      battleContainer.classList.add("showIt");
      battleBtn.style.backgroundPosition = "0 -82px"
    }else if(battleContainer.classList.contains("showIt")){
      battleContainer.classList.remove("showIt");
      battleBtn.style.backgroundPosition = "0 0"
    }
  }else{

    if(btn==="play-modes-btn"){
      if(!modesContainer.classList.contains("showIt2")){
        modesContainer.classList.add("showIt2");
        modesContainer.style.height = "100%"
        modesBtn.style.backgroundPosition = "0 -82px"
      }else if(modesContainer.classList.contains("showIt2")){
        modesContainer.classList.remove("showIt2");
        modesBtn.style.backgroundPosition = "0 0"
      }
    }

  }
    
}

//BATTLE SYSTEM DISPLAY