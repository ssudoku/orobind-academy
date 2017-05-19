function userflow() {
  var _signin = '<div class="signInModal userFlowModals"><h3>Sign in to Orobind Academy</h3><div class="buttonRow fb"><span class="icon"><img class="iconImg" src="img/f.svg"></span><span class="text">Connect with Facebook</span></div><div class="buttonRow google"><span class="icon"><img class="iconImg" src="img/g.svg"></span><span class="text">Connect with Google</span></div><div class="buttonRow email launchEmailSignin"><span class="text">Sign in with Email</span></div><p class="newMember">No account? <a href="#" class="launchSignup">Click here</a> to create one.</p></div></div>';
  var _emailSignin = '<div class="signInEmailModal userFlowModals"><h3>Sign in to Orobind Academy</h3><div class="linkRow"><a href="#" class="backLink" data-context="emailSignin"><span class="flipH">&#10140;</span> Back</a></div><div class="formRow"><div class="inputWrap"><input type="text" placeholder="Email"><span class="mistake">&#10006;</span><span class="done">&#10004;</span></div><div class="inputWrap"><input type="password" placeholder="Password"><span class="mistake">&#10006;</span><span class="done">&#10004;</span></div></div><div class="buttonRow loginEmail"><span class="text">Sign in with Email</span></div><p class="newMember">Forgot your password? <a href="#" class="launchForgotPw">Click here</a></p></div>';
  var _signup = '<div class="signUpModal userFlowModals"><h3>Create new account</h3><div class="buttonRow fb"><span class="icon"><img class="iconImg" src="img/f.svg"></span><span class="text">Connect with Facebook</span></div><div class="buttonRow google"><span class="icon"><img class="iconImg" src="img/g.svg"></span><span class="text">Connect with Google</span></div><div class="buttonRow email"><span class="text">Sign up with Email</span></div><p class="newMember">Already have an account? <a href="#" class="launchSignin">Sign in</a></p></div></div>';
  var _emailSignup = '<div class="signUpEmailModal userFlowModals"><h3>Sign up with email</h3><div class="linkRow"><a href="#" class="backLink" data-context="emailSignup"><span class="flipH">&#10140;</span> Back</a></div><div class="formRow"><div class="inputWrap"><input type="text" placeholder="Your Name"><span class="mistake">&#10006;</span><span class="done">&#10004;</span></div><div class="inputWrap"><input type="text" placeholder="Mobile Number"><span class="mistake">&#10006;</span><span class="done">&#10004;</span></div><div class="inputWrap"><input type="text" placeholder="Email"><span class="mistake">&#10006;</span><span class="done">&#10004;</span></div><div class="inputWrap"><input type="password" placeholder="Set Password"><span class="mistake">&#10006;</span><span class="done">&#10004;</span></div></div><div class="buttonRow loginEmail"><span class="text">Create Account</span></div></div>';
  var _forgotPw = '<div class="forgotPwModal userFlowModals"> <h3>Reset your password</h3> <div class="linkRow"><a href="#" class="backLink" data-context="forgotPw"><span class="flipH">&#10140;</span> Back</a></div><div class="formRow"> <div class="inputWrap"> <input type="text" placeholder="Your email"> <span class="mistake">&#10006;</span> <span class="done">&#10004;</span> </div></div><div class="buttonRow loginEmail"><span class="text">Request password reset</span></div><p class="newMember">Having trouble? Call 70266 34762</p></div>';
  var _fbRedir = 'http://www.facebook.com/dialog/oauth/?scope=email,read_stream,publish_stream&client_id=368516539984464&redirect_uri=http://www.orobind.com/sociallogin/fb&response_type=code';
  var _googleRedir = 'https://accounts.google.com/o/oauth2/auth?scope=openid+email&response_type=code&redirect_uri=http://www.orobind.com/sociallogin/gp&client_id=503472102318-v38u0kvpm42s2pelenf3qh00upi826l5.apps.googleusercontent.com&hl=en&after_redirect=keep_open&from_login=1&as=3d0b0cb32190c6ce&pli=1&authuser=0';

  this.signin = function() {
    return _signin;
  }
  this.emailSignin = function() {
    return _emailSignin;
  }
  this.signup = function() {
    return _signup;
  }
  this.emailSignup = function() {
    return _emailSignup;
  }
  this.forgotPw = function() {
    return _forgotPw;
  }
  this.fbRedir = function() {
    return _fbRedir;
  }
  this.googleRedir = function() {
    return _googleRedir;
  }
}

var currentSessionFlow = new userflow();

function signinLaunch()
{
  showModalMessage({
    "message":currentSessionFlow.signin(),
    "timed":0,
    "size":"small",
    "nobutton":true
  });
}
function emailSigninLaunch()
{
  showModalMessage({
    "message":currentSessionFlow.emailSignin(),
    "timed":0,
    "size":"small",
    "nobutton":true
  });
}
function signupLaunch()
{
  showModalMessage({
    "message":currentSessionFlow.signup(),
    "timed":0,
    "size":"small",
    "nobutton":true
  });
}
function emailSignupLaunch()
{
  showModalMessage({
    "message":currentSessionFlow.emailSignup(),
    "timed":0,
    "size":"small",
    "nobutton":true
  });
}
function forgotPwLaunch()
{
  showModalMessage({
    "message":currentSessionFlow.forgotPw(),
    "timed":0,
    "size":"small",
    "nobutton":true
  });
}

//click handlers

$(document).on("click",".launchEmailSignin",function(e){
  e.preventDefault(); e.stopPropagation();
  emailSigninLaunch();
});

$(document).on("click",".launchEmailSignup",function(e){
  e.preventDefault(); e.stopPropagation();
  emailSignupLaunch();
});

$(document).on("click",".launchSignup",function(e){
  e.preventDefault(); e.stopPropagation();
  signupLaunch();
});

$(document).on("click",".launchSignin",function(e){
  e.preventDefault(); e.stopPropagation();
  signinLaunch();
});

$(document).on("click",".launchForgotPw",function(e){
  e.preventDefault(); e.stopPropagation();
  forgotPwLaunch();
});

$(document).on("click",".backLink",function(){
  var x = $(this).attr("data-context");
  switch (x) {
    case 'emailSignin':
      signinLaunch();
    break;
    case 'emailSignup':
      signupLaunch();
    break;
    case 'forgotPw':
      emailSigninLaunch();
    break;
  }
});
