function startButton() { 
    const button = document.querySelector(".start");
    button.addEventListener("click", function() {
        setTimeout(countdownTimer, 1000)
    })
}