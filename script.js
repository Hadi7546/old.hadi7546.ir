var CountDownDate = new Date("Mar 15, 2050 12:00:00").getTime();

var countdownfunction = setInterval(function() {

    var TimeNow = new Date().getTime();
    var distance = CountDownDate - TimeNow;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("c_days").innerHTML = days + "<br> Days";
    document.getElementById("c_hours").innerHTML = hours + "<br> Hours";
    document.getElementById("c_minutes").innerHTML = minutes + "<br> Minutes";
    document.getElementById("c_seconds").innerHTML = seconds + "<br> Seconds";

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_days").innerHTML = "0 <br> Days";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_hours").innerHTML = "0 <br> Hours";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_minutes").innerHTML = "0 <br> Minutes";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_seconds").innerHTML = "0 <br> Seconds";
    }

}, 1000);