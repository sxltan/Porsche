$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission action
        var formData = $(this).serialize(); // Serialize the form data

        // Here you can implement sending the data to a server using AJAX
        // For this example, we'll just show a message directly

        // Append a response message to the container
        $('.content').append('<div class="response-message">Thank you for contacting us!</div>');

        // Optionally, clear the form fields
        $('form input[type="text"], form textarea').val('');
    });
});

function showDealerships(continent) {
    let dealershipCount = {
        'North America': 350,
        'South America': 50,
        'Europe': 600,
        'Asia': 300,
        'Oceania': 30,
        'Africa': 25,
        'Middle East': 70
    };
    alert('There are ' + (dealershipCount[continent] || 'an unknown number of') + ' dealerships in ' + continent + '.');
}
