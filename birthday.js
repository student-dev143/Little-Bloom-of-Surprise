const form = document.querySelector("form");
const btn = document.querySelector(".send-btn");
const menuToggle = document.getElementById("menuToggle");
const sideNavbar = document.getElementById("sideNavbar");

menuToggle.addEventListener("click", function () {
    sideNavbar.classList.toggle("active");
});



btn.addEventListener("click", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");

    const recipientName = inputs[0].value;
    const senderName = inputs[1].value;
    const secretCode = inputs[2].value;
    const senderMsg = textarea.value;

  const link = `${window.location.origin}/recipient-birthdaywish.html?recipient=${encodeURIComponent(recipientName)}&sender=${encodeURIComponent(senderName)}&code=${encodeURIComponent(secretCode)}&message=${encodeURIComponent(senderMsg)}`;
    form.style.display = "none";
    document.querySelector(".form-features").style.display = "none";

    document.querySelector("#generated-link").style.display = "block";
    document.querySelector("#link-output").value = link;
});

document.querySelector("#copy-btn").addEventListener("click", async function () {
    const linkInput = document.querySelector("#link-output");

    try {
        await navigator.clipboard.writeText(linkInput.value);
    } catch (error) {
        linkInput.focus();
        linkInput.select();
        linkInput.setSelectionRange(0, linkInput.value.length);

        const copied = document.execCommand("copy");

        if (!copied) {
            this.textContent = "Select & Copy";
            return;
        }
    }
  this.textContent = "Copied! ✓";
});

