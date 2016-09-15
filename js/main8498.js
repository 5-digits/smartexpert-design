
jQuery(function($) {
  
    $(document.body).ready(function(){
      
      //Запрет на ввод данных в 2 поля одновременно
      $("input[name=key_word]").on('keydown', function(){
        setTimeout(function(){
          var key_word = $("input[name=key_word]").val();
          
        if (key_word != '')
        {
          $("textarea[name=words]").attr('disabled',true);
          $("textarea[name=words]").attr('title','Можно использовать только один вариант добавления слов');
        }
        else
        {
           $("textarea[name=words]").attr('disabled',false);
           $("textarea[name=words]").attr('title','');
        }
        }, 100);
      });
      
      $("textarea[name=words]").on('keydown', function(){
        setTimeout(function(){
          var key_word = $("textarea[name=words]").val();
          
        if (key_word != '')
        {
          $("input[name=key_word]").attr('disabled',true);
          $("input[name=key_word]").attr('title','Можно использовать только один вариант добавления слов');
        }
        else
        {
           $("input[name=key_word]").attr('disabled',false);
           $("input[name=key_word]").attr('title','');
        }
        }, 100);
      });
      //Запрет на ввод данных в 2 поля одновременно--Конец

      $('.paulund_modal').paulund_modal_box({
        height: '300',
        width: '280',
        left: "37%",
        content:
                  '<h2 class="logn">Авторизация</h2>'+
                  '<form class="login2">'+
                    '<input tabindex="1" name="email" class="avto" type="text" placeholder="Email"/>'+
                    '<div class="error" id="email_error"></div>'+
                    '<input tabindex="2" name="pass" class="avto" type="password" placeholder="Пароль"/>'+
                    '<div class="error" id="pass_error"></div>'+
                    '<div class="actionbutton3">'+
                      '<input  tabindex="3" onClick="auth();" type="button" value="Авторизация"/>'+
                    '</div>'+
                  '</form>'+
                  '<div class="loglinks">'+
                    '<a  onClick="goToRetry();" href="#">Забыли пароль?</a>'+
                  '</div>'+
                  '<div class="loglinks">'+
                    '<a  onClick="goToReg();" href="#">Нет аккаунта? Зарегестрируйтесь.</a>'+
                  '</div>'
      });
      $('.paulund_modal_2').paulund_modal_box({
        height: '400',
        width: '281',
        content:
                '<div id="reg_block">'+
                '  <div id="reg_loader"></div>'+
                '  <h2 class="logn">Регистрация</h2>'+
                '  <form class="login2">'+
                '    <input class="avto" name="fio" type="text" placeholder="Имя и Фамилия"/>'+
                '    <div style="margin: -15px 0 7px 11px;" class="error" id="fio_error"></div>'+
                '    <input class="avto" type="text" name="tel" placeholder="Номер мобильного"/>'+
                '    <div id="tel_format" style="font-size: 12px;margin: -15px 0 22px 11px;color: grey;">В формате: <b>+370937894561</b></div>'+
                '    <div style="margin: -15px 0 7px 11px;" class="error" id="tel_error"></div>'+
                '    <input class="avto" type="text" name="email" placeholder="Email"/>'+
                '    <div style="margin: -15px 0 7px 11px;" class="error" id="email_error"></div>'+
                '    <input class="avto" type="password" name="pass" placeholder="Пароль"/>'+
                '    <div class="error" style="margin: -15px 0 7px 11px;" id="pass_error"></div>'+
                '    <input class="avto" type="password" name="pass2" placeholder="Повторите пароль">'+
                '    <div class="actionbutton3"><input onClick="reg();" type="button" value="Регистрация" style="margin-top:0px !important"></div>'+
                '   </form>'+
                '   <div class="loglinks">'+
                '     <a onClick="goToAuth();" href="#">Зарегистрированы? Авторизируйтесь!</a>'+
                '   </div>'+
                '   <div style="font-size: 10px; text-align: center;">Нажав кнопку "Регистрация" Вы автоматически соглашаетесь с условиями пользования.</div>'+
                '</div>'
               
      });
      
      $('.paulund_modal_3').paulund_modal_box({
        height: '300',
        content:'<div>'+
                '<div class="innleft">'+
                  '<h3>Восстановление пароля!</h3>'+
                  '<div class="soc">'+
                   'Для восстановления пароля укажите Ваш email и мы вышлем код подтверждения'+
                  '</div>'+
                '</div>'+
                '<div class="innright">'+
                  '<form class="login2">'+
                    '<input class="avto" name="email" type="text" placeholder="Email">'+
                    '<div style="padding-left: 13px;" class="error" id="email_error"></div>'+
                    '<input type="password" value="" name="pass" placeholder="Новый пароль"/>'+
                    '<div style="padding-left: 13px;" class="error" id="pass_error"></div>'+
                    '<input type="password" value="" name="pass2" placeholder="Повторите пароль"/>'+
                    '<div class="actionbutton3">'+
                      '<input onClick="retryPass();" type="button" value="Отправить">'+
                    '</div>'+
                  '</form>'+
                   '<div class="loglinks">'+
                    '<a href="#" onClick="goToAuth();">Перейти к авторизации!</a>'+
                  '</div>'+
                '</div>'+
                '</div>'
      });

        page = 1;
        $("#country").select2({
          templateResult: formatState,
          width: '190px'
        });

       
//       $("#check_all").click(function(){
//         
//          $('input:checkbox').not(this).prop('checked', this.checked);
//       });
    
      
       loadWordList();
       
      //Если нет списка вывести споилер
      setTimeout(function() {
        
        if ($("#words_list tr").length < 1)
        {
          spoiler();
        }
      }, 700);
      
    });

/// определение jQuery - конец
});


