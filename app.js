// navigation links

// Home
$('#logo').on('click', function (event) {
    $('html, body').animate({
        scrollTop: 0,
    }, 'fast')
})

// About Me
$('#nav-about-me').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.about-me").offset().top
    });
})

// Skills
$('#nav-skills').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.skills").offset().top
    });
})

// Projects
$('#nav-projects').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.projects").offset().top
    });
})

// Contact
$('#nav-contact').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.contact").offset().top
    });
})
