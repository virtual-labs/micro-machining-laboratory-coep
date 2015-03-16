Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};
//TAKING OUT UNIQUE OBJECT FROM ARRAY
Array.prototype.unique = function() {
	var a = [], l = this.length;
	for(var i = 0; i < l; i++) {
		for(var j = i + 1; j < l; j++)
		if(this[i] === this[j])
			j = ++i;
		a.push(this[i]);
	}
	return a;
}
var cxt;
var materialStore = [{
	"Name" : "Aluminium",
	"color" : "#C0C0C0",
	"Tm" : 933, /*K*/
	"t2" : 2000, /*K*/
	"tv" : 2519, /*K*/
	"Cp" : 0.938, /*kJ/KgK*/
	"Cpl" : 0.303, /*kJ/KgK*/
	//"L":212, /*kJ/Kg*/
	"Lm" : 321, /*kJ/Kg*/
	"Lv" : 10530, /*kJ/Kg*/
	"den" : 2700 /*Kg/m3*/
}, {
	"Name" : "Copper",
	"color" : "#B87333",
	"Tm" : 1356.4,
	"t2" : 2000,
	"tv" : 2840.15,
	"Cp" : 0.234,
	"Cpl" : 0.303,
	//"L":212,
	"Lm" : 176,
	"Lv" : 4730,
	"den" : 8940
}, {
	"Name" : "Mild Steel",
	"color" : "#B0C4DE",
	"Tm" : 1772,
	"t2" : 2000,
	"tv" : 2870,
	"Cp" : 0.49,
	"Cpl" : 0.7,
	//"L":212,
	"Lm" : 247,
	"Lv" : 6090,
	"den" : 7850
}, {
	"Name" : "Tungsten",
	"color" : "#43464B",
	"Tm" : 1357.77,
	"t2" : 2000,
	"tv" : 2840.15,
	"Cp" : 0.234,
	"Cpl" : 0.303,
	"L" : 212,
	"Lm" : 176,
	"Lv" : 5065,
	"den" : 8940
}, {
	"Name" : "Cobalt",
	"color" : "#43464B",
	"Tm" : 1357.77,
	"t2" : 2000,
	"tv" : 2840.15,
	"Cp" : 0.42,
	"Cpl" : 0.303,
	"L" : 212,
	"Lm" : 176,
	"Lv" : 5065,
	"den" : 8900
}, {
	"Name" : "SS",
	"color" : "#e6e6e6",
	"Cp" : 0.5,
	"den" : 8030
}];

function solidStateProcessing() {
	this.material
	this.state
	this.energy
	this.jsonObjectContain
	this.setMaterial = function(material) {
		this.jsonObjectContain = jQuery.parseJSON(JSON.stringify(materialStore[material]));
		//console.log(this.jsonObjectContain);
	};
	this.getMaterial = function() {
		//console.log(this.jsonObjectContain);
		return this.jsonObjectContain;
	}
};

