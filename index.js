//! event bubbling: jispe click krenge , us element pe event raise hoga, aur event listener na milne par event jo event hai wo elemnet ke parent par listener dhudhega, wha bhi nhi milega to event parent ke parent ke parent pr listener dhudhega 



var timer = 60;
var score = 0;
var newHit = 0
// make bubble
function makeBubble(){
    var clutter = "";
    for(var i = 1; i<=152; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

// set timmer
function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Your Score ${score}</h1>`;
            

        }
        
    },1000);
}

// set new hit
function setNewHit(){
    newHit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = newHit;
}

// score
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function decreaseScore(){
    score -= 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
    var clickedNum = (Number(details.target.textContent));
    if(clickedNum  == newHit){
        increaseScore();
        setNewHit();
        makeBubble();
    }else{
        decreaseScore();
        setNewHit();
        makeBubble();
    }
});


runTimer();
makeBubble();
setNewHit();


// details.target.textContent aise he string me hai ,isliye number me dale hai ki string se number ho jaye
