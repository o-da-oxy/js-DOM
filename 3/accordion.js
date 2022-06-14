function toggle() {
    let text = document.getElementById('extra');
    let button = document.querySelector('span');
    if (text.style.display == "none"){
        text.style.display = "inline-block";
        button.textContent = "Less";
    }
    else{
        text.style.display = "none";
        button.textContent = "More";
    }
}