function graphView() {
	this.volumeArray = new Array();
	this.energyArray = [];
	this.radiusArray = [];
	this.outputArray = [];
	this.energyPoint = [];
	this.mainCurve = [];
	this.pointValue = [];
	this.volumePart = [];
	this.pointOfGraph = function() {
		for(var i = 0; i < this.energyArray.length; i++) {
			var x = this.energyArray[i];
			var y = this.volumeArray[i];

			this.pointValue.push([x, y])
		}//alert(this.energyArray.length);
		return this.pointValue;
	}
	this.graphCalculation = function() {
		var volumaArraypart = new Array();
		var e = new Array();
		var r = new Array();
		volumaArraypart = this.volumeArray;
		volumaArraypart.sort();
		e = this.energyArray;
		r = this.radiusArray;
		e.sort();
		r.sort();
		var sy = 0, sx = 0, ssx = 0, sxy = 0, sxxx = 0, sxxy = 0, sxxx = 0, sxx = 0, sxxxx = 0, n = e.length;
		for(var i = 0; i < e.length; i++) {
			sy = sy + volumaArraypart[i];
			sxx = sxx + e[i] * e[i];
			sx = sx + e[i];
			sxy = sxy + e[i] * volumaArraypart[i];
			sxxx = sxxx + e[i] * e[i] * e[i];
			sxxy = sxxy + e[i] * e[i] * volumaArraypart[i];
			sxxxx = sxxxx + e[i] * e[i] * e[i] * e[i];
		}
		var d = (sxx * (sxx * sxx - sx * sxxx )) - (sx * (sxxx * sxx - sx * sxxxx )) + (n * (sxxx * sxxx - sxx * sxxxx));
		var d1 = sy * (sxx * sxx - sx * sxxx) - sx * (sxy * sxx - sx * sxxy) + n * (sxy * sxxx - sxx * sxxy);
		var d2 = sxx * (sxy * sxx - sx * sxxy) - sy * (sxxx * sxx - sx * sxxxx) + n * (sxxx * sxxy - sxy * sxxxx);
		var d3 = sxx * (sxx * sxxy - sxy * sxxx) - sx * (sxxx * sxxy - sxy * sxxxx) + sy * (sxxx * sxxx - sxx * sxxxx);
		var a = d1 / d;
		var b = d2 / d;
		var c = d3 / d;

		var max = getMaximum(e);

		for(var i = 0; i < max; i++) {
			var output = (a * i * i) + (b * i) + c;
			if(i > 9 && i < max) {

				this.mainCurve.push([i, output + 0.10]);
			}
		}

		return this.mainCurve;
	}

	this.plotenergy = function() {
		if(this.energyArray.length < 3) {
			alert("You Must select atleast 3 readings to Plot the Graph")

		} else {
			var pointvlaue = this.pointOfGraph();

			var d = this.graphCalculation();
			//alert(d);
			var chart = new Highcharts.Chart({
				chart : {
					renderTo : 'graph'
				},
				credits : {
					enabled : false
				},
				title : {
					text : 'Energy vs Volume',
					x : -20 //center
				},
				xAxis : {
					title : {
						text : 'Energy (kJ)'
					},
					labels : {

						formatter : function() {
							return this.value;
						}
					}
				},
				yAxis : {
					title : {
						text : 'Volume (cm<sup>3</sup>)'
					},
					labels : {
						formatter : function() {
							return (this.value * 10e-6).toFixed(2);
						}
					}
				},
				tooltip : {
					formatter : function() {
						return '<b>' + this.series.name + ': X = ' + this.x + ' , Y =  ' + this.y.toFixed(4);
					}
				},
				plotOptions : {
					series : {
						marker : {
							enabled : false
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
				}]
			});
		}
	}
}

var getMaximum = function(energyArray) {
	var max = 0;
	for(var j = 0; j < energyArray.length; j++) {
		if(energyArray[j] > max) {
			//alert("val "+energyArray[j]);
			max = energyArray[j];
		}
	}
	return max;
}
function experimentCalculation(ssp) {
	this.t = 300;
	this.t1 = 1000;
	this.volumeType
	this.volume
	this.radius
	this.calculate = function() {
		if(1 == ssp.state) {
			this.volume = ((ssp.energy ) / (ssp.jsonObjectContain.den * ssp.jsonObjectContain.Cp * (this.t1 - this.t ) ) );
			this.radius = Math.pow(((3 * this.volume ) / (2 * Math.PI ) ), (1 / 3 ));
		} else if(2 == ssp.state) {
			this.volume = ((ssp.energy ) / (ssp.jsonObjectContain.den * (ssp.jsonObjectContain.Cp * (ssp.jsonObjectContain.Tm - this.t ) + ssp.jsonObjectContain.Lm + (ssp.jsonObjectContain.Cpl * ((ssp.jsonObjectContain.t2 - ssp.jsonObjectContain.Tm ) ) ) ) ) );
			this.radius = Math.pow(((3 * this.volume ) / (2 * Math.PI ) ), (1 / 3 ));
		} else {
			this.volume = ((ssp.energy ) / (ssp.jsonObjectContain.den * (ssp.jsonObjectContain.Cp * (ssp.jsonObjectContain.Tm - this.t ) + ssp.jsonObjectContain.Lm + (ssp.jsonObjectContain.Cpl * ((ssp.jsonObjectContain.t2 - ssp.jsonObjectContain.Tm ) ) + ssp.jsonObjectContain.Lv ) ) ) );
			this.radius = Math.pow(((3 * this.volume ) / (2 * Math.PI ) ), (1 / 3 ));
		}
		var obj = new graphView();
		obj.radiusArray.push(this.radius);
	}
}

var drawMaterial = function(c, color, rad) {
	/*radius text*/
	if(!(rad == 0)) {
		rad = rad.toFixed(2);
		cxt.fillText("R = " + rad + " mm", 245, 100);
		cxt.stroke();
	}
	/*arrow code*/
	cxt.fillStyle = "black";
	cxt.fillRect(140, 0, 20, 60);
	cxt.moveTo(130, 60);
	cxt.lineTo(170, 60);
	cxt.lineTo(150, 81);
	cxt.lineTo(130, 60);
	//cxt.stroke();
	cxt.fill();
	/*semi circle code*/
	var centerX = 150;
	var centerY = 80;
	var radius = (rad * 2 ) / 10;
	var lineWidth = 0;
	/*material code*/
	cxt.fillStyle = color;
	cxt.fillRect(60, 80, 180, 100);
	cxt.strokeStyle = "black";
	//cxt.strokeRect(59,79,182,102);
	cxt.beginPath();
	cxt.arc(centerX, centerY, radius, 0, Math.PI, false);
	cxt.closePath();
	cxt.lineWidth = 0;
	cxt.fillStyle = "#DDDDDD";
	cxt.fill();
	cxt.strokeStyle = "#DDDDDD";
	cxt.stroke();
	cxt.fill();

	if(!(rad == 0)) {
		cxt.strokeStyle = "#000";
		var i = 0;
		cxt.lineWidth = 0.5;
		cxt.beginPath();
		cxt.moveTo(240, 81 + i * 14);
		cxt.lineTo(270, 81 + i * 14);

		var i = 0
		cxt.lineWidth = 0.75;
		cxt.beginPath();
		cxt.moveTo(150, radius + 81);
		cxt.lineTo(240, radius + 81);
		cxt.stroke();
	}
};
function clearCanvas(context, canvas) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	var w = canvas.width;
	canvas.width = 1;
	canvas.width = w;
}


