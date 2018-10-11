/*
name : pageScroll.js
url : http://work6.kr
*/
(function($){
	
	var ele;
	var html='html,body';
	var speed = 100;
	var children = 'li';
	var scrolltopdata = [];
	var diff = 0;

	
	$.fn.pageScroll = function(opt){
		ele = $(this);
		
		if(opt.speed) speed = opt.speed;
		if(opt.children) children = opt.children;
			
		
		$(ele).find(children).click(function(event){ 
			
			if($(this).attr('title')){
				pageele = '#'+$(this).attr('title'); 
				
				$(html).animate({scrollTop:getOffsetTop(pageele)},speed,'easeOutExpo');
				
				if(opt.compleate){
					compleate($(this),opt.compleate);
				}
			}
		});
	

	

		if(opt.scrollmove){

			//높이구하기
			$(document).ready(function(){
				$(ele).find(children).each(function(){
				
					pageele = '#'+$(this).attr('title'); 
					offset = $(pageele).offset();
					
					scrolltopdata.push(Math.floor(offset.top));
				});

				scrollmove(scrolltopdata,opt.scrollmove);
				
			});
			
		}



		function getOffsetTop(pageele){	
			toppx = 0;			
			offset = $(pageele).offset();
			
			if(opt.diff>0){
				offset.top = (offset.top-opt.diff);
			}

			return Math.floor(offset.top);
		} 


		function compleate(data,callback){
			callback(data);
		}

		function scrollmove(data,callback){
			callback(data);
		}

		
	}
})(jQuery);