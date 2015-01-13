 /*
  * Author :Pravin Rasal
  * Date : 24 Nov,2012
  */ 
var startFlg = false;
var powerSupply;
var workpieceLineN1;
var fillMetal; 
	
Micromachine.diagram =(function(){
	var vhand1,ammhand2;
	
	
var diagram = function(){
	var x = 20;
	var y = 50;
	var paper = Micromachine.paper;
	
	var textStyle = paper.set();
	powerSupply = paper.rect(x+15,y+12,60,40).attr({'stroke-width':2,r:2});
	
var powerImage = paper.image("images/onoff.png",x+27,y+16,36,32).click(function(){
					
					if(startFlg == true){
						var metalType = $("#material").val();
						if(metalType == '--Select--'){
							alert('Please select Metal type !!');
						}else{
							powerSupply.attr({fill:'#FF0000'});
							var removeAnimateColor = Micromachine.animate.mainSet;
							removeAnimateColor.remove();
							
							vhand1 =  paper.path("M65 150l0 -10").attr({'stroke-width':2,'stroke':'#B40000','stroke-linecap':'round'});
	   						ammhand1 =  paper.path("M82 224l0 -10").attr({'stroke-width':2,'stroke':'#B40000','stroke-linecap':'round'});
							startFlg = false;
						}
					}else
					{						
						var metalType = $("#material").val();
						if(metalType == '--Select--'){
							alert('Please select Metal type !!');
						}else{
							startFlg = true;
							powerSupply.attr({fill:'#11960F'});
							var diagram2 = new Micromachine.animate.fillElectReservoirRect();
							voltmeterAnimate();
							ammeterAnimate();
						}
					}
				});
	
	var pline1 = paper.path("M88 102l0 59l148 0").attr({'stroke-width':2});
	var pline2 = paper.path("M42 102l0 123l26 0").attr({'stroke-width':2});
	var ammeterCircle = paper.circle(82, 225, 15);
	var pline3 = paper.path("M97 225l94 0l0 92").attr({'stroke-width':2});
	var pline4 = paper.path("M42 150l8 0").attr({'stroke-width':2});
	var voltmeterCircle = paper.circle(65, 151, 15);
	var pline5 = paper.path("M80 150l9 0").attr({'stroke-width':2});
	
	var innerRect = paper.rect(x+200,y+70,86,30).attr({'stroke-width':2});
	var vline1 = paper.path("M247,150L247,258").attr({'stroke-width':2});
	var vline2 = paper.path("M277 150l0 17l12 0l0 -18").attr({'stroke-width':2});
	var vline3 = paper.path("M277,175L277,258").attr({'stroke-width':2});
	var vline4 = paper.path("M277 175l13 0l0 25l18 0l0 20l-24 0").attr({'stroke-width':2});
	var brect1 = paper.rect(x+264,y+170,8,62).attr({'stroke-width':0.5,fill:'#000000'});
	var vline5 = paper.path("M236 150 l 0 50l -15 0l0 20l19 0").attr({'stroke-width':2});
	var brect2 = paper.rect(x+212,y+170,8,62).attr({'stroke-width':0.5,fill:'#000000'});
	var curve1 = paper.path("M247,258C248,279,264,282,258,280").attr({'stroke-width':2});
	var curve2 = paper.path("M277,258C276,278,266,282,267,280").attr({'stroke-width':2});
	var vline6 = paper.path("M260 280l0 11l-27 0l0 -20").attr({'stroke-width':2});
	var vline7 = paper.path("M267 280l0 11l24 0l0 -20").attr({'stroke-width':2});
	var vline8 = paper.path("M227 266l-30 0l0 55").attr({'stroke-width':2});
	var vline9 = paper.path("M296 266l30 0l0 55").attr({'stroke-width':2});
 //workpieceLineN1 = paper.path("M223 265l0 36l81 0l0 -36").attr({'stroke-width':2});

	var fixtureRect = paper.rect(x+165,y+271,160,17).attr({'stroke-width':2});
	var fixtureRect1 = paper.rect(x+164,y+288,162,6).attr({'stroke-width':0.5,fill:'#000000'});
	var posRect = paper.rect(x+167,y+266,9,5).attr({'stroke-width':0.5,fill:'#000000'});
   var baseRect = paper.rect(x+152,y+294,185,8).attr({'stroke-width':2});
   var enclosureLine1 = paper.path("M160 352l217 0l0 -110l9 0l0 118l-226 0").attr({'stroke-width':2});
   var enclosureLine2 = paper.path("M139 123l0 229l10 0l0 8l-19 0l0 -119l9 0").attr({'stroke-width':2});
   var encVlineleft   = paper.path("M149 352l0 60l-78 0").attr({'stroke-width':2});
   var encVlineright  = paper.path("M160 351l0 62l12 0").attr({'stroke-width':2});
   var startElecLineT = paper.path("M173 399l0 37l28 0l0 -16l60 0l0 -35l78 0l0 30l86 0l0 -40l40.6 0l0 -151.5l-35 0l0 -50l-155 0").attr({'stroke-width':2});
   var startElecLineB = paper.path("M70 399l0 50l103 0l0 -7l28 0l0 7l90 0l0 -29l-20 0l0 -26l60 0l0 20l-17 0").attr({'stroke-width':2});
   var electrolyteLine1 = paper.path("M315 404l0 46l110 0l0 -8l30 0").attr({'stroke-width':2});
   var electrolyteLine2 = paper.path("M425 404l0 33l26 0").attr({'stroke-width':2});
   var filterToPumpLine = paper.path("M276 166l155 0l0 -28l70 0l0 86l-28 0l0 168").attr({'stroke-width':2});
   var fromPump = paper.path("M466 391l0 -20").attr({'stroke-width':2});
   var enclosureCurve1 = paper.path("M139,123C143,101,164,109,155,107").attr({'stroke-width':2});
   var enclosureHline1 = paper.path("M152 107l170 0l0 -7").attr({'stroke-width':2});
   var enclosureVLine1 = paper.path("M377 176l0 90").attr({'stroke-width':2});
   var enclosureVLine1 = paper.path("M377 166l0 -43").attr({'stroke-width':2});
   var enclosureCurve2 = paper.path("M377,123C379,102,357,108,362,107").attr({'stroke-width':2});
   var enclosureLine3 =  paper.path("M331 100l0 7l30 0").attr({'stroke-width':2});
   var c = paper.circle(472, 419, 28).attr({'stroke-width':2});
   var pumpRect = paper.rect(x+448,y+340,4,3).attr({'stroke-width':0.0,'fill':'#DDDDDD'});
   var pumpRect1 = paper.rect(x+430,y+387,6,4).attr({'stroke-width':0.0,'fill':'#DDDDDD'});
   var fumeCurve1 = paper.path("M322,101C306,92,317,77,323,77").attr({'stroke-width':2});
   var fumeCurve2 = paper.path("M330,101C349,88,329,76,331,77").attr({'stroke-width':2});
   var fumeLine1 =  paper.path("M322 70l0 8").attr({'stroke-width':2});
   var fumeLine2 =  paper.path("M331 70l0 8").attr({'stroke-width':2});
   var negRect = paper.rect(x+210,y+107,5,8).attr({'stroke-width':0.5,fill:'#000000'}); 
   var pumpWhite =paper.path("M425 414l0 -39l40 0").attr({'stroke-width':3,'stroke':'#DDDDDD'});
   //text
   var powerSupplyText = paper.text(x+118,y+24,"Power Supply");
   
   var electrolyte = paper.text(x+90,y+412,"Electrolyte");
   var filtration = paper.text(x+220,y+412,"Filtration");
   var reservior  = paper.text(x+350,y+412,"Electrolyte Reservior");
   var pump = paper.text(x+500,y+370,"Pump");
   var filter = paper.text(x+500,y+120,"Filter");
   var fumeExtractor = paper.text(x+370,y+20,"Fume Extractor");
   var enclosure = paper.text(x+410,y+60,"Enclosure");
   var enclosureArrow = paper.path("M400,110l-20,13").attr({'stroke-width':2,'arrow-end':'classic'});
   var tool = paper.text(x+380,y+140,"Tool");
   var toolArrow = paper.path("M390,190l-82,25").attr({'stroke-width':2,'arrow-end':'classic'});
   var workpiece = paper.text(x+410,y+200,"Workpiece");
   var workpieceArrow = paper.path("M397,250l-74,25").attr({'stroke-width':2,'arrow-end':'classic'});
   var fixture = paper.text(x+400,y+250,"Fixture");
   var fixtureArrow = paper.path("M400,300l-55,25").attr({'stroke-width':2,'arrow-end':'classic'});
   var base = paper.text(x+400,y+280,"Base");
   var baseArrow = paper.path("M402,330l-43,15").attr({'stroke-width':2,'arrow-end':'classic'});
   var neg  = paper.text(x+200,y+120,"- ve").attr({'font-size' : 15,'font-weight':'bold','font-family': 'Arial,Sans-serif'});;
   var pos  = paper.text(x+148,y+265,"+ ve").attr({'font-size' : 15,'font-weight':'bold','font-family': 'Arial,Sans-serif'});;
   
   var todText = paper.text(x+200,y+40,"Tod Movement");
   var todArrow = paper.path("M190,100l-15 90l10 0").attr({'stroke-width':2,'arrow-end':'classic'});
   var volt = paper.text(x+52,y+125,"Voltmeter");
   var amtere = paper.text(x+55,y+200,"Ammeter");   
   
   textStyle.push(amtere,volt,todText,powerSupplyText,electrolyte,filtration,reservior,pump,filter,fumeExtractor,tool,workpiece,fixture,base,enclosure).attr({'font-size' : 12,
					'font-weight':'bold',
					'font-family': 'Arial,Sans-serif'});
   var vCircle = paper.circle(x+45,y+100,1).attr({fill:"#000"});
   var aCircle = paper.circle(x+62,y+175,1).attr({fill:"#000"});
   vhand1 =  paper.path("M65 150l0 -10").attr({'stroke-width':2,'stroke':'#B40000','stroke-linecap':'round'});
   ammhand1 =  paper.path("M82 224l0 -10").attr({'stroke-width':2,'stroke':'#B40000','stroke-linecap':'round'});
   
   var todArrow1 = paper.path("M190 190l0 -20").attr({'stroke-width':3,'arrow-end':'classic'});
   var todArrow2 = paper.path("M190 190l0 15").attr({'stroke-width':3,'arrow-end':'classic'});
   
   var electroDash1 = paper.path("M70 436l102 0").attr({'stroke-width':2,'stroke-dasharray':'-'});
   var electroDash1 = paper.path("M70 441l102 0").attr({'stroke-width':2,'stroke-dasharray':'-'});
   var electroDash1 = paper.path("M70 445l102 0").attr({'stroke-width':2,'stroke-dasharray':'-'});
   var electroDash1 = paper.path("M200 435l90 0").attr({'stroke-width':2,'stroke-dasharray':'-'});
   var electroDash1 = paper.path("M200 440l90 0").attr({'stroke-width':2,'stroke-dasharray':'-'});   
   var electroDash1 = paper.path("M200 445l90 0").attr({'stroke-width':2,'stroke-dasharray':'-'});
      
  
   ////
   var a=161,b=243,c=242,d=150,e =150,f=175;
   for(var i=0;i<=26;i++){
   		var smallLines = paper.path("M"+a+" 352l13 8").attr({'stroke-width':2});
   		a+=8;
   	}
   	for(var i=0;i<=22;i++){
   		var smallLines = paper.path("M377 "+b+"l10 7").attr({'stroke-width':2});
   		b+=5;
   		
   	}
   	for(var i=0;i<=22;i++){
   		var smallLines = paper.path("M130 "+c+"l10 7").attr({'stroke-width':2});
   		c+=5;
   	}
   	var smallLinesLeft = paper.path("M140 355l10 7").attr({'stroke-width':2});

	var tubesmallLine = paper.path("M223 199l20 11").attr({'stroke-width':2});
	var tubesmallLine = paper.path("M222 203l20 12").attr({'stroke-width':2});
	var tubesmallLine = paper.path("M222 208l20 12").attr({'stroke-width':2});
	var tubesmallLine = paper.path("M222 214l20 10").attr({'stroke-width':2});
   	for(var i=0;i<=22;i++){
    	var tubesmallLine = paper.path("M235 "+d+"l12 8").attr({'stroke-width':2});
    	d+=5;
    }
    for(var n=0;n<=2;n++){
    	var tubesmallLine = paper.path("M278 "+e+"l12 8").attr({'stroke-width':2});
    	e+=5;	
    }	
    for(var n=0;n<=17;n++){
    	var tubesmallLine = paper.path("M278 "+f+"l12 9").attr({'stroke-width':2});
    	f+=5;	
    }
    var x1=276,y1=263,x2=12,y2=8;
        for(var m=0;m<=4;m++){
        	var tubesmallLine = paper.path("M"+x1+" "+y1+"l"+x2+" "+y2+"").attr({'stroke-width':2});
        	x1-=1;        	y1+=4;       	x2+=2;        	y2+=1;
    }
    var tubesmallLine = paper.path("M267 282l16 10").attr({'stroke-width':2});
    
    var a1=239,b1=268,a2=12,b2=8;
        for(var m=0;m<=2;m++){
        	var tubesmallLine = paper.path("M"+a1+" "+b1+"l"+a2+" "+b2+"").attr({'stroke-width':2});
        	a1-=1;      	b1+=4;       	a2+=6;        	b2+=3;
    }
    var tubesmallLine = paper.path("M235 280l18 11").attr({'stroke-width':2});
    var tubesmallLine = paper.path("M233 283l13 7").attr({'stroke-width':2});
    var d1=295,d2=200,g1=13,g2=7;
   	var tubesmallLine = paper.path("M295 200l13 7").attr({'stroke-width':2});
   	var tubesmallLine = paper.path("M291 201l17 10").attr({'stroke-width':2});
   	var tubesmallLine = paper.path("M290 203.7l17 12").attr({'stroke-width':2});
   	var tubesmallLine = paper.path("M289 208l17 13").attr({'stroke-width':2});
   	var tubesmallLine = paper.path("M286 211l14 10").attr({'stroke-width':2});
    fillMetal = paper.path("M200,268l0,52l122,0l0 -51l-25 0l0 24l-71 0l0 -25l-18 0").attr({'stroke-width':0.01,'fill':'#5B2525'});
    
   //Voltmeter
  var v1 =  paper.path("M65 136l0 6");
  var v2 =  paper.path("M80 150l-6 0");
  var v3 =  paper.path("M65 166l0 -6");
  var v4 =  paper.path("M50 150l7 0");
  
  //Ammeter
  var v1 =  paper.path("M82 210l0 6");
  var v2 =  paper.path("M97 225l-6 0");
  var v3 =  paper.path("M82 240l0 -6");
  var v4 =  paper.path("M68 225l6 0");
  }
 var voltmeterAnimate = function(){
 	var paper = Micromachine.paper;
 	vhand1.remove();
 	var vhand2 =  paper.path("M65 150l8 8").attr({'stroke-width':2,'stroke':'#B40000','stroke-linecap':'round'});	
 	Micromachine.mainSet.push(vhand2);
 }
 var ammeterAnimate = function(){
 	var paper = Micromachine.paper;
 	ammhand1.remove();
    var ammhand2 =  paper.path("M82 225l10 -3").attr({'stroke-width':2,'stroke':'#B40000','stroke-linecap':'round'});
    Micromachine.mainSet.push(ammhand2);	
 }
 return {
 	diagram : diagram	
}
})();