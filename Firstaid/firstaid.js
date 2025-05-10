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
        { 
            text_en: "Cool the burn under running water for 10 minutes. Do not apply ice.",
            text_hi: "जलन को 10 मिनट तक बहते पानी के नीचे ठंडा करें। बर्फ न लगाएं।"
        },
        { 
            text_en: "Cover the burn with a clean, non-stick bandage.",
            text_hi: "जलन को साफ, गैर-चिपकने वाली पट्टी से ढकें।"
        }
    ],
    "Cuts": [
        { 
            text_en: "Apply direct pressure with a clean cloth to stop bleeding.",
            text_hi: "खून रोकने के लिए साफ कपड़े से सीधा दबाव डालें।"
        },
        { 
            text_en: "Clean the wound with soap and water, then apply an antiseptic.",
            text_hi: "घाव को साबुन और पानी से साफ करें, फिर एंटीसेप्टिक लगाएं।"
        }
    ],
    "Choking": [
        { 
            text_en: "Perform the Heimlich maneuver for adults: stand behind, wrap arms, and thrust upward.",
            text_hi: "वयस्कों के लिए हेमलिक मैन्यूवर करें: पीछे खड़े हों, बाहों को लपेटें, और ऊपर की ओर जोर दें।"
        },
        { 
            text_en: "Use back blows and chest thrusts for infants.",
            text_hi: "शिशुओं के लिए पीठ पर थपकी और छाती पर जोर का उपयोग करें।"
        }
    ],
    "Electric Shock": [
        { 
            text_en: "Turn off the power source before touching the person.",
            text_hi: "व्यक्ति को छूने से पहले बिजली स्रोत बंद करें।"
        },
        { 
            text_en: "Check for breathing and provide CPR if needed.",
            text_hi: "सांस की जांच करें और जरूरत पड़ने पर सीपीआर दें।"
        }
    ],
    "Food Poisoning": [
        { 
            text_en: "Encourage the person to sip water to stay hydrated.",
            text_hi: "व्यक्ति को हाइड्रेटेड रहने के लिए पानी पीने के लिए प्रोत्साहित करें।"
        },
        { 
            text_en: "Seek medical help if symptoms persist or worsen.",
            text_hi: "लक्षण बने रहने या बिगड़ने पर चिकित्सा सहायता लें।"
        }
    ],
    "Fractures": [
        { 
            text_en: "Immobilize the affected area using a splint or sling.",
            text_hi: "प्रभावित क्षेत्र को स्प्लिंट या स्लिंग का उपयोग करके स्थिर करें।"
        },
        { 
            text_en: "Apply ice packs to reduce swelling, then seek medical help.",
            text_hi: "सूजन कम करने के लिए बर्फ पैक लगाएं, फिर चिकित्सा सहायता लें।"
        }
    ],
    "Heart Attack": [
        { 
            text_en: "Call emergency services immediately.",
            text_hi: "तुरंत आपातकालीन सेवाओं को कॉल करें।"
        },
        { 
            text_en: "Help the person sit comfortably and give aspirin if available.",
            text_hi: "व्यक्ति को आराम से बैठने में मदद करें और यदि उपलब्ध हो तो एस्पिरिन दें।"
        }
    ],
    "Heatstroke & Hypothermia": [
        { 
            text_en: "Move the person to a cooler or warmer environment accordingly.",
            text_hi: "व्यक्ति को ठंडे या गर्म वातावरण में ले जाएं, जैसा उचित हो।"
        },
        { 
            text_en: "Provide fluids for hydration (avoid caffeine or alcohol).",
            text_hi: "हाइड्रेशन के लिए तरल पदार्थ प्रदान करें (कैफीन या अल्कोहल से बचें)।"
        }
    ],
    "Nosebleeds": [
        { 
            text_en: "Lean the person forward and pinch the nose for 5-10 minutes.",
            text_hi: "व्यक्ति को आगे झुकाएं और नाक को 5-10 मिनट तक दबाएं।"
        },
        { 
            text_en: "Apply a cold compress to the nose to reduce bleeding.",
            text_hi: "खून कम करने के लिए नाक पर ठंडा सेक लगाएं।"
        }
    ],
    "Road Accident": [
        { 
            text_en: "Ensure safety by securing the area, then call emergency services.",
            text_hi: "क्षेत्र को सुरक्षित करके सुरक्षा सुनिश्चित करें, फिर आपातकालीन सेवाओं को कॉल करें।"
        },
        { 
            text_en: "Check for responsiveness and provide first aid as needed.",
            text_hi: "प्रतिक्रिया की जांच करें और जरूरत के अनुसार प्राथमिक चिकित्सा प्रदान करें।"
        }
    ],
    "Snake Bite": [
        { 
            text_en: "Keep the affected limb still and below heart level.",
            text_hi: "प्रभावित अंग को स्थिर रखें और हृदय के स्तर से नीचे रखें।"
        },
        { 
            text_en: "Do not suck out the venom; seek medical attention immediately.",
            text_hi: "जहर को चूसकर न निकालें; तुरंत चिकित्सा सहायता लें।"
        }
    ],
    "Chemical Burns": [
        { 
            text_en: "Rinse the area with running water for at least 15 minutes.",
            text_hi: "क्षेत्र को कम से कम 15 मिनट तक बहते पानी से धोएं।"
        },
        { 
            text_en: "Remove contaminated clothing and seek medical help.",
            text_hi: "दूषित कपड़े हटाएं और चिकित्सा सहायता लें।"
        }
    ],
    "Asthma Attack": [
        { 
            text_en: "Help the person sit upright and use their inhaler.",
            text_hi: "व्यक्ति को सीधा बैठने में मदद करें और उनके इनहेलर का उपयोग करें।"
        },
        { 
            text_en: "If symptoms worsen, call emergency services.",
            text_hi: "यदि लक्षण बिगड़ते हैं, तो आपातकालीन सेवाओं को कॉल करें।"
        }
    ],
    "Animal Bites & Insect Stings": [
        { 
            text_en: "Wash the area with soap and water to prevent infection.",
            text_hi: "संक्रमण रोकने के लिए क्षेत्र को साबुन और पानी से धोएं।"
        },
        { 
            text_en: "Monitor for allergic reactions and seek medical help if needed.",
            text_hi: "एलर्जी प्रतिक्रियाओं की निगरानी करें और जरूरत पड़ने पर चिकित्सा सहायता लें।"
        }
    ]
};

