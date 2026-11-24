let btn = document.querySelector("#submit");
let RecipientName = document.querySelector("#recipient");
let SenderName = document.querySelector("#sender");
let DobName = document.querySelector("#dob");
let SenderMsg = document.querySelector("#message");


const menuToggle = document.getElementById("menuToggle");
const sideNavbar = document.getElementById("sideNavbar");

menuToggle.addEventListener("click", function () {
    sideNavbar.classList.toggle("active");
});

btn.addEventListener("click",function(e){
 e.preventDefault()
const  recipientName = RecipientName.value;
const  senderName = SenderName.value;
const  dobName = DobName.value;
const  senderMsg = SenderMsg.value;
 const link = `https://student-dev143.github.io/Little-Bloom-of-Surprise/Recipient-letter.html?recipient=${encodeURIComponent(recipientName)}&sender=${encodeURIComponent(senderName)}&dob=${encodeURIComponent(dobName)}&message=${encodeURIComponent(senderMsg)}`;
document.querySelector("form").style.display = "none";

const generatedLink = document.querySelector("#generated-link");
generatedLink.style.display = "block";

document.querySelector("#link-output").value = link;

document.querySelector("#copy-btn").addEventListener("click", async function () {
    const input = document.querySelector("#link-output");

    try {
        await navigator.clipboard.writeText(input.value);
    } catch {
        input.select();
        input.setSelectionRange(0, input.value.length);
        document.execCommand("copy");
    }

    this.textContent = "Copied! ✓";
});

});

