let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// heart function
// ----------------- HEART BUTTON FUNCTION -----------------
// ----------------- HEART BUTTON FUNCTION -----------------
document.querySelectorAll(".serviceicon button").forEach(btn => {
    btn.addEventListener("click", () => {
        heartCount++;
        heartCountEl.textContent = heartCount;

        // icon select
        const icon = btn.querySelector("i");

        // toggle regular -> solid
        if (icon.classList.contains("fa-regular")) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            icon.style.color = "red";
        } else {
            // optional: আবার খালি হার্ট বানাতে চাইলে
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            icon.style.color = "black";
        }
    });
});


