console.log( "please work" );

$(document).ready(function() {
	$('li').hover(function() { //mouse in
		$(this).animate({ marginLeft: '80px' }, 500);
	}, function() { //mouse out
		$(this).animate({ marginLeft: 0 }, 500);
	});
});