$(document).ready(function() {
	 	
		$("#state").chosen();
		$("#energy").chosen();
		$('#scrollbar1').tinyscrollbar();
$("#material").chosen();
		var c = document.getElementById("diagram");
		cxt = c.getContext("2d");
		drawMaterial(c, "red", 0);
		var ssp = new solidStateProcessing();
		var ec = new experimentCalculation(ssp);
		var gv = new graphView();

		$('#energy').change(function() {
			if(!isNaN($('#energy').val())) {
				var x = parseInt($('#energy').val());
				ssp.energy = x;
			}
		});
		$('#state').change(function() {
			ssp.state = parseInt($('#state').val());
			if(1 == ssp.state) {
				ssp.color = "darkred";
		//		$("#materialoption").html("<div class = 'mat'><select id = 'material' name = 'material' style = 'width:100px;'><option selected = 'selected'> --select-- </option> <option value = 0> Aluminium </option> <option value = 1> Copper </option><option value = 2> Mild Steel </option><option value = 3>Tungsten</option><option value = 4>Cobalt</option></select></div>");
				$("#interactiontime").html(" 10 <sup>-1 </sup> s");
				$("#interactiontime1").html("Hardening");
			} else if(2 == ssp.state) {
				ssp.color = "yellow";
			//	$("#materialoption").html("<div class = 'mat'><select id = 'material' name = 'material'  style = 'width:100px;'><option selected = 'selected'> --select-- </option> <option value = 0> Aluminium </option> <option value = 1> Copper </option><option value = 2> Mild Steel </option><option value = 3>Tungsten</option><option value = 4>Cobalt</option></select></div>");
				$("#interactiontime").html(" 10 <sup>-2 </sup> s");
				$("#interactiontime1").html("Welding");
			} else {
			//	$("#materialoption").html("<div class = 'mat'><select id = 'material' name = 'material'  style = 'width:100px;'><option selected = 'selected'> --select-- </option> <option value = 0> Aluminium </option> <option value = 1> Copper </option><option value = 2> Mild Steel </option><option value = 3>Tungsten</option><option value = 4>Cobalt</option></select></div>");
				ssp.color = "white";
				$("#interactiontime").html(" 10 <sup>-3 </sup> s");
				$("#interactiontime1").html("Machining");
			}
			
		});
		$('#materialoption').change(function() {
			if(!isNaN($('#material').val())) {
				var x = parseInt($('#material').val());
				var c = document.getElementById("diagram");
				ssp.setMaterial(x);
				try {
					clearCanvas(ctx, c)
				} catch(err) {
				}
				drawMaterial(c, ssp.jsonObjectContain.color, 0);
			} else
				alert("Please Enter The Number");
		});
		$('#output').click(function() {
			$('#material').attr('disabled', true);
			$('#state').attr('disabled', true);
			var x = ssp.getMaterial();
			var htmlvalue = "<table class = 'materialvalueout'><tr class= 'odd '><td>Name</td><td>" + x.Name + "</td></tr><tr class= 'even '><td>T<sub>m</sub></td><td> " + x.Tm + "K </td></tr><tr class= 'odd '><td>T<sub>2<sub></td><td>" + x.t2 + " K</td></tr><tr class= 'even' ><td>C<sub>p</sub></td><td>" + x.Cp + " kJ/KgK</td></tr><tr class= 'odd '><td>C<sub>pl</sub></td><td>" + x.Cpl + " kJ/KgK</td></tr><tr class= 'even '><td>L<sub>m</sub></td><td>" + x.Lm + " kJ/Kg</td></tr><tr class= 'odd' ><td>L<sub>v</sub></td><td>" + x.Lv + " kJ/Kg</td></tr><tr class= 'even '><td>Density</td><td>" + x.den + " Kg/m3</td></tr></table>"
			$("#selectedvalue").html(htmlvalue);
			ec.calculate(ssp.state);
			ec.volume = ec.volume * 10e9;
			ec.radius = ec.radius * 10e3;
			gv.volumeArray.push(ec.volume);
			gv.energyArray.push(ssp.energy);
			c.width = c.width;
			drawMaterial(c, ssp.jsonObjectContain.color, ec.radius);
			$("#outputarea > ul").fadeTo('slow', 0.5);
			$("#outputarea").prepend("<ul><li class = 'odd' >Volume     :     " + (ec.volume.toFixed(3)) + " mm<sup>3</sup></li><li class='even'>Radius     :     " + (ec.radius.toFixed(3)) + " mm</li></ul>");
			$("#plotenergy").show("");
		});

		$("#plotenergy").click(function() {
			//window.open('./demo.html');
			gv.plotenergy();
		})

		$("#reload").click(function() {
			$('#material').attr('disabled', false);
			$('#state').attr('disabled', false);
			window.location.reload();
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
	swfobject.embedSWF("exp1.swf", "graph", "700", "500", "9.0.0");
}