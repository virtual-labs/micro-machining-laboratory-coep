
 /*
  * Author :Pravin Rasal
  * Date : 27 Nov,2012
  */
 
ECGWorkspace.animation =(function(){
	var animation  = Raphael.animation({opacity:.2}, 1000);
	animation.repeat("Infinity")
	var flowAnimate = function(){
		var paper = ECGWorkspace.paper;
		var flowpath = paper.path("M133 267").attr({'stroke':'#020AF9','stroke-width':7});
		flowpath.animate({path:"M133 267l63 103"}, 1000,function(){trianAnimate()});
			
	}
	var trianAnimate = function(){
		var paper = ECGWorkspace.paper;
		var tri = paper.path("M198 368l0 50l-20 0l20 -54").attr({'fill':'#020AF9','stroke':'#020AF9'});
		//tri.animate({path:"M198 368l0 50l-20 0l20 -54"},1000,function(){rectAnimate()});
		tri.animate(animation.repeat("Infinity"));
		rectAnimate()
	}
	var rectAnimate = function(){
		var paper = ECGWorkspace.paper;
		var rect = paper.rect(173,419,80,40).attr({'fill':'#020AF9','stroke':'#020AF9'});		
		//var b =  rect.animate({height : 40},1000);
		rect.animate(animation.repeat("Infinity"));
	}
	return{
		flowAnimate : flowAnimate
	}
})();
