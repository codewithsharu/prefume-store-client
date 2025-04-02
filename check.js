// Maintenance check configuration
const CONFIG = {
    STATUS_URL: "https://raw.githubusercontent.com/codewithsharu/mentinence/main/perfume.txt",
    MAINTENANCE_PAGE: "https://codewithsharu.github.io/mentinence/",
    ACTIVE_STATUS: "on"
};

// Check if site should be in maintenance mode
async function checkMaintenanceStatus() {
    try {
        const response = await fetch(CONFIG.STATUS_URL);
        const status = await response.text();
        
        if (status.trim().toLowerCase() !== CONFIG.ACTIVE_STATUS) {
            redirectToMaintenance();
        }
    } catch (error) {
        console.error("Error checking maintenance status:", error);
        // Redirect on error to be safe
        redirectToMaintenance();
    }
}

// Handle redirect to maintenance page
function redirectToMaintenance() {
    window.location.href = CONFIG.MAINTENANCE_PAGE;
}

// Initialize maintenance check
checkMaintenanceStatus();
