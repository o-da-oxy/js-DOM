function attachEventsListeners() {
    document.querySelector('#daysBtn').addEventListener('click', clickDays);
    function clickDays(){
        let days = Number(document.getElementById('days').value);
        let hours = days*24;
        let minutes = hours*60;
        let seconds = minutes*60;
        let h = document.getElementById('hours');
        let m = document.getElementById('minutes');
        let s = document.getElementById('seconds');
        h.value = hours;
        m.value = minutes;
        s.value = seconds;
    }
    
    document.querySelector('#hoursBtn').addEventListener('click', clickHours);
    function clickHours(){
        let hours = Number(document.getElementById('hours').value);
        let days = hours/24;
        let minutes = hours*60;
        let seconds = minutes*60;
        let d = document.getElementById('days');
        let m = document.getElementById('minutes');
        let s = document.getElementById('seconds');
        d.value = days;
        m.value = minutes;
        s.value = seconds;
    }

    document.querySelector('#minutesBtn').addEventListener('click', clickMin);
    function clickMin(){
        let minutes = Number(document.getElementById('minutes').value);
        let hours = minutes/60;
        let days = hours/24;    
        let seconds = minutes*60;
        let d = document.getElementById('days');
        let h = document.getElementById('hours');
        let s = document.getElementById('seconds');
        d.value = days;
        h.value = hours;
        s.value = seconds;
    }

    document.querySelector('#secondsBtn').addEventListener('click', clickSec);
    function clickSec(){
        let seconds = Number(document.getElementById('seconds').value);
        let minutes = seconds/60;
        let hours = minutes/60;
        let days = hours/24;
        let d = document.getElementById('days');
        let h = document.getElementById('hours');
        let m = document.getElementById('minutes');
        d.value = days;
        h.value = hours;
        m.value = minutes;
    }

}