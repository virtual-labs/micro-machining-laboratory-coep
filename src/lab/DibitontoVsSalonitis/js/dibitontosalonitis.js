var noOfInputs = 0;
var arr1 = new Array();
var arr2 = new Array();
var arr3 = new Array();
var arrForDibiX = new Array();
var arrForDibiY = new Array();

var arrForSaloX = new Array();
var arrForSaloY = new Array();

var papers;
var drawSalonitis;

var paperd;
var drawdibitonto;

var materialStore = [{
	"Name" : "Almunium",
	"color" : "#C0C0C0",
	"Ts" : 2840,
	"To" : 297,
	"Lv" : 5065,
	"den" : 8940,
	"Cp" : 0.234
}, {
	"Name" : "Copper",
	"color" : "#B87333",
	"Ts" : 2840,
	"To" : 297,
	"Lv" : 5065,
	"Cp" : 0.234,
	"den" : 8940
}, {
	"Name" : "Steel",
	"color" : "#B0C4DE",
	"Ts" : 2840,
	"To" : 297,
	"Lv" : 5065,
	"Cp" : 0.234,
	"den" : 8940
}, {
	"Name" : "Tungsten",
	"color" : "#43464B",
	"Ts" : 2840,
	"To" : 297,
	"Lv" : 5065,
	"Cp" : 0.234,
	"den" : 8940
}, {
	"Name" : "Cobalt",
	"color" : "#43464B",
	"Ts" : 2840,
	"To" : 297,
	"Lv" : 5065,
	"Cp" : 0.234,
	"den" : 8940
}];

function solidStateProcessing() {
	this.material
	this.state
	this.energy
	this.jsonObjectContain
	this.setMaterial = function(material) {
		this.jsonObjectContain = jQuery.parseJSON(JSON.stringify(materialStore[material]));

	};
	this.getMaterial = function() {
		return this.jsonObjectContain;
	}
};

function reloadScreen() {
	window.location.reload();
	$("#user_voltage").val("");
}

function drawDiagramSalonitis(papers) {
	this.paper = papers;
	this.color
	//this.state = solidStateProcessing.state;
	this.drawMaterial = function(color) {
		var materialArea = this.paper.rect(60, 200, 180, 100).attr({
			fill : color,
			stroke : color
		});
		return materialArea;
	};

	this.drawBendLines = function() {
		var x = 60, y = 200, incX = 78, incY = 210, bendLines, pathCommand;
		for(var i = 0; i < 10; i++) {
			pathCommand = "M " + x + " " + incY + "L " + incX + " " + y;
			bendLines = this.paper.path(pathCommand);
			incX += 18;
			incY += 10;
		}
		x = 240;
		y = 300;
		incX = 60;
		incY = 200;
		for(var i = 0; i < 10; i++) {
			pathCommand = "M " + incX + " " + y + "L " + x + " " + incY;
			bendLines = this.paper.path(pathCommand);
			incX += 18;
			incY += 10;
		}
		return bendLines;
	};

	this.drawSemiCircle = function(a) {
		var pathCommand
		if(10 == a) {
			pathCommand = " M 260 198  a 10 10 -10 0 1 -50 0 ";
		} else if(20 == a) {
			pathCommand = " M 265 198  a 10 10 -10 0 1 -60 0 ";
		} else if(30 == a) {
			pathCommand = " M 270 198  a 10 10 -10 0 1 -70 0 ";
		} else if(40 == a) {
			pathCommand = " M 275 198  a 10 10 -10 0 1 -80 0";
		} else {
			pathCommand = " M 200 198  a 10 10 -10 0 1 -90 0 ";
		}
		var semicircle = this.paper.path(pathCommand).attr({
			fill : "#DDDDDD",
			stroke : "#DDDDDD"
		});

		return semicircle;
	};

	this.drawHeatSource = function(a) {
		var pathCommand
		if(10 == a) {
			pathCommand = " M 215 100 l 0 100 l 40 0 l 0 -100  m 0 100 a 10 10 -20 0 1 -40 0 ";
		} else if(20 == a) {
			pathCommand = " M 210 100 l 0 100 l 50 0 l 0 -100  m 0 100 a 10 10 -20 0 1 -50 0 ";
		} else if(30 == a) {
			pathCommand = " M205 100 l 0 100 l 60 0 l 0 -100  m 0 100 a 10 10 -20 0 1 -60 0 ";
		} else if(40 == a) {
			pathCommand = " M 200 100 l 0 100 l 70 0 l 0 -100  m 0 100 a 10 10 -20 0 1 -70 0 ";
		} else {
			pathCommand = " M 115 108 l 0 50 l 80 0 l 0 -50  m 0 50 a 10 10 -20 0 1 -80 0 ";
		}
		var pc = this.paper.path(pathCommand).attr({
			fill : "#000"
		});

		return pc;
	};
};

