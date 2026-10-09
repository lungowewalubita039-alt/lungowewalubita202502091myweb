const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
const formPreview = document.getElementById("formPreview");

contactForm.addEventListener("submit", function (event) {
    // Prevent the page from reloading.
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear previous feedback and preview.
    formFeedback.textContent = "";
    formPreview.textContent = "";

    // Check for a blank name or message.
    if (name === "" || message === "") {
        formFeedback.textContent =
            "Please enter your name and message.";
        return;
    }

    // Check the email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formFeedback.textContent =
            "Please enter a valid email address.";
        return;
    }

    // Display a preview safely without sending a message.
    formFeedback.textContent = "Your details have been validated.";
    formFeedback.style.display ="block";
    formFeedback.style.color ="green";

    const heading = document.createElement("h3");
    heading.textContent = "Message Preview";

    const previewName = document.createElement("p");
    previewName.textContent = "Name: " + name;

    const previewEmail = document.createElement("p");
    previewEmail.textContent = "Email: " + email;

    const previewTopic = document.createElement("p");
    previewTopic.textContent = "Topic: " + topic;

    const previewMessage = document.createElement("p");
    previewMessage.textContent = "Message: " + message;

    formPreview.append(
        heading,
        previewName,
        previewEmail,
        previewTopic,
        previewMessage
    );
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        themeToggle.textContent = "Switch to Dark Mode";
    }
});
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = button.dataset.filter;

        projectCards.forEach(function (card) {
            const category = card.dataset.category;

            if (selectedFilter === "all" || category === selectedFilter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});