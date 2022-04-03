var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },1500);
}
function moveRight(){
    console.log("right arrow key has been pressed")
}
function moveLeft(){
    console.log("left arow key has been pressed")
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }
}, 100);
// How to bind a key into a function
document.addEventListener('keydown', (e) => {
        if (e.code==="Space") {
            jump();
            console.log("I'm jumping")
        } else if (e.keyCode == '39') {
            moveRight();
        } else if (e.keyCode == '37') {
            moveLeft();
            
        }
}, false);
