<<<<<<< HEAD
$("button#submitmessage").click( function() {
	 
	 
	 if( $("#subject").val() == "" || $("#message").val() == "" ){
	 	$("div#ackcontact").html("Please type your subject and message");
	 }
	 else{
	 	$.post( $("#contactform").attr("action"), 
		        $("#contactform :input").serializeArray(), 
				function(data) {
					$("div#ackcontact").html(data);
						window.location = "index.html#successful";
					} );
		 }
	 $("#contactform").submit( function() {
		 return false;
	 });
=======
$("button#submitmessage").click( function() {
	 
	 
	 if( $("#subject").val() == "" || $("#message").val() == "" ){
	 	$("div#ackcontact").html("Please type your subject and message");
	 }
	 else{
	 	$.post( $("#contactform").attr("action"), 
		        $("#contactform :input").serializeArray(), 
				function(data) {
					$("div#ackcontact").html(data);
						window.location = "index.html#successful";
					} );
		 }
	 $("#contactform").submit( function() {
		 return false;
	 });
>>>>>>> 032ab5dccf97614d51b5baadd23479cde016663b
});