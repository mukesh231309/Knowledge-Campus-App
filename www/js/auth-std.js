$(document).ready(function(){
	var url="https://kitetech.ac.in/App/auth-std.php?callback=?";

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
						
						window.location.href = "std-info.html";
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
	
// upload profile picture
 $("#profile").click(function(){
  
		var username=localStorage.username;
		
		var file1=$("#file").val();		//alert(file1);
		
    	var dataString="file="+file1+"&username="+username+"&profile=";

    	if($.trim(username).length>0 & $.trim(file1).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#profile").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Submitted");
						window.location.href = "std-info.html";
					}
					else if(data="failed")
					{
						alert("Not connecting to server");
					}
				}
			});
		}return false;

    });	
	
//update
        $("#update").click(function() {
			var username=localStorage.username;
	var address1=$("#address1").val();
	var address2=$("#address2").val();
	var city=$("#city").val();
            var dataString = "address1="+address1+"&address2="+address2+"&city="+city+"&username="+username+"&update=";
			if($.trim(address1).length>0)
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
                        window.location.href = "std-info.html";
                    } else if (data == "failed") {
                        alert("error");
                    }
                }
            });
			}return false;
        });	
		
    //Add Remark function	
    $("#add").click(function(){
		var username=localStorage.username;
		var id=$("#search-box").val();

		var des=$("#des").val();
		//alert(des);
		
    	var dataString="id="+id+"&des="+des+"&username="+username+"&add=";

    	if($.trim(username).length>0 & $.trim(des).length>0)
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
						window.location.href = "std-rem.html";
					}
					else if(data="failed")
					{
						alert("Not connecting to server");
					}
				}
			});
		}return false;

    });	

    //Add Staff Remark function	
    $("#add2").click(function(){
		var username=localStorage.username;
		var id=$("#search-box").val();

		var des=$("#des").val();
		
		
    	var dataString="id="+id+"&des="+des+"&username="+username+"&add2=";

    	if($.trim(username).length>0 & $.trim(des).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#add2").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Submitted");
						window.location.href = "fac-rem.html";
					}
					else if(data="failed")
					{
						alert("Not connecting to server");
					}
				}
			});
		}return false;

    });		

    //Worksheet download Function
    $("#download").click(function(){
    		var num = decodeURI(getUrlVars()["num"]);
			$("#num").val(num);	
				    	
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
						
						//window.location.href = "std-info.html";
						window.location.href = "worksheet-download.html?username="+username+"&num="+num;
					}
					else if(data="failed")
					{
						alert("Incorrect password");
						$("#login").html('Login');
					}
				}
			});
		}return false;

    });	
    //upload material function	
    $("#upload").click(function(){
		var username=localStorage.username;
		var std=$("#std").val(); 
		//var class1 =$("#class").val();
    	var subject=$("#subject").val();
		var topic=$("#topic").val();

		var file1=$("#file").val();
		if ($('#NG1').is(":checked")){var NG1= 1;}
		if ($('#NG2').is(":checked")){var NG2= 1;}else{var NG2= 0;}
		if ($('#NE1').is(":checked")){var NE1= 1;}	
		
		if ($('#JE1').is(":checked")){var JE1= 1;}	
		if ($('#NJE').is(":checked")){var NJE= 1;}else{var NJE= 0;}		
		if ($('#JG1').is(":checked")){var JG1= 1;}
		
		if ($('#11NG1').is(":checked")){var NG1= 1;}
		if ($('#11NE1').is(":checked")){var NE1= 1;}
		if ($('#11JE1').is(":checked")){var JE1= 1;}		
		if ($('#11JG1').is(":checked")){var JG1= 1;}	
		if ($('#NJG').is(":checked")){var NJG= 1;}else{var NJG= 0;}	
		if ($('#NJE').is(":checked")){var NJE= 1;}else{var NJE= 0;}	
		
		if ($('#S1').is(":checked")){var S1= 1;}
		if ($('#S2').is(":checked")){var S2= 1;}
		if ($('#E4').is(":checked")){var E4= 1;}else{var E4= 0;}
		if ($('#E5').is(":checked")){var E5= 1;}else{var E5= 0;}
		if ($('#E6').is(":checked")){var E6= 1;}else{var E6= 0;}
		
		
		if ($('#9G1').is(":checked")){var G1= 1;}
		if ($('#9G2').is(":checked")){var G2= 1;}
		if ($('#E1').is(":checked")){var E1= 1;}
		if ($('#E2').is(":checked")){var E2= 1;}
		if ($('#E3').is(":checked")){var E3= 1;}else{var E3= 0;}
		
		if ($('#1E').is(":checked")){var E= 1;}
		if ($('#1G').is(":checked")){var G= 1;}
		if ($('#1ALL').is(":checked")){var E= 1; var G= 1;}
		
		if ($('#2E').is(":checked")){var E= 1;}
		if ($('#2G').is(":checked")){var G= 1;}
		if ($('#2ALL').is(":checked")){var E= 1; var G= 1;}

		if ($('#3E').is(":checked")){var E= 1;}
		if ($('#3G').is(":checked")){var G= 1;}
		if ($('#3ALL').is(":checked")){var E= 1; var G= 1;}		
		
		if ($('#4E').is(":checked")){var E= 1;}
		
		if ($('#4G').is(":checked")){var G= 1;}
		if ($('#4ALL').is(":checked")){var E1= 1; var E2= 1; var G= 1;}				
		
		if ($('#5E').is(":checked")){var E= 1;}
		
		if ($('#5G').is(":checked")){var G= 1;}
		if (std==5 && $('#5ALL').is(":checked")){var E1= 1; var E2= 1; var G= 1;}	

		if ($('#6E1').is(":checked")){var E1= 1;}
		if ($('#6E2').is(":checked")){var E2= 1;}
		if ($('#6G').is(":checked")){var G= 1;}
		if ($('#6ALL').is(":checked")){var E1= 1; var E2= 1; var G= 1;}	

		if ($('#7E1').is(":checked")){var E1= 1;}
		if ($('#7E2').is(":checked")){var E2= 1;}
		if ($('#7G').is(":checked")){var G= 1;}
		if ($('#7ALL').is(":checked")){var E1= 1; var E2= 1; var G= 1;}	

		if ($('#8E1').is(":checked")){var E1= 1;}
		if ($('#8E2').is(":checked")){var E2= 1;}
		if ($('#8G').is(":checked")){var G= 1;}
		if ($('#8ALL').is(":checked")){var E1= 1; var E2= 1; var G= 1;}	
		if (std==12 && $('#ALL').is(":checked")){
			var NG1= 1; var NG2= 1; var NE1= 1; var NE2= 1;
			var JE1= 1; var JE2= 1; var JG1= 1;			
			}
		if (std==11 && $('#11ALL').is(":checked")){
			var NG1= 1; var NE1= 1; var JE1= 1; var JG1= 1;
			var NJE= 1; var NJG= 1;  			
			}	
		if (std==10 && $('#10ALL').is(":checked")){
			var S1= 1; var S2= 1; var E4= 1; var E5= 1;
			var E6= 1;  			
			}
		if (std==9 && $('#9ALL').is(":checked")){
			var G1= 1; var G2= 1; var E1= 1; var E2= 1;
			var E3= 1; 			
			} 		
		
    	//var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&NG1="+NG1+"&NG2="+NG2+"&ALL="+ALL+"&NE1="+NE1+"&NE2="+NE2+"&JE1="+JE1+"&JE2="+JE2+"&JG1="+JG1+"&upload=";

		if (std==12){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&NG1="+NG1+"&NG2="+NG2+"&NE1="+NE1+"&JE1="+JE1+"&NJE="+NJE+"&JG1="+JG1+"&upload=";
		}
		if (std==11){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&NG1="+NG1+"&NE1="+NE1+"&JE1="+JE1+"&JG1="+JG1+"&NJG="+NJG+"&NJE="+NJE+"&upload=";
		}	
		if (std==10){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&S1="+S1+"&S2="+S2+"&E4="+E4+"&E5="+E5+"&E6="+E6+"&upload=";
		}	
		if (std==9){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&G1="+G1+"&G2="+G2+"&E1="+E1+"&E2="+E2+"&E3="+E3+"&upload=";
		}		
		
		if (std==1){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E="+E+"&upload=";
		}	
		if (std==2){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E="+E+"&upload=";
		}	
		if (std==3){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E="+E+"&upload=";
		}			
		if (std==4){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E="+E+"&upload=";
		}		
		if (std==5){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E="+E+"&upload=";
		}		
		if (std==6){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E1="+E1+"&E2="+E2+"&upload=";
		}			
		if (std==7){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E1="+E1+"&E2="+E2+"&upload=";
		}			
		if (std==8){
    	var dataString="std="+std+"&topic="+topic+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E1="+E1+"&E2="+E2+"&upload=";
		}		

    	if($.trim(username).length>0 & $.trim(topic).length>0 & $.trim(std).length>0 )
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#upload").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Submitted");
						window.location.href = "material.html";
					}
					else if(data="failed")
					{
						alert("Not connecting to server");
					}
				}
			});
		}return false;

    });		
    //upload worksheet function	
    $("#worksheet").click(function(){
		var username=localStorage.username;
		var std=$("#std").val();
		//var class1 =$("#class").val();
    	var subject=$("#subject").val();
		var topic=$("#topic").val();

		var file1=$("#file").val();
		if ($('#NG1').is(":checked")){var NG1= 1;}
		if ($('#NG2').is(":checked")){var NG2= 1;}else{var NG2= 0;}
		if ($('#NE1').is(":checked")){var NE1= 1;}	

		if ($('#JE1').is(":checked")){var JE1= 1;}	
		if ($('#NJE').is(":checked")){var NJE= 1;}else{var NJE= 0;}		
		if ($('#JG1').is(":checked")){var JG1= 1;}
		
		if ($('#11NG1').is(":checked")){var NG1= 1;}
		if ($('#11NE1').is(":checked")){var NE1= 1;}
		if ($('#11JE1').is(":checked")){var JE1= 1;}		
		if ($('#11JG1').is(":checked")){var JG1= 1;}	
		if ($('#NJG').is(":checked")){var NJG= 1;}else{var NJG= 0;}	
		if ($('#NJE').is(":checked")){var NJE= 1;}else{var NJE= 0;}	
		
		if ($('#S1').is(":checked")){var S1= 1;}
		if ($('#S2').is(":checked")){var S2= 1;}
		if ($('#E4').is(":checked")){var E4= 1;}else{var E4= 0;}
		if ($('#E5').is(":checked")){var E5= 1;}else{var E5= 0;}
		if ($('#E6').is(":checked")){var E6= 1;}else{var GEN1= 0;}
		
		
		if ($('#9G1').is(":checked")){var G1= 1;}
		if ($('#9G2').is(":checked")){var G2= 1;}
		if ($('#E1').is(":checked")){var E1= 1;}else{var E1= 0;}
		if ($('#E2').is(":checked")){var E2= 1;}else{var E2= 0;}
		if ($('#E3').is(":checked")){var E3= 1;}else{var E3= 0;}
		
		if ($('#1E').is(":checked")){var E1= 1;}
		if ($('#1G').is(":checked")){var G1= 1;}
		
		if ($('#2E').is(":checked")){var E2= 1;}
		if ($('#2G').is(":checked")){var G2= 1;}
		
		if ($('#3E').is(":checked")){var E3= 1;}
		if ($('#3G').is(":checked")){var G3= 1;}

		if ($('#4E').is(":checked")){var E4= 1;}
		if ($('#4G').is(":checked")){var G4= 1;}
		
		if ($('#5E').is(":checked")){var E5= 1;}
		if ($('#5G').is(":checked")){var G5= 1;}	
		
		if ($('#6E1').is(":checked")){var E16= 1;}else{var E16= 0;}
		if ($('#6E2').is(":checked")){var E2= 1;}else{var E26= 0;}
		if ($('#6G').is(":checked")){var G6= 1;}else{var G6= 0;}		
		
		if ($('#7E1').is(":checked")){var E17= 1;}else{var E17= 0;}
		if ($('#7E2').is(":checked")){var E27= 1;}else{var E27= 0;}
		if ($('#7G').is(":checked")){var G7= 1;}else{var G7= 0;}			
		
		if ($('#8E1').is(":checked")){var E18= 1;}else{var E18= 0;}
		if ($('#8E2').is(":checked")){var E28= 1;}else{var E28= 0;}
		if ($('#8G').is(":checked")){var G8= 1;}else{var G8= 0;}			
		//alert(G5);
		if (std==12 && $('#ALL').is(":checked")){
			var NG1= 1; var NG2= 1; var NE1= 1; 
			var JE1= 1; var NJE= 1; var JG1= 1;			
			}
		if (std==11 && $('#11ALL').is(":checked")){
			var NG1= 1; var NE1= 1; var JE1= 1; var JG1= 1;
			var NJE= 1; var NJG= 1;  			
			}	
		if (std==10 && $('#10ALL').is(":checked")){
			var S1= 1; var S2= 1; var E4= 1; var E5= 1;
			var E6= 1; 		
			}
		if (std==9 && $('#9ALL').is(":checked")){
			var G1= 1; var G2= 1; var E1= 1; var E2= 1;
			var E3= 1; 			
			} 
		if (std==8 && $('#8ALL').is(":checked")){
			var G8= 1; var E18= 1; var E28= 1;
			} 	
		if (std==7 && $('#7ALL').is(":checked")){
			var G7= 1; var E17= 1; var E27= 1;
			} 
		if (std==6 && $('#6ALL').is(":checked")){
			var G6= 1; var E16= 1; var E26= 1;
			} 	
		if (std==5 && $('#5ALL').is(":checked")){
			var G5= 1; var E5= 1;
			} 	
		if (std==4 && $('#4ALL').is(":checked")){
			var G4= 1; var E4= 1;
			}
		if (std==3 && $('#3ALL').is(":checked")){
			var G3= 1; var E3= 1;
			} 
		if (std==2 && $('#2ALL').is(":checked")){
			var G2= 1; var E2= 1;
			} 	
		if (std==1 && $('#1ALL').is(":checked")){
			var G1= 1; var E1= 1;
			} 				
			
		
		if (std==12){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&NG1="+NG1+"&NG2="+NG2+"&NE1="+NE1+"&JE1="+JE1+"&NJE="+NJE+"&JG1="+JG1+"&worksheet=";
		}
		if (std==11){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&NG1="+NG1+"&NE1="+NE1+"&JE1="+JE1+"&JG1="+JG1+"&NJG="+NJG+"&NJE="+NJE+"&worksheet=";
		}	
		if (std==10){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&S1="+S1+"&S2="+S2+"&E4="+E4+"&E5="+E5+"&E6="+E6+"&worksheet=";
		}	
		if (std==9){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&G1="+G1+"&G2="+G2+"&E1="+E1+"&E2="+E2+"&E3="+E3+"&worksheet=";
		}	
		if (std==8){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&G="+G8+"&E1="+E18+"&E2="+E28+"&worksheet=";
		}	
		if (std==7){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&G="+G7+"&E1="+E17+"&E2="+E27+"&worksheet=";
		}
		if (std==6){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&G="+G6+"&E1="+E16+"&E2="+E26+"&worksheet=";
		}
		if (std==5){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&G="+G5+"&E="+E5+"&worksheet=";
		}
		if (std==4){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&G="+G4+"&E="+E4+"&worksheet=";
		}	
		if (std==3){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&G="+G3+"&E="+E3+"&worksheet=";
		}	
		if (std==2){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&G="+G2+"&E="+E2+"&worksheet=";
		}	
		if (std==1){
    	var dataString="std="+std+"&subject="+subject+"&topic="+topic+"&file="+file1+"&username="+username+"&G="+G1+"&E="+E1+"&worksheet=";
		}			
		
    	if($.trim(username).length>0 & $.trim(std).length>0 )
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#worksheet").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Submitted");
						window.location.href = "worksheet.html";
					}
					else if(data="failed")
					{
						alert("Not connecting to server");
					}
				}
			});
		}return false;

    });	

    //Add Circular function	
    $("#circular").click(function(){
		var username=localStorage.username;
		var std=$("#std").val();
		var des=$("#des").val();
		var subject=$("#subject").val();
		var file1=$("#file").val();
		if ($('#NG1').is(":checked")){var NG1= 1;}
		if ($('#NG2').is(":checked")){var NG2= 1;}else{var NG2= 0;}
		if ($('#NE1').is(":checked")){var NE1= 1;}	
		
		if ($('#JE1').is(":checked")){var JE1= 1;}	
		if ($('#NJE').is(":checked")){var NJE= 1;}else{var NJE= 0;}		
		if ($('#JG1').is(":checked")){var JG1= 1;}
		
		if ($('#11NG1').is(":checked")){var NG1= 1;}
		if ($('#11NE1').is(":checked")){var NE1= 1;}
		if ($('#11JE1').is(":checked")){var JE1= 1;}		
		if ($('#11JG1').is(":checked")){var JG1= 1;}	
		if ($('#NJG').is(":checked")){var NJG= 1;}else{var NJG= 0;}	
		if ($('#NJE').is(":checked")){var NJE= 1;}else{var NJE= 0;}	
		
		if ($('#S1').is(":checked")){var S1= 1;}
		if ($('#S2').is(":checked")){var S2= 1;}
		if ($('#E4').is(":checked")){var E4= 1;}else{var E4= 0;}
		if ($('#E5').is(":checked")){var E5= 1;}else{var E5= 0;}
		if ($('#E6').is(":checked")){var E6= 1;}else{var E6= 0;}
		
		
		if ($('#9G1').is(":checked")){var G1= 1;}
		if ($('#9G2').is(":checked")){var G2= 1;}
		if ($('#E1').is(":checked")){var E1= 1;}
		if ($('#E2').is(":checked")){var E2= 1;}
		if ($('#E3').is(":checked")){var E3= 1;}else{var E3= 0;}
		
		if ($('#1E').is(":checked")){var E= 1;}
		if ($('#1G').is(":checked")){var G= 1;}
		if ($('#1ALL').is(":checked")){var E= 1; var G= 1;}
		
		if ($('#2E').is(":checked")){var E= 1;}
		if ($('#2G').is(":checked")){var G= 1;}
		if ($('#2ALL').is(":checked")){var E= 1; var G= 1;}

		if ($('#3E').is(":checked")){var E= 1;}
		if ($('#3G').is(":checked")){var G= 1;}
		if ($('#3ALL').is(":checked")){var E= 1; var G= 1;}		
		
		if ($('#4E').is(":checked")){var E= 1;}
		if ($('#4G').is(":checked")){var G= 1;}
		if ($('#4ALL').is(":checked")){var E= 1; var G= 1;}				
		
		if ($('#5E').is(":checked")){var E= 1;}
		if ($('#5G').is(":checked")){var G= 1;}
		if (std==5 && $('#5ALL').is(":checked")){var E= 1; ; var G= 1;}	

		if ($('#6E1').is(":checked")){var E1= 1;}
		if ($('#6E2').is(":checked")){var E2= 1;}
		if ($('#6G').is(":checked")){var G= 1;}
		if ($('#6ALL').is(":checked")){var E1= 1; var E2= 1; var G= 1;}	

		if ($('#7E1').is(":checked")){var E1= 1;}
		if ($('#7E2').is(":checked")){var E2= 1;}
		if ($('#7G').is(":checked")){var G= 1;}
		if ($('#7ALL').is(":checked")){var E1= 1; var E2= 1; var G= 1;}	

		if ($('#8E1').is(":checked")){var E1= 1;}
		if ($('#8E2').is(":checked")){var E2= 1;}
		if ($('#8G').is(":checked")){var G= 1;}
		if ($('#8ALL').is(":checked")){var E1= 1; var E2= 1; var G= 1;}	
		
		if (std==12 && $('#ALL').is(":checked")){
			var NG1= 1; var NG2= 1; var NE1= 1; 
			var JE1= 1; var NJE= 1; var JG1= 1;			
			}
		if (std==11 && $('#11ALL').is(":checked")){
			var NG1= 1; var NE1= 1; var JE1= 1; var JG1= 1;
			var NJE= 1; var NJG= 1;  			
			}	
		if (std==10 && $('#10ALL').is(":checked")){
			var S1= 1; var S2= 1; var E4= 1; var E5= 1;
			var E6= 1;   			
			}
		if (std==9 && $('#9ALL').is(":checked")){
			var G1= 1; var G2= 1; var E1= 1; var E2= 1;
			var E3= 1; 			
			} 
		
    	//var dataString="std="+std+"&des="+des+"&username="+username+"&subject="+subject+"&NG1="+NG1+"&NG2="+NG2+"&NE1="+NE1+"&NE2="+NE2+"&JE1="+JE1+"&JE2="+JE2+"&JG1="+JG1+"&circular=";

		if (std==12){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&NG1="+NG1+"&NG2="+NG2+"&NE1="+NE1+"&JE1="+JE1+"&NJE="+NJE+"&JG1="+JG1+"&circular=";
		}
		if (std==11){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&NG1="+NG1+"&NE1="+NE1+"&JE1="+JE1+"&JG1="+JG1+"&NJG="+NJG+"&NJE="+NJE+"&circular=";
		}	
		if (std==10){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&S1="+S1+"&S2="+S2+"&E4="+E4+"&E5="+E5+"&E6="+E6+"&circular=";
		}	
		if (std==9){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&G1="+G1+"&G2="+G2+"&E1="+E1+"&E2="+E2+"&E3="+E3+"&circular=";
		}		
		
		if (std==1){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E="+E+"&circular=";
		}	
		if (std==2){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E="+E+"&circular=";
		}	
		if (std==3){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E="+E+"&circular=";
		}			
		if (std==4){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E="+E+"&circular=";
		}		
		if (std==5){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E="+E+"&circular=";
		}		
		if (std==6){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E1="+E1+"&E2="+E2+"&circular=";
		}			
		if (std==7){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E1="+E1+"&E2="+E2+"&circular=";
		}			
		if (std==8){
    	var dataString="std="+std+"&des="+des+"&username="+username+"&file="+file1+"&subject="+subject+"&G="+G+"&E1="+E1+"&E2="+E2+"&circular=";
		}				
		
    	if($.trim(username).length>0 & $.trim(des).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#circular").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Submitted");
						window.location.href = "std-cir.html";
					}
					else if(data="failed")
					{
						alert("Not connecting to server");
					}
				}
			});
		}return false;

    });	
	
    //upload homework function	
    $("#homework").click(function(){
		var username=localStorage.username;
		var std=$("#std").val();
		var class1=$("#class").val();
    	var subject=$("#subject").val();
		var des=$("#des").val();

		var file1=$("#file").val();

		
		
    	var dataString="std="+std+"&class="+class1+"&subject="+subject+"&des="+des+"&file="+file1+"&username="+username+"&homework=";

    	if($.trim(username).length>0 & $.trim(std).length>0 )
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#homework").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Submitted");
						window.location.href = "home-work.html";
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
    	window.location.href = "login1.html";
    });

    //Displaying user email on home page
    $("#username").html(localStorage.username);
	
	    var imageHash="http://www.gravatar.com/avatar/"+md5(localStorage.email);
    $("#profilepic").attr('src',imageHash);
});
