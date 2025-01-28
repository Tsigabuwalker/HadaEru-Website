function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Initially show the home section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

function toggleInfo(button) {
    const moreInfo = button.previousElementSibling; // Get the .more-info div
    const isHidden = moreInfo.classList.contains('hidden');

    if (isHidden) {
        moreInfo.classList.remove('hidden'); // Show more info
        button.textContent = 'Read Less'; // Change button text
    } else {
        moreInfo.classList.add('hidden'); // Hide more info
        button.textContent = 'Read More'; // Change button text back
    }
}