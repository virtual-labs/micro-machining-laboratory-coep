

ECGWorkspace.diagram = (function(){

 var x=20;
 var y=20;
 
 var diagram = function(){
	var paper = ECGWorkspace.paper;
	var workTable = paper.rect(x+30,y+425,150,40);  	
	var tool = paper.rect(x+126,y+402,54,23);
	var grift = paper.rect(x+180,y+213,60,200).attr({'fill':'#ADA69C'});
	var hrod = paper.rect(x+198,y+306,42,10).attr({'fill':'#FFFFFF'});
	var electrodeWheel = paper.rect(x+187,y+232,19,160).attr({'fill':'#FFFFFF'});;
	var sleeve  = paper.rect(x+259,y+274,75,75).attr({'fill':'#ADA69C'});
	var spindle = paper.rect(x+241,y+294,155,35).attr({'fill':'#FFFFFF'});
	var sleeve  = paper.rect(x+259,y+274,75,75).attr({'stroke':'#000000'});
	var srect = paper.rect(x+364,y+282,25,12);
	var line1 = paper.path("M385 350l0 8l150 0");
	var line2 = paper.path("M408 308l90 0l0 50");
	var line3 = paper.path("M158 478l190 0l0 -40l183 0");
	var electrolyteflow = paper.path("M153 285l46 78l-12 8l-48 -78l15 -8");
	var negSign = paper.text(x+510,y+330,"-").attr({'font-weight':'bold','font-size':20});
	var negSign = paper.text(x+510,y+410,"+").attr({'font-weight':'bold','font-size':20});
	
	var workTable = paper.text(x+40,y+390,"Work Table").attr({'font-weight':'bold','font-size':12});
	var workTableArrow = paper.path("M70,420l50,40").attr({'stroke-width':2,'arrow-end':'classic'});
	var tool = paper.text(x+40,y+360,"Tool").attr({'font-weight':'bold','font-size':12});
	var toolArrow = paper.path("M75,380l20,0l60 50").attr({'stroke-width':2,'arrow-end':'classic'});
	var electrolyteflow = paper.text(x+50,y+230,"Electrolyte flow").attr({'font-weight':'bold','font-size':12});
	var electrolyteflowArrow = paper.path("M115,250l10,0l5 10").attr({'stroke-width':2,'arrow-end':'classic'});
	var insulatedgrit = paper.text(x+50,y+190,"Insulated grit").attr({'font-weight':'bold','font-size':12});
	var insulatedgritArrow = paper.path("M110,210l10,0l80 40").attr({'stroke-width':2,'arrow-end':'classic'});
	var electrodewheel = paper.text(x+350,y+190,"Electrode Wheel").attr({'font-weight':'bold','font-size':12});
	var electrodewheelArrow = paper.path("M320,210l-10,0l-85 40").attr({'stroke-width':2,'arrow-end':'classic'});
	var insulatingsleeve = paper.text(x+380,y+230,"Insulating Sleeve").attr({'font-weight':'bold','font-size':12});
	var insulatingsleeveArrow = paper.path("M350,250l-10,0l-45 60").attr({'stroke-width':2,'arrow-end':'classic'});
	var spindle = paper.text(x+430,y+250,"Spindle").attr({'font-weight':'bold','font-size':12});
	var spindleArrow = paper.path("M430,270l-10,0l-45 60").attr({'stroke-width':2,'arrow-end':'classic'});
	var brushes = paper.text(x+470,y+380,"Currenr pick-up brushes").attr({'font-weight':'bold','font-size':12});
	var brushesArrow = paper.path("M420,400l-10,0l-15 -50").attr({'stroke-width':2,'arrow-end':'classic'});
	
	
  }
return{
	diagram :diagram
}	
		
})();
