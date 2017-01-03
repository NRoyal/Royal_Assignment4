//Initially:
//- hide Second paragraph
//- show blogroll section at
// smaller length

//Upon clicking the "read more" 
//button the following will appear:
//- second paragraph
//- copy will change to read less
//- blogroll length will increase (300px/para)


//FIRST ATTEMPT
// $(function() {
// 	$('#grey-2a').hide();
// 	$('#grey-2b').hide();

// 	$('.blog').click(function() {
// 		$('#more').html("Read Less <");
// 		$('.blogroll').css('height', '2300');
// 	 	$('aside').css('height', '2300');
// 		$(this).prev().slideToggle();
// 	})
// })

//SECOND ATTEMPT
$(function() {
	//Initially hidden page items
	$('#grey-2a').hide();
	$('#grey-2b').hide();
	$('#less-2a').hide();
	$('#less-2b').hide();

	//click on the 'read more' button for 
	//1st article & the button is hidden as
	//2nd para appears, 'read less' button
	//appears, page height increases.
	$('#more-2a').click(function(){
		$('#grey-2a').slideDown('slow', function(){
		});
		$('#less-2a').slideDown('slow', function(){
		});
		$('#more-2a').hide();
		//NEED A WAY TO ADD 300px TO EXISTING HEIGHT
		//USE ARGUMENT?
		$('.blogroll').css('height', '2300px');
		$('aside').css('height', '2300px');
	});

	//click on the 'read more' button for 
	//2nd article & the button is hidden as
	//2nd para appears, 'read less' button
	//appears, page height increases.
	$('#more-2b').click(function(){
		$('#grey-2b').slideDown('slow', function(){
		});
		$('#less-2b').slideDown('slow', function(){
		});
		$('#more-2b').hide();
		//NEED A WAY TO ADD 300px TO EXISTING HEIGHT
		//USE ARGUMENT?
		$('.blogroll').css('height', '2600px');
		$('aside').css('height', '2600px');
	});

	//click on the 'read less' button for 
	//1st article & the button is hiden as
	//2nd para disappears, 'read more' button
	//appears, page height decreases.
	$('#less-2a').click(function(){
		$('#grey-2a').slideUp('slow', function(){
		});
		$('#more-2a').show();
		$('#less-2a').hide();
		$('.blogroll').css('height', '2000px');
		$('aside').css('height', '2000px');
	})

	//click on the 'read less' button for 
	//2nd article & the button is hiden as
	//2nd para disappears, 'read more' button
	//appears, page height decreases.	
	$('#less-2b').click(function(){
		$('#grey-2b').slideUp('slow', function(){
		});
		$('#more-2b').show();
		$('#less-2b').hide();
		$('.blogroll').css('height', '2300px');
		$('aside').css('height', '2300px');
	})
})


	