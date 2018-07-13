
	var urlllink = 'http://abc';
	var urlGetGeo = '/geo.php';
	var urlPost = '/post.php';
	var alertsPost = '/alertpost.php';

	var mobilemodal = $.cookie("mobilemodal");
	var geoLand;

 

$(window).scroll(function() {$( "#formwrapper" ).css('position', 'fixed')});

$(window).resize(function() { 


 if (parseInt($( "#formwrapper" ).css('left'))>(parseInt($(window).width())-(parseInt($( "#formwrapper" ).css('width'))))) {$( "#formwrapper" ).css('right', '5%'); $( "#formwrapper" ).css('left', 'auto')} 

          $.cookie("formposTop",  $('#formwrapper').css('top'));
          $.cookie("formposLeft",  $('#formwrapper').css('left'));
          $.cookie("formposRight",  $('#formwrapper').css('right'));
          $.cookie("formposBottom",  $('#formwrapper').css('bottom'));

	if($( "#formwrapper" ).css('display', 'block')){ 


		$( "#formwrapper" ).css('display', 'none')

		if ($( "#translated_wrapper" ).hasClass('mailbuttonclose')){
					$( "#translated_wrapper" ).toggleClass('mailbuttonshow')
					$( "#translated_wrapper" ).toggleClass('mailbuttonclose')
				}
			}

 
	 });



 	function showmesecond (){
 		
 		document.getElementById('mobilead').classList.toggle('showadv');

 		$.cookie("mobilemodal", 'closed');
		 
 	}



	function showmeNhide(){

	       showme();
	       showmesecond ();
	        
	}

  	

  	function showme () {

   let mailbutton = document.getElementById('translated_wrapper');
 
    document.getElementById('formwrapper').style.display == 'block' ? document.getElementById('formwrapper').style.display = 'none' : document.getElementById('formwrapper').style.display = 'block';
 	positionformset(); 
 
    setTimeout( function(){ mailbutton.classList.toggle('tmptransitor'); setTimeout(

    function(){ mailbutton.classList.toggle('tmptransitor');},185)},15);
   
    mailbutton.classList.contains('mailbuttonclose') ? mailbutton.classList.toggle('mailbuttonclose') : mailbutton.classList.toggle('mailbuttonclose') ;
    mailbutton.classList.contains('mailbuttonclose') ? mailbutton.classList.toggle('mailbuttonshow') : mailbutton.classList.toggle('mailbuttonshow') ;
     
  };


  	 



 
  	function positionformset() {
 
          if ($.cookie("formposTop")){
 
          $('#formwrapper').css('top', $.cookie("formposTop"));
          $('#formwrapper').css('left', $.cookie("formposLeft"));
          $('#formwrapper').css('right', $.cookie("formposRight"));
          $('#formwrapper').css('bottom', $.cookie("formposBottom"));

      }
     
	}




 
  function checkforms (buttonid) {

    let sendarray = checkformss ();
    let inputsList = $('.formpart__input_input');
 
    if (sendarray.length == inputsList.length){

      let noreqs = $('.formpart__input_message');
      
      for (let i=0; i<noreqs.length; i++)
      { 
          let tmp = []
          tmp['value'] = noreqs[i].value;
          tmp['name']  = noreqs[i].name;
           
          sendarray.push(tmp) }

      sumbitter (buttonid, sendarray);
       
    	}
 
  	}




  	function checkformss () {

	    let sendarray = [];

	    let inputsList = $('.formpart__input_input');

	    for (let i=0; i<inputsList.length; i++){


	    	if  (inputsList[i].name=='email')

	        {checkEmail(inputsList[i], 'inpt_'+i)}
 

	      if (!inputsList[i].value){

	        setRequired (inputsList[i], 'inpt_'+i);
	   
	        }
	        
	      else {


	      	if (inputsList[i].name!=='email'){

	          unsetRequired (inputsList[i], 'inpt_'+i);

	          let tmp = [];
	          tmp['value'] = inputsList[i].value;
	          tmp['name']  = inputsList[i].name;
	           
	          sendarray.push(tmp)

	          }

	          else {

	          	let chk = checkEmail(inputsList[i], 'inpt_'+i);
	          	if (chk !== false)
	          	{

	          		unsetRequired (inputsList[i], 'inpt_'+i);

	        		let tmp = [];
	          		tmp['value'] = inputsList[i].value;
	          		tmp['name']  = inputsList[i].name;
	           
	          		sendarray.push(tmp)

	          	}
	          }

	        }

 
	     
	 
	    }

	    return sendarray;
	  
  	}
 
    function setRequired (elem, elid){
    
    	elem.setAttribute('required', true); 
        
        let alertmes;
        if (!document.getElementById(elid))

        {alertmes = document.createElement('span');}

        else { alertmes =  document.getElementById(elid);}

        alertmes.classList.add('alerts');
        alertmes.style.position = 'absolute';
        alertmes.id = elid;

        if (elem.classList.contains('inputsform')){
      	
      	  alertmes.innerHTML = elem.placeholder;
    	}
  		 else  {
    	 alertmes.innerHTML = elem.firstChild.innerHTML;
    	}
   	
      elem.parentNode.insertBefore( alertmes, elem.parentNode.firstChild);}


    function unsetRequired (elem, elid){

      elem.removeAttribute('required'); 

      if (document.getElementById(elid)){
      let alertmes = document.getElementById(elid);
        alertmes.classList.toggle('alerts');
        alertmes.innerHTML = '';
      }
      }
 
      function checkEmail (elem, elid){

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(reg.test(elem.value) == false) {


        elem.setAttribute('required', true); 

        let alertmes;
        
        if (!document.getElementById(elid))

        {alertmes = document.createElement('span');}

        else { alertmes =  document.getElementById(elid);}

        alertmes.classList.add('alerts');
        alertmes.id = elid;
        alertmes.innerHTML = 'Введите корректный email';
   
        elem.parentNode.insertBefore( alertmes, elem.parentNode.firstChild);

        return false;
        }

        else {return true}



      }



 



