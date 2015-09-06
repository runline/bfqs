<<<<<<< HEAD
$("button#submit").click( function() {
	 
	 
	 /*if( $("#username").val() == "" || $("#password").val() == "" || $("#password2").val() == "" || $("#cell").val() == "" || $("#email").val() == "" ){
	 	$("div#ackregister").html("Please fill in everything");
	 }
	 else{
		 if($("#password").val() == $("#password2").val()){*/
	 	$.post( $("#registerform").attr("action"), 
		        $("#registerform :input").serializeArray(), 
				function(data) {
					$("div#ackregister").html(data);
					} );
		 /*}
	 }*/
	 $("#registerform").submit( function() {
		 return false;
	 });
=======
$("button#submit").click( function() {
	 
	 
	 /*if( $("#username").val() == "" || $("#password").val() == "" || $("#password2").val() == "" || $("#cell").val() == "" || $("#email").val() == "" ){
	 	$("div#ackregister").html("Please fill in everything");
	 }
	 else{
		 if($("#password").val() == $("#password2").val()){*/
	 	$.post( $("#registerform").attr("action"), 
		        $("#registerform :input").serializeArray(), 
				function(data) {
					$("div#ackregister").html(data);
					} );
		 /*}
	 }*/
	 $("#registerform").submit( function() {
		 return false;
	 });
>>>>>>> 032ab5dccf97614d51b5baadd23479cde016663b
});