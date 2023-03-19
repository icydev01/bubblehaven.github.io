var character = "bubbly"

function charLeft(){
    document.getElementById("selectSfx").pause();
    document.getElementById("selectSfx").currentTime = 0;
    document.getElementById("selectSfx").play();
    if (character == "bubbly"){
        document.getElementById("characterName").innerHTML = "Spike";
        document.getElementById("characterShowcase").src = "imgs/spike.png";
        character = "spike";
        return
    }
    if (character == "spike"){
        document.getElementById("characterName").innerHTML = "Aaron";
        document.getElementById("characterShowcase").src = "imgs/aaron.png";
        character = "aaron";
        return
    }
    if (character == "aaron"){
        document.getElementById("characterName").innerHTML = "Degen";
        document.getElementById("characterShowcase").src = "imgs/degen.png";
        character = "degen";
        return
    }
    if (character == "degen"){
        document.getElementById("characterName").innerHTML = "The Wisdom Frog";
        document.getElementById("characterShowcase").src = "imgs/the wisdom frog.png";
        character = "the wisdom frog";
        return
    }
    if (character == "the wisdom frog"){
        document.getElementById("characterName").innerHTML = "Chad";
        document.getElementById("characterShowcase").src = "imgs/chad.png";
        character = "chad";
        return
    }
    if (character == "chad"){
        document.getElementById("characterName").innerHTML = "Raggle";
        document.getElementById("characterShowcase").src = "imgs/raggle.png";
        character = "raggle";
        return
    }
    if (character == "raggle"){
        document.getElementById("characterName").innerHTML = "Wanda";
        document.getElementById("characterShowcase").src = "imgs/wanda.png";
        character = "wanda";
        return
    }
    if (character == "wanda"){
        document.getElementById("characterName").innerHTML = "Boggles";
        document.getElementById("characterShowcase").src = "imgs/boggles.png";
        character = "boggles";
        return
    }
    if (character == "boggles"){
        document.getElementById("characterName").innerHTML = "Bubbly";
        document.getElementById("characterShowcase").src = "imgs/bubbly.png";
        character = "bubbly";
        return
    }
}

function charRight(){
    document.getElementById("selectSfx").pause();
    document.getElementById("selectSfx").currentTime = 0;
    document.getElementById("selectSfx").play();
    if (character == "bubbly"){
        document.getElementById("characterName").innerHTML = "Boggles";
        document.getElementById("characterShowcase").src = "imgs/boggles.png";
        character = "boggles";
        return
    }
    if (character == "boggles"){
        document.getElementById("characterName").innerHTML = "Wanda";
        document.getElementById("characterShowcase").src = "imgs/wanda.png";
        character = "wanda";
        return
    }
    if (character == "wanda"){
        document.getElementById("characterName").innerHTML = "Raggle";
        document.getElementById("characterShowcase").src = "imgs/raggle.png";
        character = "raggle";
        return
    }
    if (character == "raggle"){
        document.getElementById("characterName").innerHTML = "Chad";
        document.getElementById("characterShowcase").src = "imgs/chad.png";
        character = "chad";
        return
    }
    if (character == "chad"){
        document.getElementById("characterName").innerHTML = "The Wisdom Frog";
        document.getElementById("characterShowcase").src = "imgs/the wisdom frog.png";
        character = "the wisdom frog";
        return
    }
    if (character == "the wisdom frog"){
        document.getElementById("characterName").innerHTML = "Degen";
        document.getElementById("characterShowcase").src = "imgs/degen.png";
        character = "degen";
        return
    }
    if (character == "degen"){
        document.getElementById("characterName").innerHTML = "Aaron";
        document.getElementById("characterShowcase").src = "imgs/aaron.png";
        character = "aaron";
        return
    }
    if (character == "aaron"){
        document.getElementById("characterName").innerHTML = "Spike";
        document.getElementById("characterShowcase").src = "imgs/spike.png";
        character = "spike";
        return
    }
    if (character == "spike"){
        document.getElementById("characterName").innerHTML = "Bubbly";
        document.getElementById("characterShowcase").src = "imgs/bubbly.png";
        character = "bubbly";
        return
    }
}

function hoverSFX(){
    document.getElementById("hoverSfx").pause();
    document.getElementById("hoverSfx").currentTime = 0;
    document.getElementById("hoverSfx").play();
}

function openClassroom(){
    open("https://classroom.google.com/u/1/")
    close()
}

function openWeb(url){
    open(url)
}