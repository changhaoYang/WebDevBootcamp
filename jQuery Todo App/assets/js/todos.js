$("ul").on("click", "li", function(){  //"li" inside of "ul"
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").on("keypress", function(event){
	if (event.which === 13) {	//code for "enter" key
		var todoText = $(this).val();
		$("ul").append("<li>" + "<span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type = 'text']").fadeToggle();
});