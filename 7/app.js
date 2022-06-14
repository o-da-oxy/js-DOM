function lockedProfile() {
    let buttons = document.getElementsByTagName('button');
    buttons[0].addEventListener('click', user1click);
    buttons[1].addEventListener('click', user2click);
    buttons[2].addEventListener('click', user3click);

    function user1click(){
        let radio = document.getElementsByName('user1Locked');
        let info = document.getElementById('user1HiddenFields');
        if (radio[1].checked){
            if (info.style.display == "inline"){
                info.style.display = "none";
                buttons[0].textContent = "Show more";
            }
            else{
                info.style.display = "inline";
                buttons[0].textContent = "Hide it";
            }
        }
    }

    function user2click(){
        let radio = document.getElementsByName('user2Locked');
        let info = document.getElementById('user2HiddenFields');
        if (radio[1].checked){
            if (info.style.display == "inline"){
                info.style.display = "none";
                buttons[1].textContent = "Show more";
            }
            else{
                info.style.display = "inline";
                buttons[1].textContent = "Hide it";
            }
        }
    }

    function user3click(){
        let radio = document.getElementsByName('user3Locked');
        let info = document.getElementById('user3HiddenFields');
        if (radio[1].checked){
            if (info.style.display == "inline"){
                info.style.display = "none";
                buttons[2].textContent = "Show more";
            }
            else{
                info.style.display = "inline";
                buttons[2].textContent = "Hide it";
            }
        }
    }

}


function lockedProfile1() {
    let buttons = document.getElementsByTagName('button');
    buttons[0].addEventListener('click', user1click);
    buttons[1].addEventListener('click', user2click);
    buttons[2].addEventListener('click', user3click);

    function user1click() {
        let radio = document.getElementsByName('user1Locked');
        let display = document.getElementById('user1HiddenFields').style.display;
        if(!radio[0].checked) {
            if (display==='contents') {
                display = 'none';
                buttons[0].innerText = 'Show more';
            }
            else {
                display = 'contents';
                buttons[0].innerText = 'Hide it'
            }
        }
        document.getElementById('user1HiddenFields').style.display = display;
    }

    function user2click() {
        let radio = document.getElementsByName('user2Locked');
        let display = document.getElementById('user2HiddenFields').style.display;
        if(!radio[0].checked) {
            if (display==='contents') {
                display = 'none';
                buttons[1].innerText = 'Show more';
            }
            else {
                display = 'contents';
                buttons[1].innerText = 'Hide it'
            }
        }
        document.getElementById('user2HiddenFields').style.display = display;
    }

    function user3click() {
        let radio = document.getElementsByName('user3Locked');
        let display = document.getElementById('user3HiddenFields').style.display;
        if(!radio[0].checked) {
            if (display==='contents') {
                display = 'none';
                buttons[2].innerText = 'Show more';
            }
            else {
                display = 'contents';
                buttons[2].innerText = 'Hide it'
            }
        }
        document.getElementById('user3HiddenFields').style.display = display;
    }


}

