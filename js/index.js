$(function(){
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});



function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}

function buyTheCabinet(type, auth)
{
  if (auth < 1)
  {
    if (!confirm('Для покупки кабинета необходимо авторизироваться. Перейти к авторизации?'))
    {
     return false;
    }
    goToAuth();
    return false;
  } 
  
  var sum = 0;
  if (type == 1)
  {
    sum = 49;
  }
  else  sum = 99;
  window.location.href="/ru/finance?action=refill_page&sum="+sum;
  return false;
}

