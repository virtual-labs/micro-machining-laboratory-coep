Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};


var cxt;
var ij = 2;
var choosenFrequency = 0, choosenEnergy = 0;
var ultaArray = [];
var materialStore = [{
	"Name" : "Almunium",
	"color" : "#C0C0C0",
	"k1" : 0.31,
	"k2" : 0.34
}, {
	"Name" : "Copper",
	"color" : "#B87333",
	"k1" : 0.31,
	"k2" : 0.34
}, {
	"Name" : "Steel",
	"color" : "#B0C4DE",
	"k1" : 0.31,
	"k2" : 0.34
}, {
	"Name" : "Tungsten",
	"color" : "#43464B",
	"k1" : 0.31,
	"k2" : 0.34
}, {
	"Name" : "Cobalt",
	"color" : "#43464B",
	"k1" : 0.31,
	"k2" : 0.34
}];

function solidStateProcessing() {
	this.material;
	this.state;
	this.energy;
	this.f;
	this.jsonObjectContain
	this.setMaterial = function(material) {
		this.jsonObjectContain = jQuery.parseJSON(JSON.stringify(materialStore[material]));

	};
	this.getMaterial = function() {
		
		return this.jsonObjectContain;
	}
};

var getMaximum = function(energyArray){
	var max = 0;
	for(var j = 0;j<energyArray.length;j++){
		if(energyArray[j] > max){
		//alert("val "+energyArray[j]);
			max = energyArray[j];
		}
	}
	return max;
}

function graphView() {
	this.volumeArray = new Array();
	this.energyArray = [];
	this.radiusArray = [];
	this.outputArray = [];
	this.energyPoint = [];
	this.mainCurve = [];
	this.pointValue = [];
	this.volumePart = [];
	this.newVolumeArray = [];
	this.pointOfGraph = function() {
	
		/*for(var j = 0; j < this.volumeArray.length; j++){
			this.newVolumeArray[j] = (this.volumeArray[j] * 10e-4 ).toFixed(2);
		}*/
		//alert(this.energyArray.length);
		for(var i = 0; i < this.energyArray.length; i++) {
			var x = this.energyArray[i];
			var y = this.volumeArray[i];
			this.pointValue.push([x, y])
		}
		//alert(this.energyArray.length);
		return this.pointValue;
	}
	this.graphCalculation = function() {
		var volumaArraypart = new Array();
		var e = new Array();
		var r = new Array();
		volumaArraypart = this.volumeArray;
		//alert(volumaArraypart);
		volumaArraypart.sort();
		//alert(volumaArraypart);
		e = this.energyArray;
		r = this.radiusArray;
		//e.sort();
		//r.sort();
		var sy = 0, sx = 0, ssx = 0, sxy = 0, sxxx = 0, sxxy = 0, sxxx = 0, sxx = 0, sxxxx = 0, n = e.length;
		
		for(var i = 0; i < e.length; i++) {
			sy = sy + volumaArraypart[i];
			sxx = sxx + e[i] * e[i];
			sx = sx + e[i];
			sxy = sxy + e[i] * volumaArraypart[i];
			sxxx = sxxx + e[i] * e[i] * e[i];
			sxxy = sxxy + e[i] * e[i] * volumaArraypart[i];
			sxxxx = sxxxx + e[i] * e[i] * e[i] * e[i];
			//alert("sy : "+sy+" sxx : "+sxx+" sx : "+sx+" sxy : "+sxy+" sxxx : "+sxxx+" sxxy: "+sxxy+" sxxxx : "+sxxxx); 
		}
		var d = (sxx * (sxx * sxx - sx * sxxx )) - (sx * (sxxx * sxx - sx * sxxxx )) + (n * (sxxx * sxxx - sxx * sxxxx));
		var d1 = sy * (sxx * sxx - sx * sxxx) - sx * (sxy * sxx - sx * sxxy) + n * (sxy * sxxx - sxx * sxxy);
		var d2 = sxx * (sxy * sxx - sx * sxxy) - sy * (sxxx * sxx - sx * sxxxx) + n * (sxxx * sxxy - sxy * sxxxx);
		var d3 = sxx * (sxx * sxxy - sxy * sxxx) - sx * (sxxx * sxxy - sxy * sxxxx) + sy * (sxxx * sxxx - sxx * sxxxx);
		var a = d1 / d;
		var b = d2 / d;
		var c = d3 / d;
		var max = getMaximum(e);
		//alert(max);
		for(var i = 0; i < max; i++) {
		
			var output = (a * i * i) + (b * i) + c;
			ultaArray.push(output);
			//alert(output);
			//this.mainCurve.push([i, output]);
		}
		
		var newArr = [];
		var j=0;
		for(var i=max-1;i>=0;i--){
			newArr.push(ultaArray[i]);
			//this.mainCurve.push([j,ultaArray[i]]);
			j++;
		}
		j=10;
		//alert(newArr.length);
		for(var i=0;i<newArr.length;i++){
			if(i<=31){
			if(i==0){
					this.mainCurve.push([j,newArr[i]]);
					j++;
			}else{
			        var dif = newArr[0] - newArr[i];
					ij = dif * 2;
					//alert("new "+newArr[i]+" 0pos "+newArr[0]+" diff "+dif+ " *2 : "+ij);
					var po = newArr[0] + ij;
					//po = po.toFixed(4);
			
					this.mainCurve.push([j,po]);
				
					j++;
					
			}
		
		}
		}//alert(this.mainCurve);
		
		return this.mainCurve;
		
	}
	this.plotenergy = function() {
	
	if(this.energyArray.length < 3){
			alert("You Must select atleast 3 readings to Plot the Graph");
		}else {
		var pointvlaue = this.pointOfGraph();
			var d = this.graphCalculation();
		var chart = new Highcharts.Chart({
			chart : {
				renderTo : 'graph'
			},
			credits : {
				enabled : false
			},
			title: {
				text: 'Energy vs Volume',
			//	x: -20 //center
			},
			xAxis : {
				title : {
					text : 'Energy (kJ)'
				},
				labels : {

					formatter : function() {
						return this.value ;
					}
				}
			},
			yAxis : {
				title : {
					text : 'Volume (mm<sup>3</sup>)'
				},
				labels : {
					formatter : function() {
						return this.value ;
					}
				}
			},
			 tooltip: {
			 	 formatter: function(){
			 	 	 return '<b>'+ this.series.name +': X = '+
               this.x +' , Y =  '+ this.y.toFixed(4) ;
			 	 }
			 
			 },
			 plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
			series : [{
				type : 'line',
				data : pointvlaue,
				name : 'Experimental Value'
			}, {
				type : 'line',
				data : d,
				name : '2<sup>nd</sup> degree curve predicted value'
			}
						
			/*, {
				type : 'line',
				data : d,
				name : '2<sup>nd</sup> degree curve predicted value',
				marker: {
						enabled: false
					}
				plotOptions: {
					series: {
						marker: {
						enabled: false
					}
				}
			}
			}*/]
		});
		}
	}
}


