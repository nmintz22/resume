$(document).ready(function() {
    console.log("Site loaded!")
    let currentDate = new Date()
    
    if(currentDate.getMonth() >= 4) {
        $("#age-span").text(currentDate.getFullYear()-2004);
    }
    else {
        $("#age-span").text(currentDate.getFullYear()-2005);
    }
});