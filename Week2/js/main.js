//Name: Matthew Lee
//Due: 2/12/2016
// Assignment: Project 2

//For Dropdown nav
$(document).ready(function() {
    $( '.nav_list > li' ).hover(
        function(){
            $(this).children('.sub_menu').slideDown(200);
        },
        function(){
            $(this).children('.sub_menu').slideUp(200);
        }
    );

    $( '.sub_menu > li' ).hover(
        function(){
            $(this).children('.sub_sub').slideDown(200);
        },
        function(){
            $(this).children('.sub_sub').slideUp(200);
        }
    );
});

//For Accordion
$(document).ready(function() {
    $('.a-clickable').on('click', function() {
        $('.a-clickable').not(this).siblings().slideUp(200);
        $(this).siblings().slideToggle(200);
    });
});

//Modal
$(document).ready(function() {
    $('.login').click(function(event) {
        event.preventDefault();
        $('#overlay, #modal').fadeIn(800);
    });

    $('#close, #overlay').click(function(event) {
        event.preventDefault();
        $('#overlay, #modal').fadeOut(0);
    });
});

//Sign In Promt
$(document).ready(function() {
    $('.sign_in img').on('click', function() {
        $('.sign_in, .sign_in p, sign_in button, sign_in img').slideUp('fast');
    });
});

// Tooltips
$(document).ready(function() {
    $('.username').on('mouseenter', function() {
        $('.u-tool').fadeIn(200);
    });

    $('.username').on('mouseleave', function() {
        $('.u-tool').fadeOut(200);
    });

    $('.password').on('mouseenter', function() {
        $('.p-tool').fadeIn(200);
    });

    $('.password').on('mouseleave', function() {
        $('.p-tool').fadeOut(200);
    });

    $('.password, .username').mousemove(function(e){
    var mousex = e.pageX - 420; //Get X coordinates
    var mousey = e.pageY - 200; //Get Y coordinates
    $('.tooltip').css({ top: mousey, left: mousex});
    });
});
//Slider
$(document).ready(function(){
    $('.right_arrow').on('click', function() {
        $('.image1')
    });
});
