
var wz, IS_redirected, IS_checkradioStyle, IS_closeParent, IS_Banner, IS_tabs, IS_acord, IS_acord_diretor, IS_select ;

// window size
wz = function(){

	var ww, wh;

	ww = window.innerWidth;
	wh = window.innerHeight;

	jQuery('.wz').css({ maxWidth: ww+'px', minHeight: wh+'px' });
};

//validator
function IS_hasValidate(){

    // Regular Expression to test whether the value is valid
	jQuery.tools.validator.fn("[type=time]", "Por favor, forneça uma hora válida", function (input, value) {
        return(/^\d\d:\d\d$/).test(value);
    });
    
	jQuery.tools.validator.fn("[data-equals]", "Valor não é igual com o campo $1", function (input) {
        var name = input.attr("data-equals"), 
        field = this.getInputs().filter("[name=" + name + "]");
        return input.val() === field.val() ? true : [name];
    });
    
	jQuery.tools.validator.fn("[minlength]", function (input, value) {
        var min = input.attr("minlength");
        
        return value.length >= min ? true : {
            pt : "Por favor, forneça pelo menos " + min + " caráter(s)" + (min > 1 ? "s" : "") 
        };
    });

	jQuery.tools.validator.fn("[id=cpf]", "Informe um CPF válido.", function(input, value) {
        
        value = jQuery.trim(value);
		value = value.replace('.','');
		value = value.replace('.','');
		cpf = value.replace('-','');
		
		while(cpf.length < 11) cpf = "0"+ cpf;
		var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
		var a = [];
		var b = new Number;
		var c = 11;
		
		for (i=0; i<11; i++){
			a[i] = cpf.charAt(i);
			if (i < 9) b += (a[i] * --c);
		}

		if ( (x = b % 11) < 2 )
			a[9] = 0;
		else
			a[9] = 11-x;
		
		b = 0;
		c = 11;

		for (y=0; y<10; y++) b += (a[y] * c--);
		
		if( (x = b % 11) < 2 )
			a[10] = 0;
		else
			a[10] = 11-x;
	
		var retorno = true;

		if( (cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg) ) retorno = false;
	
		return retorno;

    }); // Mensagem padrão


	jQuery.tools.validator.localizeFn("[type=time]", {
        pt : 'Por favor, forneça uma hora válida'
    });
    
	jQuery.tools.validator.localizeFn("[id=cpf]", {
        pt : 'Informe um CPF válido.'
    });    
    
    jQuery.tools.validator.localize("pt", {
        ':email'  		: 'Digite um endere&ccedil;o de e-mail v&aacute;lido',
        '[required]' 	: 'Campo Obrigat&oacute;rio'
    });
	
    jQuery(".has-validation").validator({
		position: "top left",
		offset: [0, 0],
		messageClass: "form-error",
		message: "<div><em/></div>",
		lang: "pt"
	}).bind("onSuccess", function(e, els) {
			
		var button, form, numExpected, numSucceeded;
		  
		numSucceeded = els.length;		  
		numExpected = jQuery(this).data("validator").getInputs().length;

		//Se o número de campos validados é igual ao número de campos esperados
		if (numSucceeded === numExpected) {
			  
			form = jQuery(this);
		    
		    button = form.find('input[type=submit]');
		    button.attr('disable', 'disable').text('Processando...');
		    
		    $.post(form.attr("action"), form.serialize(), (function(responseText) {
		    	
		    	console.log( responseText );
		    	
		    	form.html( message(responseText.type, responseText.message) );
		      
		    	return false;
		      
		    }), "json");
		    
		}
		  
		  return false;

	}).attr("novalidate", "novalidate");
};

//Ajax send form
function message( tipo, mensagem ) {
	 
	if( tipo == '' )
		tipo = 'sucesso';

	switch( tipo ){

		case "info":
			tipo  = "";
			break;

		case "sucesso":
			tipo  = "alert-success";
			break;

		case "erro":
			tipo  = "alert-error";
			break;

		default:
			tipo  = '';
			mensagem = "Você declarou um tipo de mensagem inválido no código!";
	}
	
	console.log(  tipo +' '+ mensagem );
	
	return '<div class="alert '+ tipo +'">' + mensagem + '</div>';	 
};