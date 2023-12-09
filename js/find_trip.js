function navigateToDestination() {
    // Get form elements
    const country = document.getElementById('country').value;
    const date = document.getElementById('date').value;
    const person = document.getElementById('person').value;

    // Default page if there are no specific criteria
    let destinationURL = '../find_default.html';

    // Check if the form is filled
    if (country || date || person) {
        // Determine the appropriate page based on user input
        if (country === 'Bali') {
            destinationURL = '../search_result.html';
        } else {
            destinationURL = '../find_default.html';
        }
    }

    // Navigate to the appropriate page
    window.location.href = destinationURL;
}
