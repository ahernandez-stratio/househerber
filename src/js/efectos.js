//Creado por XDMedia
var urlweb='http://www.househerber.es/';
//var urlweb='http://localhost/househerber/';

function generarseo(titulo){

	$.ajax({
		url: urlweb + 'inc/seo.php',
		type: 'POST',
		data: 'titulo=' + titulo,
		success: function(res){
			$('#seo').val(res);
		}
	});	
	
}

function crear_cookie(valor){

	$.ajax({
	type: 'POST',
	url: urlweb + 'inc/cookies.php',
	data: 'tipo=' + valor
	});

}


function animarflechas(){
	var hscreen = $(window).height();
	$('#section0').attr('style','height:' + hscreen + 'px');


	$('.boton-bajar').fadeIn(600);
	$('.textos-home-h1').addClass('color-blanco');
	//textos-home-h1

var bucleanimacion=0;

var intervalosa=setInterval(function(){

	bucleanimacion++;
	setTimeout(function(){

		$('.boton-bajar').animate({ 'marginBottom': '-20px' }, 400);

	},800);

	setTimeout(function(){
		$('.boton-bajar').animate({ 'marginBottom': '0px' }, 400);

	},1200);

	if(bucleanimacion>=3) clearInterval(intervalosa);

},800)

}


function menufondos(tipo) {


		if($(this).scrollTop() > 0){

		//$('body').attr('style','margin-top: 107px');
		$('header').addClass('header-mini');
		$('.menu-lista').addClass('menu-househerber-mini');
		$('.menu-boton').addClass('menu-boton-mini');
		$('.social').slideUp(200);
		$('.gestion').slideUp(200);

	}
	
	else {
		$('header').removeClass('header-mini');
		$('.menu-lista').removeClass('menu-househerber-mini');
		$('.menu-boton').removeClass('menu-boton-mini');	
		$('.social').slideDown(200);
		$('.gestion').slideDown(200);
	}

	//if($(this).scrollTop() > parseInt(screen.height - 72)) $('header').addClass('fondo-blanco-m'); else $('header').removeClass('fondo-blanco-m');
	if($(this).scrollTop() > 0) $('header').addClass('fondo-blanco-m2'); else $('header').removeClass('fondo-blanco-m2');


	
	if(tipo=='index'){

var estadohome = $(window).height();


var vertotalpagina= (estadohome*4)-90;



	if(($(window).scrollTop())>= vertotalpagina){

	$('#fp-nav ul li a span').addClass('puntos-abajo');
		
		$('#logo').addClass('sin-transicion');
		$('#logo').attr('src', urlweb + 'dist/images/logo.png');
		$('.menu-lista').addClass('tipopagina');
		$('header').addClass('fondo-blanco-m');
		$('.menu-boton').addClass('tipopaginabtn sin-transicion');

} else {
	$('#fp-nav ul li a span').removeClass('puntos-abajo');
	$('header').removeClass('fondo-blanco-m');			
	$('#logo').removeClass('sin-transicion');
	$('#logo').attr('src', urlweb + 'dist/images/logo.png');
	$('.menu-lista').removeClass('tipopagina');
	$('.menu-boton').removeClass('tipopaginabtn sin-transicion');

}
	} else if(tipo=='otros'){
		var estadohome = $(window).height();

	if($(window).scrollTop()>= parseInt(estadohome - 90)){
		$('#fp-nav ul li a span').addClass('puntos-abajo');
			setTimeout(function(){
			$('#logo').attr('src', urlweb + 'dist/images/logo.png');
			$('.menu-lista').addClass('tipopagina');
			$('header').addClass('fondo-blanco-m');
			$('.menu-boton').addClass('tipopaginabtn');
			},0)

	} else {
		$('#fp-nav ul li a span').removeClass('puntos-abajo');
		$('header').removeClass('fondo-blanco-m');
		$('#logo').attr('src', urlweb + 'dist/images/logo.png');
		$('.menu-lista').removeClass('tipopagina');
		$('.menu-boton').removeClass('tipopaginabtn');

	}	
	}




}


function menupaginas() {


		if($(this).scrollTop() > 0){

		//$('body').attr('style','margin-top: 107px');
		$('header').addClass('header-mini');
		$('.menu-lista').addClass('menu-househerber-mini');
		$('.menu-boton').addClass('menu-boton-mini');
		$('.social').slideUp(200);
		$('.gestion').slideUp(200);

	}
	
	else {
		$('header').removeClass('header-mini');
		$('.menu-lista').removeClass('menu-househerber-mini');
		$('.menu-boton').removeClass('menu-boton-mini');	
		$('.social').slideDown(200);
		$('.gestion').slideDown(200);
	}

	//if($(this).scrollTop() > parseInt(screen.height - 72)) $('header').addClass('fondo-blanco-m'); else $('header').removeClass('fondo-blanco-m');
	if($(this).scrollTop() > 0) $('header').addClass('fondo-blanco-m'); else $('header').removeClass('fondo-blanco-m');
	
}


$(window).resize(function(){
	var width = $(window).width();
	
	if(width>=739 && $('#menu1').attr('title')=='boton-cerrar'){
		$('#menu1').click();
		$(".menu-temporal").removeAttr('style');
	}
});

function verservicios(){
		if($('.menu-temporal').attr('style')=='display: block !important'){		
	$('.menu-temporal').attr('style', 'display: none');
		} else {
	$('.menu-temporal').attr('style', 'display: block !important');		
		}
}

