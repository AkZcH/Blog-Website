function scrollToSection() {
    const section = document.getElementById("projectsSection");
    section.scrollIntoView({ behavior: "smooth" });
}

function scrollToBlogSection() {
    const section = document.getElementById("BlogsSection");
    section.scrollIntoView({ behavior: "smooth" });
}

function scrollToPortSection() {
    const section = document.getElementById("PortSection");
    section.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('modeToggle');
    const bodyElement = document.body;
    const modeLabel = document.getElementById('modeLabel');

    // Check if a mode is saved in local storage
    const currentMode = localStorage.getItem('mode');
    if (currentMode) {
        bodyElement.classList.add(currentMode);
        modeLabel.textContent = currentMode === 'dark-mode' ? 'Dark Mode' : 'Light Mode';
        toggleSwitch.checked = currentMode === 'dark-mode';
    }

    // Toggle between light mode and dark mode
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            bodyElement.classList.add('dark-mode');
            bodyElement.classList.remove('light-mode');
            modeLabel.textContent = 'Dark Mode';
            localStorage.setItem('mode', 'dark-mode');
        } else {
            bodyElement.classList.add('light-mode');
            bodyElement.classList.remove('dark-mode');
            modeLabel.textContent = 'Light Mode';
            localStorage.setItem('mode', 'light-mode');
        }
    });
});
