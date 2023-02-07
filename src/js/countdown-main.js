const countdownTimer = () => {
    const countDate = new Date("Jun 18, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = countDate - now;

    const days = Math.floor(timeLeft /  (1000 * 60 * 60 * 24));
    const hours =  Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes =  Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds =  Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = "\n" + days + "\n" + " days";
    document.getElementById('hours').innerText = "\n" + hours + "\n" + " hours";
    document.getElementById('minutes').innerText = "\n" + minutes + "\n" + " minutes";
    document.getElementById('seconds').innerText = "\n" + seconds + "\n" + " seconds";
}

