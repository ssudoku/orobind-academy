// academy landing page javascript
$(document).ready(function(){
  checkSticky();
  //toggle side navigation on click of the hamburger
  $(".menutoggle").click(function(){
    $(".sidenav, .wrapper, .topMenu").toggleClass("active");
  });

  range.intro = {
    "start":$(".intro").offset().top,
    "end":$(".intro").offset().top + $(".intro").height()
  };
  range.details = {
    "start":$(".courseSegment#details").offset().top,
    "end":$(".courseSegment#details").offset().top + $(".courseSegment#details").height()
  };
  range.instructor = {
    "start":$(".courseSegment#instructor").offset().top,
    "end":$(".courseSegment#instructor").offset().top + $(".courseSegment#instructor").height()
  };
  range.modules = {
    "start":$(".courseSegment#modules").offset().top,
    "end":$(".courseSegment#modules").offset().top + $(".courseSegment#modules").height()
  };
  range.fee = {
    "start":$(".courseSegment#fee").offset().top,
    "end":$(".courseSegment#fee").offset().top + $(".courseSegment#fee").height()
  };
});
//toggle sticky header on scroll
var fl = 1;
$(window).scroll(function(){
  checkSticky();
  checkSection();
});

function checkSticky(){
  var st = $(window).scrollTop();
  var hh = $("section.intro").height();
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

var range = {};

function checkSection(){
  var windowOff = $(window).scrollTop();
  var elemStartOff = {
    "intro" : range.intro.start - windowOff,
    "details" : range.details.start - windowOff,
    "instructor" : range.instructor.start - windowOff,
    "modules" : range.modules.start - windowOff,
    "fee" : range.fee.start - windowOff,
  }
  var elemEndOff = {
    "intro" : range.intro.end - windowOff,
    "details" : range.details.end - windowOff,
    "instructor" : range.instructor.end - windowOff,
    "modules" : range.modules.end - windowOff,
    "fee" : range.fee.end - windowOff,
  }

  if(elemStartOff.details < 250 && elemEndOff.details > 350)
  {
    $(".courseMenuNav .courseMenuItems").removeClass("current");
    $(".courseMenuNav .courseMenuItems.detailsNav").addClass("current");
  }
  else if (elemStartOff.instructor < 250 && elemEndOff.instructor > 350) {
    $(".courseMenuNav .courseMenuItems").removeClass("current");
    $(".courseMenuNav .courseMenuItems.instructorNav").addClass("current");
  }
  else if (elemStartOff.modules < 250 && elemEndOff.modules > 350) {
    $(".courseMenuNav .courseMenuItems").removeClass("current");
    $(".courseMenuNav .courseMenuItems.moduleNav").addClass("current");
  }
  else if (elemStartOff.fee < 250 && elemEndOff.fee > 350) {
    $(".courseMenuNav .courseMenuItems").removeClass("current");
    $(".courseMenuNav .courseMenuItems.feeNav").addClass("current");
  }
  else {
    $(".courseMenuNav .courseMenuItems").removeClass("current");
  }
}
