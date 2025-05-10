function filterCards() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let title = card.getAttribute('data-title').toLowerCase();
        card.style.display = title.includes(input) ? "block" : "none";
    });
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

const firstAidData = {
    "Burns": [
        { text: "Cool the burn under running water for 10 minutes. Do not apply ice." },
        { text: "Cover the burn with a clean, non-stick bandage." }
    ],
    "Cuts": [
        { text: "Apply direct pressure with a clean cloth to stop bleeding." },
        { text: "Clean the wound with soap and water, then apply an antiseptic." }
    ],
    "Choking": [
        { text: "Perform the Heimlich maneuver for adults: stand behind, wrap arms, and thrust upward." },
        { text: "Use back blows and chest thrusts for infants." }
    ],
    "Electric Shock": [
        { text: "Turn off the power source before touching the person." },
        { text: "Check for breathing and provide CPR if needed." }
    ],
    "Food Poisoning": [
        { text: "Encourage the person to sip water to stay hydrated." },
        { text: "Seek medical help if symptoms persist or worsen." }
    ],
    "Fractures": [
        { text: "Immobilize the affected area using a splint or sling." },
        { text: "Apply ice packs to reduce swelling, then seek medical help." }
    ],
    "Heart Attack": [
        { text: "Call emergency services immediately." },
        { text: "Help the person sit comfortably and give aspirin if available." }
    ],
    "Heatstroke & Hypothermia": [
        { text: "Move the person to a cooler or warmer environment accordingly." },
        { text: "Provide fluids for hydration (avoid caffeine or alcohol)." }
    ],
    "Nosebleeds": [
        { text: "Lean the person forward and pinch the nose for 5-10 minutes." },
        { text: "Apply a cold compress to the nose to reduce bleeding." }
    ],
    "Road Accident": [
        { text: "Ensure safety by securing the area, then call emergency services." },
        { text: "Check for responsiveness and provide first aid as needed." }
    ],
    "Snake Bite": [
        { text: "Keep the affected limb still and below heart level." },
        { text: "Do not suck out the venom; seek medical attention immediately." }
    ],
    "Chemical Burns": [
        { text: "Rinse the area with running water for at least 15 minutes." },
        { text: "Remove contaminated clothing and seek medical help." }
    ],
    "Asthma Attack": [
        { text: "Help the person sit upright and use their inhaler." },
        { text: "If symptoms worsen, call emergency services." }
    ],
    "Animal Bites & Insect Stings": [
        { text: "Wash the area with soap and water to prevent infection." },
        { text: "Monitor for allergic reactions and seek medical help if needed." }
    ]
};

let currentPopup = null;

function openPopup(event) {
    const button = event.currentTarget;
    const card = button.closest(".card");
    const condition = card.dataset.title;
    currentPopup = card.querySelector(".popup-container");

    currentPopup.querySelector(".popup-title").innerText = condition;

    const stepsList = currentPopup.querySelector(".steps-list");
    stepsList.innerHTML = ""; // Clear any existing steps

    firstAidData[condition].forEach(step => {
        const li = document.createElement("li");
        li.innerText = step.text;
        stepsList.appendChild(li);
    });

    currentPopup.style.display = "flex";
    currentPopup.querySelector(".closePopup").focus();
}

function closePopup(event) {
    const popup = event.target.closest(".popup-container");
    popup.style.display = "none";
}

document.querySelectorAll(".openPopup").forEach(button => {
    button.addEventListener("click", openPopup);
});

document.querySelectorAll(".closePopup").forEach(button => {
    button.addEventListener("click", closePopup);
});

document.querySelectorAll(".popup-container").forEach(popup => {
    popup.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closePopup({ target: popup.querySelector(".closePopup") });
        }
    });
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});