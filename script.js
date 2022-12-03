const speed = 60;
var coding_shown = false;
var uni_shown = false;
var we_shown = false;
var vo_shown = false;
var ho_shown = false;
var i = 0;

function typeWriter(txt, id, counter) {
    if (counter < txt.length) {
        document.getElementById(id).innerHTML += txt.charAt(counter);
        counter++;
        setTimeout(() => typeWriter(txt, id, counter), speed);
    }
}

$(document).ready(function () {
    console.log("Site loaded!")
    let currentDate = new Date()

    if (currentDate.getMonth() >= 4) {
        $("#age-span").text(currentDate.getFullYear() - 2004);
    }
    else {
        $("#age-span").text(currentDate.getFullYear() - 2005);
    }

    var observer1 = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            if (!coding_shown) {
                typeWriter('Coding Projects', 'coding', 0)
                coding_shown = true;
            }
        }
    }, { threshold: [0] });

    var observer2 = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            if (!uni_shown) {
                typeWriter('University Progress', 'uni-hdr', 0)
                uni_shown = true;
            }
        }
    }, { threshold: [0] });

    var observer3 = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            if (!we_shown) {
                typeWriter('Work Experience', 'work-hdr', 0)
                we_shown = true;
            }
        }
    }, { threshold: [0] });

    var observer4 = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            if (!vo_shown) {
                typeWriter('Volunteer Service', 'vol-hdr', 0)
                vo_shown = true;
            }
        }
    }, { threshold: [0] });

    var observer5 = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            if (!ho_shown) {
                typeWriter('Hobbies', 'hobbies', 0)
                ho_shown = true;
            }
        }
    }, { threshold: [0] });

    // var info_divs = [
    //     {
    //         div: ".coding-div",
    //         header: "Coding Projects",
    //         header_id: "coding"
    //     },
    //     {
    //         div: "#uni-div",
    //         header: "University Progress",
    //         header_id: "uni-hdr"
    //     },
    // ]

    // var observers = []
    // for (let j = 0; j < info_divs.length; j++) {
    //     var temp = new IntersectionObserver(function (entries) {
    //         if (entries[0].isIntersecting === true) {
    //             if (!uni_shown) {
    //                 typeWriter(info_divs[0].header, info_divs.header_id, 0)
    //                 uni_shown = true;
    //             }
    //         }
    //     }, { threshold: [0] });

    //     temp.observe(document.querySelector(info_divs.div))

    //     observers.append(temp);
    // }

    observer1.observe(document.querySelector(".coding-div"));
    observer2.observe(document.querySelector("#uni-div"));
    observer3.observe(document.querySelector(".work-div"));
    observer4.observe(document.querySelector("#vo-div"));
    observer5.observe(document.querySelector("#hob-div"));
});
