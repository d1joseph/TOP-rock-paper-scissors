let render = () => {
    // left window
    let symbol = document.getElementById("player");
    
    document.getElementById("rock").onclick = function() {
        symbol.classList.toggle("fade");
    }
};


