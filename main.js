function jump() {
    document.getElementById("round").classList.add("ttg");
    document.getElementById("body").style.backgroundColor = '#fff';
    setTimeout(stop, 999)
    function stop() {
        document.getElementById("body").style.backgroundColor = '#222222';
        document.getElementById("round").classList.remove("ttg");
    }
}

function settings() {
    document.getElementById("body").classList.toggle("back");
    document.getElementById("stngs").classList.toggle("visible");
    document.getElementById("jump").classList.toggle("inv");
}