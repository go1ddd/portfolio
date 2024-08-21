/*kyochon jq start*/
$(document).ready(function () {

    $(".hamburger_menu").click(function () {
        $(".side_menu").addClass("active")
    })
    $(".side_menu .x_button").click(function () {
        $(".side_menu").removeClass("active")
    })
});


