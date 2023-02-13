const formContainer = document.querySelector(".form-container")

$('#event-form').submit(function(e){
    e.preventDefault()
    startCountDown()
})

function startCountDown() {
    const name = document.querySelector('.event-name').value
    document.querySelector('#eventHeadline').textContent = name
}
function handleDate() {
    const date = document.querySelector(".date").value
    const time = document.querySelector(".time").value
    
    const treatDate = `${date}T${time ? time : '00:00'}`

    return treatDate
}

function countdownCalculator() {
    var myInterval = setInterval(countdownCalculator, 1000)
    
    const date = handleDate()
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();
    const timeLeft = countDate - now;

    const days = Math.floor(timeLeft /  (1000 * 60 * 60 * 24));
    const hours =  Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes =  Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds =  Math.floor((timeLeft % (1000 * 60)) / 1000);

    const daysLi =  document.querySelector('#days')
    const hoursLi =  document.querySelector('#hours')
    const minutesLi =  document.querySelector('#minutes')
    const secondsLi =  document.querySelector('#seconds')
    
    daysLi.innerText = "\n" + days + "\n" + " days";
    hoursLi.innerText = "\n" + hours + "\n" + " hours";
    minutesLi.innerText = "\n" + minutes + "\n" + " minutes";
    secondsLi.innerText = "\n" + seconds + "\n" + " seconds";

    if(now >= countDate) {
        clearInterval(myInterval)
        Swal.fire({
            title: 'Event finished!',
            text: '',
            confirmButtonColor: '#598B8E',
            imageUrl: 'https://em-content.zobj.net/source/microsoft-teams/337/party-popper_1f389.png',
            imageWidth: 160,
            imageHeight: 160,
            imageAlt: 'Party Confetti',
          })
          daysLi.innerText = "\n" + "D" + "\n" + " days";
          hoursLi.innerText = "\n" + "O" + "\n" + " hours";
          minutesLi.innerText = "\n" + "N" + "\n" + " minutes";
          secondsLi.innerText = "\n" + "E" + "\n" + " seconds";
    }
}


