/**
 * JQuery Plugin for a modal box
 * Will create a simple modal box with all HTML and styling
 * 
 * Author: Paul Underwood
 * URL: http://www.paulund.co.uk
 * 
 * Available for free download from http://www.paulund.co.uk
 */

(function($){

	$.fn.paulund_modal_box = function(prop){
		var options = $.extend({
			height : "250",
			description: "Example of how to create a modal box.",
			top: "20%",
			left: "36%",
			width: "560",
		},prop);
				
		//Click event on element
		return this.click(function(e){

			add_block_page();
			add_popup_box();
			add_styles();
			
			$('.paulund_modal_box').fadeIn();
		});
		

		 function add_styles(){			
			$('.paulund_modal_box').css({ 
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'border':'1px solid #1e824c',
				'box-shadow': '0px 0px 7px #292929',
				'-moz-box-shadow': '0px 2px 7px #292929',
				'-webkit-box-shadow': '0px 2px 7px #292929',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px',
				'background': '#eff5eb', 
				'z-index':'50',
				'margin':'100px auto',
			});
			$('.paulund_modal_close').css({
				'position':'relative',
				'top':'-10px',
				'left':'10px',
				'float':'right',
				'display':'block',
				'height':'27px',
				'width':'27px',
				'background': 'url(images/close2.png) no-repeat',
			});
			$('.paulund_block_page').css({
				'position':'fixed',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':'100%',
				'width':'100%',
				'z-index':'10'
			});
			$('.paulund_inner_modal_box').css({
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px'
			});
		}
		
	
		 function add_block_page(){
			var block_page = $('<div class="paulund_block_page"></div>');       
			$(block_page).appendTo('body');
		}
		 	
	
		 function add_popup_box(){
			 var pop_up = $('<div class="paulund_modal_box"><a href="#" class="paulund_modal_close"></a><div class="paulund_inner_modal_box">' + options.content + '</div></div>');
			 $(pop_up).appendTo('.paulund_block_page');
			 			 
			 $('.paulund_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.paulund_block_page').fadeOut().remove();				 
			 });
		}

		return this;
	};
	
})(jQuery);
