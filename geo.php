<?php

 header("Access-Control-Allow-Origin: *");
 
 	$toreturn = array(

          array('value'=>'loc1', 'title'=>'city 1'),
          array('value'=>'loc2', 'title'=>'else city'),
       
          )  ;

	echo json_encode($toreturn, JSON_FORCE_OBJECT);
 
?>
 