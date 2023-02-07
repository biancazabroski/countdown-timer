function startButton() { 
    const button = document.querySelector(".start");
    button.addEventListener("click", function() {
        setInterval(countdownTimer, 1000)
    })
}