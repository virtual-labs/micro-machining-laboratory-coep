
ECGWorkspace.view = (function(){
	var vol,dval;
	var view = function(){
			$("#voltage").html("<option>--Select--</option><option>5</option><option>7</option>"+
			"<option>10</option><option>12</option><option>14</option>");
			$("#density").html("<option>--Select--</option><option>9</option><option>15</option>"+
			"<option>18</option><option>21</option><option>24</option>");
	}	
	$("input.mesurevolt1").click(function(){
		var val = $('input[name=group]:checked').val();
		$(".depth-cut").removeAttr("checked");
			$("#showVol").css("display","block");
			$("#showVol option:first-child").attr("selected","selected");
			$("#docuts").css("display","block");
			$("#electrolytes").css("display","none");
			$("#concentrations").css("display","none");
	});
	$("input.mesurevolt2").click(function(){
		var val = $('input[name=group]:checked').val();
		$(".depth-elect").removeAttr("checked");
		
			$("#showVol").css("display","block");
			$("#showVol option:first-child").attr("selected","selected");
			$("#docuts").css("display","none");
			$("#electrolytes").css("display","block");
			$("#concentrations").css("display","none");
	});
	$("input.mesurevolt3").click(function(){
		var val = $('input[name=group]:checked').val();
		$(".depth-con").removeAttr("checked");
		$("#showVol").css("display","block");
			$("#showVol option:first-child").attr("selected","selected");
			$("#voltage").html("<option>--Select--</option><option>5</option><option>7</option>"+
			"<option>10</option><option>12</option>");
			$("#docuts").css("display","none");
			$("#electrolytes").css("display","none");
			$("#concentrations").css("display","block");
	});
	$("#voltage").change(function(){
		vol =$(this).val();
	});	
	$("input.depth-cut").click(function(){
		var depthVal = $('input[name=group]:checked').val();
		if(depthVal == 'depthCuts5' && vol == 5){
				alert("Current Density : 18 µm");	
		}else if(depthVal =='depthCuts10' && vol == 5){
			    alert("Current Density : 13 µm");
		}else if(depthVal =='depthCuts5' && vol == 7){
			    alert("Current Density : 27 µm");
		}else if(depthVal =='depthCuts10' && vol == 7){
			    alert("Current Density : 19 µm");
		}else if(depthVal =='depthCuts5' && vol == 10){
			    alert("Current Density : 30 µm");
		}else if(depthVal =='depthCuts10' && vol == 10){
			    alert("Current Density : 22 µm");
		}else if(depthVal =='depthCuts5' && vol == 12){
			    alert("Current Density : 36 µm");
		}else if(depthVal =='depthCuts10' && vol == 12){
			    alert("Current Density : 25 µm");
		}else if(depthVal =='depthCuts5' && vol == 14){
			  alert("Current Density : 47 µm");
		}else if(depthVal =='depthCuts10' && vol == 14){
			    alert("Current Density : 34 µm");
		}
		
	});
	$("input.depth-elect").click(function(){
		var depthVal = $('input[name=elecgroup]:checked').val();
	
		if(depthVal == 'KNO2' && vol == 5){
				alert("Current Density : 13 Amp/mm²");	
		}else if(depthVal == 'NaNO3' && vol == 5){
				alert("Current Density : 15 Amp/mm²");	
		}else if(depthVal == 'NaNO2' && vol == 5){
				alert("Current Density : 13 Amp/mm²");	
		}else if(depthVal == 'KNO2' && vol == 7){
				alert("Current Density : 18 Amp/mm²");	
		}else if(depthVal == 'NaNO3' && vol == 7){
				alert("Current Density : 17 Amp/mm²");	
		}else if(depthVal == 'NaNO2' && vol == 7){
				alert("Current Densityv : 16 Amp/mm²");	
		}else if(depthVal == 'KNO2' && vol == 10){
				alert("Current Density : 21 Amp/mm²");	
		}else if(depthVal == 'NaNO3' && vol == 10){
				alert("Current Density : 22 Amp/mm²");	
		}else if(depthVal == 'NaNO2' && vol == 10){
				alert("Current Density : 23 Amp/mm²");	
		}else if(depthVal == 'KNO2' && vol == 12){
				alert("Current Density : 24 Amp/mm²");	
		}else if(depthVal == 'NaNO3' && vol == 12){
				alert("Current Density : 21 Amp/mm²");	
		}else if(depthVal == 'NaNO2' && vol == 12){
				alert("Current Density : 25 Amp/mm²");	
		}else if(depthVal == 'KNO2' && vol == 14){
				alert("Current Density : 33 Amp/mm²");	
		}else if(depthVal == 'NaNO3' && vol == 14){
				alert("Current Density : 30 Amp/mm²");	
		}else if(depthVal == 'NaNO2' && vol == 14){
				alert("Current Density : 34 Amp/mm²");	
		}
	});
	$("input.depth-con").click(function(){
		
		var depthVal = $('input[name=congroup]:checked').val();
		if(depthVal == 'con5' && vol == 5){
				alert("Current Density : 8 Amp/mm²");	
		}else if(depthVal == 'con10' && vol == 5){
				alert("Current Density : 13 Amp/mm²");	
		}else if(depthVal == 'con15' && vol == 5){
				alert("Current Density : 9 Amp/mm²");	
		}else if(depthVal == 'con5' && vol == 7){
				alert("Current Density : 11 Amp/mm²");	
		}else if(depthVal == 'con10' && vol == 7){
				alert("Current Density : 18 Amp/mm²");	
		}else if(depthVal == 'con15' && vol == 7){
				alert("Current Density : 14 Amp/mm²");	
		}else if(depthVal == 'con5' && vol == 10){
				alert("Current Density : 13 Amp/mm²");	
		}else if(depthVal == 'con10' && vol == 10){
				alert("Current Density : 21 Amp/mm²");	
		}else if(depthVal == 'con15' && vol == 10){
				alert("Current Density : 19 Amp/mm²");	
		}else if(depthVal == 'con5' && vol == 12){
				alert("Current Density : 17 Amp/mm²");	
		}else if(depthVal == 'con10' && vol == 12){
				alert("Current Density : 25 Amp/mm²");	
		}else if(depthVal == 'con15' && vol == 12){
				alert("Current Density : 21 Amp/mm²");	
		}
	});
	$("#density").change(function(){
		dval = $(this).val();		
	});
	$("input.density-mrr").click(function(){
		var depthVal = $('input[name=densitygroup]:checked').val();
		if(depthVal == 'hvalency' && dval == 9){
				alert("For higher valency predicted material removal rate : 2 mm³/s");	
		}else if(depthVal == 'lvalency' && dval == 9){
				alert("For lower valency predicted material removal rate : 5 mm³/s");	
		}else if(depthVal == 'hvalency' && dval == 15){
				alert("For higher valency predicted material removal rate : 3.5 mm³/s");	
		}else if(depthVal == 'lvalency' && dval == 15){
				alert("For lower valency predicted material removal rate : 9 mm³/s");	
		}else if(depthVal == 'experimental' && dval == 15){
				alert("Experimental removal rate : 2 mm³/s");	
		}else if(depthVal == 'hvalency' && dval == 18){
				alert("For higher valency predicted material removal rate : 5 mm³/s");	
		}else if(depthVal == 'lvalency' && dval == 18){
				alert("For lower valency predicted material removal rate : 12.5 mm³/s");	
		}else if(depthVal == 'experimental' && dval == 18){
				alert("Experimental removal rate : 3 mm³/s");	
		}else if(depthVal == 'hvalency' && dval == 21){
				alert("For higher valency predicted material removal rate : 6.5 mm³/s");	
		}else if(depthVal == 'lvalency' && dval == 21){
				alert("For lower valency predicted material removal rate : 14 mm³/s");	
		}else if(depthVal == 'experimental' && dval == 21){
				alert("Experimental removal rate : 3.5 mm³/s");	
		}else if(depthVal == 'hvalency' && dval == 24){
				alert("For higher valency predicted material removal rate : 7 mm³/s");	
		}else if(depthVal == 'lvalency' && dval == 24){
				alert("For lower valency predicted material removal rate : 15 mm³/s");	
		}else if(depthVal == 'experimental' && dval == 24){
				alert("Experimental removal rate : 4 mm³/s");	
		}			
		
	});	
	return{
		view : view
	}
})();
