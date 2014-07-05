jQuery(document).ready(function(){

    jQuery('body').addClass('wz');

    //Plugins
     // for validator and ajax at same scope

	//jQuery('input[type="tel"]').mask('(99) 9999-9999');
    jQuery('.nivoSlider').nivoSlider({ pauseTime: 7000});


	//Case Internet Explorer	
//	if( jQuery.browser.msie ){
//
//        jQuery('body').addClass('InternetExplorer');
//		
//		if( jQuery.browser.version <= '8.0' ){ IS_updateScreen();}
//	}

    //IS_hasValidate();
});

//jQuery(window).load(function(){
//
//	//Load Google Maps
//	jQuery('.google-maps').css('visibility','visible');
//});

//jQuery(window).resize(function(){ wz(); });

jQuery('#single ul').each(function( ){
	
	var index, next;
	
	index = 0;
	$this = this;
	
	jQuery('li', this).each(function(index){

		if(( index % 4) == 0 ){
			
			next = index + 1;
			
			jQuery(this).addClass('bg');
			jQuery('li:eq('+next+')', $this).addClass('bg');
		}
	});
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