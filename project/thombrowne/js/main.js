$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $("header").addClass("header_active");
            $("header .logo").addClass("active");
            $("header .logo_big").hide();
        } else {
            $("header").removeClass("header_active");
            $("header .logo").removeClass("active");
            $("header .logo_big").show();
        };
        /*윈도우객체 선택 후 스크롤 감지하면 함수(if문 실행) 스크롤거리가 0보다 크면 참 작으면 거짓*/
    });
    $(".search_btn").click(function () {
        $(".search_box").toggleClass("search_active");
    });
    $(".search_box .x_btn").click(function () {
        $(".search_box").removeClass("search_active");
    });
    /*검색버튼 클릭시 검색창 출력*/
    $(".side_menu_btn").click(function () {
        $(".side_menu_box").toggleClass("side_menu_active");
    });
    $(".side_menu_box .x_btn").click(function () {
        $(".side_menu_box").removeClass("side_menu_active");
    });
    /*애니메이션 시작*/
    $(window).resize(function () {
        if (window.innerWidth > 1240) {
            gsap.from(".men_sec", {
                scrollTrigger: {
                    trigger: ".men_sec", // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
                    start: "top 60%", // 애니메이션 시작시점
                    end: "100px bottom", // 애니메이션 종료시점
                    scrub: 2,
                    markers: false,// 트리거 마커의 표시(boolean)
                },
                x: 2000,
            });
            gsap.from(".women_sec", {
                scrollTrigger: {
                    trigger: ".women_sec",
                    start: "top 60%",
                    end: "100px bottom",
                    scrub: 2,
                    markers: false,
                },
                x: -2000,
            });
            /*시즌 섹션 애니메이션*/
            gsap.from(".season_sec > .txt_box", {
                scrollTrigger: {
                    trigger: ".season_sec",
                    start: "top 60%",
                    end: "100px bottom",
                    scrub: 2,
                    markers: false,
                },
                x: -1000,
            });
            /*슈즈 백 섹션 애니메이션*/
            gsap.set('.shoes-bags_sec .imgs_shoes', { scale: 0, opacity: 0 });
            gsap.to(".shoes-bags_sec .imgs_shoes", {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: ".shoes",
                    start: "-60% top",
                    end: "100px bottom",
                    scrub: 2,
                    markers: false,
                },
            });
            gsap.set('.shoes-bags_sec .imgs_bags', { scale: 0, opacity: 0 });
            gsap.to(".shoes-bags_sec .imgs_bags", {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: ".bags",
                    start: "-60% top",
                    end: "100px bottom",
                    scrub: 2,
                    markers: false,
                },
            });
            /* 768 이상일때의 스크립트 */

        } else {
            gsap.from(".men_sec", {
                scrollTrigger: {
                    trigger: "body", // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
                    start: "top top", // 애니메이션 시작시점
                    end: "bottom bottom", // 애니메이션 종료시점
                    scrub: 2,
                    markers: false,// 트리거 마커의 표시(boolean)
                },
                x: 0,
            });
            gsap.from(".women_sec", {
                scrollTrigger: {
                    trigger: "body",
                    start: "top 60%",
                    end: "100px bottom",
                    scrub: 2,
                    markers: false,
                },
                x: 0,
            });
            /*시즌 섹션 애니메이션*/
            gsap.from(".season_sec > .txt_box", {
                scrollTrigger: {
                    trigger: "body",
                    start: "top 60%",
                    end: "100px bottom",
                    scrub: 2,
                    markers: false,
                },
                x: 0,
            });
            /*슈즈 백 섹션 애니메이션*/
            gsap.set('.shoes-bags_sec .imgs_shoes', { scale: 1, opacity: 1 });
            gsap.to(".shoes-bags_sec .imgs_shoes", {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: "body",
                    start: "-60% top",
                    end: "100px bottom",
                    scrub: 0,
                    markers: false,
                },
            });
            gsap.set('.shoes-bags_sec .imgs_bags', { scale: 1, opacity: 1, });
            gsap.to(".shoes-bags_sec .imgs_bags", {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: "body",
                    start: "-60% top",
                    end: "100px bottom",
                    scrub: 0,
                    markers: false,
                },
            });
            /* 768 이하일때의 스크립트 */

        }

    }).resize();

});