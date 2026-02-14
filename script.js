const lamp = document.getElementById("lamp");
const room = document.getElementById("room");
const statusText = document.getElementById("status");

lamp.addEventListener("click", function () {
    lamp.classList.toggle("on");

    if (lamp.classList.contains("on")) {
        room.classList.remove("dark");
        room.classList.add("light");
        statusText.textContent = "Lamp is ON";
    } else {
        room.classList.remove("light");
        room.classList.add("dark");
        statusText.textContent = "Lamp is OFF";
    }
});
