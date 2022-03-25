function fixedFooter() {
	var footer = $('.footer');
	if (footer.length) {
		var height = $(window).height() - footer.position().top - footer.innerHeight();
		if (height > 0) {
			footer.css({
				'margin-top': height + 'px'
			});
		}
	}
}

function tab(){
    let tabNav = document.querySelectorAll('.tab-nav');
    let tabContent = document.querySelectorAll('.tab-content');
    let tabName;

   
    tabNav.forEach((element, i) => {
        element.setAttribute('data-tab', i);
        element.addEventListener('click', tabSelectionNav);
    });

    tabContent.forEach((item, i) => {
        item.classList.add(i);
        item.classList.contains('0') ? item.style.display = 'block'
        : item.style.display = 'none';
    });

    function tabSelectionNav (){
        tabName = this.getAttribute('data-tab');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName){
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.style.display = 'block'
             : item.style.display = 'none';
        });
    }

}

function chooseQuan() {
	$('.card__minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.card__plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
}

$(document).ready(function() {


    $(".close").on('click', function(){
        $('.head__bot-modal, .header__bot-catalog').fadeOut();
        $('.curtain').fadeOut();
    });
    

    $(".m-menu").on('click', function(){
        $('.head__bot-modal').slideToggle();
        $(this).toggleClass('active');
        $('.header__bot-catalog').hide();
        $(".m__catalog").removeClass('active');
        $('.curtain').fadeToggle();
        if($(this).hasClass('active')){
            $('.curtain').fadeIn();
          }else{
            $('.curtain').fadeOut();
          }
    });

    $(".m__catalog").on('click', function(){
        $('.header__bot-catalog').slideToggle();
        $(this).toggleClass('active');
        $('.head__bot-modal').hide();
        $(".m-menu").removeClass('active');
        $('.curtain').fadeToggle();
        if($(this).hasClass('active')){
            $('.curtain').fadeIn();
          }else{
            $('.curtain').fadeOut();
          }
    });

    $('.click__catmod').on('click', function(){
        $('.modal__header__catalog').fadeToggle();
        $(this).toggleClass('active');
    });

    
    function setBodyPadding() {
        var $body = $('body');
        var $header = $('header.header');
        var headerHeight = $header.height();
        $body.removeAttr('style');
        $body.css('padding-top', headerHeight);
      }

      $('.svg__main').on('click', function(){
        $('.bored__blockd span').hide();
        $('.svg__main').fadeIn();
        $('.svg__closed').hide();
        $(this).hide();
        $(this).next().fadeIn();
        $(this).parent().find('span').css('display', 'block')
      });

      $('.svg__closed').on('click', function(){
        $(this).hide();
        $(this).prev().fadeIn();
        $(this).parent().find('span').css('display', 'none')
      });
    

    setBodyPadding();


    if ($(window).width() < 1026) {
        var $li = $('.menu-flex ul:nth-child(2)').find('li:nth-child(n+4)');
        $li.wrapAll('<li class="has-sub menu-additional"><ul></ul></li>')
     }

     $('.menu-additional').append('<span>Ещё <svg width="12" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.5a.499.499 0 0 1-.353-.146l-5-5a.5.5 0 1 1 .707-.707L6 5.293 10.646.647a.5.5 0 1 1 .707.707l-5 5A.498.498 0 0 1 6 6.5Z" fill="#4B4B4B"/></svg></span>')

     $('.has-sub.menu-additional span').on('click', function(){
         $('.has-sub.menu-additional ul').fadeToggle();
     })

     
	fixedFooter()
	
	$('.breadcrumbs li:last-child>a').click(function(e){
		e.preventDefault();
	})

// Ion range slider

	var $range = $("#example_2");
    var $inputFrom = $("#example_2_input_from");
    var $inputTo = $("#example_2_input_to");
    var instance;
    var min = 50;
    var max = 50500;
    var from = 0;
    var to = 0;
    
    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 50,
        to: 50500,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
	});
	
  // 
  
  $('.prices__mobile__title').on('click', function () {
      $('.prices-slider').slideToggle()
  })

	$('.products__change').on('click', function(){
		$('.products__change').removeClass('active');
		$(this).addClass('active');
    });


      $('.prd-sid__img').on('click', function(){
        $('.prd-sid__img.active').removeClass('active');
        $(this).addClass('active');
      });

      $(".prd-sid__img").on("click", function() {
        const index = $(this).find('img').attr("src");
        $(".product_img__main img").attr('src', index);
      });
    
      tab()

      $('.tab-nav').on('click', function(){
        $('.tab-nav.active').removeClass('active');
        $(this).addClass('active');
      });


      chooseQuan();
      $('.slide-poducts, .rec__slider').flickity({
        // options
        cellAlign: 'left',
        freeScroll: true,
        wrapAround: true
      });
      
});