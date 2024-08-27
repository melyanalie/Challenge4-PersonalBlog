function toggleMode() {
    document.body.classList.toggle('dark-mode');
}

// Add event listener to the toggle button on the main page
document.getElementById('toggleMode').addEventListener('click', toggleMode);

function goBack() {
    window.location.href = 'index.html';
}
