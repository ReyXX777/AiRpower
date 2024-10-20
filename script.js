// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Budget Prediction Logic
const predictButton = document.getElementById('predict-btn');
const predictionResult = document.getElementById('prediction-result');

predictButton.addEventListener('click', function() {
    const budget = document.getElementById('budget-input').value;
    if (budget) {
        const prediction = budget > 100 ? "You may exceed your budget!" : "You are within your budget!";
        predictionResult.textContent = prediction;
    } else {
        predictionResult.textContent = "Please enter a budget.";
    }
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});
