

var ECGWorkspace =  ECGWorkspace || {};

ECGWorkspace.paper;

$(document).ready(function(){
	  
	  ECGWorkspace.paper = Raphael(document.getElementById("diagram"),572,500);
	  $( "#tabs" ).tabs();
	  var view = new ECGWorkspace.view.view(); 
	  var diagram = new ECGWorkspace.diagram.diagram();
	  var animation = new ECGWorkspace.animation.flowAnimate();
});


