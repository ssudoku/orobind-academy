//ECMAscript 5's Object create method by Douglas Crockford
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    function F() {
    }
    F.__proto__ = o;
    return new F();
  };
}

//Parasitic combination inheritance function
function inheritPrototype(childObject, parentObject) {

  var copyOfParent = Object.create(parentObject.__proto__);
  copyOfParent.constructor = childObject;
  childObject.__proto__ = copyOfParent;

}

//function to trigger datetimepicker plugin on large no of elements without redundant syntax
function triggerDateTimePicker(arg){
	//element - list of comma separated css selectors for the elements
	//mode - format of the date-time picker "d-m-Y H:i etc"
	//inc - increments in minutes for the timepicker.. optional parameter - default is 15 minutes
	//onselect - custom callback function to be fired when a date-time is chosen
	//hide - "date" or "time" - disables the specified picker and displays the other one.. optional parameter
	if(arg && arg.element)
	{
		if(arg.element.indexOf(",") > -1)
		{
			var eList = arg.element.split(",");
		}
		else {
			var eList = [arg.element];
		}

		var mode = either(arg.mode,"d-m-Y H:i");
		var inc = either(arg.inc,15);
		var cb = arg.onselect;

		for (var k in eList)
		{
			if(arg.hide && arg.hide == "date")
			{
				$(eList[k]).datetimepicker({
					datepicker:false,
					format: mode,
					step: inc,
					onChangeDateTime: function(){
						$(eList[k]).datetimepicker('hide');
						if(cb && typeof cb == "function")
						{
							cb();
						}
					}
				});
			}
			else if(arg.hide && arg.hide == "time")
			{
				$(eList[k]).datetimepicker({
					timepicker:false,
					format: mode,
					onChangeDateTime: function(){
						$(eList[k]).datetimepicker('hide');
						if(cb && typeof cb == "function")
						{
							cb();
						}
					}
				});
			}
			else {
				$(eList[k]).datetimepicker({
					format: mode,
					step:inc,
					onChangeDateTime: function(){
						$(eList[k]).datetimepicker('hide');
						if(cb && typeof cb == "function")
						{
							cb();
						}
					}
				});
			}
		}
	}
	else {
		showModalMessage({"message":"Error code DTP01 - date-time picker called without parent element","nobutton":"true"});
	}
}
//function to fit an image into its container, preserving the aspect ratio
function fitImgToContainer(arg){
	//img - the img tag
	//left - position from the left edge takes %, px, center etc
	//top - position from the top edge takes %, px, center etc
	if(arg)
	{
		var spacer = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAMAAAC6sdbXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkRBRENCRTU2Mzk1MTFFNTlCODREREY3QjJENzM0OTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkRBRENCRTY2Mzk1MTFFNTlCODREREY3QjJENzM0OTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyREFEQ0JFMzYzOTUxMUU1OUI4NERERjdCMkQ3MzQ5MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyREFEQ0JFNDYzOTUxMUU1OUI4NERERjdCMkQ3MzQ5MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvP60iIAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAADklEQVR42mJgwAcAAgwAAB4AAcwgsosAAAAASUVORK5CYII=";
		if(arg["img"])
		{
			var imgurl = $(arg["img"]).attr("src");
			var cssimg = 'url("' + imgurl + '")';
			if(arg["left"] && arg["top"])
			{
				var csspos = arg["left"] + " " + arg["top"];
			}
			else if(arg["left"])
			{
				var csspos = arg["left"] + " center";
			}
			else if(arg["top"])
			{
				var csspos = "center " + arg["top"];
			}
			else {
				var csspos = "center center";
			}
			$(arg["img"]).attr({"data-fitImg":imgurl,"src":spacer});
			$(arg["img"]).css({
				"background-image":cssimg,
				"background-position": csspos,
				"background-size":"cover",
				"width":"100%",
				"height":"100%"
			});
		}
	}
}
//function to display tooltip
function showToolTip(arg){
	//options
	//element - the element on which to invoke the function
	//message - the message to put on the tooltip
	//timed - 0 to disable
	//timer - in ms

	var parentElem = arg["element"];
	var loc = $(parentElem)[0].getBoundingClientRect();

	$(".tooltip").detach();
	var htmlTooltip = '<div style="position: absolute; display:none; z-index: 25;" class="tooltip"><p style="color: rgb(255, 255, 255); padding: 5px; line-height: 1; border-radius: 7px; background: rgb(71, 212, 212) none repeat scroll 0% 0%; position: relative; z-index: 10;" class="tooltipConten">';
	htmlTooltip += arg["message"];
	htmlTooltip += '</p><span style="background: rgb(71, 212, 212) none repeat scroll 0% 0%; line-height: 1; display: block; width: 7px; height: 7px; position: relative; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg); top: -3px; left: 24px; z-index: -1;" class="arrow">&nbsp;</span></div>'
	$('body').append(htmlTooltip);
	$(".tooltip").fadeIn(150).css({
		"left": loc.left + 'px',
		"top": loc.top - 32 + 'px'
	});
	if(arg["timed"] && arg["timed"] != "0")
	{
		if(arg["timer"])
		{
			var timerSecs = parseInt(arg["timer"]);
		}
		else {
			var timerSecs = 4000;
		}
		setTimeout(function(){
			$(".tooltip").fadeOut(150);
		},timerSecs);
	}
}
//shortcut function for small error messages
function showPop(str)
{
	showModalMessage({"message":str,"nobutton":true,"timed":0});
}
//confirmation modal
$(document).on("click",".confirmModal button.yes",function(){
	$('.messageModal').fadeOut(150);
	window.confirmModalSuccess();
});
$(document).on("click",".confirmModal button.no",function(){
	$('.messageModal').fadeOut(150);
	if(window.confirmModalFail)
	{
		window.confirmModalFail();
	}
});
function confirmModal(arg)
{
	//function options
	//"title" - modal title
	//"class" - modal class
	//"message" - modal message (optional)
	//"timed" - required (0 for false or 1 for true)
	//"timer" - valid if "timed" (value in milliseconds)
	//"success" - function to fire if user clicks on yes
	//"fail" - function to fire if user clicks on no
	//"default" - optional function to fire if timer expires on timed mode - default is success (success, fail and custom fn)
	//"confirmLabel" - name of the button for yes
	//"denyLabel" - name of the function for no

	modalHtml = '';
	if(arg)
	{
		if(arg["title"])
		{
			modalHtml += '<h4 class="confirmTitle">'+arg["title"]+'</h4>';
		}
		else {
			showPop("Confirm function invoked without title option");
			return false;
		}
		if(arg["message"])
		{
			modalHtml += '<p class="confirmMessage">'+arg["message"]+'</p>';
		}
		if(arg["timed"] && arg["timed"] != "0")
		{
			if(arg["timer"])
			{
				modalHtml += '<p class="timerMessage">Auto-confirming in <span class="timerVal">' + parseInt(arg["timer"])/1000 + '</span> seconds</p>';
			}
			else {
				modalHtml += '<p class="timerMessage">Auto-confirming in <span class="timerVal">4</span> seconds</p>';
			}
		}
		if(arg["denyLabel"])
		{
			modalHtml += '<button class="no">'+arg["denyLabel"]+'</button>';
		}
		else {
			modalHtml += '<button class="no">No</button>';
		}
		if(arg["confirmLabel"])
		{
			modalHtml += '<button class="yes">'+arg["confirmLabel"]+'</button>';
		}
		else {
			modalHtml += '<button class="yes">Yes</button>';
		}
		if(arg["success"])
		{
			window.confirmModalSuccess = arg["success"];
		}
		else {
			showPop("Confirm modal invoked without success function");
			return false;
		}
		if(arg["fail"])
		{
			window.confirmModalFail = arg["fail"];
		}
		if(arg["class"])
		{
			var className = arg["class"] + " confirmModal";
		}
		else {
			var className = "confirmModal";
		}
	}
	else {
		showPop("Confirm function invoked without options");
		return false;
	}

	showModalMessage({
		"class":className, //the classname of the main modal, as defined by the css for the particular module
		"closable":"0", //the modal can be closed by the user. any value other than 1 makes it unclosable by user
		"content":modalHtml, //passing the html content
		"timed":"0", //if the modal should be auto-closed after 3 seconds. "0" will disable this
		"size":"small" //small -320px, wide -540px, xl -768px, xxl - 992px
	});

	if(arg["timed"] && arg["timed"] != "0")
	{
		if(arg["timer"]){
			var countdown = arg["timer"]/1000;
		}
		else {
			var countdown = 4;
		}
		var i=1;
		var cdtimer = window.setInterval(function(){
			if(i > countdown)
			{
				if(arg["default"] && arg["default"] == "success")
				{
					$(".confirmModal button.yes").click();
				}
				else if(arg["default"] && arg["default"] == "fail")
				{
					$(".confirmModal button.no").click();
				}
				else if(arg["default"])
				{
					$(".confirmModal").fadeOut(150);
					if(typeof arg["default"] == "function"){
					arg.default();}
				}
				else {
					$(".confirmModal button.yes").click();
				}

				window.clearInterval(cdtimer);
			}
			else {
				var remaining = countdown - i;
				$(".confirmModal .timerMessage .timerVal").text(remaining);
				i++;
			}
		},1000);
	}
}