function formatState (state) {
  if (!state.id) { return state.text; }
  console.log(state);
  var $state = $(
    '<span><img src="vendor/images/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
  );
  return $state;
};

function retryPass(){
  $("#email_error").empty();
  var email = $("input[name=email]").val();
  if (email == '' || !email.match(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i))
  {
    $("#email_error").text('Ошибка! Емейл не введен или указан неверно');
    return false;
  }
  
  var pass = $("input[name=pass]").val();
  var pass2 = $("input[name=pass2]").val();
  
  pass = $.trim(pass);
  if (pass == '' || pass.length < 5)
  {
    $("#pass_error").text('Пароль не введен или меньше 5 символов');
    return false;
  }

  if (pass != pass2)
  {
    $("#pass_error").text('Указанные пароли не совпадают');
    return false;
  }  
 
  
   $.ajax({
      type: "POST",
      url: "/ru/retry_pass",
      data: 'email='+email+'&pass='+pass+'&pass2='+pass2,
      dataType: 'json',
      success: function(answer){
        if (answer.status == 'error')
        {
          $("#email_error").html(answer.error_text);
          return false;
        }  
        if (answer.status == 'ok')
        {
          $(".paulund_inner_modal_box").html(
                  '<div style="  text-align: center; margin-top: 69px; padding: 15px;">'+
                  '<h4>Письмо с дальнейшими инстукциями было отправлено Вам на почту</h4>'+
                  '</div>'
                  );
          return false;
        }  
      }
    });
  
}
//to do rewrite 
function spoiler(){
  
  if(document.getElementById('spoiler').style.display=='none') {
    document.getElementById('spoiler').style.display=''
  }
  else
  {
    document.getElementById('spoiler').style.display='none'
  };
  
  if(document.getElementById('butn').style.display=='') {
    document.getElementById('butn').style.display='none'
  }
  else{
    document.getElementById('butn').style.display=''
  }
}
function emptyLoader()
{
  $(".loader_box").empty();
  $(".loader_box").css('display', 'none');
}
function getLoader(text, key)
{
  if (text == '')
  {
    text = 'Загрузка';
  }
  if (key == '')key = ".loader_box";
  
  $(key).html(
          '<div class="text-center" style="margin-top: 20%;">'+
          '<img src="http://top-words.net/images/loader.GIF" alt="loader"/>'+
          '<div style="font-size: 20px;color: rgb(142, 142, 142);">'+text+'</div>'+
          '</div>'
                );
  $(key).css('display', 'block');
        
}

function getUrlVars()
{
  var vars = [], part = [];

  var href = window.location.href;
  var answer_position = href.indexOf('?');
  var hash_position   = href.indexOf('#');

  if(answer_position < 0 && hash_position > 0) {
    href = href.replace('#', '?');
    answer_position = hash_position;
  }
  if(answer_position > 0 && hash_position > 0) {
    href = href.replace('#', '&');
  }
  var hashes = href.slice(answer_position + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    var part = hashes[i].split('=');
    vars.push(part[0]);
    vars[part[0]] = part[1];   
  }
    
  return vars;
}

