function get_time_diff(datetime, clas) {





    
    var datetime = new Date(datetime).getTime();
    var now = new Date().getTime();
    //alert(now)
    if (isNaN(datetime)) {
        return "";
    }
    
    if (datetime < now) {
        var milisec_diff = now - datetime;
    } else {
        var milisec_diff = datetime - now;
    }
    var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
    
    var date_diff = new Date(milisec_diff);
    H = date_diff.getHours()
    if(H!=0){
        H-=1;
    }
    document.getElementById(clas+"d").innerHTML = days + " Days ";
    document.getElementById(clas+'h').innerHTML = H+ " Hours";
    document.getElementById(clas+'m').innerHTML = date_diff.getMinutes() + " Minutes ";
    document.getElementById(clas+"s").innerHTML = date_diff.getSeconds() + " Seconds";
    return days + " Days " + date_diff.getHours() + " Hours " + date_diff.getMinutes() + " Minutes " + date_diff
        .getSeconds() + " Seconds";
    
    }