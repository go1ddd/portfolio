$(document).ready(function () {


  $(function () {
    $(".wrap .box").hide();
    $(".wrap ul a")
      .click(function () {
        $(".wrap .tab").hide().filter(this.hash).fadeIn();

        $(".wrap ul a").removeClass("active");
        $(this).addClass("active");
      })
      .filter(":eq(0)")
      .click();
  });

  let head = $(".head ul").offset();

  $(window).scroll(function () {
    if (($(document).scrollTop() > head.top)) {
      $(".head ul").addClass("fix")
    } else {
      $(".head ul").removeClass("fix")
    }
  })


})