// Translations for static text in HTML
const translations = {
    "title": { en: "First Aid", hi: "प्राथमिक चिकित्सा" },
    "nav-logo": { en: "Emergency Help", hi: "आपातकालीन सहायता" },
    "nav-home": { en: "Home", hi: "होम" },
    "nav-first-aid": { en: "First Aid", hi: "प्राथमिक चिकित्सा" },
    "nav-helpline": { en: "Helpline", hi: "हेल्पलाइन" },
    "nav-signup": { en: "Sign Up", hi: "साइन अप" },
    "nav-contact": { en: "Contact Us", hi: "संपर्क करें" },
    "lang-toggle": { en: "हिन्दी", hi: "English" },
    "page-title": { en: "First Aid Services", hi: "प्राथमिक चिकित्सा सेवाएँ" },
    "page-subtitle": { en: "Learn how to provide immediate care in emergencies", hi: "आपातकाल में तत्काल देखभाल प्रदान करना सीखें" },
    "search-placeholder": { en: "Search First Aid Methods...", hi: "प्राथमिक चिकित्सा विधियाँ खोजें..." },
    "read-more": { en: "Read More", hi: "और पढ़ें" },
    "card-burns-title": { en: "Burns", hi: "जलन" },
    "card-burns-desc": { en: "Cool the burn with running water for at least 10 minutes.", hi: "जलन को कम से कम 10 मिनट तक बहते पानी से ठंडा करें।" },
    "card-cuts-title": { en: "Cuts", hi: "कट" },
    "card-cuts-desc": { en: "Apply pressure with a clean cloth to stop bleeding.", hi: "खून रोकने के लिए साफ कपड़े से दबाव डालें।" },
    "card-choking-title": { en: "Choking", hi: "दम घुटना" },
    "card-choking-desc": { en: "Perform back blows and abdominal thrusts.", hi: "पीठ पर थपकी और पेट पर जोर दें।" },
    "card-fractures-title": { en: "Fractures", hi: "फ्रैक्चर" },
    "card-fractures-desc": { en: "Immobilize the affected area and seek medical help.", hi: "प्रभावित क्षेत्र को स्थिर करें और चिकित्सा सहायता लें।" },
    "card-food-poisoning-title": { en: "Food Poisoning", hi: "खाद्य विषाक्तता" },
    "card-food-poisoning-desc": { en: "Keep the person hydrated and seek medical help.", hi: "व्यक्ति को हाइड्रेटेड रखें और चिकित्सा सहायता लें।" },
    "card-nosebleeds-title": { en: "Nosebleeds", hi: "नकसीर" },
    "card-nosebleeds-desc": { en: "Pinch the nose and lean forward to stop bleeding.", hi: "खून रोकने के लिए नाक दबाएं और आगे झुकें।" },
    "card-chemical-burns-title": { en: "Chemical Burns", hi: "रासायनिक जलन" },
    "card-chemical-burns-desc": { en: "Rinse the area with water for at least 15 minutes.", hi: "क्षेत्र को कम से कम 15 मिनट तक पानी से धोएं।" },
    "card-asthma-attack-title": { en: "Asthma Attack", hi: "दमा का दौरा" },
    "card-asthma-attack-desc": { en: "Help the person use their inhaler and sit upright.", hi: "व्यक्ति को इनहेलर का उपयोग करने में मदद करें और सीधा बैठें।" },
    "card-snake-bite-title": { en: "Snake Bite", hi: "साँप का काटना" },
    "card-snake-bite-desc": { en: "Keep the person calm and immobilize the bitten area.", hi: "व्यक्ति को शांत रखें और काटे गए क्षेत्र को स्थिर करें।" },
    "card-animal-bites-title": { en: "Animal Bites & Insect Stings", hi: "जानवरों का काटना और कीड़े का डंक" },
    "card-animal-bites-desc": { en: "Wash the area with soap and water; monitor for reactions.", hi: "क्षेत्र को साबुन और पानी से धोएं; प्रतिक्रियाओं की निगरानी करें।" },
    "card-road-accident-title": { en: "Road Accident", hi: "सड़क दुर्घटना" },
    "card-road-accident-desc": { en: "Ensure safety, then check for responsiveness and call for help.", hi: "सुरक्षा सुनिश्चित करें, फिर प्रतिक्रिया जांचें और मदद के लिए कॉल करें।" },
    "card-heatstroke-hypothermia-title": { en: "Heatstroke & Hypothermia", hi: "लू और हाइपोथर्मिया" },
    "card-heatstroke-hypothermia-desc": { en: "Move to a suitable environment and regulate body temperature.", hi: "उपयुक्त वातावरण में ले जाएं और शरीर के तापमान को नियंत्रित करें।" },
    "card-electric-shock-title": { en: "Electric Shock", hi: "बिजली का झटका" },
    "card-electric-shock-desc": { en: "Turn off the power source before assisting.", hi: "सहायता करने से पहले बिजली स्रोत बंद करें।" },
    "card-heart-attack-title": { en: "Heart Attack", hi: "दिल का दौरा" },
    "card-heart-attack-desc": { en: "Call emergency services and assist with aspirin if available.", hi: "आपातकालीन सेवाओं को कॉल करें और यदि उपलब्ध हो तो एस्पिरिन दें।" },
    "footer-health": { en: "Health", hi: "स्वास्थ्य" },
    "footer-nutrition": { en: "Nutrition", hi: "पोषण" },
    "footer-exercise": { en: "Exercise", hi: "व्यायाम" },
    "footer-mental-health": { en: "Mental Health", hi: "मानसिक स्वास्थ्य" },
    "footer-first-aid": { en: "First Aid", hi: "प्राथमिक चिकित्सा" },
    "footer-hospital-guides": { en: "Hospital Guides", hi: "अस्पताल गाइड" },
    "footer-emergency-care": { en: "Emergency Care", hi: "आपातकालीन देखभाल" },
    "footer-doctor-visits": { en: "Doctor Visits", hi: "डॉक्टर विजिट" },
    "footer-health-tips": { en: "Health Tips", hi: "स्वास्थ्य सुझाव" },
    "footer-insurance": { en: "Insurance", hi: "बीमा" },
    "footer-about": { en: "About", hi: "हमारे बारे में" },
    "footer-who-we-are": { en: "Who We Are", hi: "हम कौन हैं" },
    "footer-our-team": { en: "Our Team", hi: "हमारी टीम" },
    "footer-careers": { en: "Careers", hi: "करियर" },
    "footer-contact-us": { en: "Contact Us", hi: "संपर्क करें" },
    "footer-stay-connected": { en: "Stay Connected", hi: "जुड़े रहें" },
    "theme-toggle": { en: "Toggle Dark Mode", hi: "डार्क मोड टॉगल करें" }
};

