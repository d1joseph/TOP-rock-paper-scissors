export function render(btn) {
    // left window
    let symbol = document.getElementById("player");
    
    document.getElementById(btn).onclick = function() {
        symbol.classList.toggle("fade");
    }
};

export default render;