function experimentCalculation(ssp){
	this.n = 0.5;
	this.volume;
	this.diameter;
	this.heightOfCreator;
	this.mmr;
    this.radius;
	this.calculate = function(){
		this.heightOfCreator =  ssp.jsonObjectContain.k1 * ( Math.pow( ssp.energy, ( 1/3 ) ) );
		this.diameter = ssp.jsonObjectContain.k2 * ( Math.pow( ssp.energy, ( 1/3 ) ) );
		this.volume = Math.PI *  this.heightOfCreator * ( ( this.diameter *  this.diameter * (3 / 4)) + ( this.heightOfCreator *  this.heightOfCreator)) /  6;
		this.mmr = this.volume * ssp.f  *  this.n;
		this.radius = this.diameter / 2;
	}
}



var drawMaterial = function(c, color,rad) {
		if(!(rad == 0)){
			rad = (rad * 1000).toFixed(2);
			cxt.fillText("R = " + rad + " mm", 245, 100);
			cxt.stroke();
		}
		var centerX = 150;
		var centerY = 80;
		var radius = ( rad  ) / 150;
		var lineWidth = 0;
		cxt.fillStyle = color;
		cxt.fillRect(60, 80, 180, 100);
		cxt.beginPath();
		cxt.arc(centerX, centerY, radius, 0, Math.PI, false);
		cxt.closePath();
		cxt.lineWidth = lineWidth;
		cxt.fillStyle = "#DDDDDD";
		cxt.fill();
		cxt.strokeStyle = "#DDDDDD";
		cxt.stroke();
		cxt.fill();
		cxt.fill();

		var centerX = 150.5;
		var centerY = 57;
		var radius1 = 22;
		var lineWidth = 0;
		cxt.beginPath();
		cxt.arc(centerX, centerY, radius1, 0, Math.PI, false);
		cxt.closePath();
		cxt.lineWidth = lineWidth;
		cxt.fillStyle = "#B87333";
		cxt.fill();
		cxt.strokeStyle = "#B87333";
		cxt.stroke();

		if(!(rad == 0)){
			var i = 0;
			cxt.lineWidth = 0.5;
			cxt.beginPath();
			cxt.moveTo(240, 81 + i * 14);
			cxt.lineTo(240, 81 + i * 14);
			cxt.stroke();

			var i = 0
			cxt.lineWidth = 0.75;
			cxt.beginPath();
			cxt.moveTo(150, radius+81);
			cxt.lineTo(240, radius+81);
			cxt.stroke();
		}

		cxt.fillRect(128, -15, 45, 72);
	};



