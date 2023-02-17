//armazenamento dos dados no localStorage
function saveToLocalStorage(name, time) {
    const countdown = JSON.parse(window.localStorage.getItem('countdowns'))

    if(!countdown) {
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

// adiciona os countdowns a tabela, e os inicia caso clicados 
let interval;

function loadItems() {
    const countdown = JSON.parse(window.localStorage.getItem('countdowns'))

if(countdown) {
let eventList = document.querySelector('.event-list')
 
eventList.innerHTML = ""

for(let i = 0; i < countdown.length; i++) {
    let list = document.querySelector('.event-list')

    const link = document.createElement("button")
    link.textContent = countdown[i].name
    list.appendChild(link)

    link.onclick = function() {
        clearInterval(interval)
        document.querySelector('.event-headline').textContent = countdown[i].name
        startCountDown(countdown[i].id)
            }
        }
    }
}

// chama o inicio do countdown e puxa os elementos do input
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

// limpa o countdown caso necessário, e o inicia novamente 
function startCountDown(id) {
    
    clearInterval(interval)
    interval = setInterval(() => {
        countdownCalculator(id)
    }, 1000)
}

// faz o calculo de acordo com o id do countdown
function countdownCalculator(id) {
    const countdown = JSON.parse(window.localStorage.getItem('countdowns'))

    const countDate = new Date(countdown[id || id === 0 ? id : countdown.length-1].time).getTime();
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
    // dispara ao chegar o momento do evento
    if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        Swal.fire({
            title: 'Event finished!',
            confirmButtonColor: '#598B8E',
            imageUrl: 'https://em-content.zobj.net/source/microsoft-teams/337/party-popper_1f389.png',
            imageWidth: 160,
            imageHeight: 160,
            imageAlt: 'Party Confetti',
          }) 
    // avisa que o evento ja acabou
    } else if(now >= countDate) {
        daysSpan.innerText = "\n" + "D" + "\n" + " days";
        hoursSpan.innerText = "\n" + "O" + "\n" + " hours";
        minutesSpan.innerText = "\n" + "N" + "\n" + " minutes";
        secondsSpan.innerText = "\n" + "E" + "\n" + " seconds";
    }
}

loadItems()