function startAddWordsIndex(auth)
{
  var domain = $("input[name=domain]").val();
  if ($.trim(domain) == '')
  {
    alert('Необходимо указать URL сайта для продвижения');
    return false;
  }
  
  var key_word = $.trim($("input[name=key_word]").val());
  
  var words_list = $.trim($("textarea[name=words]").val());
   
  if (key_word != '')
  {
    if (auth > 0)
    {
      analitics_set(2);
    } 
    analitics_set(1);
    parseWordsIndex();
    return false;
  }
  
  if (words_list != '')
  {
    if (auth > 0)
    {
      analitics_set(2);
    } 
    analitics_set(1);
    addWordsToPlanIndex(auth);
    return false;
  }
  
   alert('Укажите ключевой запрос для автоматического подбора слов');
   return false;
}

function startAddWords(auth)
{
  
  var domain = $("input[name=domain]").val();
  if ($.trim(domain) == '')
  {
    alert('Необходимо указать URL сайта для продвижения');
    return false;
  } 
  
  var key_word = $.trim($("input[name=key_word]").val());
  
  var words_list = $.trim($("textarea[name=words]").val());
   
  if (auth > 0)
  {
    analitics_set(2);
  } 
  analitics_set(1); 
  if (key_word != '')
  {
    
    parseWords();
    spoiler();
    return false;
  }
  
  if (words_list != '')
  {
    
    addWordsToPlan(auth);
    spoiler();
    return false;
  }
  
   alert('Укажите ключевой запрос для автоматического подбора слов');
   return false;
  
}
function addWordsToPlan(auth)
{
  var domain = $("input[name=domain]").val();
  if ($.trim(domain) == '')
  {
    alert('Необходимо указать URL сайта для продвижения');
    return false;
  }  
  
  if (domain.substr(0, 7) == 'http://')
  {
    domain = domain.substr(7);
  }
  if (domain.substr(0, 8) == 'https://')
  {
    domain = domain.substr(8);
  }
   if (domain.substr(-1) == '/')
  {
     domain = domain.substr(0, domain.length - 1);
  }
 
  var words_list = $("textarea[name=words]").val();

  if ($.trim(words_list) == '')
  {
    alert('Добавьте запросы для генерации статистики и просчета бюджета');
    return false;
  }
  
  var count_words = $("#words_list tr").length;


  if (auth < 1 && count_words >= 5)
  {

    if (!confirm('Для продвижения большего количества запросов необходимо авторизироваться. Перейти к авторизации?'))
    {
      return false;
    }  
    goToAuth();
    return false;
  }  
  var country = $("select[name=country]").val();
  getLoader('Построение списков');
  
  $.ajax({
      type: "POST",
      url: "/ru/?action=addWordsToPlan",
      data: 'words_list='+words_list+'&country='+country+'&domain='+domain,
      success: function(){
        $("textarea[name=words]").val('');
        loadWordList();

      }
    });
  
}

function checkAllWords()
{
    var checkboxes = $("#check_all").closest('form').find(':checkbox');
    if($("#check_all").is(':checked')) {
        $('input:checkbox').not("#check_all").prop('checked', true);
    } else {
      $('input:checkbox').not("#check_all").prop('checked', false);
        checkboxes.prop('checked', false);
      }
  
}

function addWordsToPlanIndex(auth)
{
  var domain = $("input[name=domain]").val();
  if ($.trim(domain) == '')
  {
    alert('Необходимо указать URL сайта для продвижения');
    return false;
  }  
  
   if (domain.substr(0, 7) == 'http://')
  {
    domain = domain.substr(7);
  }
  if (domain.substr(0, 8) == 'https://')
  {
    domain = domain.substr(8);
  }
   if (domain.substr(-1) == '/')
  {
     domain = domain.substr(0, domain.length - 1);
  }
  var words_list = $("textarea[name=words]").val();

  if ($.trim(words_list) == '')
  {
    alert('Добавьте запросы для генерации статистики и просчета бюджета');
    return false;
  }
  
  var count_words = $("#words_list tr").length;

  if (auth < 1 && count_words >= 5)
  {

    if (!confirm('Для продвижения большего количества запросов необходимо авторизироваться. Перейти к авторизации?'))
    {
      return false;
    }  
    goToAuth();
    return false;
  }  
  var country = $("select[name=country]").val();
  getLoader('Построение списков');
  
  $.ajax({
      type: "POST",
      url: "/ru/?action=addWordsToPlan",
      data: 'words_list='+words_list+'&country='+country+'&domain='+domain,
      success: function(){
        window.location.href="/ru/?action=main";
        return false;

      }
    });
  
}

