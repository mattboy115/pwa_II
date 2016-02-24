$.ajax({
    url : "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/OH/Columbus.json",
    dataType : "json",
    success : function(url) {
        var location = 'Columbus';
        var temp_f = url.current_observation.temp_f;
        $(".conditions").html("Current temperature in " + location + " is: " + temp_f+"ºF");
    }
});

$.ajax({
    url : "http://api.wunderground.com/api/ef5a156e62f050d2/hourly/q/OH/Columbus.json",
    //Change this link to the hourly forecast.
    dataType : "json",
    success : function(myObj) {
        var hourly = myObj.hourly_forecast;
        for (i = 0; i < 24; i++) {
            $('.hourly').each().html("Why doesn't this work?")
            //code here
        });


        //7 day forecast
        //Do the same thing with the loop
        $.ajax({
            url : "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/OH/Columbus.json",
            //Change this link to the 10day forecast.
            dataType : "json",
            success : function(myObj) {
                //Code here
