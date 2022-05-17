$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.hamburgerMenu').addClass('active');
        } else {
            $('.hamburgerMenu').removeClass('active');
        }
    });
});
