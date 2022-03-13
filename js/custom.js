$(function(){
  
  $(".info-list li").click(function(){
    
    $(this).addClass("selected").siblings().removeClass("selected");
    $('.'+ $(this).data('class')).addClass("show").siblings().removeClass("show");
  });
});