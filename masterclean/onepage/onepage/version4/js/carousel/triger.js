( function($) {
$(document).ready(function () {
					 "use strict"; 
							
								 
							$(window).scroll(function() {
							  if ($(this).scrollTop() > 80) {
								$(".header").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 0) {
								$(".header3").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header3").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 0) {
								$(".header2").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header2").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 40) {
								$(".header4").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header4").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 0) {
								$(".header5").css({"position": "fixed", "top": 0, "width": "100%","background":"transparent"});
							  } else {
								$(".header5").removeAttr("style");
							  }
							});

						
		
		
	 
						 $("#tabs a").click(function(e){

							e.preventDefault();

							$(this).tab('show');
							
						}); 
						
						
								
						/*
									 *  Simple image gallery. Uses default settings
									 */

									$('.fancybox').fancybox();

									/*
									 *  Different effects
									 */

									// Change title type, overlay closing speed
									$(".fancybox-effects-a").fancybox({
										helpers: {
											title : {
												type : 'outside'
											},
											overlay : {
												speedOut : 0
											}
										}
									});

								$("#owl-testimonial-1").owlCarousel({
										autoPlay: true, //Set AutoPlay to 3 seconds
										
									  items : 1,
									navigation : true
								  });
									
								$("#owl-testimonial-2").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });		
						$("#owl-testimonial-3").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });
						 $("#owl-testimonial-4").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  }); 
						   $("#owl-testimonial-5").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });
					if ($(".slider").length > 0) {
  $('.slider').revolution({
        delay: 7000,
        startwidth: 1200,
        startheight: 600,
        autoHeight: "on",
        fullScreen: "off",
        fullWidth: "off",
        fullScreenAlignForce: "off",
        onHoverStop: "on",
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 3,
        hideThumbsOnMobile: "off",
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResoluition: 0,
        hideThumbs: 0,
        navigationType: "bullet",
        navigationArrows: "solo",
        navigationStyle: "round",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 30,
        navigationVOffset: 30,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        touchenabled: "off",
        stopAtSlide: -1,
        stopAfterLoops: -1,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        hideSliderAtLimit: 0,
        dottedOverlay: "none",
        forceFullWidth: "off",
        shadow: 0
    });
	}
	
	$('.before-estimate .clickable').on("click", function (e) {
            if ($(this).hasClass('panel-collapsed','show')) {
               
            }
            else {
                // collapse the panel	
                $(this).parents('.panel').find('.panel-body').slideDown();
               
                $(".clickable").hide();
                
            }
        });
		$('.panel span.clickablee').on("click", function (e) {
            if ($('.panel').hasClass('panel-collapsed','loss')) {
				
               
            }
            else {
                // collapse the panel	
                $(this).parents('.panel').find('.panel-body').slideUp();
                $(".clickable").show();
               
                
            }
        });
		
		$('.pgwSlideshow').pgwSlideshow();

	$(document).ready(function() {
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		
		 
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
			$(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
		}else {
			close_accordion_section();
		
			// Add active class to section title
			jQuery(this).addClass('active');
			$(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
			
		}

		e.preventDefault();
	});
});

$(document).ready(function(){
    $('.slide-down').toggle(function () {
    $(this).css('background-color', '#fff');
	$('.slide-down a').css('color', '#3498db');
}, function () {
    $(this).css('background-color', 'transparent');
	$('.slide-down a').css('color', '#fff');
}).click(function () {
    $('.navbar-drope').slideToggle();
});
});
(function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('hover', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
})(jQuery);
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
$('#top-bar-search a').on('click', function ( e ) {
		e.preventDefault();
    	$('.search-field').slideToggle('fast');
		$(this) .toggleClass('active');
    });   
var process = $('.process');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var SECTION_WIDTH = 234;

var sections = [];
var create = function(start) {
  var section = {
    start: start,
    width: SECTION_WIDTH,
    height: 45,
    hMax: 35,
    hMod: 0,
    progress: 0,
    dot: {
      x: 0,
      y: 0
    }
  };
  section.end = section.start + section.width;
  section.dot.x = section.start + section.width / 2;
  section.dot.y = section.height;
  sections.push(section);
};

var draw = function(s) {
  var wMod = s.width * 0.3;
  ctx.beginPath();
  ctx.moveTo(s.start, s.height);
  ctx.bezierCurveTo(
    s.start + wMod, s.height,
    s.start + wMod, s.height - s.hMod,
    s.start + s.width / 2, s.height - s.hMod
  );
  ctx.bezierCurveTo(
    s.end - wMod, s.height - s.hMod,
    s.end - wMod, s.height,
    s.end, s.height
  );
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#f4bc16';
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = '#f4bc16';
  ctx.arc(s.dot.x, s.dot.y, 10, 0, Math.PI * 2);
  ctx.fill();
};

function quad(progress) {
  return Math.pow(progress, 2);
}

function makeEaseOut(delta) {
  return function(progress) {
    return 1 - delta(1 - progress);
  }
}
var quadOut = makeEaseOut(quad);

var bend = function(s) {
  if (s.progress < s.hMax) {
    var delta = quadOut(s.progress / s.hMax);
    s.hMod = s.hMax * delta;
    s.dot.y = s.height - s.hMax * delta;
    s.progress++;
  }
};
var reset = function(s) {
  if (s.progress > 0) {
    var delta = quadOut(s.progress / s.hMax);
    s.hMod = s.hMax * delta;
    s.dot.y = s.height - s.hMax * delta;
    s.progress -= 2;
  } else {
    s.hMod = 0;
    s.dot.y = s.height;
    s.progress = 0;
  }
};

var currentSection = 0;
process.on('mousemove', function(event) {
  var section = Math.floor((event.clientX - process.offset().left) / SECTION_WIDTH);
  currentSection = section;
  process.find('.active').removeClass('active');
  process.find('li').eq(section).addClass('active');
});

create(0);
create(234);
create(468);
create(702);
create(936);



var loop = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  sections.forEach(function(s, index) {
    if (currentSection === index) {
      bend(s);
    } else {
      reset(s);
    }
    draw(s);
  });

  window.requestAnimationFrame(loop);
};
loop();	
	
	
});	
})(jQuery);	
