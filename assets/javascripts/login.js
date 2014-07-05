window.addEventListener('load', function(){
    var html;
    html = document.getElementById('loginform').innerHTML;

    // Get the User text from label
    placeholder_user = html.match(/user_login["'][^>]*>([^<]+)/)[1];

    // Get the User text from label
    placeholder_pass = html.match(/user_pass["'][^>]*>([^<]+)/)[1]

    // remove the User text from label
    html = html.replace(/(.*)(user_login["'][^>]*>).+[<br>]*(.*)/, "$1$2$3");

    // remove the Password text from label
    html = html.replace(/(.*)(user_pass["'][^>]*>).+[<br>]*(.*)/, "$1$2$3");

    // Put HTML without texts
    document.getElementById('loginform').innerHTML = html;

    document.getElementById ("user_login").setAttribute('placeholder', placeholder_user.toLowerCase());

    document.getElementById ("user_pass").setAttribute('placeholder', placeholder_pass.toLowerCase());
});
