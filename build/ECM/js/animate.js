 /*
  * Author :Pravin Rasal
  * Date : 24 Nov,2012
  * Animation start here..
  */ 
 
 Micromachine.animate = (function(){
    var x =20;
    var y =50;
    var flg = false;
    Micromachine.paper = Raphael(document.getElementById("diagram"),572,500);
    var paper = Micromachine.paper;
    var animation  = Raphael.animation({opacity:.3}, 800);
    Micromachine.mainSet = paper.set();
	Micromachine.curveArr = paper.set(); 

var fillElectReservoirRect = function(){
	var paper = Micromachine.paper;
	var electReseRect1 = paper.rect(x+297,y+366,106,32).attr({
				'fill':color,
				stroke :color
			});
	var fillElecArrow = paper.path("M389 439l22 0").attr({'stroke-width':4,'arrow-end':'classic'});
	fillElecArrow.animate(animation.repeat("Infinity"));	
	toPump();
	Micromachine.mainSet.push(electReseRect1,fillElecArrow);
}
var toPump = function(){
	var paper = Micromachine.paper;
	var pump1= paper.rect(x+404,y+389,0,2).attr({
			'fill':color,
			stroke :color
		});
	var b = pump1.animate({
			width :34
		}, 1500, function() {fillPump()
		});
	Micromachine.mainSet.push(pump1);
}
 
 var fillPump = function(){
	var paper = Micromachine.paper;
	var fPump1 = paper.circle(472, 419, 27).attr({
			'stroke-width':2,
			stroke :color
		});
	var b = fPump1.animate({
				'fill':color,
		}, 1500, function() {toFilterRect()
		});
	Micromachine.mainSet.push(fPump1);
}

var toFilterRect = function(){
	var paper = Micromachine.paper;
	var filterRect = paper.rect(x+448,y+350,3,0).attr({
			'fill':color,
			stroke :color
			
		});
	var toFillRect1 = paper.path("M455 380l0 -22").attr({'stroke-width':4,'arrow-end':'classic'});
	toFillRect1.animate(animation.repeat("Infinity"));	
	var toFillRect2 = paper.path("M455 300l0 -22").attr({'stroke-width':4,'arrow-end':'classic'});
	toFillRect2.animate(animation.repeat("Infinity"));	
	
	var b = filterRect.animate({
			y : y+173,
			height :169
		}, 1500, function() {fillFilterRect()
		});
	
	Micromachine.mainSet.push(filterRect,toFillRect1,toFillRect2);
}	
/*
var toElectReservoirRect11 = function(){
	var paper = Micromachine.paper;
	var elecResRect1 = paper.rect(x+453,y+327,0,4).attr({
			'fill':color,
			stroke :color
			
		});
	var b = elecResRect1.animate({
			x  : x+389,
			width :59
		}, 1500, function() {toElectReservoirRect12()
		});
	Micromachine.mainSet.push(elecResRect1);
}*/

/*
var toElectReservoirRect12 = function(){
	var paper = Micromachine.paper;
	var elecResRect2 = paper.rect(x+388,y+326,4,0).attr({
			'fill':color,
			stroke :color
			
		});
	var b = elecResRect2.animate({
			y  : y+328,
			height :38
		}, 1500, function() {fillFilterRect()
		});
	Micromachine.mainSet.push(elecResRect2);
}
*/

var fillFilterRect = function(){
	var paper = Micromachine.paper;
	var fillFiltRect1 = paper.rect(x+413,y+175,66,0).attr({
			'fill':color,
			stroke :color
			
		});
	var filterArrow = paper.path("M460 170l-24 0").attr({'stroke-width':4,'arrow-end':'classic'});
	filterArrow.animate(animation.repeat("Infinity"));
	var b = fillFiltRect1.animate({
			y : y+90,
			height :82
		}, 1500, function() {toTube()
		});
	Micromachine.mainSet.push(fillFiltRect1,filterArrow);
}	
var toTube = function(){
	var paper = Micromachine.paper;
	var tube = paper.rect(x+413,y+118,0,5).attr({
			'fill':color,
			stroke :color
			
		});
	var toTubeArrow = paper.path("M415 150l-24 0").attr({'stroke-width':4,'arrow-end':'classic'});
	toTubeArrow.animate(animation.repeat("Infinity"));
	var b = tube.animate({
			x: x+255,
			width :157
		}, 1500, function() {fillTube()
		});
	Micromachine.mainSet.push(tube,toTubeArrow);
}
var fillTube = function(){
	var paper = Micromachine.paper;
	var fTube = paper.rect(x+229,y+125,26,0).attr({
			'fill':color,
			stroke :color
			
		});
	
	var b = fTube.animate({
			y: y+100,
			height :110
		}, 1500, function() {fillTubeWithLines()
		});
	Micromachine.mainSet.push(fTube);
}
var fillTubeWithLines = function(){
	var paper = Micromachine.paper;
	var a1 = paper.path("M249 261l26 0").attr({stroke :color,'stroke-width' :4,r:2});
	var b1 = paper.path("M249 263l25 0").attr({stroke :color,'stroke-width' :3,r:2});
	var c1 = paper.path("M250 265l25 0").attr({stroke :color,'stroke-width' :3,r:2});
	var d1 = paper.path("M250 267l23 0").attr({stroke :color,'stroke-width' :3,r:2});
	var e1 = paper.path("M251 269l22 0").attr({stroke :color,'stroke-width' :2,r:2});
	var f1 = paper.path("M253 267l20 0").attr({stroke :color,'stroke-width' :2,r:2});
	var g1 = paper.path("M254 270l20 0").attr({stroke :color,'stroke-width' :2,r:2});
	var h1 = paper.path("M253 272l21 0").attr({stroke :color,'stroke-width' :2});
	var i1 = paper.path("M254 274l17 0").attr({stroke :color,'stroke-width' :2});
	var j1 = paper.path("M256 276l15 0").attr({stroke :color,'stroke-width' :3});
	var k1 = paper.path("M257 278l13 0").attr({stroke :color,'stroke-width' :2});
	var fillTubeArrow = paper.path("M275 170l-20 0l0 20").attr({'stroke-width':3,'arrow-end':'classic'});
	fillTubeArrow.animate(animation.repeat("Infinity"));
	var fillTubeArrow1 = paper.path("M263 255l0 24").attr({'stroke-width':4,'arrow-end':'classic'});
	fillTubeArrow1.animate(animation.repeat("Infinity"));
	Micromachine.mainSet.push(a1,b1,c1,d1,e1,f1,g1,h1,i1,j1,k1,fillTubeArrow,fillTubeArrow1);	
	fillTube1();
}
var fillTube1 = function(){
	var paper = Micromachine.paper;
	var ftube1 = paper.rect(x+242,y+224,3,0).attr({
			'fill':color,
			stroke :color
		});
	var b = ftube1.animate({
			y: y+228,
			height :23
		}, 1500, function() {fillLiquidRect()
		});
		Micromachine.mainSet.push(ftube1);
}
var fillLiquidRect = function(){
	var paper = Micromachine.paper;
	var fillLiqRect = paper.rect(x+197,y+254,88,0).attr({
			'fill':color,
			stroke :color
			
		});
	
	var b = fillLiqRect.animate({
			y: y+243,
			height :10
		}, 1500, function() {fillLiquidLeftRect()
		});
	Micromachine.mainSet.push(fillLiqRect);
}
var fillLiquidLeftRect = function(){
	var paper = Micromachine.paper;
	var fillLiqLeftRect = paper.rect(x+197,y+246,14,0).attr({
			'fill':color,
			stroke :color
			
		});
	var b = fillLiqLeftRect.animate({
			y: y+218,
			height :25
		}, 1500);
	var fillLiqRightRect = paper.rect(x+273,y+246,12,0).attr({
			'fill':color,
			stroke :color
			
		});
	var d = fillLiqRightRect.animate({
			y: y+218,
			height :25
		}, 1500,function(){animateCurveRight(),animateCurveLeft()});
	//workpieceLineN1.remove();
	fillMetal.remove();
	//var fillMetal2 = paper.path("M197 268 l 0,52 l 129,0 l 0 -51 l -22 0 l 0 35 l -81 0 l 0 -35 l -28 0").attr({'stroke-width':0.01,'fill':'#5B2525'});
	//var workpieceLine1 = paper.path("M215 265l0 40l92 0l0 -40").attr({'stroke-width':2,'stroke':color});
	//var workpieceLine2 = paper.path("M220 265l0 38l86 0l0 -38").attr({'stroke-width':2,'stroke':color});
	var fillRect1 = paper.path("M283 296l16 0l0 -20").attr({'stroke-width':3,'arrow-end':'classic'});
   	var fillRect2 = paper.path("M243 296l-17 0l0 -20").attr({'stroke-width':3,'arrow-end':'classic'});
	fillRect1.animate(animation.repeat("Infinity"));
	fillRect2.animate(animation.repeat("Infinity"));
	var fillMetal2 = paper.path("M200 268 l 0,52 l 122,0 l 0 -51 l -20 0 l 0 35 l -78 0 l 0 -35 l -28 0").attr({'stroke-width':0.01,'fill':'#5B2525'});
	Micromachine.mainSet.push(fillLiqLeftRect,fillLiqRightRect,fillRect1,fillRect2);
}   
var animateCurveRight = function(){
		var a=296,b=340,c=256,d=360,e=350;
		var i;
		var aa=[];
		for(i=0;i<=4;i++){
			var	pathR="M" + a + ",265C" + b + ",150,360,"+ c + "," + d + "," + e + "";
 		    animationOfCurve(pathR);
				//a += 4;
				b += 8;
				c += 10;
				d += 2;
				e += -2;					
		}
		animateVRext();
	}	 
var animateCurveLeft = function(){
		var a=228,b=182,c=344,d=156,e=350;
		var i;
		for(i=0;i<=4;i++){
			var	pathL="M" + a + ",266C" + b + ",141,141,"+ c + "," + d + "," + e + "";
			 animationOfCurve(pathL);
				//a += 4;
				b += 8;
				c += 10;
				d += 2;
				e += -2;
		}
	}	 	 
var animationOfCurve = function(path){
	var paper = Micromachine.paper;
	var path = drawCurve(path,1000,{ 'stroke':color, 'stroke-width':3,'stroke-dasharray':'-' });
	function drawCurve(path,duration,attr,callback){
		var guide_path = paper.path(path).attr( { stroke: "none", fill: "none" } );
					var path = paper.path( guide_path.getSubpath( 0, 1 ) ).attr( attr );
					var total_length = guide_path.getTotalLength( guide_path );
					var start_time = new Date().getTime();
					var interval_length = 25;
					var interval_id = setInterval( function()
						{
							var elapsed_time = new Date().getTime() - start_time;
							var this_length = elapsed_time / duration * total_length;
							var subpathstr = guide_path.getSubpath( 0, this_length );
							attr.path = subpathstr;
							path.animate( attr, interval_length );
							if ( elapsed_time >= duration )
							{
								clearInterval( interval_id );
								if ( callback != undefined ) callback();
							}           
							}, interval_length );  
						return path;   
	}
	Micromachine.mainSet.push(path);
	return path;
}
 var animateVRext = function(){	
  	var paper = Micromachine.paper;
	var VRext = paper.rect(x+131,y+298,6.9,0).attr({
			'fill':color,
			stroke :color	
		});
	var toelectrolytes = paper.path("M135 380l0 25").attr({'stroke-width':4,'arrow-end':'classic'});
	toelectrolytes.animate(animation.repeat("Infinity"));
	var b = VRext.animate({
			height : 96
		},10000, function() {
			electrolyteRect()
		});
		Micromachine.mainSet.push(VRext,toelectrolytes);
	}
var electrolyteRect = function(){
	var paper = Micromachine.paper;
	
	var containerFill = paper.rect(x+120,y+300,235,0).attr({'fill':color,stroke :color,'fill-opacity':80});
	containerFill.toBack();
	var b = containerFill.animate({
             y :250,
             height :100
         }, 15000);	
	var electRect = paper.rect(x+51,y+397,101,0).attr({
			'fill':color,
			stroke :color
		});
	var b = electRect.animate({
			y : y+364,
			height :33
		}, 1500, function() {toFitrationRect()
		});
	Micromachine.mainSet.push(electRect,containerFill);
}
var toFitrationRect = function(){
	var paper = Micromachine.paper;
	var fitrationRect = paper.rect(x+152,y+387,0,4).attr({
			'fill':color,
			stroke :color
			
		});
   var electroDash1 = paper.path("M70 436l102 0").attr({'stroke-width':2,'stroke-dasharray':'-'});
   var electroDash1 = paper.path("M70 441l102 0").attr({'stroke-width':2,'stroke-dasharray':'-'});
   var electroDash1 = paper.path("M70 445l102 0").attr({'stroke-width':2,'stroke-dasharray':'-'});
   
	var toFilterationArrow = paper.path("M178 425l20 0").attr({'stroke-width':4,'arrow-end':'classic'});
	toFilterationArrow.animate(animation.repeat("Infinity"));
	var b = fitrationRect.animate({
			width :31
		}, 1500, function() {fillFitrationRect()
		});
	Micromachine.mainSet.push(fitrationRect,toFilterationArrow);
}
var fillFitrationRect = function(){
	var paper = Micromachine.paper;
	var fRect = paper.rect(x+183,y+398,86,0).attr({
			'fill':color,
			stroke :color
			
		});
	var b = fRect.animate({
			y : y+372,
			height :25
		}, 1500, function() {fromFitrationRect1()
		});
    var electroDash1 = paper.path("M200 435l90 0").attr({'stroke-width':2,'stroke-dasharray':'-'});
    var electroDash1 = paper.path("M200 440l90 0").attr({'stroke-width':2,'stroke-dasharray':'-'});   
    var electroDash1 = paper.path("M200 445l90 0").attr({'stroke-width':2,'stroke-dasharray':'-'});
	Micromachine.mainSet.push(fRect);
}
var fromFitrationRect1 = function(){
	var paper = Micromachine.paper;
	var fromFitRect1 = paper.rect(x+243,y+377,6,0).attr({
			'fill':color,
			stroke :color
		});
	
	var formFiltArrow = paper.path("M250 410l0 -20").attr({'stroke-width':4,'arrow-end':'classic'});
	formFiltArrow.animate(animation.repeat("Infinity"));	
	var b = fromFitRect1.animate({
			y : y+337,
			height :35
		}, 1500, function() {fromFitrationRect2()
		});
	Micromachine.mainSet.push(fromFitRect1,formFiltArrow);
}	
var fromFitrationRect2 = function(){
	var paper = Micromachine.paper;
	var fromFitRect2 = paper.rect(x+243,y+337,0,5).attr({
			'fill':color,
			stroke :color
			
		});
	var b = fromFitRect2.animate({
			width :74
		}, 1500, function() {toElectReservoirRect()
		});
	Micromachine.mainSet.push(fromFitRect2);
}			
var toElectReservoirRect = function(){	
  	var paper = Micromachine.paper;
	var electResRect = paper.rect(x+313,y+343,4,0).attr({
			'fill':color,
			stroke :color
		});
	var toResArrow = paper.path("M350 390l0 20").attr({'stroke-width':4,'arrow-end':'classic'});
	toResArrow.animate(animation.repeat("Infinity"));	
	var b = electResRect.animate({
			height : 55
		},1500, function() {fume1(),fume2(),fume3(),fume4() });
	Micromachine.mainSet.push(electResRect,toResArrow);
	}
var fume1 = function(){
	var paper = Micromachine.paper;
	var fumeCurve12 ="M329,112C313,119,343,77,319,64";
	fumeAnimationOfCurve(fumeCurve12);	
}
var fume2 = function(){
	var paper = Micromachine.paper;
	var fumeCurve13 ="M330,117C316,68,338,62,333,61";
	fumeAnimationOfCurve(fumeCurve13);	
}
var fume3 = function(){
	var paper = Micromachine.paper;
	var fumeCurve14 ="M328,107C301,65,336,97,326,67";
	fumeAnimationOfCurve(fumeCurve14);	
}	
var fume4 = function(){
	var paper = Micromachine.paper;
	var fumeCurve14 ="M323,113C344,82,312,73,336,62";
	fumeAnimationOfCurve(fumeCurve14);	
}	 	 
var fumeAnimationOfCurve = function(path){
	var paper = Micromachine.paper;
	var path = drawCurve(path,10000,{ 'stroke':"#394F66", 'stroke-width':1,'stroke-dasharray':'-'});
	function drawCurve(path,duration,attr,callback){
		var guide_path = paper.path(path).attr( { stroke: "none", fill: "none" } );
					var path = paper.path( guide_path.getSubpath( 0, 1 ) ).attr( attr );
					var total_length = guide_path.getTotalLength( guide_path );
					var start_time = new Date().getTime();
					var interval_length = 25;
					var interval_id = setInterval( function()
						{
							var elapsed_time = new Date().getTime() - start_time;
							var this_length = elapsed_time / duration * total_length;
							var subpathstr = guide_path.getSubpath( 0, this_length );
							attr.path = subpathstr;
							path.animate( attr, interval_length );
							if ( elapsed_time >= duration )
							{
								clearInterval( interval_id );
								if ( callback != undefined ) callback();
							}           
							}, interval_length );  
						return path;   
	}
	Micromachine.mainSet.push(path);
	return path;
}
 /*
 var fumeRect = function(){
     var paper = Micromachine.paper;
     var fumeRect = paper.rect(x+304,y+58,5,0).attr({
             'fill':color,
             stroke :color
         });
     var b = fumeRect.animate({
             y: y+48,
             height :10
         }, 1000,function(){fillFume()});
                          Micromachine.mainSet.push(fumeRect);
 }
  var fillFume = function(){
     var paper = Micromachine.paper;
     var fPump1 = paper.circle(x+306,y+39,10).attr({
             stroke :color
         });
     var b = fPump1.animate({
                 'fill':color,
         }, 1000,function(){fumeRect2()});
     Micromachine.mainSet.push(fPump1);
 }
 var fumeRect2 = function(){
     var paper = Micromachine.paper;
     var fumeRect2 = paper.rect(x+304,y+26,5,0).attr({
             'fill':color,
             stroke :color
         });
     var b = fumeRect2.animate({
             y: y+22,
             height :10
         }, 1000);
     Micromachine.mainSet.push(fumeRect2);
 }*/
 
return{
		fillElectReservoirRect : fillElectReservoirRect,
		mainSet : Micromachine.mainSet,
		curveArr :Micromachine.curveArr
	}
})();