function exportPdf()
{
  var domain = $("input[name=domain]").val();
  if ($.trim(domain) == '')
  {
    return false;
  }
  var country = $("select[name=country]").val();
  if (country == '')
  {
    return false;
  }
  
  $.get('/ru/?action=checkUserAuth', function(answer){
     if (answer < 1)
     {
       if (!confirm('Для формирования отчета необходимо авторизироваться. Перейти к авторизации?'))
       {
         return false;
       }  
       goToAuth();
     }
      window.open("/ru/?action=wordListToPDF&country="+country+"&domain="+domain+"&page="+page,'_blank');
       return false;
   });
   return false;
  }

function startCalculateStat(sort)
{

  var domain = $("input[name=domain]").val();
  if ($.trim(domain) == '')
  {
    return false;
  }
  var country = $("select[name=country]").val();
  if (country == '')
  {
    return false;
  }
  var words_list = new Array();
  
  $("#words_list tr .stat_block").find('i').each(function(){
    var id = $(this).parent().parent().attr('id');
    words_list.push(id.substr(4));
  });
  
    var key_words_parse = $("#words_short_result").text();
  $("#words_list tr .examp").each(function(){
    var str  = $.trim($(this).text());
    if (str == key_words_parse)
    {
      $(this).css('background-color', 'yellow');
    }
  });

  

  if (words_list.length < 1)
  {
    setTimeout(function(){
      calculateTotalPrice();
    }, 200);
    return false;
  }

  words_list = words_list.join(',');

  $.ajax({
      type: "POST",
      url: "/ru/?action=parseStat",
      data: 'words='+words_list+'&country='+country+'&domain='+domain,    
      success: function(answer){
         if (answer == 'parse_error')
         {
           
           alert('Извините, возникла ошибка! Мы сейчас делаем все, чтобы этого больше не повторилось.');
           return false;
         }  
         loadWordList();
      }
    });
  
}

function loadWordList(sort)
{      
  var domain = $.trim($("input[name=domain]").val());
  if (domain == '')
  {
    return false;
  }
  if (domain.substr(0, 7) == 'http://')
  {
    domain = domain.substr(7);
  }
  if (domain.substr(0, 8) == 'https://')
  {
    domain = domain.substr(8);
  }
  
   if (domain.substr(-1) == '/')
  {
     domain = domain.substr(0, domain.length - 1);
  }

  var country = $("select[name=country]").val();

  $.ajax({
      type: "POST",
      url: "/ru/?action=getWordsList",
      data: '&country='+country+'&domain='+domain+"&page="+page+"&sort="+sort,
      dataType: 'json',
      success: function(answer){
         $("#words_list").html(answer['content']);
         $("#search_all_str").val(answer['search_info']['key_word']);
         $(".short-results").empty();
         $(".short-results").html(answer['short_result']);
         startCalculateStat(sort);
        
      }
    });
  
}

function loadMore()
{
  page += 1;
  loadWordList();
}  

function parseWordsIndex()
{
  var domain = $("input[name=domain]").val();
  if ($.trim(domain) == '')
  {
    alert('Необходимо указать URL сайта для продвижения');
    return false;
  }
  
   if (domain.substr(0, 7) == 'http://')
  {
    domain = domain.substr(7);
  }
  if (domain.substr(0, 8) == 'https://')
  {
    domain = domain.substr(8);
  }
  if (domain.substr(-1) == '/')
  {
     domain = domain.substr(0, domain.length - 1);
  }
  var country = $("select[name=country]").val();
  var key_word = $("input[name=key_word]").val();
  if ($.trim(key_word) == '')
  {
    alert('Укажите ключевой запрос для автоматического подбора слов');
    return false;
  }
  
  getLoader('Подбираем  слова, пожалуйста подождите...');
  $.ajax({
      type: "POST",
      url: "/ru/?action=parseWords",
      data: 'key_word='+key_word+'&country='+country+'&domain='+domain,
      success: function(answer){
       window.location.href="/ru/?action=main";
       return false;
      }
    });
  
}

