var counter = 0;
var plotFlag = 0;
var ton =0;
var mrrvstonArr = new Array();
var ravstonArr = new Array();
var startFlag = 0;
var X_increament = 150;
var Y_increament = 200;
var X_increament1 = 133;
var Y_increament1= 133;
var mrrArr = new Array();
var raArr = new Array();
var tonArr = new Array();
var graphArr = new Array();
var formula = "";

var varachWhiteCircle = 80;
var varachWhiteCircleX = 300;

var khalachWhiteCircle = 310;
var khalachWhiteCircleX = 150;

var varachBrownCircle =70; 

var khalachBrownCircle=320;

var  initialY0PositionForMainLine = 60;
var  initialY1PositionForMainLine = 320;

var initialY0PositionForUpperLine = 60;
var initialY1PositionForUpperLine = 60;

var initialY0PositionForLowerLine = 330;
var initialY1PositionForLowerLine = 330;
var chart;
var options = {
				chart: {
						renderTo: 'container2',
						 defaultSeriesType: 'line'
				},
				 credits: {
        			enabled: false
    			},
    			title:{
         text: 'Input Square Pulse '
       },
				xAxis: {
						title: {
						text: 'Time (Microsecond)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
				},
				
				 plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
				yAxis: {
					title: {
						text: 'Voltage    (V)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
					
				},
			    series: [{}]
			}


$(document).ready(function(){

	if($.browser.msie) {
		document.write("The Existing version of Internet Explorer is not supported ");
		document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
	} else {
		//var c = document.getElementById("myCanvas");
		//ctx = c.getContext("2d");
		//drawDiagram();
	}
	$("#mrrvston").hide();
	$("#ra").hide();
	$("#Plot").hide();
	$("#state").change(function(){
                  if(!isNaN($("#state").val())){
				  
                        var x = parseInt($("#state").val());
						switch(x){
							case 1:
									$("#result1").html("<BR><BR>Trail : 1 <br>"+"Voltage (V) : 48-50 <BR> Machine Time (min)  : 4.36 <BR> T<sub>on</sub> (&#956;s) : 0.25 <BR> T<sub>off</sub> (&#956;s) : 128");
									
							break;
							case 2:
									$("#result1").html("<BR><BR>Trail: 2 <br>"+"Voltage (V) : 48-50 <BR> Machine Time (min)  : 3.64 <BR> T<sub>on</sub> (&#956;s) : 0.3777 <BR> T<sub>off</sub> (&#956;s) : 128");
									
							break;
							case 3:
									$("#result1").html("<BR><BR>Trail : 3 <br>"+"Voltage (V) : 48-50 <BR> Machine Time (min)  : 3.6 <BR> T<sub>on</sub> (&#956;s) : 0.505 <BR> T<sub>off</sub> (&#956;s) : 128");
									
							break;
							case 4:
									$("#result1").html("<BR><BR>Trail : 4 <br>"+"Voltage (V) : 48-50 <BR> Machine Time (min)  : 3.33 <BR> T<sub>on</sub> (&#956;s) : 0.633 <BR> T<sub>off</sub> (&#956;s) : 128");
									
							break;
							case 5:
									$("#result1").html("<BR><BR>Trail : 5 <br>"+"Voltage (V) : 48-50 <BR> Machine Time (min)  : 3.16 <BR> T<sub>on</sub> (&#956;s) : 0.760 <BR> T<sub>off</sub> (&#956;s) : 128");
									
							break;
							case 6:
									$("#result1").html("<BR><BR>Trail : 7 <br>"+"Voltage (V) : 48-50 <BR> Machine Time (min)  : 2.75 <BR> T<sub>on</sub> (&#956;s) : 0.888 <BR> T<sub>off</sub> (&#956;s) : 128");
									
							break;
							case 7:
									$("#result1").html("<BR><BR>Trail : 7 <br>"+"Voltage (V) : 48-50 <BR> Machine Time (min)  : 2.71<BR> T<sub>on</sub> (&#956;s) : 1.016 <BR> T<sub>off</sub> (&#956;s) : 128");
									
							break;
							case 8:
									$("#result1").html("<BR><BR>Trail : 8 <br>"+"Voltage (V) : 48-50 <BR> Machine Time (min)  : 2.73 <BR> T<sub>on</sub> (&#956;s) : 1.143 <BR> T<sub>off</sub> (&#956;s) : 128");
									
							break;
							case 9:
									$("#result1").html("<BR><BR>Trail : 9 <br>"+"Voltage (V) : 48-50 <BR> Machine Time (min)  : 2.66 <BR> T<sub>on</sub> (&#956;s) : 1.27 <BR> T<sub>off</sub> (&#956;s) : 128");
									
							break;
							case 10:
									$("#result1").html("<BR><BR>Trail : 10 <br>"+"Voltage (V) : 48-50 <BR> Machine Time (min)  : 2.6 <BR> T<sub>on</sub> (&#956;s) : 1.4 <BR> T<sub>off</sub> (&#956;s) : 128");
									
							break;											
						}
                        
                  }
            });	
	    
	chart = new Highcharts.Chart(options);
		var a = document.getElementById('line');
	var context1 = a.getContext('2d');
	
	context1.beginPath();
	context1.strokeStyle='red';
	context1.lineWidth=2;
	context1.moveTo(5,42);
	context1.lineTo(288,42);
	context1.stroke();
	context1.fill();
	
	context1.beginPath();
	context1.strokeStyle='blue';
	context1.lineWidth=2;
	context1.moveTo(5,133);
	context1.lineTo(288,133);
	context1.stroke();
	context1.fill();
	
	context1.beginPath();
	context1.strokeStyle = 'green';
	context1.fillStyle = 'black';
	context1.arc(10, 42, 5, 0, Math.PI*2, true); 
	context1.fill();
	
	context1.beginPath();
	context1.strokeStyle = 'green';
	context1.fillStyle = 'black';
	context1.arc(10,133, 5, 0, Math.PI*2, true); 
	context1.fill();
	
	context1.closePath();

	formula ="y=a(x*x)+bx+c";
           
})
var image = function(){
}
var selectedPower = function(){
	$("#Plot").show();
	var x=$("#state").val();
	var trial = parseInt(x);
	
	
	
	//alert(trial);
	plotFlag = 0;
	counter++;
	switch(x){
			case "1" :
				VMRR = 2.417;
				Ra = 1.02;
				ton = 0.25;
				drawgraph_new();
				//drawgraph_gr1();
				//drawgraph_gr1();
			break;
		
			case "2" :
				VMRR = 2.832;
				Ra = 1.4;
				ton = 0.377;
				drawgraph_new();
				//drawgraph_gr2();
			break;
			
			case "3" :
				VMRR = 3.08;
				Ra = 1.6;
				ton = 0.505;
				drawgraph_new();
				//drawgraph_gr3(); 
			break;
	
			case "4" :
				VMRR = 3.235;
				Ra = 1.98;
				ton = 0.633; 
				drawgraph_new();
				//drawgraph_gr4();
			break;
			
			case "5" :
				VMRR = 3.29;
				Ra  = 2.14;
				ton = 0.760;
				drawgraph_new();
				//drawgraph_gr5();
			break;
			
			case "6" :
				VMRR = 4.163;
				Ra  = 2.38;
				ton = 0.888; 
				drawgraph_new();
				//drawgraph_gr6();
			break;
			
			case "7" :
				VMRR = 4.198;
				Ra  = 2.66;
				ton = 1.016;
				drawgraph_new();
				//drawgraph_gr7();
			break;
			
			case "8" :
				VMRR = 4.18;
				Ra  = 2.98;
				ton = 1.143;
				drawgraph_new();
				//drawgraph_gr8();
			break;
			
			case "9" :
				VMRR = 4.313;
				Ra  = 3.4;
				ton = 1.27;
				drawgraph_new();
				//drawgraph_gr9();
			break;
			
			case "10" :
				VMRR = 4.386;
				Ra  = 3.6;
				ton = 1.4;
				drawgraph_new();
				//drawgraph_gr10();
			break;
	}
	/*$('#maxDepth').append("MaxDepth (&#956;m) : " +"<font color='red'>"+ maxDepth +"</font> &nbsp;" +"MaxWidth (&#956;m) : "+"<font color='red'>"+maxWidth+"</font><br>");*/
	$("#VMRR > ul").fadeTo('slow', 0.5);
	$("#VMRR").prepend("<ul><li class = 'odd' >MRR (mm<sup>3</sup>/min) :  " +VMRR+ "</li><li class='even'>Ra (&#956;m):" +Ra+ "</li></ul>");
	mrrvstonArr.push([ton,VMRR]);
	ravstonArr.push([ton,Ra]);
	tonArr.push(ton);
	mrrArr.push(VMRR);
	raArr.push(Ra);
        
	
}
var reset = function(){
				
				counter = 0;
				counter1 = 0;
				powervsdepthArr = new Array();
				powervswidthArr = new Array();
				spotsizevsdepthArr = new Array();
				spotsizevswidthArr = new Array();
				$("#powerVsWidth").hide();
				$("#powerVsDepth").hide();
				$("#spotVsDepth").hide();
				$("#spotVsWidth").hide();	
				//$("#Plot").attr('disabled',true);
				$('#power').attr('disabled',false);
				$('#spotsize').attr('disabled',false);
				$('#power').val("");
				$('#spotsize').val("");
				$('#maxDepth').html("");
				$('#container').html("");
				$('#constants').html("");
				
				
}

var checkPlotValue = function(){
	
	if(plotFlag == 0){
		if(counter>=5){
			//$('#Plot').attr('disabled',false);
			drawgraph_PowervsDepth();
		}
		else{
			alert("You Must select atleast 5 readings to Plot the Graph");
		}
	
	}
	else{
	if(counter1>=5){
			//$('#Plot').attr('disabled',false);
			drawgraph_SpotSizevsDepth();
		}
		else{
			alert("You Must select atleast 5 readings to Plot the Graph");
		}
	
	
	}
}

var drawgraph_PowervsDepth = function(){
		$("#mrrvston").show();
		$("#ra").show();
				
		//$("#powerVsDepth").show();
}

var drawgraph_MrrvsTon = function(){
var d = graphCalculation(mrrArr, tonArr);
var chart = new Highcharts.Chart({
				chart: {
						renderTo: 'container'
				},
				 credits: {
        			enabled: false
    			},
    			title:{
         text: 'Pulse on Time Vs MRR '
      },
				xAxis: {
						title: {
						text: 'Ton (MicroSecond)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			               //"µs"
			            }
			         }
				},
				yAxis: {
					title: {
						text: 'MRR (mm3/min)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
					
				},
				tooltip: {
			 	 formatter: function(){
			 	 	 return '<b>'+ this.series.name +': X = '+
               this.x.toFixed(4) +' , Y =  '+ this.y.toFixed(4) ;
			 	 }
			 
			 },
				plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
			    series: [ {
					type: 'line',
					data: mrrvstonArr,
					name: 'Experimental Value'
				},
				{
					type: 'line',
					data: d,
					name: 'Therotical Value  (2nd Degree curve)'
				}
				]
			});

}



var drawgraph_gr1 = function(){
	$.getJSON('./js/graph1.js',function(result){
		options.series[0].data = result.graphArray1;
		
		options.series[0].name = 'curve';
		options.series[0].color = "#FFa900";
	});
	setTimeout(function(){
		chart = new Highcharts.Chart(options);
		swfobject.embedSWF("css/images/exp3.swf", "myContent", "862", "339", "9.0.0");
	},1000);	
	
}

var drawgraph_Ra = function(){
var d = graphCalculation1(raArr, tonArr);
var chart = new Highcharts.Chart({
				chart: {
						renderTo: 'container'
				},
				 credits: {
        			enabled: false
    			},
    			title:{
         text: 'Pulse on Time vs Ra'
      },
       plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
      
				xAxis: {
						title: {
						text: 'Ton (Microsecond)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
				},
				yAxis: {
					title: {
						text: 'Ra (Micrometer)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
					
				},
				tooltip: {
			 	 formatter: function(){
			 	 	 return '<b>'+ this.series.name +': X = '+
               this.x.toFixed(4) +' , Y =  '+ this.y.toFixed(4) ;
			 	 }
			 
			 },
			    series: [ {
					type: 'line',
					data: ravstonArr,
					name: 'Experimental Value'
				},
				{
					type: 'line',
					data: d,
					name: 'Therotical Value  (2nd Degree curve)'
				},
				]
			});

}/*
function drawDiagram() {
	
ctx.moveTo(300,60);
ctx.lineTo(150,60);
ctx.stroke();
ctx.fill();

//ctx.lineWidth=0.5;

ctx.moveTo(150,330);
ctx.lineTo(300,330);
ctx.stroke();
ctx.fill();

//arrow
ctx.moveTo(180,325);
ctx.lineTo(220,325);
ctx.stroke();
ctx.fill();
ctx.moveTo(210,320);
ctx.lineTo(220,325);
ctx.lineTo(210,330);
ctx.stroke();
ctx.fill();

//arrow2
ctx.moveTo(157,85);
ctx.lineTo(157,115);
ctx.stroke();
ctx.fill();
ctx.moveTo(165,110);
ctx.lineTo(157,115);
ctx.lineTo(150,110);
ctx.stroke();
ctx.fill();
//arrow3
ctx.moveTo(157,260);
ctx.lineTo(157,295);
ctx.stroke();
ctx.fill();
ctx.moveTo(165,285);
ctx.lineTo(157,295);
ctx.lineTo(150,285);
ctx.stroke();
ctx.fill();
ctx.fillStyle="#56A5EC"



// white  circle
ctx.beginPath();
ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(300,80,20,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();
//2nd white circle
ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(300,310,20,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();
ctx.closePath();
//brown circle
ctx.beginPath();
ctx.fillStyle="brown";
ctx.beginPath();
ctx.arc(150,70,11,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();
//2nd brown circle
ctx.fillStyle="brown";
ctx.beginPath();
ctx.arc(150,320,11,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();
ctx.closePath();





//draw reactangle using lines
//2nd rect
ctx.beginPath();
ctx.fillStyle   = "#C85A17";
ctx.lineWidth   = 3;
ctx.moveTo(70,220);
ctx.lineTo(70,240);
ctx.lineTo(270,240);
ctx.lineTo(270,220);
ctx.stroke();
ctx.fill();

//1st rect
ctx.beginPath();
ctx.fillStyle   = "#C85A17";
ctx.strokeStyle = 'black';
ctx.lineWidth   = 3;
ctx.moveTo(250,150);
ctx.lineTo(100,150);
ctx.lineTo(70,220);
ctx.lineTo(270,220);
ctx.lineTo(250,150);
ctx.stroke();
ctx.fill();

//line
ctx.beginPath();
ctx.moveTo(150,60);
ctx.lineTo(150,320);
ctx.stroke();
ctx.fill();

ctx.closePath();

}
*/

var startAnimation = function() {

if(startFlag == 0){


//drawLineInYdirection(ctx, 150, 200, Y_increament, 200);//draw another line which is on x axis
drawLineInYdirection(ctx, 200, 129, X_increament, 133);
//drawLineInYdirection(ctx, 200, 133, X_increament, 133);
startFlag=1;

$("#startbtn").val("Stop");
}
else{
startFlag=0;
counter = 0;
counter1 = 0;
window.location.reload();
$("#state").val("");
$("#axis").val("");
$("#power").val("");
$("#spotsize").val("");
}
}



var drawLineInYdirection = function (ctx, startx, starty, endx, endy) {
	Y_increament -= 4;
	varachWhiteCircle-=3;
	khalachWhiteCircle-=2;
	varachBrownCircle-=2;
	khalachBrownCircle-=2;
	
	initialY0PositionForMainLine -=2; 
	initialY1PositionForMainLine -=2;
	
	initialY0PositionForUpperLine-=2;
	initialY1PositionForUpperLine-=2;
	
	initialY0PositionForLowerLine-=2;
	initialY1PositionForLowerLine-=2;
	
if(Y_increament >= 140){

  
// white  circle
ctx.beginPath();
ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(300,varachWhiteCircle,20,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();

//2nd white circle
ctx.beginPath();
ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(300,khalachWhiteCircle,20,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();


//brown circle
ctx.beginPath();
ctx.fillStyle="brown";
ctx.beginPath();
ctx.arc(150,varachBrownCircle,11,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();

//2nd brown circle
ctx.fillStyle="brown";
ctx.beginPath();
ctx.arc(150,khalachBrownCircle,11,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();

//main line
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth   = 3;
ctx.moveTo(150,initialY0PositionForMainLine);
ctx.lineTo(150,initialY1PositionForMainLine);
ctx.stroke();
ctx.fill();

//upper line 
 ctx.beginPath();
 ctx.strokeStyle = 'black';
 ctx.lineWidth   = 2;
ctx.moveTo(300,initialY0PositionForUpperLine);
ctx.lineTo(150,initialY1PositionForUpperLine);
ctx.stroke();
ctx.fill();

//lower line
 ctx.beginPath();
 ctx.lineWidth   = 2;
ctx.moveTo(150,initialY0PositionForLowerLine);
ctx.lineTo(300,initialY1PositionForLowerLine);
ctx.stroke();
ctx.fill();
// animation line

  ctx.beginPath();
  ctx.strokeStyle = '#E6E6BA';
  ctx.lineWidth   = 7;
  ctx.moveTo(startx, starty);
  ctx.lineTo(endx, endy);
  ctx.stroke();

  //closing path
  
//ctx.closePath();
  
  t = setTimeout("drawLineInYdirection(ctx, 150,Y_increament+37, 150, 200+37)", 200);
  
//  t1 = setTimeout("drawLineInYdirection(ctx, 200,150,200,150)", 200)
  //t = setTimeout("drawLineInYdirection(ctx, 140,200, 140, Y_increament)", 200);
  }else{
		clearTimeout(t);
		drawLineInXdirection(ctx,150, Y_increament+40,150+4,Y_increament+40);
	}		
}


var drawLineInXdirection = function (ctx, startx, Y_increament, endx, Y_increament) {
	X_increament += 4;
	varachWhiteCircleX+=2;
	khalachWhiteCircleX+=4;
	//alert(startx+":"+Y_increament+":"+endx+":"+Y_increament);
	if(X_increament <= 200){
  
  
  
  
// white  circle
ctx.beginPath();
ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(varachWhiteCircleX,varachWhiteCircle,20,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();

//2nd white circle
ctx.beginPath();
ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(varachWhiteCircleX,khalachWhiteCircle,20,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();



//brown circle
ctx.beginPath();
ctx.fillStyle="brown";
ctx.beginPath();
ctx.arc(khalachWhiteCircleX,varachBrownCircle,11,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();

//2nd brown circle
ctx.fillStyle="brown";
ctx.beginPath();
ctx.arc(khalachWhiteCircleX,khalachBrownCircle,11,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();

//main line
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth   = 3;
ctx.moveTo(khalachWhiteCircleX,initialY0PositionForMainLine);
ctx.lineTo(khalachWhiteCircleX,initialY1PositionForMainLine);
ctx.stroke();
ctx.fill();

//upper line 
 ctx.beginPath();
 ctx.strokeStyle = 'black';
 ctx.lineWidth   = 2;
ctx.moveTo(300,initialY0PositionForUpperLine);
ctx.lineTo(150,initialY1PositionForUpperLine);
ctx.stroke();
ctx.fill();

//lower line
 ctx.beginPath();
 ctx.lineWidth   = 2;
ctx.moveTo(150,initialY0PositionForLowerLine);
ctx.lineTo(300,initialY1PositionForLowerLine);
ctx.stroke();
ctx.fill();

//animation line
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth   = 7;
ctx.moveTo(startx, Y_increament);
ctx.lineTo(endx, Y_increament);
ctx.closePath();
ctx.stroke();

//closing path

  
ctx.closePath();
  
  
  
  
  
  
  
  t = setTimeout("drawLineInXdirection(ctx,150,Y_increament+40,X_increament ,Y_increament+40)", 200);
  }else{
		clearTimeout(t);
		
	}		
}
var refresh = function() {
window.location.reload();

}
var image = function  () {
	//alert(1);
  
  swfobject.embedSWF("css/images/exp3.swf", "myContent", "562", "395", "9.0.0");
}
var drawgraph_new = function() {
var xaxis = [];
var yaxis =[];
$.getJSON('./js/graph1.js',function(result){
var a=0;
   chart = new Highcharts.Chart({
      chart: {
         renderTo: 'container2',
         defaultSeriesType: 'line',
         marginRight: 10,
         events: {
            load: function() {
   
               // set up the updating of the chart each second
               var series = this.series[0];
               setInterval(function() {
                  //var x = (new Date()).getTime(), // current time
                    // y = Math.random();
                  series.addPoint(result.graphArray1[a], true, true);
				  a += 6;
				// if(a > 43){
					//a = 0;
				 // }
               }, 1000);
            }
         }
      },
      title: {
         text: 'Input Square Pulse'
      },
      xAxis: {
      	title:{
      		text : 'Time (s)'
      	},
         type: 'datetime',
         tickPixelInterval: 150
      },
      yAxis: {
         title: {
            text: 'Voltage(V)'
         },
         plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
         }]
      },
	  
				
				 plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
      tooltip: {
         formatter: function() {
                   return '<b>'+ this.series.name +'</b><br/>'+
               Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+ 
               Highcharts.numberFormat(this.y, 2);
         }
      },
      legend: {
         enabled: false
      },
      exporting: {
         enabled: false
      },
      series: [{
           name: 'Random data',
         data: (function() {
            // generate an array of random data
			var firstArray;
			 var data = [];
			 var time = new Array();
			for(var i=0;i<43;i++){
            time = result.graphArray1[i];
               data.push({
                  x: time[0],
                  y: time[1]
               });
            }
			return data;
         })()
      }]
   });

}
)};
var graphCalculation = function(mrrArr,tonArr) {
	var volumaArraypart = new Array();
	var e = new Array();
	var r = new Array();
	var mainCurve = [];
	volumaArraypart = mrrArr;
	volumaArraypart.sort();
	e = tonArr;
	e.sort();
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
	//alert(powerArr[0]+"  .. "+powerArr[length-1]);
	for(var i =0.25 ; i < 1.4;) {
		var output = (a * i * i) + (b * i) + c;
		mainCurve.push([i, output]);
		i=i+0.01;
	}
	return mainCurve;
}

var graphCalculation1 = function(raArr,tonArr) {

		var volumaArraypart = new Array();
		var e = new Array();
		var r = new Array();
		var mainCurve = [];
		volumaArraypart = raArr;
		volumaArraypart.sort();
		e = tonArr;
		e.sort();
		var sy = 0, sx = 0, ssx = 0, sxy = 0, sxxx = 0, sxxy = 0, sxxx = 0, sxx = 0, sxxxx = 0, n = e.length;
		for(var i = 0; i < e.length; i++) {
			sy = sy + volumaArraypart[i];
			sxx = sxx + e[i] * e[i];
			sx = sx + e[i];
			sxy = sxy + e[i] * volumaArraypart[i];
			sxxx = sxxx + e[i] * e[i] * e[i];
			sxxy = sxxy + e[i] * e[i] * volumaArraypart[i];
			sxxxx = sxxxx + e[i] * e[i] * e[i] * e[i];
			//alert(sy+":"+sxx+":"+sx+":"+sxy+":"+sxxx+":"+sxxy+":"+sxxxx);
		}
		var d = (sxx * (sxx * sxx - sx * sxxx )) - (sx * (sxxx * sxx - sx * sxxxx )) + (n * (sxxx * sxxx - sxx * sxxxx));
		var d1 = sy * (sxx * sxx - sx * sxxx) - sx * (sxy * sxx - sx * sxxy) + n * (sxy * sxxx - sxx * sxxy);
		var d2 = sxx * (sxy * sxx - sx * sxxy) - sy * (sxxx * sxx - sx * sxxxx) + n * (sxxx * sxxy - sxy * sxxxx);
		var d3 = sxx * (sxx * sxxy - sxy * sxxx) - sx * (sxxx * sxxy - sxy * sxxxx) + sy * (sxxx * sxxx - sxx * sxxxx);
		var a = d1 / d;
		var b = d2 / d;
		var c = d3 / d;
		//alert(powerArr[0]+"  .. "+powerArr[length-1]);
		for(var i =0.25 ; i < 1.4;) {
			var output = (a * i * i) + (b * i) + c;
			mainCurve.push([i, output]);
			i=i+0.01;
		}
		return mainCurve;
}