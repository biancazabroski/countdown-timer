function startButton() { 
    const button = document.querySelector(".start");
    button.addEventListener("click", Start);
    
        function Start() {
            setInterval(countdownTimer, 1000)
            button.removeEventListener("click", Start);
            button.addEventListener("click", Stop);
            button.value = "Stop";
        }
    
        function Stop() {
            button.removeEventListener("click", Stop);
            button.addEventListener("click", Start);
            button.value = "Start";
        }
}