/*body scroll on*/
setTimeout(function () {
    $("body").removeClass('fixed');
}, 5000);


$(document).ready(function () {
    /*resize refresh*/
    window.onresize = function () {
        document.location.reload();
    };
    /*cursor start*/
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX + 10; // document의 x좌표값
        let mouseY = e.pageY + 10; // document의 y좌표값

        let cursor = document.querySelector('.cursor');
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    /*animation start*/
    gsap.registerPlugin(ScrollTrigger);
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
    gsap.from(".sub_work_sec .img01", {
        scrollTrigger: {
            trigger: ".list01", // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
            start: "top 60%", // 애니메이션 시작시점
            end: "100px bottom", // 애니메이션 종료시점
            scrub: 3,
            markers: false,// 트리거 마커의 표시(boolean)
        },
        y: 2000,
    });
    gsap.from(".sub_work_sec .img02", {
        scrollTrigger: {
            trigger: ".list02", // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
            start: "top 60%", // 애니메이션 시작시점
            end: "100px bottom", // 애니메이션 종료시점
            scrub: 3,
            markers: false,// 트리거 마커의 표시(boolean)
        },
        y: 2000,
    });
    gsap.from(".sub_work_sec .img03", {
        scrollTrigger: {
            trigger: ".sub_third", // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
            start: "top 60%", // 애니메이션 시작시점
            end: "100px bottom", // 애니메이션 종료시점
            scrub: 3,
            markers: false,// 트리거 마커의 표시(boolean)
        },
        y: 2000,
    });
    Splitting();

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
        /*refresh top*/
        setTimeout(function () {
            scrollTo(0, 0);
        }, 100)
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
        top: "-120%",
        ease: Expo.easeInOut
    });
});