$(document).ready(function() {
		$("#material").chosen();
		$("#constant").chosen();
		$("#constantFer").chosen();
		$("#energy").chosen();
		var c = document.getElementById("diagram");
		cxt = c.getContext("2d");
		drawMaterial(c,"#97a300",0);
		var ssp = new solidStateProcessing();
		var ec = new experimentCalculation(ssp);
		var gv = new graphView();

		$("#constantEn").change(function() {
			choosenEnergy = $("#constantEn").val();
			ssp.energy = choosenEnergy;
			alert("perform experiment with constant frequency");
			return false;
		});
		$("#constantFer").change(function() {
			choosenFrequency = $("#constantFer").val();
			ssp.f = choosenFrequency;
		});
		
		$("#dialog").dialog({// energy
			autoOpen : false,
			buttons : {
				"Ok" : function() {
					
					$("#display").html("<label>Energy (kJ)</label><label>" + choosenEnergy  + "</label>");
					
					$(this).dialog("close");
					
						$('#material').attr('disabled',false);
						$('#constant').attr('disabled',false);
					
				}
			}
		});
		
		$("#dialog1").dialog({
			autoOpen : false,
			buttons : {
				"Ok" : function() {
				$("#display").html("<label class = 'freq-pos'>Frequency (Hz):</label><label class = 'cho-freq'>" + choosenFrequency + "</label>");
					$(this).dialog("close");
				}
			}
		});
		$("#constant").change(function() {
			var x = $("#constant").val();
			//alert(x);
			if(x == 1) {
				alert("perform experiment with constant frequency");
				/*$("#dialog").dialog("open");
				$("#en").html("<td>Frequency (Hz)</td><td><select id = 'frq' name = 'frequency' class = 'inputstyle'><option selected = 'selected'>--select--</option><option value = 1000>1000</option><option value = 2000>2000</option><option value = 3000>3000</option><option value = 4000>4000</option><option value = 5000>5000</option></select></td>").change(function() {
					if(!isNaN($('#energy').val())) {
						var x = parseInt($('#frq').val());
						ssp.f = x;
					}
				});*/
				return false;
			} else {
				
				$("#dialog1").dialog("open");
				$("#en").html("<label>Energy (KJ) :</label><div class = 'inputstyle'><select id = 'energy' style= 'width:100px;'><option selected = 'selected'>--select--</option><option value = 10>10</option><option value = 20>20</option><option value = 30>30</option><option value = 40>40</option><option value = 50>50</option></select></div>").change(function() {
					if(!isNaN($('#energy').val())) {
						var x = parseInt($('#energy').val());
						ssp.energy = x;				
					}
					
				});$("#energy").chosen();}
				return false;
			
		});
	
		$('#material').change(function() {
			if(!isNaN($('#material').val())) {
			var x = parseInt($('#material').val());
			var c = document.getElementById("diagram");			
				ssp.setMaterial(x);
				try {
					clearCanvas(ctx,c)
				} catch(err) {
				}
				drawMaterial(c,ssp.jsonObjectContain.color,0);
			} else
				alert("Please Enter The ");
		});
		
		$('#output').click(function() {
			$('#material').attr('disabled', true);
			$('#constant').attr('disabled', true);
			var x = ssp.getMaterial();
			var htmlvalue = "<table class = 'materialvalueout'><tr class= 'odd '><td>Name</td><td>" + x.Name + "</td></tr><tr class= 'even '><td>K<sub>1</sub></td><td>" + 0.31 + "</td></tr><tr class= 'even '><td>K<sub>2</sub></td><td>" + 0.34 + "</td></tr><tr class= 'odd' ><td>Efficiency</td><td>" + "50 %"  + "</td></tr><tr class= 'even '><td>Frequency</td><td>" + choosenFrequency+ "</td></tr</table>"
			$("#selectedvalue").html(htmlvalue);
			ec.calculate();
			ec.volume = ec.volume * 1000;
			ec.radius = ec.radius * 10;
			c.width = c.width;
			gv.volumeArray.push(ec.volume);
			gv.energyArray.push(ssp.energy );
			drawMaterial(c,ssp.jsonObjectContain.color,ec.radius);
			$("#outputarea > ul").fadeTo('slow', 0.5);
			$("#outputarea").prepend("<ul><li class = 'odd' >Volume     :     " + ((ec.volume).toFixed(3)) + " mm<sup>3</sup></li><li class='even'>Radius     :     " + ((ec.radius).toFixed(3)) + " mm</li></ul>");
			$("#plotenergy").show("");
			//circle = drawdiagram.drawSemiCircle(ssp.color);
		});

		$("#plotenergy").click(function() {
			gv.plotenergy();
		});

		$("#reload").click(function() {
			window.location.reload();
			$('#material').attr('disabled', false);
			$('#constant').attr('disabled', false);
			
		});
		$("#plotenergy").hide();
		$('button[title]').qtip({
		content: {
			attr: 'title' // Use the ALT attribute of the area map for the content
		},
		style: {
			classes: 'ui-tooltip-tipsy ui-tooltip-shadow'
		}
	});
});
var image = function() {
	//alert(1);
	swfobject.embedSWF("exp2.swf", "graph", "98%", "500", "9.0.0");
}