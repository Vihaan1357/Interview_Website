
// JavaScript to handle tab switching
const tabs = document.querySelectorAll('.tabs li');
const tabContents = document.querySelectorAll('.tab-content > div');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show the corresponding content
        const target = tab.getAttribute('data-tab');
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === target) {
                content.classList.add('active');
            }
        });
    });
});