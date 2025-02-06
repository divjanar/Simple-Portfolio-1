'use strict';

function updateTime() {
    const timeElement = document.getElementById('live-time');
    const now = new Date();

    // Format the time (e.g., 6:18:31 pm)
    const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'pm' : 'am';

    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Update the time element
    timeElement.textContent = formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time immediately on page load
updateTime();

