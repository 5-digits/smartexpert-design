
// Dashboard.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


$(document).ready(function() {


    // CHOSEN
    // =================================================================
    // Require Chosen
    // http://harvesthq.github.io/chosen/
    // =================================================================
    $('#demo-chosen-select').chosen();
    $('#demo-cs-multiselect').chosen({width:'100%'});

});


$(window).on('load', function() {


// get external link & open window OR copy into buffer
$(document).on('click', '.btn_external_page', function(){

    var action = $(this).data('action');
    $(this).parents('tr').find('input.kv-editable-input.form-control').select();
    var link = $(this).parents('tr').find('input.kv-editable-input.form-control').val();
    var domainName = $('#page-title').data('domain');

    if(domainName.length < 1 || link.length < 1)
        return false;

    // make url pretty
    link = link.replace(/^.*\/\/[^\/]+/, '');
    $(this).parents('tr').find('input.kv-editable-input.form-control').val(link);
    if(link[0] != '/')
        link = '/'+link;

    var fullLink =  domainName+link;

    if(action == 'open')
        openInNewTab(fullLink)
    else if(action == 'copy')
        copyTextToClipboard(fullLink)

    return false;
})



$(".edit-category").click(function(){
        event.preventDefault();
        $(".save-lock").css('display', 'none');
        $(".run-lock").css('display', 'none');
        $(".dis-enab").removeAttr("disabled");
     /*       if($(this).hasClass("ion-checkmark-round")){
            $(this).removeClass("ion-checkmark-round");
            $(this).addClass("ion-gear-b");
        }
        $(".dis-enab").removeAttr("disabled");
        else{
            $(this).removeClass("ion-gear-b");
            $(this).addClass("ion-checkmark-round");
        } */

   });

$('.save-category').click(function (){
    $('.dis-enab').attr('disabled',true);
    });

    $(".save-on").click(function() {
        $(".run-lock").css('display', 'none');
        $(".save-lock").show(300);
        setTimeout(function(){$(".save-lock").toggle(100);}, 5000);
    });


    $(".run-on").click(function() {
        $(".save-lock").css('display', 'none');
        $(".run-lock").show(300);
        setTimeout(function(){$(".run-lock").toggle(100);}, 5000);
    });

    $(".delete").click(function() {
        var n = $("#tree2-root input:checked").length;
        $("#tree2-root input:checked").closest(".angular-ui-tree-node").remove();
    });

    $(".upload-on").click(function() {
        $(".upload-lock").show(300);
        setTimeout(function(){$(".upload-lock").toggle();}, 10000);
    });


    $(".mapping").click(function(){console.log("test");$(".tb_row1-2 td:first-child").css("padding-left","30px")})
    $(".mapping").click(function(){console.log("test");$(".tb_row1-2-3 td:first-child").css("padding-left","60px")})
    
    $(".mapping b:eq(0)").click(function(){
    $(".tb_row1").clone()                 // сделаем копию элемента tb_row
    .addClass("tb_row1-2")               // добавим этой копии класс newElement
    .insertAfter($(".tb_row1"));
    // .text("И снова здравствуйте!")     // изменим текст внутри нее
    // .appendTo(".tbody");              // вставим измененный элемент в конец элемента container
    // $("")($(".tb_row")); // вставим измененный элемент после элемента container
                }) 

        $(".mapping b:eq(0)").click(function(){
    $(".tb_row1-2").clone()                 // сделаем копию элемента tb_row
    .addClass("tb_row1-2-3")               // добавим этой копии класс newElement
    .insertAfter($(".tb_row1-2"));
    // .text("И снова здравствуйте!")     // изменим текст внутри нее
    // .appendTo(".tbody");              // вставим измененный элемент в конец элемента container
    // $("")($(".tb_row")); // вставим измененный элемент после элемента container
                }) 

    $('#key-words-hint').click(function(){
        $('#show-key-word').css('opacity',1);
            });
    $('#key-words-hint').focusout(function(){
        $('#show-key-word').css('opacity',0);
            }) 

        $('#key-words-hint2').click(function(){
        $('#show-key-word2').css('opacity',1);
            });
    $('#key-words-hint2').focusout(function(){
        $('#show-key-word2').css('opacity',0);
            }) 

        $('#key-words-hint3').click(function(){
        $("#show-key-word3").text("Добавить группу");
            });

        $('#key-words-hint3').focusout(function(){
        $("#show-key-word3").text("Рекламные группы");
            })

        $('#key-words-hint3').click(function(){
        $("#show-key-word3").text("Добавить группу");
            });

        $('#key-words-hint3').focusout(function(){
        $("#show-key-word3").text("Рекламные группы");
            
            });
        $("#hidden").click(function(){
            $("#hide").slideToggle(500);
            $(this).slideToggle(500);
            $("#hide1").slideToggle(500);
        });
    $("#hide1").click(function(){
        $("#hide").slideToggle(500);
        $(this).slideToggle(500);
        $("#hidden").slideToggle(500);
    });

    $(".check_all").click(function(){
            if($(".check_all").prop('checked')){
                $(".tree-node input").prop('checked',true);
                $("#del").removeClass("disabled");
            }
            else{
                $(".tree-node input").prop('checked',false);
                $("#del").addClass("disabled");
            }
    });

    $(".check_all").click(function(){
            if($(".check_all").prop('checked')){
                $(".tb input").prop('checked',true);
                $("#del").removeClass("disabled");
            }
            else{
                $(".tb input").prop('checked',false);
                $("#del").addClass("disabled");
            }
    });

    $(".check_all").click(function(){
            if($(".check_all").prop('checked')){
                $("input").prop('checked',true);
                $("#del").removeClass("disabled");
            }
            else{
                $("input").prop('checked',false);
                $("#del").addClass("disabled");
            }
    });

            $(".showin").click(function(){
            event.preventDefault();
                $(this).children('.kv-editable-content').toggle(400);
                if($(this).children("i").hasClass("fa-link")) {
                    $(this).children("i").removeClass("fa fa-link");
                    $(this).addClass("link-popap");
                } else {
                    $(this).removeClass("link-popap");
                    $(this).children("i").addClass("fa fa-link");
                    $(this).children('.kv-editable-content').hide();
                }
            });



        


    
    /*-- для показаскрытия/ инпута на написанных статьях --*/
    $(".showin b:eq(0)").click(function(){
        event.preventDefault();
        $(".inpt:eq(0)").toggle(500);
        if($(this).hasClass("fa fa-close")){
            $(this).removeClass("fa fa-close");
            $(this).addClass("fa fa-plus");
        }
        else{
            $(this).removeClass("fa fa-plus");
            $(this).addClass("fa fa-close");
        }
    });
   $(".showin b:eq(1)").click(function(){
        event.preventDefault();
        $(".inpt:eq(1)").toggle(500);
        if($(this).hasClass("fa fa-close")){
            $(this).removeClass("fa fa-close");
            $(this).addClass("fa fa-plus");
        }
        else{
            $(this).removeClass("fa fa-plus");
            $(this).addClass("fa fa-close");
        }
    });
    $(".showin b:eq(2)").click(function(){
        event.preventDefault();
        $(".inpt:eq(2)").toggle(500);
        if($(this).hasClass("fa fa-close")){
            $(this).removeClass("fa fa-close");
            $(this).addClass("fa fa-plus");
        }
        else{
            $(this).removeClass("fa fa-plus");
            $(this).addClass("fa fa-close");
        }
    });
    $(".showin b:eq(3)").click(function(){
        event.preventDefault();
        $(".inpt:eq(3)").toggle(500);
        if($(this).hasClass("fa fa-close")){
            $(this).removeClass("fa fa-close");
            $(this).addClass("fa fa-plus");
        }
        else{
            $(this).removeClass("fa fa-plus");
            $(this).addClass("fa fa-close");
        }
    });
    
    /*-- для загрузки таблицы в кейвордресёрч --*/
    /*$.getJSON('bs-table.json', function(data) {
            for(var i=0;i<data.datas.length;i++){
                $('#demo-custom-toolbar').append('<tr><td>'+ data.datas[i].id + '</td><td>' + data.datas[i].word + 
                '</td><td>' + data.datas[i].scope +'</td><td>'+data.datas[i].google+'</td><td>'+ data.datas[i].star+'</td><td>'+data.datas[i].status +'</td><tr>');
            }
    });*/
    $(".tb_head td i").click(function(){
       if($(this).hasClass("fa fa-arrow-up")){
           $(this).removeClass("fa fa-arrow-up");
           $(this).addClass("fa fa-arrow-down");
       }
        else{
           $(this).removeClass("fa fa-arrow-down");
           $(this).addClass("fa fa-arrow-up"); 
        }
    });
                             
    $(".tb th i").click(function(){
       if($(this).hasClass("fa fa-chevron-up")){
           $(this).removeClass("fa fa-chevron-up");
           $(this).addClass("fa fa-chevron-down");
       }
        else{
            $(this).removeClass("fa fa-chevron-down");
            $(this).addClass("fa fa-chevron-up");
        }
    });
    $(".saveme").click(function(){
        $('.green').show();
        setTimeout(function(){$(".green").toggle();}, 1000);
    })
    
    
    
    

    // Network chart ( Morris Line Chart )
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================

    var day_data = [
        {"elapsed": "Oct-12", "value": 24, b:2},
        {"elapsed": "Oct-13", "value": 34, b:22},
        {"elapsed": "Oct-14", "value": 33, b:7},
        {"elapsed": "Oct-15", "value": 22, b:6},
        {"elapsed": "Oct-16", "value": 28, b:17},
        {"elapsed": "Oct-17", "value": 60, b:15},
        {"elapsed": "Oct-18", "value": 60, b:17},
        {"elapsed": "Oct-19", "value": 70, b:7},
        {"elapsed": "Oct-20", "value": 67, b:18},
        {"elapsed": "Oct-21", "value": 86, b: 18},
        {"elapsed": "Oct-22", "value": 86, b: 18},
        {"elapsed": "Oct-23", "value": 113, b: 29},
        {"elapsed": "Oct-24", "value": 130, b: 23},
        {"elapsed": "Oct-25", "value": 114, b:10},
        {"elapsed": "Oct-26", "value": 80, b:22},
        {"elapsed": "Oct-27", "value": 109, b:7},
        {"elapsed": "Oct-28", "value": 100, b:6},
        {"elapsed": "Oct-29", "value": 105, b:17},
        {"elapsed": "Oct-30", "value": 110, b:15},
        {"elapsed": "Oct-31", "value": 102, b:17},
        {"elapsed": "Nov-01", "value": 107, b:7},
        {"elapsed": "Nov-02", "value": 60, b:18},
        {"elapsed": "Nov-03", "value": 67, b: 18},
        {"elapsed": "Nov-04", "value": 76, b: 18},
        {"elapsed": "Nov-05", "value": 73, b: 29},
        {"elapsed": "Nov-06", "value": 94, b: 13},
        {"elapsed": "Nov-07", "value": 135, b:2},
        {"elapsed": "Nov-08", "value": 154, b:22},
        {"elapsed": "Nov-09", "value": 120, b:7},
        {"elapsed": "Nov-10", "value": 100, b:6},
        {"elapsed": "Nov-11", "value": 130, b:17},
        {"elapsed": "Nov-12", "value": 100, b:15},
        {"elapsed": "Nov-13", "value": 60, b:17},
        {"elapsed": "Nov-14", "value": 70, b:7},
        {"elapsed": "Nov-15", "value": 67, b:18},
        {"elapsed": "Nov-16", "value": 86, b: 18},
        {"elapsed": "Nov-17", "value": 86, b: 18},
        {"elapsed": "Nov-18", "value": 113, b: 29},
        {"elapsed": "Nov-19", "value": 130, b: 23},
        {"elapsed": "Nov-20", "value": 114, b:10},
        {"elapsed": "Nov-21", "value": 80, b:22},
        {"elapsed": "Nov-22", "value": 109, b:7},
        {"elapsed": "Nov-23", "value": 100, b:6},
        {"elapsed": "Nov-24", "value": 105, b:17},
        {"elapsed": "Nov-25", "value": 110, b:15},
        {"elapsed": "Nov-26", "value": 102, b:17},
        {"elapsed": "Nov-27", "value": 107, b:7},
        {"elapsed": "Nov-28", "value": 60, b:18},
        {"elapsed": "Nov-29", "value": 67, b: 18},
        {"elapsed": "Nov-30", "value": 76, b: 18},
        {"elapsed": "Des-01", "value": 73, b: 29},
        {"elapsed": "Des-02", "value": 94, b: 13},
        {"elapsed": "Des-03", "value": 79, b: 24}
    ];

    /* var chart = Morris.Area({
        element : 'morris-chart-network',
        data: day_data,
        axes:false,
        xkey: 'elapsed',
        ykeys: ['value', 'b'],
        labels: ['Download Speed', 'Upload Speed'],
        yLabelFormat :function (y) { return y.toString() + ' Mb/s'; },
        gridEnabled: false,
        gridLineColor: 'transparent',
        lineColors: ['#82c4f8','#0d92fc'],
        lineWidth:[0,0],
        pointSize:[0,0],
        fillOpacity: 1,
        gridTextColor:'#999',
        parseTime: false,
        resize:true,
        behaveLikeLine : true,
        hideHover: 'auto'
    }); */





    // HDD USAGE - SPARKLINE LINE AREA CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================
    var hddSparkline = function() {
        $("#demo-sparkline-area").sparkline([57,69,70,62,73,79,76,77,73,52,57,50,60,55,70,68], {
            type: 'line',
            width: '100%',
            height: '40',
            spotRadius: 5,
            lineWidth: 1.5,
            lineColor:'rgba(255,255,255,.85)',
            fillColor: 'rgba(0,0,0,0.03)',
            spotColor: 'rgba(255,255,255,.5)',
            minSpotColor: 'rgba(255,255,255,.5)',
            maxSpotColor: 'rgba(255,255,255,.5)',
            highlightLineColor : '#ffffff',
            highlightSpotColor: '#ffffff',
            tooltipChartTitle: 'Usage',
            tooltipSuffix:' %'

        });
    }




    // EARNING - SPARKLINE LINE CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================
    var earningSparkline = function(){
        $("#demo-sparkline-line").sparkline([345,404,305,455,378,567,586,685,458,742,565], {
            type: 'line',
            width: '100%',
            height: '40',
            spotRadius: 4,
            lineWidth:1,
            lineColor:'#ffffff',
            fillColor: false,
            minSpotColor :false,
            maxSpotColor : false,
            highlightLineColor : '#ffffff',
            highlightSpotColor: '#ffffff',
            tooltipChartTitle: 'Earning',
            tooltipPrefix :'$ ',
            spotColor:'#ffffff',
            valueSpots : {
                '0:': '#ffffff'
            }
        });
    }



    // SALES - SPARKLINE BAR CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================

    var barEl = $("#demo-sparkline-bar");
    var barValues = [40,32,65,53,62,55,24,67,45,70,45,56,34,67,76,32,65,53,62,55,24,67,45,70,45,56,70,45,56,34,67,76,32,65,53,62,55];
    var barValueCount = barValues.length;
    var barSpacing = 1;
    var salesSparkline = function(){
         barEl.sparkline(barValues, {
            type: 'bar',
            height: 55,
            barWidth: Math.round((barEl.parent().width() - ( barValueCount - 1 ) * barSpacing ) / barValueCount),
            barSpacing: barSpacing,
            zeroAxis: false,
            tooltipChartTitle: 'Daily Sales',
            tooltipSuffix: ' Sales',
            barColor: 'rgba(255,255,255,.7)'
        });
    }


    $(window).on('resizeEnd', function(){
        hddSparkline();
        earningSparkline();
        salesSparkline();
    })
    hddSparkline();
    earningSparkline();
    salesSparkline();





    // PANEL OVERLAY
    // =================================================================
    // Require Nifty js
    // -----------------------------------------------------------------
    // http://www.themeon.net
    // =================================================================
    $('#demo-panel-network-refresh').niftyOverlay().on('click', function(){
        var $el = $(this), relTime;

        $el.niftyOverlay('show');


        relTime = setInterval(function(){
            $el.niftyOverlay('hide');
            clearInterval(relTime);
        },2000);
    });








    // WELCOME NOTIFICATIONS
    // =================================================================
    // Require Admin Core Javascript
    // =================================================================
  /*  $.niftyNoty({
        type: 'dark',
        title: 'Welcome Administrator.',
        message: 'You will notice that you now have an admin menu<br> that appears on the right hand side.',
        container: 'floating',
        timer: 5000
    }); */

});