//landing page requirements

var d = new Date();
var xMonth = d.getMonth()+1;
var xDay = d.getDate();
var xToday = d.getFullYear() + '-' + (xMonth<10 ? '0' : '') + xMonth + '-' + (xDay<10 ? '0' : '') + xDay;

var baseUrl = window.location.protocol+'//'+window.location.host+'/';

//popup modals
function showModalMessage(arg)
{
	$('.messageModal').detach();

  var modalCard = '<div class="messageModal"><div class="messageModalInner inner"><a class="close"><img class="closeImg" src="img/close.svg"></a><div class="modalContent"></div><button class="modalCta">Close</button></div></div>';

	var message = either(arg["message"],arg["content"]);
	var duration = either(arg["duration"],3000) ;

	$('body').append(modalCard);

	if(arg && arg["class"])
	{
		$(".messageModal").addClass(arg["class"]);
		var innerClass = arg["class"];
		innerClass += "Inner";
		$(".messageModal .messageModalInner").addClass(innerClass);
	}

	if(arg && arg["closable"] && arg["closable"] != "1")
	{
		$(".messageModal .messageModalInner .close, .messageModal .messageModalInner .modalCta").detach();
	}

	if(arg && arg["nobutton"])
	{
		$(".messageModal .messageModalInner .modalCta").detach();
	}

	if(arg["width"]) // small, wide, xl, xxl
	{
		$('.messageModal').addClass(arg["width"]);
	}

	$('.messageModal .modalContent').html(message);
	$('.messageModal').fadeIn(150).css("display","flex");
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
	{
		var innerhght = $(".messageModalInner").height() + 40 + "px";
		$(".messageModalInner").css({
			"position":"absolute",
			"margin":"auto",
			"left":"0",
			"right":"0",
			"top":"0",
			"bottom":"0",
			"height":innerhght
		})
	}
	if(!arg || arg["timed"] == undefined || arg["timed"] == null || isNaN(arg["timed"]) || arg["timed"] == "1")
	{
		setTimeout(function(){
			$('.messageModal').fadeOut(150);
		},duration);
	}
}
$(document).on("click", ".messageModal .modalCta, .messageModal .close", function(e){
	e.preventDefault(); e.stopPropagation();
	$('.messageModal').fadeOut(150);
});
function attachLoader()
{

	if(!window.loaderStylesAdded)
	{
		var loaderCSS = '.loader { display:-moz-flex; display:-webkit-flex; display: flex; position: fixed;width: 100%;height: 100%;z-index: 9999;background: rgba(255, 255, 255, 0.9); -webkit-justify-content: center; -moz-justify-content: center; -o-justify-content: center; justify-content: center; -webkit-align-items: center; -moz-align-items: center; -o-align-items: center; align-items: center;flex-direction: column;top: 0;left: 0;}.loader .loaderText {color: #424F5A;margin-bottom: 8px;}';

		var head = document.head || document.getElementsByTagName('head')[0];
		var newStyle = document.createElement('style');

		newStyle.type = 'text/css';
		if (newStyle.styleSheet){
		  newStyle.styleSheet.cssText = loaderCSS;
		} else {
		  newStyle.appendChild(document.createTextNode(loaderCSS));
		}

		head.appendChild(newStyle);
		window.loaderStylesAdded = true;
	}

	var loaderCard = '<div class="loader"><h4 class="loaderText">Waiting</h4><img class="loaderImg" src="http://cdn.orobind.com/srv/static/imagesV2/orobind-spinning-clock.gif"></div>';
	$('body').append(loaderCard);
}
function detachLoader()
{
	$('.loader').detach();
}

