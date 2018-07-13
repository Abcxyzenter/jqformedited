 


$(document).ready(function(){


//ярлык для формы

 $('<div>', { 
  class: 'translated_width', 
  id: 'translated_width' 
  }).appendTo('body');
 
   $('<div>', { 
    class: 'translated_wrapper mailbuttonshow', 
    id: 'translated_wrapper', 
    onclick: 'showme()'
    }).appendTo('#translated_width');
 
      $('<div>', { 
      class: 'translated', 
      id: 'translated_div' 
      }).appendTo('#translated_wrapper');


        $('<span>', { 
        class: 'translated__mailround', 
        id: 'translated__mailround' 
        }).appendTo('#translated_div');
 
          $('<i>', { 
          class: 'fas fa-envelope'  
          }).appendTo('#translated__mailround');

        $('<span>', { 
        class: 'translated__text', 
        text: 'Нужно больше информации?'
        }).appendTo('#translated_div');




//основная форма



 $('<div>', { 
  class: 'mailformshow', 
  id: 'formwrapper', 
  style: 'display:none' 
  }).appendTo('#elwrap');


     


    //позиция в куки
 
    $('#formwrapper').draggable({


        containment:'window', 
        delay:0,


        stop: function(){


          let winHght = $(window).height();
          let elHght = $('#formwrapper_inner').outerHeight();
          let cssTop = parseInt($('#formwrapper').css('top'));

          let normalised = (winHght-elHght)+'px';

          if ((cssTop+elHght)>winHght){
 
              $('#formwrapper').css('top', normalised );
 
          }

          $.cookie("formposTop",  $('#formwrapper').css('top'));
          $.cookie("formposLeft",  $('#formwrapper').css('left'));
          $.cookie("formposRight",  $('#formwrapper').css('right'));
          $.cookie("formposBottom",  $('#formwrapper').css('bottom'));

       
       
        },

      
       });

 if ($.cookie("formposTop")){

          $('#formwrapper').css('top', $.cookie("formposTop"));
          $('#formwrapper').css('left', $.cookie("formposLeft"));
          $('#formwrapper').css('right', $.cookie("formposRight"));
          $('#formwrapper').css('bottom', $.cookie("formposBottom"));
        
 
      } else {

          $('#formwrapper').css('top', 'auto');
          $('#formwrapper').css('left', 'auto');
          $('#formwrapper').css('right', '5%');
          $('#formwrapper').css('bottom', '35px');
          $('#formwrapper').css('margin', 'auto');
          $('#formwrapper').css('position', 'fixed');

      }

 if (parseInt($( "#formwrapper" ).css('left'))>(parseInt($(window).width())-(parseInt($( "#formwrapper" ).css('width'))))) {$( "#formwrapper" ).css('right', '5%'); $( "#formwrapper" ).css('left', 'auto')} 
 
    $('<div>', { 
    class: 'formwrapper', 
    id: 'formwrapper_inner' 
    }).appendTo('#formwrapper');
 
      $('<div>', { 
      class: 'closebtn', 
      id: 'formwrapper_closebtn' 
      }).appendTo('#formwrapper_inner');

        $('<span>', { 
        id: 'formwrapper_closebtn__span', 
        onclick: 'showme()' 
        }).appendTo('#formwrapper_closebtn');
     
          $('<i>', { 
          class: 'far fa-times-circle' 
          }).appendTo('#formwrapper_closebtn__span');



      $('<div>', { 
      class: 'movingdiv', 
      id: 'movingdiv' 
      }).appendTo('#formwrapper_inner');


          


        $('<span>', { 
        id: 'movingdiv_span', 
        class: 'movingdiv_span' 
        }).appendTo('#movingdiv');
     
          $('<span>', { 
          id: 'movingdiv_icon', 
          class: 'movingdiv_icon' 
          }).appendTo('#movingdiv_span');
          
            $('<i>', { 
            class: 'fas fa-envelope' 
            }).appendTo('#movingdiv_icon');

          $('<span>', { 
          class: 'movingdiv_title',
          id: 'forminfo',
          text: 'Нужно больше информации?' 
          }).appendTo('#movingdiv_span');
       



      $('<div>', { 
      id: 'datapart' 
      }).appendTo('#formwrapper_inner');





        $('<div>', { 
        id: 'toptextpart',
        class: 'toptextpart' 
        }).appendTo('#datapart');

          $('<div>', { 
          id: 'toptextpart__bubble', 
          class: 'toptextpart__bubble' 
          }).appendTo('#toptextpart');
 
            $('<p>', { 
            text: 'Сейчас мы офлайн. Задайте свой вопрос, и мы ответим, как только увидим ваше сообщение.' 
            }).appendTo('#toptextpart__bubble');





        $('<div>', { 
        id: 'formpart', 
        class: 'formpart' 
        }).appendTo('#datapart');

 

        //массив с настройками инпутов
          var inputsarray = [

            {'type':'name', 'placeholder':'Введите имя', 'icons':'fas fa-user'},
            {'type':'geo',  'icons':'fas fa-users'},
            {'type':'email', 'placeholder':'Введите email', 'icons':'fas fa-envelope'},
            {'type':'message', 'placeholder':'Введите сообщение', 'icons':'fas fa-envelope'} 

          ]


        //цикл-шаблон инпутов

        for (var inpts in inputsarray){


          $('<div>', { 
          id: 'formpart__input__'+inputsarray[inpts]['type'], 
          class: 'formpart__input' 
          }).appendTo('#formpart');
 

          if (inputsarray[inpts]['type'] !== 'message'){

 
            if (inputsarray[inpts]['type'] == 'geo'){
 
              $('<select>', { 
              name: inputsarray[inpts]['type'],
              id: inputsarray[inpts]['type'],
              onchange:'checkformss()',
              class: 'formpart__input_input'   
              }).appendTo('#formpart__input__'+inputsarray[inpts]['type']);
 
            }

 
            else {
 
              $('<input>', { 
              name: inputsarray[inpts]['type'],
              type:'text',
              placeholder: inputsarray[inpts]['placeholder'],
              onkeyup:'checkformss()',
              class: 'formpart__input_input inputsform'   
              }).appendTo('#formpart__input__'+inputsarray[inpts]['type']);
 
            }


            $('<span>', { 
            id: 'formpart_input_icon_'+inputsarray[inpts]['type'], 
            class: 'formpart_input_icon' 
            }).appendTo('#formpart__input__'+inputsarray[inpts]['type']);

            $('<i>', { 
            class: inputsarray[inpts]['icons'] 
            }).appendTo('#formpart_input_icon_'+inputsarray[inpts]['type']);
 
          }

          else {

              $('<input>', { 
              name: inputsarray[inpts]['type'],
              type:'text',
              placeholder: 'Введите сообщение',
              class: 'formpart__input_message' 
              }).appendTo('#formpart__input__'+inputsarray[inpts]['type']);

          }
 
        }


        	

        

 	//список городов
    var geoarray;

  	var getjqxhr = $.get(urlllink+urlGetGeo);

  	getjqxhr.success(function() { 
  		 
  		 return geoarray = $.parseJSON(getjqxhr.responseText);

        });

  	getjqxhr.complete(function() { 
 
  			 $('<option>', {  
            value: '',
            text: 'Выберите регион' 
            }).appendTo('#geo');
  
         	for (let i in geoarray){
 
              $('<option>', {  
              value: geoarray[i]['value'],
              text: geoarray[i]['title']
              }).appendTo('#geo');

          }
 
  	});
 
  	getjqxhr.error(function() { console.log('массив не долетел')});
  

  		//кнопки
        $('<div>', { 
        id: 'bottomtextpart', 
        class: 'bottomtextpart' 
        }).appendTo('#datapart');

          $('<div>', { 
          id: 'bottomtextpart__comment', 
          class: 'bottomtextpart__comment' 
          }).appendTo('#bottomtextpart');

            $('<a>', { 
            href: '#', 
            text: 'Пользовательское соглашение' 
            }).appendTo('#bottomtextpart__comment');

          $('<div>', { 
          id: 'bottomtextpart__buttons', 
          class: 'bottomtextpart__buttons' 
          }).appendTo('#bottomtextpart');

            $('<div>', { 
            id: 'bottomtextpart__call', 
            class: 'bottomtextpart__call' 
            }).appendTo('#bottomtextpart__buttons');

              $('<span>', { 
              onclick: 'checkforms(\'callme\')', 
              id: 'callme__span' 
              }).appendTo('#bottomtextpart__call');

                $('<i>', { 
                class: 'fas fa-phone' 
                }).appendTo('#callme__span');

                $('<span>', { 
                id: 'callme',
                text: 'Заказать звонок' 
                }).appendTo('#callme__span');
        
            $('<div>', { 
            id: 'bottomtextpart__sumbit', 
            class: 'bottomtextpart__sumbit' 
            }).appendTo('#bottomtextpart__buttons');

              $('<span>', { 
              onclick: 'checkforms(\'sendmessage\')', 
              id: 'sendmessage__span' 
              }).appendTo('#bottomtextpart__sumbit');
   
                $('<span>', { 
                id: 'sendmessage',
                text: 'Отправить' 
                }).appendTo('#sendmessage__span');
 
        $('<div>', { 
        id: 'bottomtextpart__advertising', 
        class: 'bottomtextpart__advertising' 
        }).appendTo('#bottomtextpart');

          $('<span>', { 
          id: 'bottomtextpart__advertising__span', 
          text: 'Работает на платформе ' 
          }).appendTo('#bottomtextpart__advertising');

            $('<a>', { 
            href: '#', 
            class: 'livetexlink',
            text: 'LiveTex' 
            }).appendTo('#bottomtextpart__advertising__span');




	if (mobilemodal !== 'closed' && window.innerWidth<600)
	{setTimeout(function(){document.getElementById('mobilead').classList.toggle('showadv')}, 8000);
	}


	//всплывающее окно
    $('<div>', { 
    id: 'mobilead', 
    class: 'managerdiv' 
    }).appendTo('body');

    	$('<div>', { 
	    id: 'infocontainer', 
	    class: 'infocontainer' 
	    }).appendTo('#mobilead');

	        $('<span>', { 
		    onclick: 'showmesecond()', 
        class:'mcrcls',
		    text: 'X' 
		    }).appendTo('#infocontainer');
		
			$('<div>', { 
		    id: 'imgpart', 
		    class: 'imgpart' 
		    }).appendTo('#infocontainer');

		    	$('<img>', { 
			    src: 'aa.png',
           class: 'imgpart_img' 
			    }).appendTo('#imgpart');
 
			$('<div>', { 
		    id: 'txtpart', 
		    class: 'txtpart' 
		    }).appendTo('#infocontainer');
			
				$('<h5>', { 
			    text: 'Наталья Невская', 
			    }).appendTo('#txtpart');
 
				$('<p>', { 
			    text: 'Напишите ваш вопрос, оставьте контактные данные и мы свяжемся с вами с 10 до 18 по рабочим дням.', 
			    }).appendTo('#txtpart');


		$('<div>', { 
	    id: 'buttonspart', 
	    class: 'buttonspart' 
	    }).appendTo('#mobilead');

	        $('<div>', { 
		    class: 'bottomtextpart__sumbit', 
		    id: 'bottomtextparts__sumbit' 
		    }).appendTo('#buttonspart');
		
			$('<div>', { 
		    id: 'sendmessage', 
		    onclick: 'showmeNhide()',
		    text: 'Форма связи' 
		    }).appendTo('#bottomtextparts__sumbit');

	 


});
 
