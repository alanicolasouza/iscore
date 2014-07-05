/*
*@name: IE Hacks;
*
*@author: Robson Junior;
*
*@author-url: http://www.robsonjunior.com.br;
*
*@description: hacks for Internet Explorer;
*
*@update: 12/02/2013;
*
*@date: 08/02/2013;
*
*@company: Agência Digital Interative Studio;
*
*company-url: http://www.interativestudio.com.br;
*/


//Screen Upadate for Intern
function IS_updateScreen(){
	
	//Filter elemments
	var filterElements	=	'footer, #footer, .footer, .rodape, #rodape';

	//Generate HTML
	var iframeSRC		=	'http://www.interativestudio.com.br/browser_update/browser_update.html';
	var createTags		=	'<div id="iframe-browser-update" class="cp">'+
								'<div class="wrap-content-up">'+
									'<a class="btn-close" href="javascript: void(0)">Clique aqui para continuar navegando.</a>'+
								'</div>'+
							'</div>';

	jQuery(filterElements).after(createTags);
	jQuery('.wrap-content-up').find('.btn-close').after('<iframe class="ie-iframe" src="'+iframeSRC+'"></iframe>');

	//Close Button
	jQuery('.btn-close').click(function(){ jQuery("#iframe-browser-update").fadeOut(); });
	
}

//for placeholder | Atribute HTML5
function IS_placeholder(){
	
}