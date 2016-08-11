/*this is my js file for clock*/

$(document).ready(function(){ //Start Ready Now!

    setInterval(function(){ //The setInterval() Begins the interval.
    var seconds = new Date().getSeconds(); //11:51:15seconds getting current date from my computer and grabbing seconds as-is and setting those seconds to the variable seconds.
    var sdegree = seconds * 6; /* variable value is assigned to sdegree = current seconds from computer multipled by 6. ex: 1*6=6 is the 5th or 1 which is :05 seconds moves 6 degrees from 12 to the 1 on a clock going clockwise or 6th degree counting from 0 is 5 or 12:05 from 12:00 (the 6th degree)*/
    $('.second').css({ //applies clock css folder "second" (class) attributes 
       'transform': 'rotate('+ sdegree + 'deg)' //telling the   clock position to rotate or move "s" deg where "s" is a number = sdegree
    });
    }, 1000); // moves "rotates" the clockwise every second where 1000ms = 1 second

    setInterval( function() { //The setInterval() Begins the interval.
    var mins = new Date().getMinutes(); //11:51 getting current date from my computer and grabbing minutes as-is and setting those minutes to the variable minutes as 51minutes.
    var mdegree = mins * 6; /* variable declared sdegree = current minutes from computer multipled by 6. ex: minutes=10 10*6=60 degrees or 6 degrees for each increment of a minute from 12 or index of 0, index of 10 == 10 minute position on the clock which is 60 degrees going clockwise.*/
    $('.minute').css({ //applies clock css folder "minute" (class) attributes
      'transform': 'rotate('+ mdegree + 'deg)' //telling the   clock position to rotate or move "m" deg where "m" is a number = mdegree
    });
    }, 1000); // "rotates" the clockwise to model the minute hand moves one minute of time after 60seconds is reached and repeats process

    setInterval( function() { //The setInterval() Begins the interval.
    var hours = new Date().getHours(); //11:51 getting current date from my computer and grabbing hour as-is and setting the hour to the variable hour as 11:xx
    var mins = new Date().getMinutes(); /* variable value assigned sdegree = current minutes from computer multipled by 6. ex: minutes=10 10*6=60 degrees or 6 degrees for each increment of a minute from 12 or index? of 0, index? of 10 == 10 minute position on the clock which is 60 degrees going clockwise.*/
    var hdegree = hours * 30 + (mins / 2); // formula caluclates the hour position interms of a degree on the clock from 12 or zero 0== day's starting hour (o degrees) to index?s  of 12 == 12th hour (360 degrees) ex: 11:48, 11*30+(48/2)=330+24=354 degrees, hour hand closing in on the 12th hour or 360 degrees.

    $('.hour').css({ //applies clock css folder "hour" (class) attributes
      'transform': 'rotate('+ hdegree + 'deg)' //telling the   clock position to rotate or move "h" deg where "h" is a number = hdegree
    });

    }, 1000); // moves second hand every second "rotates" the clockwise to model the minute hand moves every minute of time after 60seconds and after 60minutes (starting and ending at 12:xx the index position of 0) is reached the hour is incrementated clockwise and repeats process
}); //End Ready
