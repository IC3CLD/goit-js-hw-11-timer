class CountdownTimer {
    constructor(date) {
        this.selector = document.querySelector(`${date.selector}`);
        this.targetDate = date.targetDate;
        this.spanDay = this.selector.querySelector(`[data-value="days"]`);
        this.spanHours = this.selector.querySelector(`[data-value="hours"]`);
        this.spanMins = this.selector.querySelector(`[data-value="mins"]`);
        this.spanSecs = this.selector.querySelector(`[data-value="secs"]`);
        let timer;
    }
expiretionDate(){this.timer = setInterval(() => {
    let currentTime = Date.now();
    let distance = this.targetDate - currentTime;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);
    this.spanDay.textContent = days;
    this.spanHours.textContent = hours;
    this.spanMins.textContent = mins;
    this.spanSecs.textContent = secs;

    if(distance < 0) {
        clearInterval(this.timer);
        this.spanDay.textContent = `00`;
        this.spanHours.textContent = `00`;
        this.spanMins.textContent = `00`;
        this.spanSecs.textContent = `00`;      
     

    }


}, 1000);
}
}

let tickTack = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
  });
tickTack.expiretionDate()




// let time = new Date(`oct 01 2020 00:00:00`).getTime();

// class TimeRemains {
//     constructor(date) {
//         this.date = date;
//         this.p = document.getElementById(`event-day`);
//     }

//     expiretionDate() {setInterval(() => {
//         let currentTime = new Date().getTime();
//         let distance = this.date - currentTime;
//         let day = Math.floor(distance / (1000*60*60*24));
//         let hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60));
//         let minutes = Math.floor(distance % (1000*60*60)/(1000*60));
//         let seconds = Math.floor(distance % (1000*60)/(1000));
//         this.p.textContent = `${day}d, ${hours}h, ${minutes}m, ${seconds}s.`;

//         if(distance < 0) {
//             clearInterval(this.expiretionDate);
//             p.textContent(`Дата прошла`)
//         }
//     }, 1000)
// }
// }

// new TimeRemains(time).expiretionDate();