document.addEventListener('DOMContentLoaded', () => {
    const scrollDisplay = document.getElementById('scrollPercentageDisplay');

    const updateScrollPercentage = () => {
        const scrollTop = window.scrollY; // Amount scrolled from the top
        const documentHeight = document.documentElement.scrollHeight; // Total height of the document
        const windowHeight = window.innerHeight; // Height of the viewport
        const totalScrollableHeight = documentHeight - windowHeight; // Total scrollable height

        // Check to avoid division by zero
        if (totalScrollableHeight > 0) {
            const scrollPercentage = (scrollTop / totalScrollableHeight) * 100; // Calculate scroll percentage
            console.log(scrollPercentage);
            // Update the display element with the scroll percentage
            scrollDisplay.textContent = `Scroll Percentage: ${Math.round(scrollPercentage)}%`;
        } else {
            console.log("No scrollable area.");
            scrollDisplay.textContent = "Scroll Percentage: 0%"; // Handle case where there's no scrollable area
        }
    };

    // Use Intersection Observer to monitor scroll position
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateScrollPercentage();
            }
        });
    }, { threshold: 0.1 });

    // Observe the entire document
    observer.observe(document.documentElement);
});
