$(document).ready(function() {
    var audio = $('#background-audio').get(0);
    audio.volume = 0; // Start with the audio muted
    audio.pause(); // Pause the audio initially

    $('#start-button').click(function() {
        $('.wordmark-container').hide();
        audio.volume = 0.25; // Set volume to 25% on play
        audio.play(); // Play the audio
        $('.content').fadeIn(5); // Smoothly fade in the content over 1000 milliseconds
    });

    $('#close-btn').click(function() {
        $('.content').fadeOut(1000, function() { // Smoothly fade out the content over 1000 milliseconds
            $('.wordmark-container').css('display', 'flex'); // Display the wordmark container again
        });
    });
});