$(document).ready(function () {

const listSidebar = $(".side-bar ul li");
console.log(listSidebar);

listSidebar[1].click(function() {
    $('html,body').animate({
        scrollTop: $("#resume").offset().top},
        'slow');
});


// circle bar

function CircleBar(e) {
    $(e)
      .circleProgress({ fill: { color: "white" } })
      .on("circle-animation-progress", function(_event, _progress, stepValue) {
        $(this)
          .find("strong")
          .text(String(parseInt(100 * stepValue)) + "%");
      });
  }
  CircleBar(".round");




  // Portofolio









});




