let messages = [
    "You’re Amazing!",
    "You light up my day!",
    "Your smile is contagious!",
    "You're the best!",
    "I admire you!"
];

function changeMessage() {
    const messageDiv = document.getElementById('handMessage');
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageDiv.textContent = messages[randomIndex];
}