$(document).ready(function(){
    $('.carousel_inner').slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,        
      });
    $('.slick-prev').css({'marginLeft':-120,'position':'absolute',});
    $('.slick-next').css({'right':-120,'position':'absolute',});
   

    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
      $(this)
        .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
        .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
    });

    $('.catalog_link').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog_text').eq(i).toggleClass('catalog_text_active');
        $('.catalog_list').eq(i).toggleClass('catalog_list_active');
      })
    })

    $('.catalog_link_back').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog_text').eq(i).toggleClass('catalog_text_active');
        $('.catalog_list').eq(i).toggleClass('catalog_list_active');
      })
    })

    //modal 
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');

  
   })
   $('.modal_close').on('click', function(){
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
   })


    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal_descr').text($('.catalog_subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    })


    $('.feed-form').submit(function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function(){
        $(this).find("input").val("");
        $('form').trigger('reset');
        console.log('ыыы');
      })
      return false;
    })

 });