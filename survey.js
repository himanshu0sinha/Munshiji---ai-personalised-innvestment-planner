document.addEventListener("DOMContentLoaded", () => {
    const surveyForm = document.getElementById("survey-form");
    const progressBar = document.getElementById("progress");
  
    surveyForm.addEventListener("input", updateProgress);
  
    function updateProgress() {
        // Get all questions (excluding non-question elements like submit button)
        const questions = Array.from(surveyForm.elements).filter(
            (input) => input.type === "radio" || input.type === "text" || input.type === "number"
        );
  
        // Count answered questions
        const answeredQuestions = questions.filter((input) => {
            if (input.type === "radio") {
                // Check if at least one radio button in the group is selected
                return surveyForm.elements[input.name].value !== "";
            }
            return input.value.trim() !== ""; // Check for non-empty values in other types
        }).length;
  
        // Calculate progress percentage
        const progressPercent = Math.floor((answeredQuestions / questions.length) * 100);
  
        // Update progress bar width
        progressBar.style.width = `${progressPercent}%`;
    }
  
    // Handle form submission
    const confirmationMessage = document.getElementById("confirmation-message");
    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
  
        // Hide the form and display the confirmation message
        surveyForm.style.display = "none";
        confirmationMessage.style.display = "block";
    });
  });
  