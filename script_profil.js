document.addEventListener("DOMContentLoaded", function () {
    
    const text = "Hallo,Selamat datang di web profil Aulia";
    const typingEffect = document.querySelector(".typing-effect");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingEffect.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    typeText();


});


function enterSite() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        modeToggle.textContent = "Mode Terang";
    } else {
        localStorage.setItem('mode', 'light');
        modeToggle.textContent = "Mode Malam";
    }
});


window.onload = () => {
    if (localStorage.getItem('mode') === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = "Mode Terang";
    }
};





