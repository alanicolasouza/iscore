//banner home
IS_Banner = function(el){
    //vars
    var countP, showFirst, atual, elements, nextSlide, showAtual, bullets;

    countP = jQuery(el).length;

    // definindos os elementos
    elements = jQuery(el);

    elements.hide();

    //conta os indices do .wrapP
    elements.each(function(){
        //vars
        var hasCaption;

        //verifica se o painel possui a tag <figcaption>
        jQuery('figcaption',this).addClass('figcaption');
        hasCaption = jQuery('figcaption', this).hasClass('figcaption');

        return hasCaption ? jQuery('figure', this).addClass('caption-on') : jQuery('figure', this).addClass('caption-off');
    });

    showFirst = function(){

        elements.fadeOut(750).first().fadeIn(750);
        atual = 0;
    }

    showAtual = function(){
        elements.not(elements[atual]).fadeOut(750);
        jQuery(elements[atual]).fadeIn(750);
    }

    nextSlide = function(){
        atual++;
        atual = atual >= countP ? 0 : atual;
        showAtual();
    }

    /*
    prevSlide = function(){
        atual--;
        atual = atual < 0 ? countP : atual;
        showAtual();
    }
    */

    //bullets
    jQuery('#isBanner').append('<ul id="wBullets"></ul>')

    for( i=0; i<countP; i++)
        jQuery('#wBullets').append('<li><a href="javascript: void(0)" title="#">' + i + '</a></li>');

    bullets = jQuery('#wBullets a');

    bullets.click(function(){
        var indexClick;
        indexClick = bullets.index(this);

        atual = indexClick;
        showAtual();
    });

    setInterval(nextSlide, 5000);

    jQuery(window).load(function(){
        showFirst(0,0);
    });



}