
const NO_PING_PONG_IMAGE = "celebrating_stickman.gif";
const PING_PONG_IMAGE = "ping-clipart-stick-men-ping-pong-players-playing-ping-pong.gif";

let image_status = document.getElementById("image_status");
let status_text = document.getElementById("ping_pong_status");
let refresh_button = document.getElementById("refresh_button");
let busy = true; // API CALL / websocket listen
updateImage(busy);

refresh_button.onclick = () => {
    busy = !busy;
    updateImage(busy);
}


function updateImage(busy) {
    if (busy) {
        image_status.src = PING_PONG_IMAGE;
        status_text.innerHTML = "PING PONG BUSY";
        status_text.style.color = "red";
    } else {
        image_status.src = NO_PING_PONG_IMAGE;
        status_text.innerHTML = "PING PONG AVAILABLE";
        status_text.style.color = "green";
    } 
}