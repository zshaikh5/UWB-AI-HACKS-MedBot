// UWB Hacks AI MedBot 
// Jasleen Kaur Saini, Zaina Shaikh, Anushka Chougule 

const symptomTypes = {
    "hi|hello": "Hey there! How can I assist you today?",
    "sick": "I am so sorry to hear that. Please describe your symptom. For example: fever, rash, cough",
    "headache": "A headache could be due to a variety of reasons such as stress, dehydration, or eye strain. Try drinking water and taking a break from screens.",
    "fever|feverish": "A fever could indicate an infection. It's important to rest and stay hydrated. If your temperature is high or persists, consult a healthcare professional.",
    "cough": "A cough could be caused by a cold, flu, or allergies. If it persists or is accompanied by other symptoms, it's advisable to consult a healthcare professional.",
    "stomachache|stomach ache": "A stomachache could be due to many factors such as indigestion, food poisoning, or stomach flu. Avoid spicy or heavy foods, and consider over-the-counter remedies if necessary.",
    "rash": "A rash could be a sign of an allergic reaction, irritation, or infection. If it's severe, spreading, or accompanied by other symptoms, seek medical advice.",
    "sore throat": "A sore throat could be caused by a viral or bacterial infection, allergies, or irritants like smoke. Gargling with warm salt water and staying hydrated may help alleviate discomfort.",
    "earache": "An earache could be due to an infection, injury, or buildup of earwax. Applying a warm compress and taking over-the-counter pain relievers may offer relief, but it's best to see a doctor if it persists.",
    "shortness of breath": "Shortness of breath can be caused by various factors such as asthma, allergies, or even anxiety. If it's severe or accompanied by chest pain or wheezing, seek immediate medical attention.",
    "dizziness": "Dizziness can be caused by a range of issues including dehydration, low blood sugar, or inner ear problems. Sit or lie down, and drink water if you feel dizzy. If it persists or is severe, consult a healthcare professional.",
    "abdominal pain": "Abdominal pain could be due to digestive issues, infections, or underlying medical conditions. Depending on the severity and persistence of the pain, it's advisable to consult a doctor for proper diagnosis and treatment.",
    "chest pain": "Chest pain can be a sign of a serious medical condition such as a heart attack or pulmonary embolism. If you're experiencing chest pain, especially if it's severe or accompanied by sweating, nausea, or shortness of breath, seek emergency medical help immediately.",
    "eye": "Eye pain could be caused by a number of factors including eye strain, injury, or infection. Avoid rubbing your eyes and try using over-the-counter artificial tears if it's due to dryness. If the pain is severe or persists, consult an eye doctor.",
    "hip pain": "Hip pain could be due to overuse, injury, arthritis, or other medical conditions. Rest, ice, and over-the-counter pain relievers may help alleviate mild hip pain. If it's severe or persistent, consult a healthcare professional for further evaluation.",
    "knee pain": "Knee pain can be caused by injuries, arthritis, or other medical conditions. Rest, ice, compression, and elevation (RICE) may help relieve mild knee pain. If it's severe or persistent, seek medical advice for proper diagnosis and treatment.",
    "heart attack": "If you suspect you're having a heart attack, call emergency services immediately. Symptoms may include chest pain or discomfort, shortness of breath, nausea, lightheadedness, or pain or discomfort in other areas of the upper body.",
    "difficulty breathing": "If you're experiencing difficulty breathing, especially if it's sudden or severe, call emergency services immediately. This could be a sign of a serious medical condition such as a respiratory infection or asthma attack.",
    "faint|fainting": "If you or someone else faints, call emergency services immediately. Fainting can be caused by various factors including low blood sugar, dehydration, or underlying medical conditions.",
    "bleed|bleeding": "If you're experiencing severe or uncontrollable bleeding, call emergency services immediately. Apply pressure to the wound and elevate the affected area if possible while waiting for help to arrive.",
    "disorientation": "If you or someone else is experiencing disorientation or confusion, especially if it's sudden or severe, call emergency services immediately. This could be a sign of a medical emergency such as a stroke or head injury.",
    "blind|blindness": "If you suddenly lose vision or experience blindness, call emergency services immediately. This could be a sign of a serious medical condition such as a retinal detachment or stroke."

};
function enterKey(event) {
    if (event.keyCode === 13) {
        send(); 
    }
}

function clearChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = ""; 
}

function getResponse(symptom) {
    let response = "I'm sorry, I'm not sure how to respond to that symptom. If it's serious, please consult a healthcare professional.";
    for (const [key, value] of Object.entries(symptomTypes)) {
        if (new RegExp(`\\b${key}\\b`, "i").test(symptom)) {
            response = value;
            break;
        }
    }
    return response;
}

function send() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput !== "") {
        const chatBox = document.getElementById("chat-box");
        
        const userMessage = document.createElement("div");
        userMessage.className = "message user-message";
        userMessage.textContent = `You: ${userInput}`;
        
        const botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.textContent = `Bot: ${getResponse(userInput)}`;
        
        const messageContainer = document.createElement("div");
        messageContainer.className = "message-container";
        
        const userContainer = document.createElement("div");
        userContainer.className = "user-container";
        userContainer.appendChild(userMessage);
        
        const botContainer = document.createElement("div");
        botContainer.className = "bot-container";
        botContainer.appendChild(botMessage);
        
        messageContainer.appendChild(userContainer);
        messageContainer.appendChild(botContainer);
        
        chatBox.appendChild(messageContainer);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        document.getElementById("user-input").value = "";
    }
}