//master AJAX function
function getData(arg)
{
	//define options
	//"url" - required
	//"type" - GET or POST, default is get.
	//"data" - optional, if present, will pass this as the data, otherwise will assume the data is query stringed
	//"data-type" - optional, default is json
	//"contentType" - optional, default is application/json
	//"async" - optional, default is true
	//"processData" - optional, default is true
	//"success" - optional, function to call on success
	//"fail" - optional, function to call on failure

	var type = either(arg["type"],'GET');
	var dataType = either(arg["data-type"],'json');
	var putdata = either(arg["data"],'');
	var asyn = either(arg["async"],true);
	var contentType = either(arg["contentType"],'application/json');
	var processData = either(arg["processData"],true);

	attachLoader();
	var result = null;
	$.ajax({
			url: arg["url"],
			type: type,
			dataType: dataType,
			data: putdata,
			async: asyn,
			processData: processData, // Don't process the files
			contentType: contentType,
			success: function(data) {
					detachLoader();
					if(arg["success"])
					{
						var f = arg["success"];
						f();
					}
					result = data;
			},
			error: function(xhr, status, thrown)
			{
					detachLoader();
					if(arg["fail"])
					{
						var f = arg["fail"];
						f();
					}
			}
	});
	return result;
}

//either value, preferably first arguement
function either(arg1,arg2)
{
	if(arg1 === undefined || arg1 === null)
	{
		return arg2;
	}
	else {
		return arg1;
	}
}

//validation functions
function isMobileValid(mobile){
	var isValid = true;
	if (isNaN(mobile)){
		isValid = false;
	}
	if(isValid){
		if(!(mobile.length == 10)){
			isValid = false;
		}
	}
	return isValid;
}
function isEmailValid(email){
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
