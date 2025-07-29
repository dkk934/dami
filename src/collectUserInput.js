import { queueMove } from "./Components/Player";

document.getElementById("forward")?.addEventListener("click", () => {
    queueMove("forward");
    });
document.getElementById("backward")?.addEventListener("click", () => {
    queueMove("backward");
    });
document.getElementById("left")?.addEventListener("click", () => {
    queueMove("left");
    });
document.getElementById("right")?.addEventListener("click", () => {
    queueMove("right");
    });
    
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            event.preventDefault(); // Prevent default scrolling behavior
            queueMove("forward");
            break;
        case "ArrowDown":
            event.preventDefault(); // Prevent default scrolling behavior
            queueMove("backward");
            break;
        case "ArrowLeft":
            event.preventDefault(); // Prevent default scrolling behavior
            queueMove("left");
            break;
        case "ArrowRight":
            event.preventDefault(); // Prevent default scrolling behavior
            queueMove("right");
            break;
        default:
            console.log("clicked key: " + event.key);
            
            break; // Ignore other keys
    }
});        