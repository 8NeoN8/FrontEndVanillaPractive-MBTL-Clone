//HOW TO PLAY VARIABLES
let battleBtn = document.getElementById("battle-system-btn"),
battleContainer = document.getElementById("battle-container");
//HOW TO PLAY VARIABLES

//HOW TO PLAY FUNCTIONALITY

//BATTLE SYSTEM DISPLAY

function checkDisplay(){
  
  if(battleContainer.classList.contains("disappears")){
    battleContainer.classList.remove("disappears");
    battleContainer.classList.add("appears");
    battleBtn.style.backgroundImage = "url(https://meltyblood.typelumina.com/resources/img/en/howto/btn_battle_d80e72ab21e59317216a5bc8b4536ca7.png)"//HELP THIS LINE DOESN'T WORK
  }else if(battleContainer.classList.contains("appears")){
    battleContainer.classList.remove("appears");
    battleContainer.classList.add("disappears");
  }

}

battleBtn.addEventListener("click",checkDisplay);
//BATTLE SYSTEM DISPLAY

//HOW TO PLAY FUNCTIONALITY

//MAIN PROMO VARIABLES
let screenLoad = document.getElementById("load-wrapper");
let promo = document.getElementById("promoSection");
let page = document.getElementById("page");
//MAIN PROMO VARIABLES

//CHARACTER VARIABLES
let back = document.getElementById("MContainer");
let char = document.getElementsByClassName("char-click");
let currentChar = "";
let modal = document.getElementById("modalFront");
let textChar = document.getElementById("char-text")
//CHARACTER VARIABLES

