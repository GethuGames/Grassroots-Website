/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version 
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function() { 
	//Preloader 
	$('#status').delay(300).fadeOut(); 
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {

    var hashMsg = window.location.hash.substr(1);
    if (hashMsg === "messageSubmitted") {
        $('#messageSubmitted').text("Message Submitted");
        $('#submit').hide();
    }

    $('#volunteerSubmit').click(function() {

        var validemail 			= 	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailValue 			=	$("#volunteerEmail").val();
        console.log(emailValue);

        //check if the given email address is valid or not
        if(emailValue.match(validemail) && emailValue!=""){

            var utilityURL      =   "http://www.grassrootsapp.in/volunteerRegistration.php";
            var data            =   {'email': emailValue};

            $.ajax({
                type			:	"POST",
                url 			:	utilityURL,	
                data            :   data
            }).done(function() {
                console.log('Volunteer Registered');
                $('#volunteerSubmit').fadeOut(200);
                $('#volunteerControl').fadeOut(200);
                $('#volunteerRegisterSuccess').fadeIn(200);
            }).fail(function() {
                console.log('Volunteer Registration Fail');
                $('#volunteerSubmit').fadeOut(200);
                $('#volunteerControl').fadeOut(200);
                $('#volunteerRegisterFailure').text('Network Issue');
                $('#volunteerRegisterFailure').fadeIn(200);
            });

        } else {
        
            $('#volunteerRegisterFailure').text('Enter valid Mail');
            $('#volunteerRegisterFailure').fadeIn(200).delay(2000).fadeOut(200);
        }
    });

    $('#ngoSubmit').click(function() {

        var validemail 			= 	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailValue 			=	$("#ngoEmail").val();
        var nameValue 			=	$("#ngoName").val();
        var mobileValue 		=	$("#ngoMobile").val();
        console.log(emailValue);

        //check if the given email address is valid or not
        if(emailValue.match(validemail) && emailValue!="" && nameValue!="" && mobileValue!=""){

            var utilityURL      =   "http://www.grassrootsapp.in/ngoRegistration.php";
            var data            =   {'email': emailValue, 'name': nameValue, 'mobile': mobileValue};

            $.ajax({
                type			:	"POST",
                url 			:	utilityURL,	
                data            :   data
            }).done(function() {
                console.log('NGO Registered');
                $('#ngoSubmit').fadeOut(200);
                $('#ngoNameControl').fadeOut(200);
                $('#ngoMailControl').fadeOut(200);
                $('#ngoMobileControl').fadeOut(200);
                $('#ngoRegisterSuccess').fadeIn(200);
            }).fail(function() {
                console.log('NGO Registration Fail');
                $('#ngoSubmit').fadeOut(200);
                $('#ngoNameControl').fadeOut(200);
                $('#ngoMailControl').fadeOut(200);
                $('#ngoMobileControl').fadeOut(200);
                $('#ngoRegisterFailure').fadeIn(200);
                $('#ngoRegisterFailure').text('Network Issue');
            });

        } else if (nameValue === ""){
            $('#ngoRegisterFailure').text('Please enter name of the NGO');
            $('#ngoRegisterFailure').fadeIn(200).delay(2000).fadeOut(200);
        } else if (emailValue === ""){
            $('#ngoRegisterFailure').text('Please enter mail');
            $('#ngoRegisterFailure').fadeIn(200).delay(2000).fadeOut(200);
        } else if (!emailValue.match(validemail)){
            $('#ngoRegisterFailure').text('Please enter valid mail');
            $('#ngoRegisterFailure').fadeIn(200).delay(2000).fadeOut(200);
        } else if (mobileValue === ""){
            $('#ngoRegisterFailure').text('Please enter mobile number');
            $('#ngoRegisterFailure').fadeIn(200).delay(2000).fadeOut(200);
        }
    });

    //animated logo
    $(".navbar-brand").hover(function () {
        $(this).toggleClass("animated shake");
    });
    
    //animated scroll_arrow
    $(".img_scroll").hover(function () {
        $(this).toggleClass("animated infinite bounce");
    });
    
    //Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
    wow = new WOW(
    {
        mobile: true
    });
    wow.init();
    
    //MagnificPopup
    $('.image-link').magnificPopup({type:'image'});


    // OwlCarousel N1
    $("#owl-demo-ngo").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });


    // OwlCarousel N1
    $("#owl-demo").owlCarousel({
        autoPlay: 30000,
        items : 3,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2],
        itemsTablet: [768,1]
    });

    // OwlCarousel N2
    $("#owl-demo-a").owlCarousel({
          items: 1,
          singleItem:true
    });

    // OwlCarousel N3
    $("#owl-demo-2").owlCarousel({
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
    });


    //SmothScroll
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
                if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body').animate({scrollTop: targetOffset}, 600);
                        return false;
                }
        }
    });
    
/*
    //Subscribe
    new UIMorphingButton( document.querySelectorAll( '.morph-button' )[0] );
    new UIMorphingButton( document.querySelectorAll( '.morph-button' )[1] );
    // for demo purposes only
    [].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) { 
        bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
    } );
*/

});

