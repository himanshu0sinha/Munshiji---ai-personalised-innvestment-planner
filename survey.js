document.addEventListener("DOMContentLoaded", () => {
    const surveyForm = document.getElementById("survey-form");
    const progress = document.getElementById("progress");

    surveyForm.addEventListener("input", updateProgress);

    function updateProgress() {
        const totalQuestions = surveyForm.elements.length - 1; // Exclude submit button
        const answeredQuestions = Array.from(surveyForm.elements).filter(
            (input) => input.value !== "" && input.type !== "submit"
        ).length;
        const progressPercent = Math.floor((answeredQuestions / totalQuestions) * 100);
        progress.style.width = `${progressPercent}%`;
    }
});
// Select form and confirmation message
const form = document.getElementById('survey-form');
const confirmationMessage = document.getElementById('confirmation-message');

// Add an event listener to handle the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Hide the form and display the confirmation message
  form.style.display = 'none';
  confirmationMessage.style.display = 'block';
});
