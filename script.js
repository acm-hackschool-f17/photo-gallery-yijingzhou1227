
function attachEventHandlers() {
	$('.image').on('click', handleImageClick);
}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	const info = $('.info-pane');
	const preview = $('.preview-image');
	const pop_up = $(".pop_up");

	if (target.hasClass('selected')) {

		images.removeClass('not-selected');
		target.removeClass('selected');
		pop_up.hide();
		info.fadeOut(200); 


	}
	else {
		images.removeClass('selected');
		images.addClass('not-selected');
		target.addClass('selected');
		target.removeClass('not-selected');
		preview.css('background-image', target.css('background-image'));
		info.fadeIn(200);
		pop_up.hide();


	}
    
    

}

$('document').ready(function() {

	attachEventHandlers();

});
