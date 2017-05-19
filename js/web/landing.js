// academy landing page javascript
$(document).ready(function(){
  checkSticky();
  //toggle side navigation on click of the hamburger
  $(".menutoggle").click(function(){
    $(".sidenav, .wrapper, .topMenu").toggleClass("active");
  });
  //toggle answers for faq section
  $(".question").click(function(){
    $(this).parent(".questionWrap").toggleClass("open");
  })
});
//toggle sticky header on scroll
var fl = 1;
$(window).scroll(function(){
  checkSticky();
});

function checkSticky(){
  var st = $(window).scrollTop();
  var hh = $("section.home").height();
  if(st > hh && fl == 1) {
    $(".topMenu").addClass("sticky");
    imgSwitch($(".topMenu .topLogo"));
    imgSwitch($(".topMenu .menutoggle img"));
    fl = 0;
  }
  if(st < hh && fl == 0) {
    $(".topMenu").removeClass("sticky");
    imgSwitch($(".topMenu .topLogo"));
    imgSwitch($(".topMenu .menutoggle img"));
    fl = 1;
  }
}

function imgSwitch(elem){
  var sr = $(elem).attr("src");
  var sw = $(elem).attr("data-switch");
  $(elem).attr({"src":sw,"data-switch":sr});
}
