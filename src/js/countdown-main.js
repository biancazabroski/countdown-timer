const countdownTimer = () => {
    const countDate = new Date("Jun 18, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = countDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const daysLeft = Math.floor(timeLeft / days);
    const hoursLeft =  Math.floor((timeLeft % days) / hours);
    const minutesLeft =  Math.floor((timeLeft % hours) / minutes);
    const secondsLeft =  Math.floor((timeLeft % minutes) / seconds);

    document.getElementById('days').innerText = "\n" + daysLeft + "\n" + " days";
    document.getElementById('hours').innerText = "\n" + hoursLeft + "\n" + " hours";
    document.getElementById('minutes').innerText = "\n" + minutesLeft + "\n" + " minutes";
    document.getElementById('seconds').innerText = "\n" + secondsLeft + "\n" + " seconds";
}