function drawDiagramDibitonto(paperd) {
	this.paper = paperd;
	this.color
	//this.state = solidStateProcessing.state;
	this.drawMaterial = function(color) {
		var materialArea = this.paper.rect(60, 200, 180, 100).attr({
			fill : color,
			stroke : color
		});
		return materialArea;
	};

	this.drawBendLines = function() {
		var x = 60, y = 200, incX = 78, incY = 210, bendLines, pathCommand;
		for(var i = 0; i < 10; i++) {
			pathCommand = "M " + x + " " + incY + "L " + incX + " " + y;
			bendLines = this.paper.path(pathCommand);
			//alert(bendLines);
			incX += 18;
			incY += 10;
		}
		x = 240;
		y = 300;
		incX = 60;
		incY = 200;
		for(var i = 0; i < 10; i++) {
			pathCommand = "M " + incX + " " + y + "L " + x + " " + incY;
			bendLines = this.paper.path(pathCommand);
			incX += 18;
			incY += 10;
		}
		return bendLines;
	};

	this.drawSemiCircle = function(c) {
		var semicircle = this.paper.path(" M 185 199  a 20 20 -20 0 1 -70 0").attr({
			fill : "#DDDDDD",
			stroke : "#DDDDDD"
		});
		semicircle.toFront();
		return semicircle;
	};

	this.drawArrow = function() {
		var pathCommand = "M 140 133 l 0 40 l -15 0 l 25 25 l 25 -25 l -15 0 l 0 -40 ";
		var arrow = this.paper.path(pathCommand).attr({
			fill : "#000"
		});
		return arrow
	};
};

function drawCharts() {

	var chart1;
	// globally available
	//var d1 = graphCalculation(arrForDibiX,arrForDibiY);
	//alert("d2 started");
	//var d2 = graphCalculation(arrForSaloX,arrForSaloY);
	//alert(arr1.length);
	if(arr1.length <5) {
		//alert("You Must select atleast 5 readings to Plot the Graph");
		

	} else {
				
			
				$("#outpput").attr("disabled","true");
		chart1 = new Highcharts.Chart({
			chart : {
				renderTo : 'graph',
			},
			title : {
				text : 'Graphical Comparison '
			},
			xAxis : {
				title : {
					text : 'Trials (No)'
				},
				categories : ['0', '1', '2', '3', '4', '5']
			},
			yAxis : {
				title : {
					text : 'MRR (g/s)'
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
				data : arr1,
				name : 'Experimental'
			}, {
				type : 'line',
				data : arr2,
				name : 'Dibidonto'
			}, {
				type : 'line',
				data : arr3,
				name : 'Salonitis'
			}
			/*,
			 {
			 type: 'scatter',
			 data: d1,
			 name: 'DiBidonto_2D'
			 }
			 ,
			 {
			 type: 'scatter',
			 data: d2,
			 name: 'Salonitis_2D'
			 }*/

			]
		});
	}
}

function dibitontoCalculation() {
	this.td
	this.nop
	this.rx
	this.v1
	this.vt
	this.mt
	this.mmr
	this.np
	this.den
	this.mmr
	this.calculateDibitonto = function() {
		this.td = 150 / this.np;
		this.nop = time / (td * 10e-6);
		this.v1 = (2 / 3) * Math.PI * Math.pow(this.rx, 3);
		this.mt = this.den * this.vt;
		this.mmr = this.mt / time
	}
}

