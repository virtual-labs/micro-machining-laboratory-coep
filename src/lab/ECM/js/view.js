 /*
  * Author :Pravin Rasal
  * Date : 23 Nov,2012
  */
 
var color;
var type,valencyType;
Micromachine.view = (function(){

var view = function(){
	$("#material").html("<option selected='selected'>--Select--</option>"+
	"</option><option value = 'Aluminium'> Aluminium </option>"+
	"</option><option value = 'Beryllium'> Beryllium </option>"+
	"</option><option value = 'Chromium' > Chromium  </option>"+
	"</option><option value = 'Cobalt'> Cobalt </option>"+
	"</option><option value = 'Niobium'> Niobium </option>"+
	"</option><option value = 'Copper'> Copper </option>"+
	"</option><option value = 'Iron'> Iron </option>"+
	"</option><option value = 'Magnesium'> Magnesium </option>"+
	"</option><option value = 'Manganese'> Manganese </option>"+
	"</option><option value = 'Molybdenum'> Molybdenum </option>"+
	"</option><option value = 'Nickel'> Nickel </option>"+
	"</option><option value = 'Silicon'> Silicon </option>"+
	"</option><option value = 'Tin'> Tin </option>"+
	"</option><option value = 'Titanium'> Titanium </option>"+
	"</option><option value = 'Tungsten'> Tungsten </option>"+
	"</option><option value = 'Uranium'> Uranium </option>"+
	"</option><option value = 'Zinc'> Zinc </option>");
	$("#valency").change(function(){
		var dtype = $(this).val();
		valencyType = dtype;  
		showAlert(dtype);
		
	});
	
	$("#material").change(function(){
		var paper = Micromachine.paper;
		
		fillMetal.clone();
		var removeAnimateColor = Micromachine.animate.mainSet;
			removeAnimateColor.remove();
		 powerSupply.attr({fill:'#FF0000'});
		type = $(this).val();
			switch(type){
			case '--Select--' :
					color = "#DDDDDD";
					
				break;
			case 'Aluminium':
					color = "#4C3C3C";
					
					$('#atomic-weight').text('26.97');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '3'>3</option>");
				break;
			case 'Beryllium':
					color = "#0E86EF";
					
					$('#atomic-weight').text('9.0');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '2'>2</option>");
				break;
			case 'Chromium':
					color= "#4C787E";
					
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('51.99');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '2'>2</option>"+
					"</option><option value = '3'>3</option>"+
					"</option><option value = '6'>6</option>");
				break;
			case 'Cobalt':
					color= "#806D7E";
					
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('58.93');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '2'>2</option>"+
					"<option value = '3'>3</option>");
				break;
			case 'Niobium':
					color= "#806D7E";
					
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('92.91');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '3'>3</option>"+
					"<option value = '4'>4</option><option value = '5'>5</option>");	
				break;
			case 'Copper':
					color= "#5E5A80";
					
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('92.91');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '1'>1</option>"+
					"<option value = '2'>2</option>");
				break;
			case 'Iron':
					color= "#736F6E";
					
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('55.85');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '2'>2</option>"+
					"<option value = '3'>3</option>");
				break;
			case 'Magnesium':
					color= "#736F6E";
					
					$('#atomic-weight').text('24.31');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '2'>2</option>");
				break;
		   case 'Manganese':
		   			color= "#56A5EC";
		   			
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('54.94');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '2'>2</option>"+
					"<option value = '4'>4</option>"+
					"<option value = '6'>6</option>"+
					"<option value = '7'>7</option>");
				break;
			case 'Molybdenum':
					color= "#737CA1";
					
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('95.94');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '3'>3</option>"+
					"<option value = '4'>4</option>"+
					"<option value = '6'>6</option>");
					
				break;
			case 'Nickel':
					color= "#D16587";
					
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('58.71');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '2'>2</option>"+
					"<option value = '3'>3</option>");					
				break;
			case 'Silicon':
					color= "#C6AEC7";
					
					$('#atomic-weight').text('28.09');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '4'>4</option>");
				break;
			case 'Tin':
					color= "#9B5E5E";
					
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('118.69');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '2'>2</option>"+
					"<option value = '4'>4</option>");					
				break;
			case 'Titanium':
					color= "#ADDFFF";
					
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('47.9');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '3'>3</option>"+
					"<option value = '4'>4</option>");					
				break;
			case 'Tungsten':
					color= "#B4CFEC";
					
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('183.85');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '6'>6</option>"+
					"<option value = '8'>8</option>");					
				break;
				
		 case 'Uranium':
		 			color= "#92C7C7";
		 			
					$('#density').text("");
					$('#removalrate').text("");
					$('#atomic-weight').text('238.03');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '4'>4</option>"+
					"<option value = '6'>6</option>");					
				break;
		case 'Zinc':
					color= "#6698FF";
					
					$('#atomic-weight').text('65.37');
					$('#valency').html("<option value = 'select'>--Select--</option><option value = '2'>2</option>");
				break;
		}
	});
}
$('input.measure').click(function(){
	 
	 var val = $('input[name=group]:checked').val();
	 //alert(val);
	 switch(val){
	 	case 'gsec':
			 if(type =='Aluminium' && valencyType == 3 ){
					alert('Removal rate  is : 0.093');
			 }else if(type =='Beryllium' && valencyType == 2 ){
					alert('Removal rate  is : 0.047');
			 }else if(type =='Chromium' && valencyType == 2 ){
					alert('Removal rate  is : 0.269');
			 }else if(type =='Chromium' && valencyType == 3 ){
					alert('Removal rate  is : 0.180');
			 }else if(type =='Chromium' && valencyType == 6 ){
					alert('Removal rate  is : 0.090');
			 }else if(type =='Cobalt' && valencyType == 2 ){
					alert('Removal rate  is : 0.306');
			 }else if(type =='Cobalt' && valencyType == 3 ){
					alert('Removal rate  is : 0.204');
			 }else if(type =='Niobium' && valencyType == 3 ){
					alert('Removal rate  is : 0.321');
			 }else if(type =='Niobium' && valencyType == 4 ){
					alert('Removal rate  is : 0.241');
			 }else if(type =='Niobium' && valencyType == 5 ){
					alert('Removal rate  is : 0.193');
			 }else if(type =='Copper' && valencyType == 1 ){
					alert('Removal rate  is : 0.660');
			 }else if(type =='Copper' && valencyType == 2 ){
					alert('Removal rate  is : 0.329');
			 }else if(type =='Iron' && valencyType == 2 ){
					alert('Removal rate  is : 0.289');
			 }else if(type =='Iron' && valencyType == 3 ){
					alert('Removal rate  is : 0.193');
			 }else if(type =='Magnesium' && valencyType == 2 ){
					alert('Removal rate  is : 0.126');
			 }else if(type =='Manganese' && valencyType == 2 ){
					alert('Removal rate  is : 0.235');
			 }else if(type =='Manganese' && valencyType == 4 ){
					alert('Removal rate  is : 0.142');
			 }else if(type =='Manganese' && valencyType == 6 ){
					alert('Removal rate  is : 0.095');
			 }else if(type =='Manganese' && valencyType == 7 ){
					alert('Removal rate  is : 0.81');
			 }else if(type =='Molybdenum' && valencyType == 3 ){
					alert('Removal rate  is : 0.331');
			 }else if(type =='Molybdenum' && valencyType == 4 ){
					alert('Removal rate  is : 0.248');
			 }else if(type =='Molybdenum' && valencyType == 6 ){
					alert('Removal rate  is : 0.166');
			 }else if(type =='Nickel' && valencyType == 2 ){
					alert('Removal rate  is : 0.304');
			 }else if(type =='Nickel' && valencyType == 3 ){
					alert('Removal rate  is : 0.203');
			 }else if(type =='Silicon' && valencyType == 4 ){
					alert('Removal rate  is : 0.073');
			 }else if(type =='Tin' && valencyType == 2 ){
					alert('Removal rate  is : 0.615');
			 }else if(type =='Tin' && valencyType == 4 ){
					alert('Removal rate  is : 0.307');
			 }else if(type =='Titanium' && valencyType == 3 ){
					alert('Removal rate  is : 0.165');
			 }else if(type =='Titanium' && valencyType == 4 ){
					alert('Removal rate  is : 0.124');
			 }else if(type =='Tungsten' && valencyType == 6 ){
					alert('Removal rate  is : 0.317');
			 }else if(type =='Tungsten' && valencyType == 8 ){
					alert('Removal rate  is : 0.238');
			 }else if(type =='Uranium' && valencyType == 4 ){
					alert('Removal rate  is : 0.618');
			 }else if(type =='Uranium' && valencyType == 6 ){
					alert('Removal rate  is : 0.412');
			 }else if(type =='Zinc' && valencyType == 2 ){
					alert('Removal rate  is : 0.0339');
			 }
			break;		
		case 'msec':
		 	 if(type =='Aluminium' && valencyType == 3 ){
					alert('Removal rate  is : 0.035');
			 }else if(type =='Beryllium' && valencyType == 2 ){
					alert('Removal rate  is : 0.025');
			 }else if(type =='Chromium' && valencyType == 2 ){
					alert('Removal rate  is : 0.038');
			 }else if(type =='Chromium' && valencyType == 3 ){
					alert('Removal rate  is : 0.025');
			 } else if(type =='Chromium' && valencyType == 6 ){
					alert('Removal rate  is : 0.013');
			 } else if(type =='Cobalt' && valencyType == 2 ){
					alert('Removal rate  is : 0.35');
			 } else if(type =='Cobalt' && valencyType == 3 ){
					alert('Removal rate  is : 0.023');
			 }else if(type =='Niobium' && valencyType == 3 ){
					alert('Removal rate  is : 0.034');
			 }else if(type =='Niobium' && valencyType == 4 ){
					alert('Removal rate  is : 0.025');
			 }else if(type =='Niobium' && valencyType == 5 ){
				    alert('Removal rate  is : 0.020');
			 }else if(type =='Copper' && valencyType == 1 ){
				    alert('Removal rate  is : 0.074');
			 }else if(type =='Copper' && valencyType == 2 ){
				    alert('Removal rate  is : 0.037');
			 }else if(type =='Iron' && valencyType == 2 ){
				    alert('Removal rate  is : 0.037');
			 }else if(type =='Iron' && valencyType == 3 ){
					alert('Removal rate  is : 0.193');
			 }else if(type =='Magnesium' && valencyType == 2 ){
					alert('Removal rate  is : 0.072');
			 }else if(type =='Manganese' && valencyType == 2 ){
					alert('Removal rate  is : 0.038');
			 }else if(type =='Manganese' && valencyType == 4 ){
					alert('Removal rate  is : 0.019');
			 }else if(type =='Manganese' && valencyType == 6 ){
					alert('Removal rate  is : 0.013');
			 }else if(type =='Manganese' && valencyType == 7 ){
					alert('Removal rate  is : 0.011');
			 }else if(type =='Molybdenum' && valencyType == 3 ){
					alert('Removal rate  is : 0.032');
			 }else if(type =='Molybdenum' && valencyType == 4 ){
					alert('Removal rate  is : 0.024');
			 }else if(type =='Molybdenum' && valencyType == 6 ){
					alert('Removal rate  is : 0.016');
			 }else if(type =='Nickel' && valencyType == 2 ){
					alert('Removal rate  is : 0.034');
			 }else if(type =='Nickel' && valencyType == 3 ){
					alert('Removal rate  is : 0.023');
			 }else if(type =='Silicon' && valencyType == 3 ){
					alert('Removal rate  is : 0.031');
			 }else if(type =='Tin' && valencyType == 2 ){
					alert('Removal rate  is : 0.084');
			 }else if(type =='Tin' && valencyType == 4  ){
					alert('Removal rate  is : 0.042');
			 }else if(type =='Titanium' && valencyType == 3 ){
					alert('Removal rate  is : 0.037');
			 }else if(type =='Titanium' && valencyType == 4 ){
					alert('Removal rate  is : 0.028');
			 }else if(type =='Tungsten' && valencyType == 6 ){
					alert('Removal rate  is : 0.016');
			 }else if(type =='Tungsten' && valencyType == 8 ){
					alert('Removal rate  is : 0.012');
			 }else if(type =='Uranium' && valencyType == 4 ){
					alert('Removal rate  is : 0.032');
			 }else if(type =='Uranium' && valencyType == 6 ){
					alert('Removal rate  is : 0.022');
			 }else if(type =='Zinc' && valencyType == 2 ){
					alert('Removal rate  is : 0.048');
			 } 	 	 
			break;
		}	 
});
var showAlert  = function(dtype){
		switch(type){
			case 'Aluminium':
					switch(dtype){
							case '3':
								$('#density').text('2.67').append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.035');
								break;
						}
				break;
				case 'Chromium':
					switch(dtype){
						case '2':
							$('#density').text("7.19").append("<html><body> g/cm<sup>3</sup></body></html>");
							//alert('Removal rate in m/sec is :0.038');
							//$.prompt('Removal rate in m/sec is :0.111',{ buttons: { Ok: true, Cancel: false } });
							break;
						case '3':
							$('#density').text("");
							//alert('Removal rate in m/sec is :0.025');
							//$.prompt('Removal rate in m/sec is :0.222',{ buttons: { Ok: true, Cancel: false } });
							break;
						case '6':
							$('#density').text("");
							//alert('Removal rate in m/sec is :0.013');
							//$.prompt('Removal rate in m/sec is :0.333',{ buttons: { Ok: true, Cancel: false } });
							break;
						}
				break;
			case 'Beryllium':
					switch(dtype){
							case '2':
								$('#density').text('1.85').append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.025');
								//$.prompt('Removal rate in m/sec is :0.025',{ buttons: { Ok: true, Cancel: false } });
								break;
						}
				break;
			case 'Cobalt':
						switch(dtype){
							case '2':
								$('#density').text("8.85").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.035');
								break;
							case '3':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.023');
								break;
						}
				break;
			case 'Niobium':
						switch(dtype){
							case '3':
								$('#density').text("9.57").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.034');
								break;
							case '4':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.025');
								break;
							case '5':
								$('#density').text("");
								alert('Removal rate in m/sec is :0.020');
								break;
						}
				break;
			case 'Copper':
						switch(dtype){
							case '1':
								$('#density').text("8.96").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.74');
								break;
							case '4':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.037');
								break;							
						}
				break;
			case 'Iron':
						switch(dtype){
							case '2':
								$('#density').text("7.86").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.037');
								break;
							case '3':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.025');
								break;							
						}
				break;
			case 'Magnesium':
						switch(dtype){
							case '2':
								$('#density').text('1.74').append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.072');
								break;
						}
				break;
			case 'Manganese':
						switch(dtype){
							case '2':
								$('#density').text("7.43").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.038');
								break;
							case '4':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.019');
								break;
							case '6':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.013');
								break;	
							case '7':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.011');
								break;								
						}
				break;
			case 'Molybdenum':
						switch(dtype){
							case '3':
								$('#density').text("10.22").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.032');
								break;
							case '4':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.024');
								break;
							case '6':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.016');
								break;							
						}
				break;
			case 'Nickel':
						switch(dtype){
							case '2':
								$('#density').text("8.90").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.034');
								break;
							case '3':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.023');
								break;											
						}
				break;
			case 'Silicon':
						switch(dtype){
							case '4':
								$('#density').text('2.33').append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.031');
								break;
						}
				break;
		case 'Tin':
						switch(dtype){
							case '2':
								$('#density').text("7.30").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.084');
								break;
							case '4':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.042');
								break;											
						}
				break;
		case 'Titanium':
						switch(dtype){
							case '3':
								$('#density').text("4.51").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.037');
								break;
							case '4':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.028');
								break;											
						}
				break;
			case 'Tungsten':
						switch(dtype){
							case '6':
								$('#density').text("19.3").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.016');
								break;
							case '8':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.012');
								break;											
						}
				break;
				
		 case 'Uranium':
						switch(dtype){
							case '4':
								$('#density').text("19.1").append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.032');
								break;
							case '?':
								$('#density').text("");
								//alert('Removal rate in m/sec is :0.022');
								break;											
						}
				break;
		case 'Zinc':
						switch(dtype){
							case '4':
								$('#density').text('7.13').append("<html><body> g/cm<sup>3</sup></body></html>");
								//alert('Removal rate in m/sec is :0.048');
								break;
						}
				break;
			}
 }
return{
		view :view
}
})();


