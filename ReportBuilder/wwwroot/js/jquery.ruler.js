;(function( $ ){

	$.fn.ruler = function(options) {
	
		var defaults = {
			vRuleSize: 18,
			hRuleSize: 18,
			showCrosshair : true,
			showMousePos: true
		};//defaults
		var settings = $.extend({},defaults,options);
		
		var hRule = '<div class="ruler hRule"></div>',
				vRule = '<div class="ruler vRule"></div>',
				corner = '<div class="ruler corner"></div>',
				vMouse = '<div class="vMouse"></div>',
				hMouse = '<div class="hMouse"></div>',
				mousePosBox = '<div class="mousePosBox">x: 50%, y: 50%</div>';
		var width = $(this).width();
		var height = $(this).height();
		if (!Modernizr.touch) {
			if (settings.showCrosshair) {
				$(this).append(vMouse, hMouse);
			}
			if (settings.showMousePos) {
				$(this).append(mousePosBox);
			}
			
			if (settings.showCrosshair || settings.showMousePos) {
                $(this).mousemove(function (e) {
                    var posX = e.pageX - $(this).offset().left;
                    var posY = e.pageY - $(this).offset().top;
					if(posX <= settings.vRuleSize || posY <= settings.hRuleSize || posX >= width || posY >= height){
						$('.vMouse').hide();
						$('.hMouse').hide();
						return;
					}
					$('.vMouse').show();
					$('.hMouse').show();
					if (settings.showCrosshair) {
						$('.vMouse').css("top", posY);
						$('.hMouse').css("left", posX);
					}
                    if (settings.showMousePos) {
                        var x = e.pageX - settings.vRuleSize - $(this).offset().left - 2;
                        var y = e.pageY - settings.hRuleSize - $(this).offset().top - 2;
						if(x < 0 || y < 0 || x >= width - settings.vRuleSize - 3 || y >= height - settings.hRuleSize - 3){
							$('.mousePosBox').hide();
							return;
						}
						$('.mousePosBox').show();
						$('.mousePosBox').html(x + ", " + y).css({
							top: e.pageY-($(this).scrollTop() - 5),
							left: e.pageX + 15
						});
					}
				});
			}
		}
		
		return this.each(function() {
			var $this = $(this);
			
			$this.css("padding-top", settings.hRuleSize + 1 + "px");
			if (settings.hRuleSize > 0) {				
				$(hRule).height(settings.hRuleSize).prependTo($this);
			}
			
			if (settings.vRuleSize > 0) {
				var oldWidth = $this.outerWidth();
				$this.css("padding-left", settings.vRuleSize + 1 + "px").outerWidth(oldWidth);
				$(vRule).width(settings.vRuleSize).height($this.outerHeight()).prependTo($this);
			}
			
			if ( (settings.vRuleSize > 0) && (settings.hRuleSize > 0) ) {
				$(corner).css({
					width: settings.vRuleSize,
					height: settings.hRuleSize
				}).prependTo($this);
			}
			
			
			var $hRule = $this.children('.hRule');
			var $vRule = $this.children('.vRule');
		
			var tickLabelPos = settings.vRuleSize;
			var newTickLabel = "";
			var counter = 0;
			while ( tickLabelPos <= $hRule.width() ) {
				if ((( tickLabelPos - settings.vRuleSize ) %50 ) == 0 ) {
					newTickLabel = "<div class='tickLabel'><span>" + ( counter++ ) + "</span></div>";
					$(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
				} else if ((( tickLabelPos - settings.vRuleSize ) %10 ) == 0 ) {
					newTickLabel = "<div class='tickMajor'></div>";
					$(newTickLabel).css("left",tickLabelPos+"px").appendTo($hRule);
				} else if ((( tickLabelPos - settings.vRuleSize ) %5 ) == 0 ) {
					newTickLabel = "<div class='tickMinor'></div>";
					$(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
				}
				tickLabelPos = (tickLabelPos + 1);				
			}
			
			tickLabelPos = settings.hRuleSize;
			newTickLabel = "";
			counter = 0;
			while (tickLabelPos <= $vRule.height()) {
				if ((( tickLabelPos - settings.hRuleSize ) %50 ) == 0) {
					newTickLabel = "<div class='tickLabel'><span>" + ( counter++ ) + "</span></div>";
					$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
				} else if (((tickLabelPos - settings.hRuleSize)%10) == 0) {
					newTickLabel = "<div class='tickMajor'></div>";
					$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
				} else if (((tickLabelPos - settings.hRuleSize)%5) == 0) {
					newTickLabel = "<div class='tickMinor'></div>";
					$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
				}
				tickLabelPos = ( tickLabelPos + 1 );				
			}
			
			$vRule.height(height);
			
		});		
		
	};
})( jQuery );