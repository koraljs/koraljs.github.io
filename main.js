function jump() {
    document.getElementById("round").classList.add("ttg");
    document.getElementById("body").style.backgroundColor = '#fff';
    setTimeout(stop, 999)
    function stop() {
        document.getElementById("body").style.backgroundColor = '#222222';
        document.getElementById("round").classList.remove("ttg");
    }
}