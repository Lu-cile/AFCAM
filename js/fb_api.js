/*$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/fr_FR/sdk.js', function(){
    FB.init({
      appId: '1074559709283634',
      version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
    });
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(function() {
            alert('Status updated!!');
            // Your logic here
        });
  });
});*/

$(document).ready(function () {

  // Initialisation
  window.fbAsyncInit = function () {
    FB.init({
      appId: '1074559709283634',
      xfbml: true,
      version: 'v2.6'
    });
    // Insérer ici le code relatif au SDK



    //Fin du code
  };

  
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.6&appId=1074559709283634";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


});
