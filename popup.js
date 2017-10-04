$(window).scroll(function() {
    $('#sectionForm').each(function(){
	    var animatePos = $(this).offset().top;
	    var topOfWindow = $(window).scrollTop();
        if (animatePos < topOfWindow+500) {
            $('#hubspotForm').addClass('animate-pop');
            $('#hubspotForm').fadeIn('slow');
            //$('#hubspotForm').load('formfile.html')
        }
    })
    $('#btnSubmit').click(function(){
    	$('#hubspotForm').removeClass('animate-pop');
    });
    $('#btnClose').click(function(){
        $('#hubspotForm').addClass('displayNone');
        console.log('Close me please!');
    }); 
});