function parseWords()
{
  var domain = $.trim($("input[name=domain]").val());
  if (domain == '')
  {
    alert('Необходимо указать URL сайта для продвижения');
    return false;
  }
  var country = $("select[name=country]").val();
  var key_word = $("input[name=key_word]").val();
  if ($.trim(key_word) == '')
  {
    alert('Укажите ключевой запрос для автоматического подбора слов');
    return false;
  }
  
  if (domain.substr(0, 7) == 'http://')
  {
    domain = domain.substr(7);
  }

  if (domain.substr(0, 8) == 'https://')
  {
    domain = domain.substr(8);
  }

  if (domain.substr(-1) == '/')
  {
     domain = domain.substr(0, domain.length - 1);
  }
 
   
  getLoader('Подбираем  слова, пожалуйста подождите...');
  $.ajax({
      type: "POST",
      url: "/ru/?action=parseWords",
      data: 'key_word='+key_word+'&country='+country+'&domain='+domain,
      success: function(answer){
        loadWordList();
        $("input[name=key_word]").val('');
        emptyLoader();
      }
    });
  
}

function removeMultiWords()
{
  var count_check = $("input[name=cc]:checked").length;
  if (count_check < 1)
  {
    alert('Для удаления запросов необходимо их отметить галочками слева!');
    return false;
  }
  if(!confirm('Вы точно хотите удалить выбранные запросы?'))
  {
    return false;
  }
  
  var words = new Array();
  $("input[name=cc]:checked").each(function(index, value){
    
    words[index] = $(value).attr('id').substr(2);
    $("#word"+words[index]).html('<td colspan="10"><p style="color: red;">Запрос удален из плана</p></td>');
  });
  
   var words_id = words.join(',');

   $.get('/ru/?action=multiRemoveWordForPlan&words_id='+words_id, function(){

    setTimeout(function(){
      
      $.each(words, function(){
          $("#word"+this).remove();
      });

   }, 1500);
  });
}

function removeWord(word)
{
  if (!confirm('Вы уверенны что хотите удлать это запрос из списка?'))
  {
    return false;
  }
  
  $.get('/ru?action=removeWordForPlan&word_id='+word, function(){

     $("#word"+word).html(
          '<td colspan="8"><p class="text-warning">Удалено из списка</p></td>'
          );
    $("#word"+word).attr('class','danger');
    calculateTotalPrice();
    setTimeout(function(){
     $("#word"+word).remove();
   }, 1500);
  })
}

function sorting(key)
{
  var stat_block = $(".stat_block").text();
  if (stat_block < 1)return false;
  switch(key)
  {
    case 'stat':
      var arrow_class = $("#stat_arrow i").attr("class");
      var arrow = '';
      if (arrow_class == "fa fa-arrow-down")
      {
        arrow = "up";
      }
      else
      {
        arrow = "down";
      }

      $("#star_arrow").empty();
      $("#position_arrow").empty();
      $("#price_arrow").empty();
      loadWordList('stat'+arrow);
    break;  
    
    case 'position':
      var arrow_class = $("#position_arrow i").attr("class");
      var arrow = '';
      if (arrow_class == "fa fa-arrow-down")
      {
        arrow = "up";
      }
      else
      {
        arrow = "down";
      }
      
      $("#star_arrow").empty();
      $("#stat_arrow").empty();
      $("#price_arrow").empty();
      loadWordList('position'+arrow);
    break; 
  
    case 'price':
      var arrow_class = $("#price_arrow i").attr("class");
      var arrow = '';
      if (arrow_class == "fa fa-arrow-down")
      {
        arrow = "up";
      }
      else
      {
        arrow = "down";
      }
      
      $("#star_arrow").empty();
      $("#stat_arrow").empty();
      $("#position_arrow").empty();
      loadWordList('price'+arrow);
    break;
    
    case 'star':
      var arrow_class = $("#star_arrow i").attr("class");
      var arrow = '';
      if (arrow_class == "fa fa-arrow-down")
      {
        arrow = "up";
      }
      else
      {
        arrow = "down";
      }
      
      $("#stat_arrow").empty();
      $("#position_arrow").empty();
      $("#price_arrow").empty();
      loadWordList('star'+arrow);
    break;
    
    case 'url':
      $("#stat_arrow").empty();
      $("#position_arrow").empty();
      $("#price_arrow").empty();
      $("#star_arrow").empty();
      loadWordList('url');
    break;
  }
}

