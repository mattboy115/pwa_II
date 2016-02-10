/*
Description: DESCRIPTION INFO GOES HERE
Author: Matthew Lee
Date: 2/3/2016
*/

$(document).ready(function() {
    //Target #1
    $("#contentleft ul").css("background-color", "#FFA500");
    var coordinates = $("#contentleft ul").offset();
        console.log("Top:" + coordinates.top)
    var position = $("#contentleft ul").position();
        console.log("Top:" + position.top)
    //Target #2
    $("#contentleft li:eq(1)").css("margin-left", "30px");
    //Target #3
    $("#contentleft li:eq(3)").css("color", "red");
    var width = $("#contentleft li").filter(":last").width();
        console.log(width);
    //Target #4
    $("#contentright h3").css("float", "right").addClass(".listhead");
    var hasclass = $("#contentright h3").hasClass(".listhead")
        console.log(hasclass);
    //Target #5
    $("#contentright li:eq(2)").children().attr("href", "http://yahoo.com");
    $("#contentright a:not(:first)").attr("href", "http://notgoogle.com");
    //Target #6
    function myFunction() {
      for (i = 0; i < 10; i++) {
      $("<li><a href='#'>"+i+"</a></li>").appendTo("#loop");
      }
    }
    $(document).ready(myFunction);
});
