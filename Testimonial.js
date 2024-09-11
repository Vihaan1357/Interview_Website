
let currentIndex = 0; // Track the current section index

function scrollToSection(index) {
    const sections = document.querySelectorAll('.section');
    const scrollContainer = document.querySelector('.autoscrol');
    const totalSections = sections.length;

    // Ensure the index stays within the range
    if (index < 0) {
    currentIndex = 0;
    } else if (index >= totalSections) {
    currentIndex = totalSections - 1;
    } else {
    currentIndex = index;
    }

    // Calculate the scroll position
    const scrollAmount = sections[currentIndex].offsetLeft;

    // Scroll the container to the target section
    scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });

    // Hide all sections except the current one
    sections.forEach((section, idx) => {
    section.style.display = idx === currentIndex ? 'flex' : 'none';
    });
}

function scrollToRight() {
    scrollToSection(currentIndex + 1); // Scroll to the next section
}

function scrollToLeft() {
    scrollToSection(currentIndex - 1); // Scroll to the previous section
}

// Initialize: Show only the first section
scrollToSection(currentIndex);