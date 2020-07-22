// wait for DOM to be loaded
$(document).ready(function () {

    // wait for user to click the titles
    $('.set > a').on('click', function () {

        // test if the clicked element has the class 'active'
        if ($(this).hasClass('active')){
            // remove the 'active' class
            $(this).removeClass('active');
            // slide up the text part
            $(this).siblings('.content').slideUp(200);
        } else {
            // remove the 'active' class from all <a> tags
            $('.set > a').removeClass('active');
            // add 'active' to the clicked element
            $(this).addClass('active');
            // slide up the not active text
            $('.content').slideUp(200);
            // slide the current clicked text down
            $(this).siblings('.content').slideDown(200);
        }
    });
});


// be careful using toggle.. cause u can just put the class on and off.. With conditionals u have more power over the execution.