function tipos(valor){
	if(valor=='servicio'){
		$.ajax({
		url: urlweb + 'inc/servicios.php',
		type: 'POST',
		data: 'cargar',
		success: function(res){
			$('#servicios').html(res).hide().fadeIn();
		}
	});	

	} else $('#servicios').html('');

}

function asegurar_add(valor){
	
	if (valor==1){
	window.onbeforeunload = function() {
	return 'Se perderan los cambios realizados!';
	}
	}
	else if (valor==2){
	window.onbeforeunload = null;

	}
}

function formcontacto(idform){

	var campos= $('#'+ idform).serializeArray();
	var validar=1;
	$.each(campos, function(index, value) {
		if(value.value=='') validar=0;
	});
	
	if(validar==0){
		$('#alertaMensaje').fadeIn(500).text('Completa todos los campos');
	} else {		
		
		//Enviar contacto
		$.ajax({
		url: urlweb + 'inc/contacto.php',
		type: 'POST',
		data: $('#'+ idform).serialize(),
		success: function(res){
		
			if(res=='ok'){
				$('#alertaMensaje').addClass('alerta-verde').fadeIn(500).text('Formulario enviado');
				setTimeout( function(){
					$('#alertaMensaje').slideToggle(500);
				}, 3000);
				$('#' + idform)[0].reset();
			}
			else if (res=='correoerror'){
				$('#alertaMensaje').fadeIn(500).text('Correo no v\u00e1lido');
				//$('#' + idform)[0].reset();
			}
			else if (res=='aceptoerror'){
				$('#alertaMensaje').fadeIn(500).text('Acepta las pol\u00edticas de privacidad');
				//$('#' + idform)[0].reset();
			}
			else {
				$('#alertaMensaje').fadeIn(500).text('Error al enviar');
				//$('#' + idform)[0].reset();
			}
		}
	});
	

	}

}

function formrapida(idform){

	var campos= $('#'+ idform).serializeArray();
	var validar=1;
	$.each(campos, function(index, value) {
		if(value.value=='') validar=0;
	});
	
	if(validar==0){
		$('#alertaMensaje').fadeIn(500).text('Completa todos los campos');
		return false;
	} else {		
		//Enviar rapida
		return true;

	}

}

function formpagina(idform){

	var campos= $('#'+ idform).serializeArray();
	var validar=1;
	$.each(campos, function(index, value) {
		if(value.value=='') validar=0;
	});
	
	if(validar==0){
		$('#alertaMensaje').fadeIn(500).text('Completa todos los campos');
		return false;
	} else {		
		//Enviar pagina
		return true;

	}

}

function formuser(idform){

	var campos= $('#'+ idform).serializeArray();
	var validar=1;
	var pass='';
	var pass2='';
	$.each(campos, function(index, value) {
		if(value.value=='') validar=0;

		if(value.name=='pass') pass=value.value;
		if(value.name=='pass2') pass2=value.value;
	});
	
	if(validar==0){
		$('#alertaMensaje').fadeIn(500).text('Completa todos los campos');
		return false;
	}
     else if(validar!=0 && pass!=pass2){
		$('#alertaMensaje').fadeIn(500).text('Las contraseñas no coinciden');
		return false;
	}
	
	else {		
		//Enviar pagina
		return true;

	}

}

function formconfigurar(idform){

	var campos= $('#'+ idform).serializeArray();
	var validar=1;
	$.each(campos, function(index, value) {
	
		if(value.name!='mapa' && value.name!='contador'){			
		if(value.value=='') validar=0;
		}

	});
	
	if(validar==0){
		$('#alertaMensaje').fadeIn(500).text('Completa todos los campos');
		return false;
	} else {		
		//Enviar pagina
		return true;

	}

}


function formdireccion(idform){

	var campos= $('#'+ idform).serializeArray();
	var validar=1;
	$.each(campos, function(index, value) {
	
		if(value.name!='tour'){			
		if(value.value=='') validar=0;
		}

	});
	
	if(validar==0){
		$('#alertaMensaje').fadeIn(500).text('Completa todos los campos');
		return false;
	} else {		
		//Enviar pagina
		return true;

	}

}


function mensaje(valor){
	
	if(valor=='url'){
		modal('modalurl');
	}

}


function formlogin(idform){

	var campos= $('#'+ idform).serializeArray();
	var validar=1;
	$.each(campos, function(index, value) {
		if(value.value=='') validar=0;
	});
	
	if(validar==0){
		$('#alertaMensaje').fadeIn(500).text('Completa todos los campos');
	} else {		
		//Enviar login
		$.ajax({
			url: urlweb + 'inc/login.php',
			type: 'POST',
			data: $('#'+ idform).serialize(),
			success: function(res){
				if(res=='error'){
		          $('#alertaMensaje').fadeIn(500).text('Datos incorrectos');
				}
				else location.reload();
			}
		});	


	}

}

function autodescripcion(){
	if ($('input#autode').is(':checked')) {
		$('#descripcion').val('[auto]');
	} else {
		$('#descripcion').val('');

	}
}

function subir_imagen(){

	
	var formData = new FormData($("#formSubirImagenes")[0]);
	$.ajax({
	type: 'POST',
	url: urlweb + 'ckeditor/plugins/upload/subir.php',
	data: formData,
	contentType: false,
	processData: false,
	success: function(htmlimagepost) {
	if(htmlimagepost!='error'){
	$('#formSubirImagenes')[0].reset();
	CKEDITOR.instances.cuerpo.insertHtml(htmlimagepost);
	}
	else {
	alert('Imagen no permitida!');
	$('#formSubirImagenes')[0].reset();
	}
	}
	});

}