function calculateTotalPrice()
{
 var not_et = $("#words_list .stat_block").find("button").html();

 if (not_et)return false;
  var total = 0;
 
  $("#words_list").find(".price_block").each(function(){
     total = total +  parseFloat($(this).text());
 });
$(".budget2").html('<span>ОБЩИЙ БЮДЖЕТ:</span> '+number_format(total, 2, '.', '')+'$');

}

function startPromotion()
{

  var domain = $("input[name=domain]").val();
  if ($.trim(domain) == '')
  {
    alert('Необходимо указать URL сайта для продвижения');
    return false;
  }  
  
  $.get('/ru/?action=checkUserAuth', function(answer){
      if (answer < 1)
      {
        if (!confirm('Для запуска продвижения сайта необходимо авторизироваться. Перейти к авторизации?'))
        {
          return false;
        }
        goToAuth();
        return false;
      }
    });
   
   
  var exist_stat = $(".stat_block i");
  if (exist_stat.length > 0)
  {
    alert('Идет процесс сбора статистики. Пожалуйста подождите.');
    return false;
  }
  
  setTimeout(function(){

    var words_list = '';
    var result = '';
    $("#words_list").find("tr").each(function(){
      result = this;
      var word_id = parseInt(this.id.substr(4));
      if (word_id > 0)
      {
         words_list += word_id+",";
      }
    });

    if (!words_list)
    {
      alert('Для продвижения сайта необохимо добавить запросы в отчет');
      return false;
    }  


    $.ajax({
      type: "POST",
      url: "/ru/my?action=set_seo_project",
      data: 'domain='+domain+'&words_list='+words_list,
      success: function(project_id){
        analitics_set(5);
        if (project_id > 0)
        {
          window.location.href="/ru/my?action=project_page&project_id="+project_id;
          return false;
        } 
      }
    });
  }, 600);
  
  
}


function saveProject()
{
  var domain = $("input[name=domain]").val();
  if ($.trim(domain) == '')
  {
    alert('Необходимо указать URL сайта для продвижения');
    return false;
  }  
  
  $.get('/ru/?action=checkUserAuth', function(answer){
    if (answer < 1)
    {
      if (!confirm('Для запуска продвижения сайта необходимо авторизироваться. Перейти к авторизации?'))
      {
        return false;
      }
      goToAuth();
      return false;
    }
  });
   
   
   var exist_stat = $(".stat_block i");
  if (exist_stat.length > 0)
  {
    alert('Идет процесс сбора статистики. Пожалуйста подождите.');
    return false;
  }
  setTimeout(function(){

    var words_list = '';
    var result = '';
    $("#words_list").find("tr").each(function(){
      result = this;
      var word_id = parseInt(this.id.substr(4));
      if (word_id > 0)
      {
         words_list += word_id+",";
      }
    });

    if (!words_list)
    {
      alert('Для продвижения сайта необохимо добавить запросы в отчет');
      return false;
    }  


    $.ajax({
      type: "POST",
      url: "/ru/my?action=save_seo_project",
      data: 'domain='+domain+'&words_list='+words_list,
      success: function(project_id){
        analitics_set(4);
        if (project_id > 0)
        {
          window.location.href="/ru/my?action=project_page&project_id="+project_id;
          return false;
        } 
      }
    });
  }, 600);
  
  
}
function auth()
{
  $("#email_error").empty();
  $("#pass_error").empty();
  var email = $.trim($("input[name=email]").val());
  var pass = $.trim($("input[name=pass]").val());

  if (email == '' || !email.match(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i))
  {
    $("#email_error").text('Емейл не введен или указан неверно');
    return false;
  }
  
  if (pass == '')
  {
    $("#pass_error").text('Необходимо указать Ваш пароль');
    return false;
  }
  var action = getUrlVars()['action'];
  $.ajax({
      type: "POST",
      url: "/ru/auth",
      data: 'email='+email+'&pass='+pass+'&returnp='+action,
      dataType: 'json',
      success: function(answer){
        
        if (answer.status == 'error')
        {
          $("#email_error").html(answer.error_text);
          return false;
        }  
        
        if (answer.status == 'ok')
        {
         location.reload();
          return false;
        }  
      }
    });
}