function salonitisCalculation(ssp) {
	this.current
	this.voltage
	this.ts = 32 * 10e-6;
	this.rs
	this.rc
	this.nop1 = 13.8;
	this.tm
	this.calculateSalonitis = function(ssp) {

		this.rs = 2040 * (Math.pow(this.current, 0.43)  ) * (Math.pow(this.ts, 0.44));
		this.rc = Math.pow(1743 / 2 * (this.current * this.ts), 0.44);
		this.q = (0.5 * this.current * this.voltage ) / (Math.PI * (Math.pow(this.rs * 10e-6, 2)));
		this.s = this.q * this.ts / (ssp.jsonObjectContain.den * (ssp.jsonObjectContain.Lv + ssp.jsonObjectContain.Cp * (ssp.jsonObjectContain.Ts - ssp.jsonObjectContain.To)));
		console.log(ssp.jsonObjectContain.den + "  " + ssp.jsonObjectContain.Lv + "  " + ssp.jsonObjectContain.Cp + "  " + ssp.jsonObjectContain.Ts + "  " + ssp.jsonObjectContain.To);
		this.rx = this.rc * 10e-4;
		this.vc = 0.5 * Math.PI * this.s * 100 * (Math.pow(this.rx, 2) );
		this.td = 1000 / this.nop1;
		this.nop = 300 / (this.td * 10e-6);
		this.mt = this.vc * this.nop * 8.94;
		this.mmr = this.mt / this.tm;
	}
}

function trialChange() {

	$("#plot_btn").show();
	$("#plot_btn").attr("disabled","disabled");
	noOfInputs++;
	if(noOfInputs == 5) {
	
		$("#plot_btn").removeAttr("disabled");
	}
	
	var x = parseInt($("#user_voltage").val());
	switch(x) {
		case 1:

			$("#op").append("<table class = 'materialvalueout'><tr class= 'odd '><td><font size = '2'>0.000893</font></td><td><a href='images/DibTrial1_1.png' target='_blank'><font size = '2'>0.000348</font></a></td><td><a href='images/SolTrial1_1.png' target='_blank'><font size = '2'>0.0006197</font></a></td></tr></table>");

			$("#inputParam").html("<BR><small>Trial " + 1 + " : <BR>Voltage (V) : 57<BR>Current (A) : 2.6<BR>T<sub>on</sub> : 0.505 &#956;s<BR>T<sub>off</sub> : 128 &#956;s<BR>Machining Time (min) : 4.49</small><BR>");
			arr1.push([1, 0.000893]);
			arr2.push([1, 0.0003486]);
			arr3.push([1, 0.0006197]);
			arrForDibiX.push([1]);
			arrForDibiY.push([0.0003486]);
			arrForSaloX.push([1]);
			arrForSaloY.push([0.0006197]);
			var circle = drawdibitonto.drawSemiCircle("black");
			var circle = drawSalonitis.drawSemiCircle();

			break;
		case 2:

			$("#op").append("<table class = 'materialvalueout'><tr class= 'odd '><td><font size = '2'>0.000612</font></td><td><a href='images/DibTrial2_2.png' target='_blank'><font size = '2'>0.000236</font></a></td><td><a href='images/SolTrial2_2.png' target='_blank'><font size = '2'>0.0006520</font></a></td></tr></table>");

			$("#inputParam").html("<BR><small>Trial " + 2 + " :</font></u><BR>Voltage (V) : 59<BR>Current (A) : 2.4<BR>T<sub>on</sub> : 0.505 &#956;s<BR>T<sub>off</sub> : 128 &#956;s<BR>Machining Time (min) : 5.22</small><BR>");
			arr1.push([2, 0.000612]);
			arr2.push([2, 0.0002364]);
			arr3.push([2, 0.0006520]);
			arrForDibiX.push([2]);
			arrForDibiY.push([0.0002364]);
			arrForSaloX.push([2]);
			arrForSaloY.push([0.0006520]);
			var circle = drawdibitonto.drawSemiCircle("black");
			var circle = drawSalonitis.drawSemiCircle();
			break;
		case 3:

			$("#op").append("<table class = 'materialvalueout'><tr class= 'odd '><td><font size = '2'>0.000879</font></td><td><a href='images/DibTrial3_3.png' target='_blank'><font size = '2'>0.000440</font></a></td><td><a href='images/SolTrial3_3.png' target='_blank'><font size = '2'>0.0009550</font></a></td></tr></table>");

			$("#inputParam").html("<BR><small>Trial " + 3 + " :</u><BR>Voltage (V) : 60<BR>Current (A) : 2.5<BR>T<sub>on</sub> : 0.888 &#956;s<BR>T<sub>off</sub> : 128 &#956;s<BR>Machining Time (min) : 3.52</small><BR>");
			arr1.push([3, 0.0008793]);
			arr2.push([3, 0.0004409]);
			arr3.push([3, 0.0009557]);
			arrForDibiX.push([3]);
			arrForDibiY.push([0.0004409]);
			arrForSaloX.push([3]);
			arrForSaloY.push([0.0009557]);
			var circle = drawdibitonto.drawSemiCircle("black");
			var circle = drawSalonitis.drawSemiCircle();
			break;
		case 4:

			$("#op").append("<table class = 'materialvalueout'><tr class= 'odd '><td><font size = '2'>0.001451</font></td><td><a href='images/DibTrial4_4.png' target='_blank'><font size = '2'>0.000515</font></a></td><td><a href='images/SolTrial4_4.png' target='_blank'><font size = '2'>0.001400</font></a></td></tr></table>");

			$("#inputParam").html("<BR><small>Trial " + 4 + " :</u><BR>Voltage (V) : 51<BR>Current (A) : 2<BR>T<sub>on</sub> : 1.27 &#956;s<BR>T<sub>off</sub> : 128 &#956;s<BR>Machining Time (min) : 3.06</small><BR>");
			arr1.push([4, 0.001451]);
			arr2.push([4, 0.000515]);
			arr3.push([4, 0.001400]);
			arrForDibiX.push([4]);
			arrForDibiY.push([0.000515]);
			arrForSaloX.push([4]);
			arrForSaloY.push([0.001400]);
			var circle = drawdibitonto.drawSemiCircle("black");
			var circle = drawSalonitis.drawSemiCircle();
			break;
		case 5:

			$("#op").append("<table class = 'materialvalueout' ><tr class= 'odd '><td><font size = '2'>0.000925</font></td><td><a href='images/DibTrial5_5.png' target='_blank'><font size = '2'>0.000397</font></a></td><td><a href='images/SolTrial5_5.png' target='_blank'><font size = '2'>0.001400</font></a></td></tr></table>");

			$("#inputParam").html("<BR><small>Trial " + 5 + " :</u><BR>Voltage (V) : 47<BR>Current (A) : 2.8<BR>T<sub>on</sub> : 0.888 &#956;s<BR>T<sub>off</sub> : 128 &#956;s<BR>Machining Time (min) : 3.06</small><BR>");
			arr1.push([5, 0.000925]);
			arr2.push([5, 0.000397]);
			arr3.push([5, 0.001400]);
			arrForDibiX.push([5]);
			arrForDibiY.push([0.000397]);
			arrForSaloX.push([5]);
			arrForSaloY.push([0.001400]);
			var circle = drawdibitonto.drawSemiCircle("black");
			var circle = drawSalonitis.drawSemiCircle();
			break;
	}
}