//CHARACTER MODAL SELECTOR
for(let i = 0; i<char.length; i++){
  char[i].addEventListener("click", openModal);
}
function checkCharacter(charClass){
  modal.classList.add(charClass)
  currentChar = charClass;
  if(modal.classList.contains("shiki")){
    console.log("sitiene");
  }
  
}
function changeCharTxt(){

  switch(currentChar){
    case "shiki":
      textChar.innerHTML = "The eldest son of the historical Tohno family, he was raised for some time by the Arima branch family.<br>However, he was called back to Souya to live in the Tohno estate shortly after his father passed away.<br>A childhood injury left him with the Mystic Eyes of Death Perception, giving him the ability to see the death of all things in the form of lines and points.<br>He wears special glasses which prevent his eyes from seeing these things all the time.<br>He may be an ordinary student, but his ability to visualize death has altered his very perception of it.<br>The aftereffects of his accident, combined with the toll his eyes take, has left him with chronic anemia.<br>During battle, he removes his glasses to use his Mystic Eyes of Death Perception.";
      break;
    case "arcueid":
      textChar.innerHTML = "A royal member of the vampire race known as the True Ancestors.<br>After suffering through a traumatic event, a naively innocent side of her was somehow released.<br>She now lives as a free-spirited, almost childish, princess.<br>She is incredibly powerful and, despite being a vampire, is able to survive in direct sunlight.<br>She has no desire to threaten human society, instead hunting other vampires known as Dead Apostles.<br>While pursuing her greatest enemy, she arrives in Souya, where Shiki lives.<br>Although a fateful encounter awaits her and Shiki here, a story of an earlier possibility is about to unfold.";
      break;
    case "akiha":
      textChar.innerHTML = "After the death of her father, she inherits the role of leader of the Tohno family, a distinguished house in Souya.<br>One year younger than her brother Shiki, she arranged for his return from the Arima family.<br>Her flawless etiquette and bearing perfectly epitomize the daughter of a noble house.<br>She is strict even on herself, rejecting such things as modern-day amusements and frivolity.<br>Because of her prideful and strong-willed nature, many find her difficult to approach.<br>Sensing a mysterious presence in her town, and determined to uphold the Tohno family name, she sets off into the night to investigate...";
      break;
    case "ciel":
      textChar.innerHTML = "The Holy Church, a major religion in Europe, does not take kindly to heresy.<br>Ciel works as an executor for its specialized force known as the Burial Agency.<br>Her calling? Hunting and destroying heretics in the name of the Lord.<br>Like Arcueid, she wishes to destroy her mortal enemy and has come to Souya in search of him, deciding to blend in by posing as a regular student at the same high school as Shiki.<br>She currently attends school as a senior, one year above Shiki, and is quite popular with many of the students there.<br>They see her as both warm and cheerful.<br>Her go-to lunch from the school shop is curry bread,<br>and her favorite restaurant serves the best curry in town.";
      break;
    case "hisui":
      textChar.innerHTML = "A maid for the Tohno family, responsible for household chores (except cooking) and taking care of Shiki.She is Kohaku's younger twin.Unlike her sister, she is known for wearing more modern, non-traditional clothing.<br>Her quiet nature makes her true feelings difficult to read,and her formal way of speaking has led Shiki to see her as being rather mechanical.Her fighting skills are not quite on the same level as her sister, but she holds her own well enough.";
      break;
    case "kohaku":
      textChar.innerHTML = "She and her twin sister Hisui have worked for the Tohno family since they were young.Her trademark outfit is an apron over a classic kimono.Apart from assisting Akiha, she does household chores and tends the garden.Her pharmaceutical knowledge means she is also responsible for Shiki when he falls ill.She is endlessly cheerful, always willing to help, and wears a constant smile.<br>In battle, Kohaku can be seen wielding the sword she keeps hidden in her broom,calling on strange plants, and even dropping fire bombs from above as if by magic.How she is capable of such things is still a mystery to those around her."
      break;
    case "kouma":
      textChar.innerHTML = "Head of the Kishima clan, a branch of the Tohno family. He is half demon.<br>Even among mixed-bloods, his demon blood is strong, making him only barely human.<br>Usually very quiet, he chooses to live as a hermit in a remote area of the mountains where he seeks to achieve spiritual enlightenment.<br>Because of this, he often speaks of worldly ties and spirituality.<br>His demeanor in battle, however, reflects his innate strength and demon blood.<br>His ability to use Scorching Heat means those in his way are often burned to ash.";
      break;
    case "miyako":
      textChar.innerHTML = "The eldest daughter of the Arima branch family, which took Shiki in as a child. Currently in the fifth grade, she sees herself as Shiki's other sister.<br>Her feelings are easy to see as she always wears her heart on her sleeve. She unabashedly adores her kind, quiet older “brother”, but whenever he is near, she becomes so nervous she can barely speak. This continued for many years until Shiki was suddenly called back to the Tohno family, and Miyako did not take the news well.<br>She learned bajiquan by observing others in her family's dojo, though it now sits unused. Although she was nowhere near the skill of a true martial artist, her abilities quickly flourish in the ensuing battles. Her destructive powers make it hard to believe she is only 11 years old.";
      break;
    case "noel":
      textChar.innerHTML = "She recently transferred to Shiki's school as a new teacher. She metes out judgment to all blasphemers as an executor for the Holy Church.<br>She may not have the battle experience Ciel does, but she's prepared to fight. Whenever faced with a weak opponent, she shows no mercy, claiming to be“weak against the strong, but overwhelmingly strong against the weak”.<br>At school, she exploits her appeal as an older woman to gain popularity with the boys. The girls, however, don't seem to like her. Judging from the way she idolizes love and marriage, it's safe to say she doesn't have much luck with either.";
      break;
    default:
      textChar.innerHTML ="Something went very wrong. Please try again";
      break;
  }

}
function openModal(){
  changeCharTxt();
  back.style.display = "block";
}
function closeModal(){
  back.style.display = "none";
  modal.classList.remove(currentChar);
  
}

//CHARACTER MODAL SELECTOR

//LOAD ANIMATION
function overflow(){
  page.classList.add("overflow-y-hidden");
}

window.onload = (event) => {  

  setTimeout(function loadingScreenFade() {
    screenLoad.classList.add("fade-off");
  }, 2500);
  setTimeout(function loadingScreenEnd() {
    screenLoad.style.display = "none";
    page.classList.remove("overflow-y-hidden");
  }, 3150);
};//LOAD ANIMATION

//ON SCROLL ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
  el.style.opacity = 0;
});

const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrolllAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

let throttleTimer = false;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

window.addEventListener("scroll", () => {
  throttle(handleScrolllAnimation, 250);
});
//ON SCROLL ANIMATION