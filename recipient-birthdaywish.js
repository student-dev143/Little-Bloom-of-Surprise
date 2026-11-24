const params = new URLSearchParams(window.location.search);

const recipientName = params.get("recipient") || "";
const correctCode = params.get("code");
const sender = params.get("sender");
const messageBox = params.get("message") || "Happy Birthday! 🎉🎂🎈";

document.getElementById("recipient").textContent = recipientName;
document.getElementById("sender").textContent = sender;
document.getElementById("messageBox").textContent = messageBox;
function typeWriter(text, element, speed = 45) {
    element.textContent = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}



const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const funnyOption = document.querySelector("#funny-option");
const message = document.querySelector("#message");

option1.textContent = recipientName;
option2.textContent = "Queen 👑";

function wrongAnswer(button) {
    message.textContent = "❌ Nope! Nice try 😂";
    message.className = "wrong-message";

    button.classList.remove("wrong");
    void button.offsetWidth;
    button.classList.add("wrong");
    button.classList.add("shake");

    setTimeout(function () {
        button.classList.remove("shake");
    }, 500);
}

option1.addEventListener("click", function () {
    wrongAnswer(option1);
});

option2.addEventListener("click", function () {
    wrongAnswer(option2);
});

funnyOption.addEventListener("click", function () {

    message.textContent = "✅ Correct! We found you! 👀";
    message.className = "correct-message";
    funnyOption.classList.add("correct");

    option1.style.display = "none";
    option2.style.display = "none";

  setTimeout(function () {

    document.querySelector(".who-container").style.display = "none";
    document.querySelector("#decode-screen").style.display = "block";

}, 1500);
});


const unlockBtn = document.querySelector("#unlock-btn");
const secretCode = document.querySelector("#secret-code");
const decodeMessage = document.querySelector("#decode-message");

unlockBtn.addEventListener("click", function () {

    if (secretCode.value.trim() === correctCode) {

        decodeMessage.textContent = "🔓 Unlocked!";
        decodeMessage.className = "correct-message";

           setTimeout(function () {
            document.querySelector("#decode-screen").style.display = "none";
            gift.style.display = "block";
            setTimeout(() => {
    const sound = document.getElementById("firework-sounds");
    sound.currentTime = 0;
    sound.play();
}, 1300);
gift.play().catch(function (error) {
    console.error("Video playback error:", error);
});
        }, 1000);
    } else {

        decodeMessage.textContent = "❌ Wrong code... Try again!";
        decodeMessage.className = "wrong-message";

    }

});


const gift = document.querySelector(".gift-box");
const teddy = document.querySelector("#teddy-bear");

let videoFinished = false;

gift.addEventListener("click", function () {
    if (!videoFinished) {
        gift.play().catch(function (error) {
            console.error("Video playback error:", error);
        });
   } else {
    teddy.style.display = "block";

    if (window.innerWidth <= 765) {
        portraitLetter.style.display = "block";
        landscapeLetter.style.display = "none";
    } else {
        landscapeLetter.style.display = "block";
        portraitLetter.style.display = "none";
    }
}
});

const landscapeLetter = document.querySelector(".birthday-letter");
let portraitLetter = document.querySelector(".birthday-letter-portrait");

gift.addEventListener("ended", function () {
    videoFinished = true;
    document.getElementById("letterSound").play();
document.getElementById("letter-content").style.display = "none";
    teddy.style.display = "block";
    teddy.classList.remove("move-left", "move-up");


if (window.innerWidth <= 765) {
    // Hide the letter text until the animation finishes
    document.getElementById("letter-content").style.display = "none";

    // Start the letter emergence after the gift video ends
    setTimeout(function () {
        portraitLetter.style.display = "block";
        portraitLetter.classList.remove("letter-emerge");

        void portraitLetter.offsetWidth;

        portraitLetter.classList.add("letter-emerge");
        landscapeLetter.style.display = "none";
    }, 200);

    // Show the text after the letter emerges
    setTimeout(function () {
        document.getElementById("letter-content").style.display = "flex";
        typeWriter(
            messageBox,
            document.getElementById("messageBox"),
            35
        );
    }, 2100);



    } else {
        // Desktop: Teddy Bear moves to the left
        setTimeout(function () {
            teddy.classList.add("move-left");
        }, 100);

        landscapeLetter.style.display = "block";
        portraitLetter.style.display = "none";

        setTimeout(function () {
            document.getElementById("letter-content").style.display = "flex";
            typeWriter(messageBox, document.getElementById("messageBox"), 35);
        }, 3200);
    }
});

