$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
    /*cursor start*/
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX + 10; // document의 x좌표값
        let mouseY = e.pageY + 10; // document의 y좌표값

        let cursor = document.querySelector('.cursor');
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    gsap.set('.about_me_sec .txt_box', { scale: 0, opacity: 0 });
    gsap.to('.about_me_sec .txt_box', {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
            trigger: '.about_me_sec',
            start: "-50% top",
            end: "bottom bottom",
            scrub: 1,
            markers: false,
        },
    });
    /*hover ani start*/
    $(".work_list a").hover(function () {
        $(".cursor").addClass("on")
    }, function () {
        $(".cursor").removeClass("on")
    })

    /*header start*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
        };
    })

    /*clock start*/
    function setClock() {
        var dateInfo = new Date();
        var hour = modifyNumber(dateInfo.getHours());
        var min = modifyNumber(dateInfo.getMinutes());
        document.getElementById("time").innerHTML = hour + ":" + min;
    }
    function modifyNumber(time) {
        if (parseInt(time) < 10) {
            return "0" + time;
        }
        else
            return time;
    }
    window.onload = function () {
        setClock();
        setInterval(setClock, 1000);//1초마다 setClock 함수 실행
    }

    /*intro start*/
    var textWrapper = document.querySelector(".intro_title");

    textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^\x00-\x10]|\w)/g,
        "<span class='letter'>$&</span>"
    );

    anime
        .timeline({ loop: false })
        .add({
            targets: ".intro_title .letter",
            translateX: [140, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: function (el, i) {
                return 50 * i;

            }
        })
        .add({
            targets: ".intro_title .letter",
            translateX: [0, -140],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1000,
            delay: function (el, i) {
                return 2000 + 50 * i;
            }
        });

    TweenMax.to(".intro_group", 2.2, {
        delay: 3,
        top: "-100%",
        ease: Expo.easeInOut
    });

});

