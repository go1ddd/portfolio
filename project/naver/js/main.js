$(document).ready(function () {
    $(window).resize(function () {
        if (window.innerWidth > 1919) {
            $(window).scroll(function () {
                var height = $(document).scrollTop();
                if (height > 200) {
                    $(".search_area").addClass("fixed")
                    $(".btn_box").addClass("btn_fixed ")
                    $("input").attr("placeholder", "검색어를 입력해 주세요.");
                } else {
                    $(".search_area").removeClass("fixed")
                    $(".btn_box").removeClass("btn_fixed ")
                    $("input").attr("placeholder", "");
                };
                /*윈도우객체 선택 후 스크롤 감지하면 함수(if문 실행) 스크롤거리가 0보다 크면 참 작으면 거짓*/
            }); // 현재 띄워진 창 크기가 640px 이상일때

            /* 1280 이상일때의 스크립트 */

        } else {
            $(window).scroll(function () {
                var height = $(document).scrollTop();
                if (height > 200) {
                    $(".search_area").removeClass("fixed")
                    $(".btn_box").removeClass("btn_fixed ")
                    $("input").attr("placeholder", "");
                } else {
                    $(".search_area").removeClass("fixed")
                    $(".btn_box").removeClass("btn_fixed ")
                    $("input").attr("placeholder", "");
                };
                /*윈도우객체 선택 후 스크롤 감지하면 함수(if문 실행) 스크롤거리가 0보다 크면 참 작으면 거짓*/
            }); // 현재 띄워
            /* 640 이하일때의 스크립트 */

        }

    }).resize();
    /* 헤더 스크롤 애니메이션*/

    /*뉴스섹터 초기 첫번쨰 메뉴 클릭상태*/
    $(".news > ul > li> a").eq(0).addClass("active_color")
    $(".shopping > ul > li> a").eq(0).addClass("active_color")
    /*뉴스 섹터 클릭시 색상변경*/
    $(".news > ul > li> a").click(function () {
        if ($(".news > ul > li> a").hasClass("active_color")) {
            ($(".news > ul > li> a").removeClass("active_color"))
            $(this).addClass("active_color")
        } else {
            $(this).addClass("active_color")
        };
    })
    /*뉴스 서브 스와이퍼 */
    $('.swiper').hover(function () {
        swiper.autoplay.stop();
    }, function () {
        swiper.autoplay.start();
    });

    /*페이지 뷰 버튼 색상 교차변경*/
    $(".page_view_btn .img_01").click(function () {
        $(this).addClass("active")
        $(".page_view_btn .img_02").removeClass("active")
    });
    $(".page_view_btn .img_02").click(function () {
        $(this).addClass("active")
        $(".page_view_btn .img_01").removeClass("active")
    });



    $(".shopping > ul > li > a").click(function () {
        if ($(".shopping > ul > li> a").hasClass("active_color")) {
            ($(".shopping > ul > li> a").removeClass("active_color"))
            $(this).addClass("active_color")
        } else {
            $(this).addClass("active_color")
        };
    })
    $(".suggestion > ul > li> a").click(function () {
        if ($(".suggestion > ul > li> a").hasClass("active_color")) {
            ($(".suggestion > ul > li> a").removeClass("active_color"))
            $(this).addClass("active_color")
        } else {
            $(this).addClass("active_color")
        };
    })
})
/* 증시 슬라이드 애니메이션*/

