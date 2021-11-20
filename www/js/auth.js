$(document).ready(function(){
	var url="https://kitetech.ac.in/App/auth.php?callback=?";

    //Login Function
    $("#login").click(function(){
    	
    	
		var username=$("#username").val();
    	var password=$("#password").val();
    	var dataString="username="+username+"&password="+password+"&login=";
    	if($.trim(username).length>0 & $.trim(password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#login").html('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						localStorage.login="true";
						localStorage.username=username;
						
						window.location.href = "index5.html";
					}
					else if(data="failed")
					{
						alert("Incorrect username or password");
						$("#login").html('Login');
					}
				}
			});
		}return false;

    });

    //signup function
    $("#signup").click(function(){
    	var name=$("#name").val();
    	var middlename=$("#middlename").val();
		var surname=$("#surname").val();
		var institute=$("#institute").val();
		var mobile=$("#mobile").val();
		var username=$("#username").val();
    	var password=$("#password").val();
    	var dataString="name="+name+"&middlename="+middlename+"&surname="+surname+"&institute="+institute+"&mobile="+mobile+"&username="+username+"&password="+password+"&signup=";

    	if($.trim(name).length>0 & $.trim(username).length>0 & $.trim(password).length>0 & $.trim(mobile).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#signup").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Thank you for Registering..! you can login now");
						window.location.href = "login.html";
					}
					else if(data="exist")
					{
						alert("Hey! You alreay have an account! you can login..!");
						window.location.href = "login.html";
					}
					else if(data="failed")
					{
						alert("Something Went wrong");
					}
				}
			});
		}return false;

    });
//update
        $("#update").click(function() {
			var username=localStorage.username;
			var num = $("#num").val();
            var std = $("#std").val();
            
            var subject = $("#subject").val();
			var class1 = $("#class").val();
			var activity = $("#activity").val();
			var time = $("#time").val();
			var room = $("#room").val();
			var des = $("#des").val();
			var file = $("#file").val();
            var dataString = "num="+num+"&std="+std+"&subject="+subject+"&class="+class1+"&activity="+activity+"&time="+time+"&room="+room+"&des="+des+"&file="+file+"&username="+username+"&update=";
			if($.trim(username).length>0 & $.trim(activity).length>0 & $.trim(std).length>0 & $.trim(des).length>0)
			{
            $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function() {
                    $("#update").val('Connecting...');
                },
                success: function(data) {
                    if (data == "success") {
                        alert("Updated");
                        window.location.href = "index.html";
                    } else if (data == "failed") {
                        alert("error");
                    }
                }
            });
			}return false;
        });	
    //Add function
	
    $("#add").click(function(){
		var username=localStorage.username;
		var std=$("#std").val();
    	var time=$("#time").val();
    	var class1=$("#class").val();
    	var subject=$("#subject").val();
		var activity=$("#activity").val();
		var room=$("#room").val();
		var des=$("#des").val();
		var file1=$("#file").val();

		
		
    	var dataString="std="+std+"&time="+time+"&class="+class1+"&subject="+subject+"&activity="+activity+"&room="+room+"&des="+des+"&file="+file1+"&username="+username+"&add=";

    	if($.trim(username).length>0 & $.trim(activity).length>0 & $.trim(std).length>0 & $.trim(des).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#add").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Submitted");
						window.location.href = "index3.html";
					}
					else if(data="failed")
					{
						alert("Not connecting to server");
					}
				}
			});
		}return false;

    });	
	

	

    //Change Password
    $("#change_password").click(function(){
    	var username=localStorage.username;
    	var old_password=$("#old_password").val();
    	var new_password=$("#new_password").val();
    	var dataString="old_password="+old_password+"&new_password="+new_password+"&username="+username+"&change_password=";
    	if($.trim(old_password).length>0 & $.trim(old_password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#change_password").val('Connecting...');},
				success: function(data){
					if(data=="incorrect")
					{
						alert("Your old password is incorrect");
					}
					else if(data="success")
					{
						alert("Password Changed successfully");
					}
					else if(data="failed")
					{
						alert("Something Went wrong");
					}
				}
			});
		}return false;

    });
	
    //Update Mobile Number
    $("#update_mobile").click(function(){
    	var username=localStorage.username;
    	var mobile=$("#mobile").val();

    	var dataString="mobile="+mobile+"&username="+username+"&update_mobile=";
    	if($.trim(mobile).length==10)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#update_mobile").val('Connecting...');},
				success: function(data){
					if(data=="incorrect")
					{
						alert("Your mobile number is incorrect");
					}
					else if(data="success")
					{
						alert("Mobile number updated successfully");
						window.location.href = "institute.html";
					}
					else if(data="failed")
					{
						alert("Something Went wrong");
					}
				}
			});
		}return false;

    });	

    //Forget Password
    $("#forget_password").click(function(){
    	var email=$("#email").val();
    	var dataString="email="+email+"&forget_password=";
    	if($.trim(email).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#forget_password").val('Connecting...');},
				success: function(data){
					if(data=="invalid")
					{
						alert("Your have not registered with us");
					}
					else if(data="success")
					{
						alert("we have sent password to your email address, please check");
					}
				}
			});
		}return false;

    });


    //logout function
    $("#logout").click(function(){
    	localStorage.login="false";
    	window.location.href = "login.html";
    });

    //Displaying user email on home page
    $("#username").html(localStorage.username);
	
	    var imageHash="https://www.gravatar.com/avatar/"+md5(localStorage.email);
    $("#profilepic").attr('src',imageHash);
});