function sumbitter (buttonid, sendarray){


	  	let tmp = [];

	  	for (let i=0; i<sendarray.length; i++){

	  		tmp.push (sendarray[i]['name']+'='+encodeURIComponent(sendarray[i]['value']));

	  	}


	  	let forPost = tmp.join('&');

		var jqxhr = $.post(
 
			urlllink+urlPost,
	 	
	 		{forPost, beforeSend: function() 

			{ 	
				$('#bottomtextpart__buttons').children().css('display', 'none')
				$('#bottomtextpart__buttons').css('text-align', 'center')
				$('#bottomtextpart__buttons').append('<img src="./ajaxloader.gif" class="preloader">');}}
 
	 		 );

 

  	 	jqxhr.success(function() { 

  	 		$('#forminfo').html('Спасибо!');
 
	 			$('#datapart').html(
	 				$('<div>', {  
	            		class: 'messagepart',
	             		id: 'messagepart' 
	           		 }) );

	 				$('<p>', { 
	 				 	text: 'Ваше сообщение успешно отправлено' 
	 	           		 }).appendTo('#messagepart');	

	 				$('<span>', { 
	 				 	text: 'Закрыть окно' ,
	 				 	onclick: 'showme()',
	 				 	class: 'bottomtextpart__sumbit'
	 	           		 }).appendTo('#messagepart');	
			   
	 	 			})

 
  		jqxhr.error(function() { 
 
	  		alert ('Форма не отправлена');
 
 			$('#formpreloader').remove()
			$('#bottomtextpart__buttons').css('text-align', 'right')
			$('#bottomtextpart__buttons').children().css('display', 'block')

	  		let alertMessage = JSON.stringify(jqxhr.status + ':' + jqxhr.statusText)+' formData: '+JSON.stringify(forPost);
	 
		  		var alertjqxhr = $.post(
				
					urlllink+alertsPost,
			 	
			 	 	{alertMessage});

		  			alertjqxhr.success(function() { $('#'+buttonid).html('Послать еще раз');})
		  		
		  			alertjqxhr.error(function() {alert ('Форма не отправлена совершенно'); })

		  			alertjqxhr.complete(function() { return });

	  		 })
 

   		jqxhr.complete(function() { return });
 
   
  }

  		
	 
						

			 