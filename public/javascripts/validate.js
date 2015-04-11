$(document).ready(function( ) {
console.log('time to validate');
	$("#todoForm").validate({
		rules: {
			priority: {
				required: true
			},
			title: {
				required: true,
				minlength:5,
				maxlength: 32
			},
			dueDate: {
				required: true,
				dateISO: true
			}
		}
	});
});

