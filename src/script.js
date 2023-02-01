window.onload = function() { const startButton = document.getElementById("startButton");
startButton.addEventListener("click", Start);

    function Start() {
        console.log("Started");
        startButton.removeEventListener("click", Start);
        startButton.addEventListener("click", Stop);
        startButton.value = "Stop";
    }

    function Stop() {
        console.log("Stopped");
        startButton.removeEventListener("click", Stop);
        startButton.addEventListener("click", Start);
        startButton.value = "Start";
    }
}