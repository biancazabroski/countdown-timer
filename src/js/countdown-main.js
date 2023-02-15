let eventInfo = []

function saveToLocalStorage(name, time) {
    const countdown = JSON.parse(window.localStorage.getItem('countdowns'))
    if(!countdown) {
        console.log(countdown)
        window.localStorage.setItem('countdowns', JSON.stringify([{
            id: 0,
            name: name,
            time: time,
        }]))
    } else {
        countdown.push({
            id: countdown.length,
            name: name,
            time: time,
        })
        window.localStorage.setItem('countdowns', JSON.stringify(countdown))
    }

    loadItems()
}

function loadItems() {

const countdown = JSON.parse(window.localStorage.getItem('countdowns'))

if(countdown) {
let tbody = document.getElementById('tbody')
 
tbody.innerHTML = ""

for(let i = 0; i < countdown.length; i++) {
    let row = tbody.insertRow()


    let rowName = row.insertCell()

    rowName.innerText = countdown[i].name
    rowName.onclick = function() {
        document.querySelector('.event-headline').textContent = countdown[i].name
        startCountDown(countdown[i].id)
    }
        }
    }
}

$('.event-form').submit(function(e){
    e.preventDefault()
    startCountDown()
    const name = document.querySelector('.event-name').value
    document.querySelector('.event-headline').textContent = name

    const date = document.querySelector(".date").value
    const time = document.querySelector(".time").value
    
    const treatDate = `${date}T${time ? time : '00:00'}`
    saveToLocalStorage(name, treatDate)
})



function startCountDown(id) {
    setInterval(() => {
        countdownCalculator(id)
    }, 1000)
}

function countdownCalculator(id) {
    const countdown = JSON.parse(window.localStorage.getItem('countdowns'))

    const countDate = new Date(countdown[id ? id : countdown.length-1].time).getTime();
    const now = new Date().getTime();
    const timeLeft = countDate - now;

    const days = Math.floor(timeLeft /  (1000 * 60 * 60 * 24));
    const hours =  Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes =  Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds =  Math.floor((timeLeft % (1000 * 60)) / 1000);

    const daysSpan =  document.querySelector('#days')
    const hoursSpan =  document.querySelector('#hours')
    const minutesSpan =  document.querySelector('#minutes')
    const secondsSpan =  document.querySelector('#seconds')
    
    daysSpan.innerText = "\n" + days + "\n" + " days";
    hoursSpan.innerText = "\n" + hours + "\n" + " hours";
    minutesSpan.innerText = "\n" + minutes + "\n" + " minutes";
    secondsSpan.innerText = "\n" + seconds + "\n" + " seconds";

    if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        Swal.fire({
            title: 'Event finished!',
            confirmButtonColor: '#598B8E',
            imageUrl: 'https://em-content.zobj.net/source/microsoft-teams/337/party-popper_1f389.png',
            imageWidth: 160,
            imageHeight: 160,
            imageAlt: 'Party Confetti',
          })
    } else if(now >= countDate) {
        daysSpan.innerText = "\n" + "D" + "\n" + " days";
        hoursSpan.innerText = "\n" + "O" + "\n" + " hours";
        minutesSpan.innerText = "\n" + "N" + "\n" + " minutes";
        secondsSpan.innerText = "\n" + "E" + "\n" + " seconds";
    }
}

loadItems()