const countdownTimer = () => {
    const countDate = new Date(document.querySelector(".date").value).getTime();
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

    if(now >= countDate) {
        Swal.fire({
            title: 'Event finished!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://em-content.zobj.net/source/microsoft-teams/337/party-popper_1f389.png',
            imageWidth: 160,
            imageHeight: 160,
            imageAlt: 'Party Confetti',
          })

          document.getElementById('days').innerText = "\n" + "D" + "\n" + " days";
          document.getElementById('hours').innerText = "\n" + "O" + "\n" + " hours";
          document.getElementById('minutes').innerText = "\n" + "N" + "\n" + " minutes";
          document.getElementById('seconds').innerText = "\n" + "E" + "\n" + " seconds";
    }
}