function reg()
{
       
  $("#fio_error").empty();
  $("#email_error").empty();
  $("#pass_error").empty();
  $("#tel_error").empty();
  
  var fio = $.trim($("input[name=fio]").val());
  if (fio == '' || fio.length < 5)
  {
    $("#fio_error").text('Ошибка! Пожалуйста, укажите Ваши имя и фамилию.');
    return false;
  }
  
  var tel = $.trim($("input[name=tel]").val());
  tel = tel.replace(/(\-|\+|\(|\))/g,"");
  if (!tel.match(/^[0-9]{12}$/))
  {
    $('#tel_format').hide();
    $('#tel_error').text('Телефон не указан или введен в неправильном формате');
    
    return false;
  }
  var email = $.trim($("input[name=email]").val());
  var pass = $.trim($("input[name=pass]").val());

  if (email == '' || !email.match(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i))
  {
    $("#email_error").text('Емейл не введен или указан неверно');
    return false;
  }
 
  if (pass == '' || pass.length < 5)
  {
    $("#pass_error").text('Пароль не введен или меньше 5 символов');
    return false;
  }
  
  var pass2 = $.trim($("input[name=pass2]").val());
  if (pass != pass2)
  {
    $("#pass_error").text('Указанные пароли не совпадают');
    return false;
  }  
 
 $("#reg_loader").html(
         '<div style="padding-top: 61px;text-align: center;width: 278px;height: 340px;background-color: #EFF5EB;position: fixed;margin-top: 22px;z-index: 1;">'+
         '  <img src="/ru/images/loader.GIF" alt="loader"/>'+
         '  <div>Обработка данных, пожалуйста подождите</div>'+
         '</div>'
         );
  $.ajax({
      type: "POST",
      url: "/ru/reg",
      data: 'tel='+tel+'&email='+email+'&pass='+pass+"&pass2="+pass2+'&fio='+fio,
      dataType: 'json',
      success: function(answer){
        $("#reg_loader").empty();
        if (answer.status == 'error')
        {
          $('#tel_format').hide();
          $("#"+answer.type+"_error").text(answer.error_text);
          return false;
        }  
        
        if (answer.status == 'ok')
        {
            analitics_set(3);
            /*$("#reg_block").html(
                  '<div id="reg_loader"></div>'+
                  '<h4 style="text-align: center; color: #91c5f2;">Поздравляем , Вы успешно прошли регистрацию.</h4>'+
                  '<p style="text-align: center; font-size: 14px;">Для активации аккаунта следуйте инструкциям, которые были отправлены Вам на почту ('+email+').</p>'+
                  '<p style="margin-left: 31px;margin-top: 80px; font-size: 14px;">Если в течении нескольких минут письмо не пришло, повторите отправку!</p>'+
                  '<div style="text-align:center"><button style="font-size: 12px;" onClick="retrySendCode(\''+email+'\');">Повторить отправку</button></div>'
                  );*/
          location.reload();
          return false;
        }  
      }
    });
}

function retrySendCode(email)
{
  $("#reg_loader").html(
         '<div style="padding-top: 61px;text-align: center;width: 278px;height: 340px;background-color: #EFF5EB;position: fixed;margin-top: 22px;z-index: 1;">'+
         '  <img src="/ru/images/loader.GIF" alt="loader"/>'+
         '  <div>Повторная отправка данных, пожалуйста подождите.</div>'+
         '</div>'
         );
   $.ajax({
      type: "POST",
      url: "/ru/reg?action=retry_send_code",
      data: 'email='+email,
      dataType: 'json',
      success: function(answer){
        $("#reg_loader").empty();
        if (answer.status == 'error')
        {
          $(".paulund_inner_modal_box").html(
                  '<h4 style="color:red;   text-align: center;">'+answer.error_text+'</h4>'
                  );
          return false;
        }
        
        if (answer.status == 'ok')
        {
            $("#reg_block").html(
                  '<div id="reg_loader"></div>'+
                  '<h4 style="text-align: center; color: #91c5f2;">Код для активации был повторно отправлен Вам на почту.</h4>'+
                  '<p style="text-align: left;  margin-left: 31px;">Для подтверждения Вашего аккаунта следуйте инструкциям, которые были отправлены Вам на почту('+email+').</p>'+
                  '<p style="margin-left: 31px;margin-top: 30px;">Если в течении нескольких минут письмо не пришло, повторите отправку!</p>'+
                  '<div style="text-align:center"><button style="font-size: 12px;" onClick="retrySendCode(\''+email+'\');">Повторить отправку</button></div>'
                  );
          return false;
        }
      }
    });
}


