// Get navbar ctrs
const heartCount = document.getElementById("heartcount");
const coinCount = document.getElementById("coincount");
const copyCount = document.getElementById("copycount");

// Select btns
const heartBtns = document.querySelectorAll(".fa-heart");
// heart btn
heartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let count = parseInt(heartCount.innerText);
        if (btn.classList.contains("fa-regular")) {
            btn.classList.remove("fa-regular");
            btn.classList.add("fa-solid", "text-red-500");
            heartCount.innerText = count + 1;
        } else {
            btn.classList.remove("fa-solid", "text-red-500");
            btn.classList.add("fa-regular");
            heartCount.innerText = count - 1;
        }
    });
});
// copy buttons
const copyBtns = document.querySelectorAll(".fa-copy");
copyBtns.forEach((btn) => {
    btn.parentElement.addEventListener("click", () => {
        const card = btn.closest(".section");
        const number = card.querySelector(".contact").innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(number).then(() => {
            alert(`Copied: ${number}`);

            let count = parseInt(copyCount.innerText);
            copyCount.innerText = count + 1;
        });
    });
});
// call buttons
const callBtns = document.querySelectorAll(".fa-phone");
callBtns.forEach((btn) => {
    btn.parentElement.addEventListener("click", () => {
        const card = btn.closest(".section");
        const serviceName = card.querySelector(".servicetitle").innerText;
        const number = card.querySelector(".contact").innerText;

        let coins = parseInt(coinCount.innerText);

        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        // Deduct coins
        coins -= 20;
        coinCount.innerText = coins;

        alert(`Calling ${serviceName} at ${number}...`);
        const currentTime = new Date().toLocaleTimeString();
        const entry = document.createElement("div");
        entry.classList.add(
            "onecalss",
            "bg-gray-100",
            "rounded-xl",
            "p-3",
            "flex",
            "justify-between",
            "items-center"
        );
        entry.innerHTML = `
      <div>
        <h1 class="callstitle font-bold">${serviceName}</h1>
        <p>${number}</p>
      </div>
      <div class="calltime text-gray-600">${currentTime}</div>
    `;
        historySection.appendChild(entry);
    });
});

// History container
const historySection = document.querySelector(".history .calls");
const clearBtn = document.getElementById("clearBtn");

//Clear History
clearBtn.addEventListener("click", () => {
    historySection.innerHTML = "";
});