let currentLanguage = "en"; // Default language is English

function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "hi" : "en";

    // Update static text in HTML
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[key]) {
            if (element.tagName === "INPUT" && element.hasAttribute("data-lang-placeholder")) {
                element.placeholder = translations[key][currentLanguage];
            } else {
                element.innerText = translations[key][currentLanguage];
            }
        }
    });

    // Update document title
    document.title = translations["title"][currentLanguage];

    // Update first aid steps in cards and popups
    document.querySelectorAll(".card").forEach(card => {
        const condition = card.dataset.title;
        const descElement = card.querySelector("p[data-lang]");
        const popupStepsList = card.querySelector(".steps-list");

        // Update card description
        const descKey = descElement.getAttribute("data-lang");
        descElement.innerText = translations[descKey][currentLanguage];

        // Update popup steps if the popup is currently open
        if (popupStepsList && popupStepsList.children.length > 0) {
            popupStepsList.innerHTML = "";
            firstAidData[condition].forEach(step => {
                const li = document.createElement("li");
                li.innerText = step[`text_${currentLanguage}`];
                popupStepsList.appendChild(li);
            });
        }
    });
}

let currentPopup = null;

function openPopup(event) {
    const button = event.currentTarget;
    const card = button.closest(".card");
    const condition = card.dataset.title;
    currentPopup = card.querySelector(".popup-container");

    currentPopup.querySelector(".popup-title").innerText = translations[`card-${condition.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}-title`][currentLanguage];

    const stepsList = currentPopup.querySelector(".steps-list");
    stepsList.innerHTML = ""; // Clear any existing steps

    firstAidData[condition].forEach(step => {
        const li = document.createElement("li");
        li.innerText = step[`text_${currentLanguage}`];
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

// Initialize language on page load
toggleLanguage();
        document.addEventListener('keydown', function (event) {
    if (event.keyCode === 123) { // F12
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.keyCode === 85) { // Ctrl + U
        event.preventDefault();
    }
});
document.addEventListener('contextmenu', event => event.preventDefault());
setInterval(function () {
    const before = new Date();
    debugger;
    const after = new Date();
    if (after - before > 100) {
        window.location.href = "about:blank"; // or any action you want
    }
}, 1000);
