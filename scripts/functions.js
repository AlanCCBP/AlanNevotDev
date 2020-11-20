$(document).ready(function() {
    $('the-container').scrollspy({ target: '#navigation-bar' });

    $('[data-spy="scroll"]').each(function() {
        var $spy = $(this).scrollspy('refresh')
    });

    $('[data-spy="scroll"]').on('activate.bs.scrollspy', function() {})
});