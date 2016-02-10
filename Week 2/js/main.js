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
 
