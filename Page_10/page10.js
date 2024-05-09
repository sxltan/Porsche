$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission action

        var isValid = true; // Flag to determine if the form is valid
        $('.response-message').remove(); // Remove previous response messages
        $('.error').remove(); // Remove previous error messages

        // Check each input field that is required
        $('input[required], textarea[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false; // Set isValid to false if the field is empty
                $(this).after('<div class="error">This field is required</div>'); // Append an error message after the field
            }
        });

        // Only process the form if it is valid
        if (isValid) {
            var formData = $(this).serialize(); // Serialize the form data

            $('.content').append('<div class="response-message">Thank you for contacting us!</div>');

            $('form input[type="text"], form textarea').val('');
        }
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
