if (localStorage.getItem('clicksAmt2') !== null) {
    var clicks = Number(localStorage.getItem("clicksAmt2"));
      localStorage.setItem("clicksAmt2", "0");
  } else {
    localStorage.setItem("clicksAmt2", "0");
    var clicks = 0;
}

if (localStorage.getItem('perClickAmt') !== null) {
    var clickgain = Number(localStorage.getItem("perClickAmt"));
      localStorage.setItem("perClickAmt", "1");
  } else {
    localStorage.setItem("perClickAmt", "1");
    var clickgain = 1;
}

document.getElementById("clickCount").innerHTML = clicks+" Clicks";
document.getElementById("perClickCount").innerHTML = "+"+clickgain+" per click";
document.getElementById("clickGainBtn").innerHTML = "+1 per click ("+(clickgain+0.5) * 100+" Clicks)";

function clickBubblyGame(){
    clicks = clicks + clickgain;
    document.getElementById("clickCount").innerHTML = clicks+" Clicks";
    document.getElementById("clickSfx").pause();
    document.getElementById("clickSfx").currentTime = 0;
    document.getElementById("clickSfx").volume = 0.2;
    document.getElementById("clickSfx").play();
    localStorage.setItem("clicksAmt2", clicks);
}

function addClickGain(){
    if (clicks >= (clickgain+0.5) * 100){
        clicks = clicks - ((clickgain+0.5) * 100)
        clickgain = clickgain + 1 //+1 per click (100 Clicks)
        document.getElementById("clickGainBtn").innerHTML = "+1 per click ("+(clickgain+0.5) * 100+" Clicks)";
        document.getElementById("clickCount").innerHTML = clicks+" Clicks";
        document.getElementById("perClickCount").innerHTML = "+"+clickgain+" per click";
        document.getElementById("powerUpSfx").pause();
        document.getElementById("powerUpSfx").currentTime = 0;
        document.getElementById("powerUpSfx").volume = 0.5;
        document.getElementById("powerUpSfx").play();
    }
}