function removeAllWords()
{
  $.get('/ru/?action=removeAllWordsForPlan', function(answer){
    window.location.href='/ru/?action=main';
    return false;
  });
}

function goToReg()
{
  $(".paulund_modal_close").click();
  $(".paulund_modal_2").click();
}

function goToAuth()
{
   $(".paulund_modal_close").click();
   $(".paulund_modal:first").click();
}

function goToRetry()
{
  $(".paulund_modal_close").click();
  //$(".retry_pass").click();
   $(".paulund_modal_3").click();
}

function editWordsShowModal(word_id)
{
  $('#word_edit_modal').empty();
  $.ajax({
      type: "GET",
      url: "/ru/?action=word_edit_modal",
      data: 'word_id='+word_id,
      success: function(modal_page){
        $('#word_edit_modal').paulund_modal_box({
          content: modal_page      
        });
      $("#word_edit_modal").click();
      }
    });
}

function getOnlineSupport()
{
  var widget_id = 775504;
_shcp =[{widget_id : widget_id, template : 'green', invite_timeout : 1}];
var lang =(navigator.language || navigator.systemLanguage 
|| navigator.userLanguage ||"en")
.substr(0,2).toLowerCase();
var url ="widget.siteheart.com/widget/sh/"+ widget_id +"/"+ lang +"/widget.js";
var hcc = document.createElement("script");
hcc.type ="text/javascript";
hcc.async =true;
hcc.src =("https:"== document.location.protocol ?"https":"http")
+"://"+ url;
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hcc, s.nextSibling);
}

function setFeedback()
{
  var text = $("textarea[name=feedtext]").val();
  text = $.trim(text);
  var length = text.length;
  if (length < 4 || length > 2000)
  {
    alert('Ошибка! Текст обращения должен быть не менее 5 и не более 2000 символов');
    return false;
  }  
   $("textarea[name=feedtext]").val("");
   alert('Спасибо, Ваше обращение принятно.');
  $.ajax({
      type: "POST",
      url: "/ru/?action=addFeedback",
      data: 'text='+text,
      dataType: 'json',
      success: function(answer){
        if (answer.status == 'ok')
        {
         
          $("textarea[name=feedtext]").val("");
          return false
        }  
        
        if (answer.status == 'error')
        {
          alert(answer.error_text);
          return false;
        }
      }
    });
  
}

function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
	// 
	// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +	 bugfix by: Michael White (http://crestidg.com)

	var i, j, kw, kd, km;

	// input sanitation & defaults
	if( isNaN(decimals = Math.abs(decimals)) ){
		decimals = 2;
	}
	if( dec_point == undefined ){
		dec_point = ",";
	}
	if( thousands_sep == undefined ){
		thousands_sep = ".";
	}

	i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

	if( (j = i.length) > 3 ){
		j = j % 3;
	} else{
		j = 0;
	}

	km = (j ? i.substr(0, j) + thousands_sep : "");
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	//kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
	kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


	return km + kw + kd;
}

function analitics_set(num){
  if (num == 1)
  {
    ga('send', 'event', 'podbor_zaprosov', 'all_users', 'all_users');
    //$.get('/ru/analytics?action=search_word');
  }  
  
  if (num == 2)
  {
    ga('send', 'event', 'podbor_zaprosov', 'reg_users', 'reg_users');
    $.get('/ru/analytics?action=search_word_auth');
  }
  
  if (num == 3)
  {
    $.get('/ru/analytics?action=regestration');
  }
  
  if (num == 4)
  {
    $.get('/ru/analytics?action=save_project');
  }
  
  if (num == 5)
  {
    ga('send', 'event', 'project', 'run', 'run');
    $.get('/ru/analytics?action=start_project');
  }
   if (num == 6)
  {
    $.get('/ru/analytics?action=refill_balanse', function(){
    });
  }
  
  
}

