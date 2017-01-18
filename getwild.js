setTimeout(function(){
    var date   = new Date();
    var hour   = parseInt(date.getHours(), 10);
    var minute = parseInt(date.getMinutes(), 10);
    if (hour == 19 && minute == 0) {
        new Audio('getwild.mp3').play();
    }
}, 30 * 1000);
