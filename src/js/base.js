function modal(idmodal){
	$('#'+idmodal).toggle();
	$('.flotante').fadeToggle(100);
	if (idmodal=='modal-img'){
		$('.flotante').removeAttr('style');
	}
}

function menumas(idmenumas){
	$('#'+idmenumas).slideToggle(500);
}


$('.menu-admin-boton').click(function() {
	    
	    idmenu=$(this).attr('id');
	    $('.menu-admin-lista#'+idmenu).slideToggle(500);

});


$('.menu-boton').click(function() {
	idmenu=$(this).attr('id');


	if($('#'+idmenu).attr('title')=='boton-abrir'){

		$("#btn-res1").attr('onclick',"$('.menu-temporal2').slideUp(); $('.menu-temporal1').slideToggle();");
		$("#btn-res2").attr('onclick',"$('.menu-temporal1').slideUp(); $('.menu-temporal2').slideToggle();");
		$('#'+idmenu).addClass('menu-boton-negro-close').attr('title', 'boton-cerrar');
		$('#logo-head a img').attr('src', urlweb + 'dist/images/logo.png');
		//logo-footer
		$('#logo-footer').hide();
		//$('.menu').show();
		$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
	    
		 $('.menu-lista#'+idmenu).show().animate({width: '100%'}, 200, function() {
	     	$('.menu-househerber-ul').fadeIn(50);
	     });
	    //$('.menu-lista#'+idmenu).show().animate({width: '100%'}, 200);

  
	}
	else if($('#'+idmenu).attr('title')=='boton-cerrar'){

		
		$("#btn-res1").removeAttr('onclick');
		$("#btn-res2").removeAttr('onclick');
		$('#'+idmenu).removeClass('menu-boton-negro-close').attr('title', 'boton-abrir');
		$('#logo-footer').show();
		
		//tipopaginabtn
		 if($('#'+idmenu).attr('class')=='menu-boton tipopaginabtn'){	 	
			$('#logo-head a img').attr('src', urlweb + 'dist/images/logo.png');
		 } else {
			$('#logo-head a img').attr('src', urlweb + 'dist/images/logo.png');
		 }

	    //$('.menu-lista#'+idmenu).fadeOut(100);
		$('html, body').css({
    overflow: 'auto',
    height: 'auto'
});

	    $('.menu-househerber-ul').fadeOut(50);
	    $('.menu-lista#'+idmenu).animate({width: '0px'}, 200, function() {
	     	$('.menu-lista#'+idmenu).removeAttr('style');
	     });

		
	}
	
});

$(window).scroll(function(){
   if ($(this).scrollTop() > 500) {
        $('.subir').fadeIn();
   } else {
        $('.subir').fadeOut();
   }
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('.subir').fadeOut();
    }, 2000));
});

$('.subir').click(function(event) {
	$("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$('.flotante-fondo').click(function() {
	idmodal=$(this).attr('id');
	$('#'+idmodal).toggle();
	$('.flotante').fadeToggle(100);
	if (idmodal=='modal-img'){
		$('.flotante').removeAttr('style');
	}
});

$('.flotante span.flotante-cerrar').click(function() {
	idmodal=$(this).attr('id');
	$('#'+idmodal).toggle();
	$('.flotante').fadeToggle(100);
	if (idmodal=='modal-img'){
		$('.flotante').removeAttr('style');
	}
});

$('label').click(function() {
	idlabel = $(this).attr('for');
      $(idlabel).focus();
});

$('.panel-acordeon .panel-encabezado').click(function() {	
	$('.panel-acordeon .panel-contenido').slideUp();
	var elemento=$(this).next();
	var estado =elemento.attr('style');

	if (!estado || estado=='display: none;') {
		elemento.slideDown();
	}
	else {
		elemento.slideUp();
	}			
});

$('body').click(function(event) {
	//Cerrar menu desplegable
	if(!$(event.target).is('.desplegable a') && $('.desplegable ul').attr('style'))
{
	$('.desplegable ul').hide();
}
});

$('.enlace-retraso').click(function() {
     var www = this.href;
     setTimeout(function(){
     	location.href=www;
     },500);
    return false;
});