var graphCalculation = function(energyArray, volumeArray) {
	var volumaArraypart = new Array();
	var e = new Array();
	var r = new Array();
	var mainCurve = [];
	volumaArraypart = volumeArray;
	volumaArraypart.sort();
	e = energyArray;
	e.sort();
	var sy = 0, sx = 0, ssx = 0, sxy = 0, sxxx = 0, sxxy = 0, sxxx = 0, sxx = 0, sxxxx = 0, n = e.length;
	//alert("volumaArraypart "+volumaArraypart+" e "+e);
	for(var i = 0; i < e.length; i++) {
		sy = parseFloat(sy) + parseFloat(volumaArraypart[i]);
		sxx = sxx + e[i] * e[i];
		sx = parseInt(sx) + parseInt(e[i]);
		sxy = sxy + e[i] * volumaArraypart[i];
		sxxx = sxxx + e[i] * e[i] * e[i];
		sxxy = sxxy + e[i] * e[i] * volumaArraypart[i];
		sxxxx = sxxxx + e[i] * e[i] * e[i] * e[i];
		//	alert("sy: "+sy+" sxx: "+sxx+" sx:"+sx+" sxxx:"+sxxx+" sxxy:"+sxxy+" sxxxx:"+sxxxx);
	}
	var d = (sxx * (sxx * sxx - sx * sxxx )) - (sx * (sxxx * sxx - sx * sxxxx )) + (n * (sxxx * sxxx - sxx * sxxxx));
	var d1 = sy * (sxx * sxx - sx * sxxx) - sx * (sxy * sxx - sx * sxxy) + n * (sxy * sxxx - sxx * sxxy);
	var d2 = sxx * (sxy * sxx - sx * sxxy) - sy * (sxxx * sxx - sx * sxxxx) + n * (sxxx * sxxy - sxy * sxxxx);
	var d3 = sxx * (sxx * sxxy - sxy * sxxx) - sx * (sxxx * sxxy - sxy * sxxxx) + sy * (sxxx * sxxx - sxx * sxxxx);

	var a = d1 / d;
	var b = d2 / d;
	var c = d3 / d;
	var m1 = getMaximum(energyArray);
	for(var i = 1; i <= m1; ) {
		var output = (a * i * i) + (b * i) + c;
		i = i + 0.1;
		mainCurve.push([i, output]);
	}
	return mainCurve;
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
$(document).ready(function() {
	$("#user_voltage").chosen();
	noOfInputs = 0;
	var a = "1";
	papers = new Raphael(document.getElementById("sdiagram"), 300, 450);
	drawSalonitis = new drawDiagramSalonitis(papers);
	var diagram = drawSalonitis.drawMaterial("red");
	var bendLine = drawSalonitis.drawBendLines();
	var drawArrow = drawSalonitis.drawHeatSource();
	paperd = new Raphael(document.getElementById("ddiagram"), 300, 450);
	drawdibitonto = new drawDiagramDibitonto(paperd);
	var diagram = drawdibitonto.drawMaterial("red");
	var bendLine = drawdibitonto.drawBendLines();
	var drawArrow = drawdibitonto.drawArrow();

	$("#op").append("<p class = 'p'>Experiemental(g/s)</td><td>_DiBidonto(g/s)_Salonitis(g/s)</p>");
	var ssp = new solidStateProcessing();
	var sc = new salonitisCalculation();
	$("#user_current").change(function() {
		if(!isNaN($("#user_current").val())) {
			var x = parseInt($("#user_current").val());
			sc.current = x;
		}
	});

	$("#user_pulse").change(function() {
		if(!isNaN($("#user_pulse").val())) {
			var x = parseInt($("#user_pulse").val());
			sc.nop1 = x;
		}
	});

	$("#user_machinetime").change(function() {
		if(!isNaN($("#user_machinetime").val())) {
			var x = parseInt($("#user_machinetime").val());
			sc.tm = x;
		}
	});

	$("#material").change(function() {
		if(!isNaN($("#material").val())) {
			var x = parseInt($("#material").val());
			ssp.setMaterial(x);
		}
	});
	$("#outpput").click(function() {
		//$("#op").append("<TR> <td>0.000893g/s</td> <td> </td> <td><a href='images/DibTrial1.bmp' target='_blank'>0.0003486g/s</a></td> <td> </td>  <td><a href='images/SolTrial1.bmp' target='_blank'>0.0006197g/s</a></td>	</TR>");
		//var htmlvalue = "<table class = 'materialvalueout'><tr class= 'odd '><td>0.000893g/s</td><td><a href='images/DibTrial1.bmp' target='_blank'>0.0003486g/s</a></td><td><a href='images/SolTrial1.bmp' target='_blank'>0.0006197g/s</a></td></tr></table>"
		//$("#div2").html(htmlvalue);

	});
	$("#output_btn").click(function() {
		sc.calculateSalonitis(ssp);
		var html = "<div id = 'salonitis' ><h3>Salonitis Output Part</h3><ul></ul>"
		html += "<li> Radius Heat Source: " + (sc.rs) + " m</li>";
		html += "<li>Radius of Crater: " + (sc.rc) + " m</li>";
		html += "<li>Depth of Crater: " + (sc.s) + " mm</li>";
		html += "<li>Volume of Crater: " + (sc.vc) + " mm<sup>3</sup></li>";
		html += "<li>Material removal rate: " + (sc.mmr) + " m<sup>3</sup>/sec</li>";
		html += "<div id = 'dibitonto'><h3>Dibitonto Output Part</h3><ul></ul></div>";
		html += "";
		$("#result").html(html);
	});
	$("#plot_btn").hide();
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
	swfobject.embedSWF("exp3.swf", "graph", "1000", "500", "9.0.0");
}