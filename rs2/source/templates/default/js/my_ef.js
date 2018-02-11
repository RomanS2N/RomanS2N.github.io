
/* =========================================================
Accordion
========================================================= */
jQuery(document).ready(function() {
        var acc_wrapper=jQuery('.acc-wrapper');
        if (acc_wrapper.length >0) 
        {
            
            jQuery('.acc-wrapper .accordion-container').hide();
            jQuery.each(acc_wrapper, function(index, item){
                jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
                
            });
            
            jQuery('.accordion-title').on('click', function(e) {
                kopa_accordion_click(jQuery(this));
                e.preventDefault();
            });
            
            var titles = jQuery('.accordion-title');
            
            jQuery.each(titles,function(){
                kopa_accordion_click(jQuery(this));
            });
        }
    
	 
});

function kopa_accordion_click (obj) {
    if( obj.next().is(':hidden') ) {
        obj.parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
        obj.toggleClass('active').next().slideDown(300);
                            
    }
jQuery('.accordion-title span').html('+');
    if (obj.hasClass('active')) {
        obj.find('span').first().html('-');              
    } 
}

/*===========================================================
Tabs
=============================================================*/
	$(function() {
		var getCookiesFilter = function (cookieNameRegEx) { // фильтрует куки по регулярному выражению
				var allCookies = document.cookie,
					arrayCookies = allCookies.split(/\s*;\s*/),
					cookies = {},
					i,
					max,
					keyValue;
				if (allCookies) 
				{
					for (i = 0, max = arrayCookies.length; i < max; i += 1) 
					{
						keyValue = arrayCookies[i].split("=");
						if (keyValue[0].match(cookieNameRegEx)) 
						{
							cookies[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
						}
					}
				}
				return cookies;
			},
			objCookies = getCookiesFilter(/tabs_widget_[0-9a-z]+/);

		$.each(objCookies, function(key, value)
		{
			$("." + key + " .elem").eq(value).addClass("tabs-current").siblings().removeClass("tabs-current")
				.parents("div.tabs").find(".tabs-box").hide().eq(value).show();
		});
		
		$(".tabs-nav").on("click", ".elem:not(.tabs-current)", function() 
		{
			var cookieName =  $(this).parents(".tabs_widget").attr("class").match(/tabs_widget_[0-9a-z]+/).join(),
				index = $(this).index();
			
			$(this).addClass("tabs-current").siblings().removeClass("tabs-current")
					.parents("div.tabs").find(".tabs-box").hide().eq(index).fadeIn(300);
			$.cookie(cookieName, index, {expires: 1, path: "/"});
		});
	});




function myFunction() {
    $("#myDropdown").toggleClass("show");
}



function myFunction2() {
    $("#myDropdown2").toggleClass("show");
}


function vkopenn() {
    $(".vkbox").toggleClass("show");
}


jQuery(window).load(function(){
  
  if( jQuery(".kp-featured-news-slider").length > 0){
      jQuery('.kp-featured-news-slider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        slideshow: false,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

  
$('.kp-featured-news-slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
    
});

 





/*===========================================================
Comments
=============================================================*/

eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 8="РћС‚РІРµС‚РёС‚СЊ";6 j="РќРµ РѕС‚РІРµС‡Р°С‚СЊ";6 5=-1;6 2="1";q t(a,b){d(a<0)w;d(5!=a){d(5!=-1){2=$("4#3-2-3-"+5).7();$("4#3-2-3-"+5).f();$("a#3-2-h-"+5).7(8)}k{2=$("4.3-2").7();$("4.3-2").f()}$("a#3-2-h-"+a).7(j);$("4.9 > m.n").r("o","u: x;");$("4#3-2-3-"+a).p(2);$(\'e[g="i"]\').l();6 c="<e 9=\\"s\\" v=\\""+a+"\\" g=\\"i\\">";$("4#3-2-3-"+a+\' > 2\').y(c);5=a}k{$("4#3-2-3-"+a).f();$("a#3-2-h-"+a).7(8);$("4.9 > m.n").z("o");$("4.3-2").p(2);$(\'e[g="i"]\').l();5=-1}}',36,36,'||form|comment|div|current_comment_id|var|html|txt_answer|type||||if|input|empty|name|button|comments_parent_id|txt_no_answer|else|remove|h3|comments|style|wrapInner|function|attr|hidden|show_comment_form|display|value|return|none|append|removeAttr'.split('|'),0,{}))
	
