function correct() {
    for (i = 0; i < 4; i++){
        if (i == 3) {
            document.getElementById("crt").style.backgroundColor = "green";
        }
        else{
            document.getElementsByClassName("wrg")[i].style.backgroundColor = "red";
        }
    }
}

function wrong() {
    for (i = 0; i < 4; i++){
        if (i == 3) {
            document.getElementById("crt").style.backgroundColor = "green";
        }
        else{
            document.getElementsByClassName("wrg")[i].style.backgroundColor = "red";
        }
    }
}

