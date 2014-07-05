jQuery(document).ready(function(){

    //Plugins
    jQuery('.nivoSlider').nivoSlider({ pauseTime: 7000});


	//Case Internet Explorer	
	if( jQuery.browser.msie ){

        jQuery('body').addClass('InternetExplorer');

		if( jQuery.browser.version <= '8.0' ){ IS_updateScreen();}
	}

    IS_hasValidate();
});

jQuery(window).load(function(){

	//Load Google Maps
	jQuery('.google-maps').css('visibility','visible');
});

jQuery(window).resize(function(){ wz(); });

var masks = ['(00) 00000-0000', '(00) 0000-00009'],
    maskBehavior = function(val, e, field, options) {
        return val.length > 14 ? masks[0] : masks[1];
    };

jQuery('input[type="tel"]').mask(maskBehavior, {onKeyPress:
    function(val, e, field, options) {
        field.mask(maskBehavior(val, e, field, options), options);
    }
});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var addthis_config = {"data_track_addressbar":false};		

jQuery(".fancy").fancybox({
	maxWidth	: 800,
	maxHeight	: 600,
	fitToView	: false,
	width		: '70%',
	height		: '70%',
	autoSize	: false,
	closeClick	: false,
	openEffect	: 'none',
	closeEffect	: 'none'
});