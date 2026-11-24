const params = new URLSearchParams(window.location.search);

const recipient = params.get("recipient");
const sender = params.get("sender");
const dob = params.get("dob");
const message = params.get("message");


document.getElementById("recipientName").textContent = recipient;
document.getElementById("birthday").textContent = dob;
document.getElementById("senderName").textContent = sender;
document.getElementById("letterMessage").textContent = message;


document.querySelector("#yes").addEventListener("click",function(){
    document.querySelector(".container1").style.display = "none";
     document.querySelector(".container2").style.display = "block";

})
console.log(recipient);
console.log(sender);
console.log(dob);
console.log(message);

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

const messages = [
    "No",
    "Are you sure? 🥺",
    "Really? 👀",
    "Try again 😭",
    "Nope! 🫣",
    "You can't catch me 😂",
    "Choose Yes! 💕",
    "Nice try! ✨",
    "Still No? 🥹"
];

let messageIndex = 0;

function moveNoButton(mouseX, mouseY) {

    const rect = noBtn.getBoundingClientRect();

    let dx =
        rect.left + rect.width / 2 - mouseX;

    let dy =
        rect.top + rect.height / 2 - mouseY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance === 0) return;

    dx /= distance;
    dy /= distance;

    const moveAmount = 120;

    noBtn.style.transform =
        `translate(${dx * moveAmount}px,
                   ${dy * moveAmount}px)
         rotate(${dx * 6}deg)`;


    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    noBtn.textContent = messages[messageIndex];
}




noBtn.addEventListener("mouseenter", (e) => {
    moveNoButton(e.clientX, e.clientY);
});



document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();

    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;

    const distance = Math.hypot(
        e.clientX - centerX,
        e.clientY - centerY
    );

    if (distance < 80) {
        moveNoButton(e.clientX, e.clientY);
    }
});


noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
});


/* Yes */

yesBtn.addEventListener("click", () => {

document.getElementById("yesMessage").innerHTML = `
        <span class="animated-word">Yayyy!</span>
        <span class="animated-word">I</span>
        <span class="animated-word">knew</span>
        <span class="animated-word">you'd</span>
        <span class="animated-word">say</span>
        <span class="animated-word">YES!</span>

    `;

    yesBtn.style.transform = "scale(1.15)";
    noBtn.style.display = "none";
});




const gift = document.querySelector("#gift");
const letter = document.querySelector("#letter");
const letterContent = document.querySelector("#letter-content")
let h2 = document.querySelector(".container2 h2");

let envelopeOpened = false;
let envelopeFinished = false;

gift.addEventListener("click", () => {


    if (!envelopeOpened) {
        envelopeOpened = true;
        document.getElementById("envelopeHint").style.display = "none";
setTimeout(() => {
const letterHint = document.getElementById("letterHint");
letterHint.style.display = "block";
letterHint.classList.add("letter-hint-animation");
}, 2200);
        gift.play();
        return;
    }

 
    if (envelopeFinished) {
        letter.style.display = "block";
        letterContent.style.display = "block"
          h2.style.display = "none";
    }


});

gift.addEventListener("ended", () => {
    envelopeFinished = true;
});

const heading = document.querySelector(".container1 h1");
const originalText = heading.textContent.trim();

let typingTimer;

function responsiveTyping() {
    const isResponsive =
        window.innerWidth >= 300 &&
        window.innerWidth <= 1100;

    clearTimeout(typingTimer);

    if (!isResponsive) return;

    heading.textContent = "";

    const textNode = document.createTextNode("");
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";
    cursor.style.height = "0.8em";

    heading.append(textNode, cursor);

    let index = 0;

    function typeCharacter() {
        if (index < originalText.length) {
            textNode.textContent += originalText[index];
            index++;
            typingTimer = setTimeout(typeCharacter, 65);
        }
    }

    typeCharacter();
}

responsiveTyping();


const musicToggle = document.getElementById("musicToggle");
const musicPopup = document.getElementById("musicPopup");

musicToggle.addEventListener("click", () => {
    musicPopup.classList.toggle("show");
});
