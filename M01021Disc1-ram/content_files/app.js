// JavaScript Document
$(document).ready(function(){
						//////////use "spaceclick" variable////////////////////////////////////////////////////////  
					window.abc = 99;
	window.abcd = 99;

	window.SpaceAndAutorunSpeed = 500;
		
		
		
		
			cssVariable=function(){
			//alert()				
						
     var root = document.documentElement;
	 
	 timeConvert=function(val){
	 var cssvar=val*1000;
	 cssvar = eval(cssvar+""+speedControl)
	 cssvar=cssvar*0.001;  
	 cssvar=cssvar.toFixed(2);
	return cssvar;
	}			
							
	root.style.setProperty('--anim-timeone',timeConvert(0.5)+"s");
		root.style.setProperty('--anim-timetwo',timeConvert(1)+"s");
			//eval(2000+""+speedControl)			
		root.style.setProperty('--anim-timethree',timeConvert(1.5)+"s");
		root.style.setProperty('--anim-timefour',timeConvert(2)+"s");
		root.style.setProperty('--anim-timefive',timeConvert(2.5)+"s");
	root.style.setProperty('--anim-timesix',timeConvert(3)+"s");	
		root.style.setProperty('--anim-timeseven',timeConvert(0.75)+"s");					
							}
	


cssVariable();

			$("autorun").click(function(){
										
										$(".autorun").css("pointer-events","none");
										
										})

newLocalFunction= function(){
	 if(buttonSequence == 1){
		  $(".disableauto").show().css("cursor","default");
								$("button").prop("disabled",true).css("cursor","default");
		
		
		setTimeout(function(){
								$(".img_2").show();
											$(".one_no").hide();
											$(".two_no").show();
											
							  },eval(800+""+speedControl));
									 
							    setTimeout(function(){
											$(".bdr_right_1").css("border-color","#000");
							  },eval(1400+""+speedControl));
								
							 setTimeout(function(){
											$(".img_3").show();
											$(".three_no").show();
											
							  },eval(2000+""+speedControl));
							 
							  setTimeout(function(){
									$(".img_4").show();
									$(".three_no").hide();
											$(".four_no").show();		
											
							  },eval(2800+""+speedControl));
							  
							 setTimeout(function(){
										$(".img_5").show();
										$(".four_no").hide();
											$(".five_no").show();										
							  },eval(3600+""+speedControl));
							 
														 
						   setTimeout(function(){
										$(".SpaceBarDiv").show(); 
									$(".disableauto").hide().css("cursor","pointer");
								$("button").prop("disabled",false).css("cursor","pointer");
								$(".autorun").css("pointer-events","auto");
									},eval(3800+""+speedControl));
									
									
							$(".SpaceBarDiv").hide();
							$(".autorun").css("pointer-events","none");
		 
	 }
	 
	 
	
	  else{
		   SpaceAndAutorunSpeed = eval(500+""+speedControl); 
		  }
	  
	  
	  
	}




$(".disableauto").hide();






	Local1 = function () {
		
		
		 if((spaceclick==2) && (buttonSequence==1)){
						  
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".anim1_1").show();
							 
							  setTimeout(function(){
													
												$(".anim1_1_final").css("visibility","visible");	  
											  },eval(1000+""+speedControl));
							 
							  setTimeout(function(){
												  $(".a1").css("visibility","visible");	  
												
											  },eval(1300+""+speedControl));
							  
							  setTimeout(function(){
												  $(".anim1_2").show();  
												
													
											  },eval(1600+""+speedControl));
							  
							   setTimeout(function(){
												  $(".anim1_2_final").css("visibility","visible");	  
												
											  },eval(2600+""+speedControl));
							   
							   setTimeout(function(){
												  $(".a2").css("visibility","visible");	  
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(2800+""+speedControl));
							  
							 
							
							SpaceAndAutorunSpeed = eval(3000+""+speedControl); 
						  }
						  
						   else if((spaceclick==3) && (buttonSequence==1)){
						  
						 
											 
							   $(".a3").css("visibility","visible");	
							
								 
							
							SpaceAndAutorunSpeed = eval(500+""+speedControl); 
						  }
						  
						  else if((spaceclick==4) && (buttonSequence==1)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							
											$(".bdr_right_2").css("border-color","#000");
							 
							 $(".img_6").show();
											$(".one_mug").show();
						  
						  setTimeout(function(){
								$(".img_7").show();
											$(".one_mug").hide();
											$(".two_mug").show();
											
							  },eval(800+""+speedControl));
									 
							   
							 setTimeout(function(){
											$(".img_8").show();
											$(".two_mug").hide()
											$(".three_mug").show();
											
							  },eval(1600+""+speedControl));
							 
							 
							   setTimeout(function(){
											$(".bdr_right_3").css("border-color","#000");
							  },eval(2200+""+speedControl));
							 
							  setTimeout(function(){
									$(".img_9").show();
									
											$(".four_mug").show();		
											
							  },eval(2800+""+speedControl));
							  
							 setTimeout(function(){
										$(".img_10").show();
										$(".four_mug").hide();
											$(".five_mug").show();										
							  },eval(3600+""+speedControl));
							 
							 setTimeout(function(){
										$(".img_11").show();
										$(".five_mug").hide();
											$(".six_mug").show();										
							  },eval(4400+""+speedControl));
							 
							 setTimeout(function(){
										$(".img_12").show();
										$(".six_mug").hide();
											$(".seven_mug").show();
											$(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
											
							  },eval(5200+""+speedControl));
							 
							 
							
							 
							
							SpaceAndAutorunSpeed = eval(5400+""+speedControl); 
						  }
						  
						  
						  
						  
						   else if((spaceclick==5) && (buttonSequence==1)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".anim1_3").show();
							 
							  setTimeout(function(){
													
												$(".anim1_3_final").css("visibility","visible");	  
											  },eval(1000+""+speedControl));
							 
							  setTimeout(function(){
												  $(".a4").css("visibility","visible");	  
												
											  },eval(1300+""+speedControl));
							  
							  setTimeout(function(){
												  $(".anim1_4").show();  
												
													
											  },eval(1600+""+speedControl));
							  
							   setTimeout(function(){
												  $(".anim1_4_final").css("visibility","visible");	  
												
											  },eval(2600+""+speedControl));
							   
							   setTimeout(function(){
												  $(".a5").css("visibility","visible");	  
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(2800+""+speedControl));
							  
							 
							
							SpaceAndAutorunSpeed = eval(3000+""+speedControl); 
						  }
						  
						 else if((spaceclick==6) && (buttonSequence==1)){
						  
						 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
											 
							   $(".a6").css("visibility","visible");	
							  setTimeout(function(){
										/*$(".box_shadow1").css("box-shadow","4px 4px 2px #006600");*/
										$(".content1_1").addClass("bgcolor_1");
											$(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
							  },eval(1000+""+speedControl));
								 
							
							SpaceAndAutorunSpeed = eval(1200+""+speedControl); 
						  }
						  
						  
						  
						  else if((spaceclick==4) && (buttonSequence==2)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".img_13").show();
							 
							  setTimeout(function(){
													
												$(".b1").show();  
											  },eval(500+""+speedControl));
							 
							  setTimeout(function(){
												  $(".img_14").show();	  
												
											  },eval(1000+""+speedControl));
							  
							  setTimeout(function(){
												 $(".b1").hide();
												 $(".b2").show();
												
													
											  },eval(1500+""+speedControl));
							    setTimeout(function(){
													
												$(".tab4_td6").addClass("bgcolor_1");
											  },eval(2200+""+speedControl));
							  setTimeout(function(){
													
												$(".b3").show();  
											  },eval(2900+""+speedControl));
							 
							  setTimeout(function(){
												  $(".tab4_td3_1").css("visibility","visible");	 	  
												
											  },eval(3600+""+speedControl));
							  
							  setTimeout(function(){
												 $(".img_15").show();
												 $(".b4").show(); 
												 													
											  },eval(4300+""+speedControl));
							  
							   setTimeout(function(){
												 $(".img_16").show();
												 $(".b4").hide(); 
												 	$(".b5").show(); 												
											  },eval(5000+""+speedControl));
							   setTimeout(function(){
												 $(".img_17").show();
												 $(".b5").hide(); 
												 	$(".b6").show(); 
													
											  },eval(5700+""+speedControl));
							  						 
											setTimeout(function(){
												$(".tab4_td8").addClass("bgcolor_1");
											  },eval(6400+""+speedControl));		 
													   setTimeout(function(){
												 
													$(".b7").show(); 
													$(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
											  },eval(6600+""+speedControl));
							
							SpaceAndAutorunSpeed = eval(6800+""+speedControl); 
						  }
						  
						  
						  
						  
						  
						   else if((spaceclick==5) && (buttonSequence==2)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".tab4_td5_1").css("visibility","visible");
							 
							
							 
							  setTimeout(function(){
													$(".img_18").show();
												$(".b8").show();  
											  },eval(500+""+speedControl));
							 
							  
							  
							  setTimeout(function(){
												  $(".img_19").show();
												 $(".b8").hide();
												 $(".b9").show();
												
													
											  },eval(1000+""+speedControl));
							  
							  setTimeout(function(){
												 $(".img_20").show();
												 $(".b9").hide();
												 $(".b10").show();  
											  },eval(1500+""+speedControl));
							 
							  setTimeout(function(){
												   $(".img_21").show();
												 $(".b10").hide();
												 $(".b11").show(); 	  
												
											  },eval(2000+""+speedControl));
							  
							  setTimeout(function(){
												$(".img_22").show();
												 $(".b11").hide();
												 $(".b12").show(); 	
												 													
											  },eval(2500+""+speedControl));
							
							    
													   setTimeout(function(){
												 $(".tab4_td10").addClass("bgcolor_1");
													$(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
											  },eval(2800+""+speedControl));
							
							SpaceAndAutorunSpeed = eval(3000+""+speedControl); 
						  }
						  
						  
						  
						 else if((spaceclick==2) && (buttonSequence==3)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".a1").show();
												  
												$(".img_23").show();
							 
							  setTimeout(function(){
												  $(".a1").hide();
												  $(".a2").show();  
												$(".img_24").show();
											  },eval(1000+""+speedControl));
							  
							  setTimeout(function(){
												 $(".tab13_td2_1,.tab13_td7_1").css("visibility","visible");
												$(".bg_color1").addClass("bgcolor_1");
													
											  },eval(1500+""+speedControl));
							  
							   setTimeout(function(){
												   $(".a3").show();  
												$(".img_25").show();
												
											  },eval(2000+""+speedControl));
							   
							     setTimeout(function(){
												  $(".a3").hide();
												  $(".a4").show();  
												$(".img_26").show();
											  },eval(3000+""+speedControl));
								 
								  setTimeout(function(){
												  $(".a4").hide();
												  $(".a5").show();  
												$(".img_27").show();
											  },eval(4000+""+speedControl));
								  
								   setTimeout(function(){
												 $(".tab13_td4_1,.tab13_td9_1").css("visibility","visible");
												$(".bg_color2").addClass("bgcolor_1");
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(4500+""+speedControl));
								  
								
							   
							 						 
							
							SpaceAndAutorunSpeed = eval(4600+""+speedControl); 
						  }
						  
						   else if((spaceclick==3) && (buttonSequence==3)){
						   $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".a6").show();
												  
												$(".img_28").show();
							 
							  setTimeout(function(){
												  $(".a6").hide();
												  $(".a7").show();  
												$(".img_29").show();
											  },eval(1000+""+speedControl));
							  
							
							  
							   setTimeout(function(){
												    $(".a7").hide();
												   $(".a8").show();  
												$(".img_30").show();
												
											  },eval(2000+""+speedControl));
							   
							     setTimeout(function(){
												  $(".a8").hide();
												  $(".a9").show();  
												$(".img_31").show();
											  },eval(3000+""+speedControl));
								 
								  setTimeout(function(){
												  $(".a9").hide();
												  $(".a10").show();  
												$(".img_32").show();
											  },eval(4000+""+speedControl));
								  
								   setTimeout(function(){
												 
												$(".bg_color3").addClass("bgcolor_1");
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(4300+""+speedControl));
								  
								
							SpaceAndAutorunSpeed = eval(4500+""+speedControl); 
						  }
						  
						   else if((spaceclick==4) && (buttonSequence==3)){
						   $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".a11").show();
												  
												$(".img_33").show();
							 
							  setTimeout(function(){
												  $(".a11").hide();
												  $(".a12").show();  
												$(".img_34").show();
											  },eval(1000+""+speedControl));
							  
							
							  
							   setTimeout(function(){
												    $(".a12").hide();
												   $(".a13").show();  
												$(".img_35").show();
												
											  },eval(2000+""+speedControl));
							   
							   
								   setTimeout(function(){
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(2200+""+speedControl));
								 
							SpaceAndAutorunSpeed = eval(2400+""+speedControl); 
						  }
						  
						   else if((spaceclick==5) && (buttonSequence==3)){
						   $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".a14,.b1z").show();
												  
												$(".img_36").show();
							 
							  setTimeout(function(){
												  $(".a14").hide();
												  $(".a15").show();  
												$(".img_37").show();
											  },eval(1000+""+speedControl));
							  
							
							  
							
							   
								   setTimeout(function(){
													  
													   
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(1200+""+speedControl));
								 
							SpaceAndAutorunSpeed = eval(1400+""+speedControl); 
						  }
						  
						  else if((spaceclick==6) && (buttonSequence==3)){
						   $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							  $(".b1").css("visibility","visible");
							 $(".tab14_td7_1,.tab14_td9_1").css("visibility","visible");
							 $(".a16").show();
												  
												$(".img_42").show();
							 
							  setTimeout(function(){
												  $(".a16").hide();
												  $(".a17").show();  
												$(".img_41").show();
											  },eval(1000+""+speedControl));
							  
							
							  
							   setTimeout(function(){
												    $(".a17").hide();
												   $(".a18").show();  
												$(".img_40").show();
												
											  },eval(2000+""+speedControl));
							   
							   setTimeout(function(){
												    $(".a18").hide();
												   $(".a19").show();  
												$(".img_39").show();
												
											  },eval(3000+""+speedControl));
							   
							   setTimeout(function(){
												    $(".a19").hide();
												   $(".a20").show();  
												$(".img_38").show();
												
											  },eval(4000+""+speedControl));
							   
							   
								   setTimeout(function(){
													   $(".tab14_td14_1,.tab14_td16_1").css("visibility","visible");
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(4200+""+speedControl));
								 
							SpaceAndAutorunSpeed = eval(4400+""+speedControl); 
						  }
						  
						  
						  else if((spaceclick==7) && (buttonSequence==3)){
						   $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 
							 $(".bdr_right").css("border-color","#000");
							 $(".a21").show();
												  
												$(".img_43").show();
							 
							  setTimeout(function(){
												  $(".a21").hide();
												  $(".a22").show();  
												$(".img_44").show();
											  },eval(1000+""+speedControl));
							  
							
							  
							   setTimeout(function(){
												    $(".a22").hide();
												   $(".a23").show();  
												$(".img_45").show();
												
											  },eval(2000+""+speedControl));
							   
							   setTimeout(function(){
												    $(".a23").hide();
												   $(".a24").show();  
												$(".img_46").show();
												
											  },eval(3000+""+speedControl));
							   
							  						   
							   
								   setTimeout(function(){
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(3200+""+speedControl));
								 
							SpaceAndAutorunSpeed = eval(3400+""+speedControl); 
						  }
						  
						  else if((spaceclick==8) && (buttonSequence==3)){
						   $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".a25").show();

												  
												$(".img_47").show();
							 
							  setTimeout(function(){
												  $(".a25").hide();
												  $(".a26").show();  
												$(".img_48").show();
											  },eval(1000+""+speedControl));
							  
							
							  
							   setTimeout(function(){
												    $(".a26").hide();
												   $(".a27").show();  
												$(".img_49").show();
												
											  },eval(2000+""+speedControl));
							   
							   setTimeout(function(){
												    $(".a27").hide();
												   $(".a28").show();  
												$(".img_50").show();
												
											  },eval(3000+""+speedControl));
							   
							   setTimeout(function(){
												    $(".a28").hide();
												   $(".a29").show();  
												$(".img_51").show();
												
											  },eval(4000+""+speedControl));		   
							   
								   setTimeout(function(){
													  
													  $(".brac").show();
												 
											  },eval(4300+""+speedControl));
								 
								 
								 setTimeout(function(){
													  $(".tab15_td4_1").css("visibility","visible");
													 
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(4600+""+speedControl));
								 
							SpaceAndAutorunSpeed = eval(4700+""+speedControl); 
						  }
						  
						    else if((spaceclick==9) && (buttonSequence==3)){
								$(".hand4").css("visibility","hidden");
						   $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".b2").css("visibility","visible");
							 $(".a30").show();
							 $(".tab15_td9_1,.tab15_td12_1").css("visibility","visible");
												  
												$(".img_60").show();
							 
							  setTimeout(function(){
												  $(".a30").hide();
												  $(".a31").show();  
												$(".img_59").show();
											  },eval(1000+""+speedControl));
							  
							
							  
							   setTimeout(function(){
												    $(".a31").hide();
												   $(".a32").show();  
												$(".img_58").show();
												
											  },eval(2000+""+speedControl));
							   
							   setTimeout(function(){
												    $(".a32").hide();
												   $(".a33").show();  
												$(".img_57").show();
												
											  },eval(3000+""+speedControl));
							   
							   setTimeout(function(){
												    $(".a33").hide();
												   $(".a34").show();  
												$(".img_56").show();
												
											  },eval(4000+""+speedControl));
							   
							   setTimeout(function(){
												  $(".a34").hide();
												  $(".a35").show();  
												$(".img_55").show();
											  },eval(5000+""+speedControl));
							  
							
							  
							   setTimeout(function(){
												    $(".a35").hide();
												   $(".a36").show();  
												$(".img_54").show();
												
											  },eval(6000+""+speedControl));
							   
							   setTimeout(function(){
												    $(".a36").hide();
												   $(".a37").show();  
												$(".img_53").show();
												
											  },eval(7000+""+speedControl));
							   
							   setTimeout(function(){
												    $(".a37").hide();
												   $(".a38").show();  
												$(".img_52").show();
												
											  },eval(8000+""+speedControl));
							   
								   setTimeout(function(){
									   $(".hand4").css("visibility","visible");
													$(".tab15_td17_1,.tab15_td20_1").css("visibility","visible");   
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(9200+""+speedControl));
								 
							SpaceAndAutorunSpeed = eval(9400+""+speedControl); 
						  }
						  
						  else if((spaceclick==2) && (buttonSequence==4)){
						   $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".c1").show();
													   
							   setTimeout(function(){
												    $(".anim1").show();
							 						$(".boy_1").hide();
												
											  },eval(500+""+speedControl));
							   
							/* setTimeout(function(){
												   
												  
												   $(".anim2").show();
							 						
											  },eval(3600+""+speedControl));*/

							   setTimeout(function(){
												   
												   $(".anim1").hide();
												   $(".anim2").show();
							 						$(".arrow_1").show();
											  },eval(2200+""+speedControl));
							   
							/*   setTimeout(function(){
												   
												  
												   $(".anim2").show();
							 						
											  },eval(3600+""+speedControl));*/
							   
							   setTimeout(function(){
												   
												   $(".arrow_2").show();
												   $(".anim2").hide();
												   $(".anim3").show();
							 						
											  },eval(3900+""+speedControl));
							   
							   setTimeout(function(){
												  $(".c2").show();
												
												   $(".arrow_3").show();
											  },eval(5500+""+speedControl));
							   
								   setTimeout(function(){
													
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(5700+""+speedControl));
							 
							SpaceAndAutorunSpeed = eval(5800+""+speedControl); 
						  }
						  
						  
						  else if((spaceclick==5) && (buttonSequence==4)){
						   $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							
													   
							   setTimeout(function(){
												  
												$(".arrow_4").show();
											  },eval(500+""+speedControl));
							   
							 setTimeout(function(){
												   
												   $(".d1").css("visibility","visible");	
											  },eval(900+""+speedControl));

							   setTimeout(function(){
												   
												  $(".arrow_5").show();
											  },eval(1400+""+speedControl));
							   
							/*   setTimeout(function(){
												   
												  
												   $(".anim2").show();
							 						
											  },eval(3600+""+speedControl));*/
							   
							   setTimeout(function(){
												   
												  $(".d2").css("visibility","visible");
							 						
											  },eval(1900+""+speedControl));
							   
								   setTimeout(function(){
													
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(2000+""+speedControl));
							 
							SpaceAndAutorunSpeed = eval(2100+""+speedControl); 
						  }
						  
						  
						  

		
		else if((spaceclick==2) && (buttonSequence==5)){
						  	$(".content5_4").css("visibility","visible");
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
			
		
		setTimeout(function(){
								$(".tab23_td2_1").css("visibility","visible");
											
							  },eval(800+""+speedControl));
									 
							    setTimeout(function(){
										$(".tab23_td3_1").css("visibility","visible");
							  },eval(1400+""+speedControl));
								
							 setTimeout(function(){
											$(".tab23_td4_1").css("visibility","visible");
							  },eval(2000+""+speedControl));
							 
							  setTimeout(function(){
									$(".tab23_td5_1").css("visibility","visible");	
											
							  },eval(2600+""+speedControl));
		
		 					setTimeout(function(){
													
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(2800+""+speedControl));
							 
							SpaceAndAutorunSpeed = eval(3000+""+speedControl); 
						  }
		
		 else if((spaceclick==3) && (buttonSequence==5)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".tab23_td6_1").css("visibility","visible");
							 
							  setTimeout(function(){
								$(".tab23_td7_1").css("visibility","visible");
											
							  },eval(800+""+speedControl));
									 
							    setTimeout(function(){
										$(".tab23_td8_1").css("visibility","visible");
							  },eval(1400+""+speedControl));
								
							 setTimeout(function(){
											$(".tab23_td9_1").css("visibility","visible");
							  },eval(2000+""+speedControl));
							 
							  setTimeout(function(){
									$(".tab23_td10_1").css("visibility","visible");	
											
							  },eval(2600+""+speedControl));
							
							  setTimeout(function(){
													
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(2800+""+speedControl));
							 
							SpaceAndAutorunSpeed = eval(3000+""+speedControl); 
						  }
						  
						   else if((spaceclick==4) && (buttonSequence==5)){
						  $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
						 				 
							   $(".tab3_0_1").css("visibility","visible");
							   
							   $(".tab3_1_1").css("visibility","visible");
							   
							    setTimeout(function(){
													
							$(".bg_blue1").addClass("blue");
								
							$(".tab23_td15_1").css("visibility","visible");
											
							  },eval(800+""+speedControl));
								
								 setTimeout(function(){
								
								
										$(".tab23_td14_1").css("visibility","visible");		
							  },eval(1100+""+speedControl));
									 
							    setTimeout(function(){
													$(".bg_blue1").removeClass("blue");
										$(".bg_blue2").addClass("blue");
										
										$(".tab23_td13_1").css("visibility","visible");
							  },eval(1400+""+speedControl));
								
							 setTimeout(function(){
												 
										$(".tab23_td12_1").css("visibility","visible");	
							  },eval(1700+""+speedControl));
							 
							  setTimeout(function(){
											$(".bg_blue2").removeClass("blue");	  
										$(".bg_blue3").addClass("blue");
										$(".tab23_td11_1").css("visibility","visible");		
										
							  },eval(2000+""+speedControl));
							 
							
							   setTimeout(function(){
												   $(".bg_blue3").removeClass("blue");
												   	$(".tab3_3_1").css("visibility","visible");
												  $(".tab3_2_1").css("visibility","visible");
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(2300+""+speedControl));
							
								 
							
							speedSpacebar = eval(2400+""+speedControl); 
						  }
						  
						  
						  
						  
						  
						  
						  
						  
						  
						   else if((spaceclick==5) && (buttonSequence==5)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 
							 $(".bdr_right").css("border-color","#000");
							 $(".tab24_td1_1,.txt_2").css("visibility","visible");
							 
							 setTimeout(function(){
								$(".tab24_td2_1").css("visibility","visible");
											
							  },eval(800+""+speedControl));
									 
							    setTimeout(function(){
										$(".tab24_td3_1").css("visibility","visible");
							  },eval(1400+""+speedControl));
								
							 setTimeout(function(){
											$(".tab24_td4_1").css("visibility","visible");
							  },eval(2000+""+speedControl));
							 
							  setTimeout(function(){
									$(".tab24_td5_1").css("visibility","visible");	
											
							  },eval(2600+""+speedControl));
							  
							   setTimeout(function(){
												  
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(2800+""+speedControl));
							  
							 
							
							speedSpacebar = eval(3000+""+speedControl); 
						  }
						  
						  
						  
						  
						  else if((spaceclick==6) && (buttonSequence==5)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".tab24_td6_1").css("visibility","visible");
							 
							  setTimeout(function(){
								$(".tab24_td7_1").css("visibility","visible");
											
							  },eval(800+""+speedControl));
							  
							  
									 
							    setTimeout(function(){
										$(".tab24_td8_1").css("visibility","visible");
							  },eval(1400+""+speedControl));
								
							 setTimeout(function(){
											$(".tab24_td9_1").css("visibility","visible");
							  },eval(2000+""+speedControl));
							 
							  setTimeout(function(){
									$(".tab24_td10_1").css("visibility","visible");	
											
							  },eval(2600+""+speedControl));
							
							   setTimeout(function(){
												  
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(2800+""+speedControl));
							  
							 
							
							speedSpacebar = eval(3000+""+speedControl); 
						  }
						  
						   else if((spaceclick==7) && (buttonSequence==5)){
						  $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
						 				 
							    $(".tab4_0_1").css("visibility","visible");
							   
							   $(".tab4_1_1").css("visibility","visible");
							   
							    setTimeout(function(){
													
							$(".bg_blue4").addClass("blue");
								
							$(".tab24_td15_1").css("visibility","visible");
											
							  },eval(800+""+speedControl));
								
								 setTimeout(function(){
								
								
										$(".tab24_td14_1").css("visibility","visible");		
							  },eval(1300+""+speedControl));
								 
								 
								 
								 
								 
								 
									setTimeout(function(){
							  $(".Ar_0").fadeIn();		
							  },eval(2000+""+speedControl));
								
								
								setTimeout(function(){
							  $(".carry_0").css("visibility","visible");		
							  },eval(2500+""+speedControl));
								
								
								
							  setTimeout(function(){
							  $(".color_0").css("color","blue");		
							  },eval(3000+""+speedControl));
								
								 
								 
								 
								 
								 
								 
								 
								 
								 
								 
								 
									 
							    setTimeout(function(){
													$(".bg_blue4").removeClass("blue");
										$(".bg_blue5").addClass("blue");
										
										$(".tab24_td13_1").css("visibility","visible");
							  },eval(3700+""+speedControl));
								
								 setTimeout(function(){
							  $(".color_0").css("color","black");		
							  },eval(4200+""+speedControl));
								 
								 
								 
								
								
							 setTimeout(function(){
												 
										$(".tab24_td12_1").css("visibility","visible");	
							  },eval(4700+""+speedControl));
							 
							  setTimeout(function(){
											$(".bg_blue5").removeClass("blue");	  
										$(".bg_blue6").addClass("blue");
										$(".tab24_td11_1").css("visibility","visible");		
										
							  },eval(5200+""+speedControl));
							 
							
							   setTimeout(function(){
												   $(".bg_blue6").removeClass("blue");
												   	$(".tab4_3_1").css("visibility","visible");
												  $(".tab4_2_1").css("visibility","visible");
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(5700+""+speedControl));
							
							
							speedSpacebar = eval(6000+""+speedControl); 
						  }
						  
						  
						  	else if((spaceclick==2) && (buttonSequence==6)){
						  	$(".content5_4").css("visibility","visible");
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
			
		
		setTimeout(function(){
								$(".tab23_td2_1_nw").css("visibility","visible");
											
							  },eval(800+""+speedControl));
									 
							    setTimeout(function(){
										$(".tab23_td3_1_nw").css("visibility","visible");
							  },eval(1400+""+speedControl));
								
							 setTimeout(function(){
											$(".tab23_td4_1_nw").css("visibility","visible");
							  },eval(2000+""+speedControl));
							 
							  setTimeout(function(){
									$(".tab23_td5_1_nw").css("visibility","visible");	
											
							  },eval(2600+""+speedControl));
		
		 					setTimeout(function(){
													
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(2800+""+speedControl));
							 
							SpaceAndAutorunSpeed = eval(3000+""+speedControl); 
						  }
		
		 else if((spaceclick==3) && (buttonSequence==6)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".tab23_td6_1_nw").css("visibility","visible");
							 
							  setTimeout(function(){
								$(".tab23_td7_1_nw").css("visibility","visible");
							   },eval(800+""+speedControl));
									 
							  setTimeout(function(){
										$(".tab23_td8_1_nw").css("visibility","visible");
							  },eval(1400+""+speedControl));
								
							 setTimeout(function(){
											$(".tab23_td9_1_nw").css("visibility","visible");
							  },eval(1500+""+speedControl));
							 
							  setTimeout(function(){
									$(".tab23_td10_1_nw").css("visibility","visible");	
											
							  },eval(2300+""+speedControl));
							
							  setTimeout(function(){
													
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");	
											  },eval(2800+""+speedControl));
							 
							SpaceAndAutorunSpeed = eval(3000+""+speedControl); 
						  }
						  
						   else if((spaceclick==4) && (buttonSequence==6)){
						  $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
						 				 
							   $(".tab3_0_1_nw").css("visibility","visible");
							   
							   $(".tab3_1_1_nw").css("visibility","visible");
							   
							    setTimeout(function(){
													
							$(".bg_blue1_nw").addClass("blue");
								
							$(".tab23_td15_1_nw").css("visibility","visible");
											
							  },eval(800+""+speedControl));
								
								 setTimeout(function(){
								
								
										$(".tab23_td14_1_nw").css("visibility","visible");		
							  },eval(1200+""+speedControl));
									 
							    setTimeout(function(){
													$(".bg_blue1_nw").removeClass("blue");
										$(".bg_blue2_nw").addClass("blue");
										
										$(".tab23_td13_1_nw").css("visibility","visible");
							  },eval(1600+""+speedControl));
								
							 setTimeout(function(){
												 
										$(".tab23_td12_1_nw").css("visibility","visible");	
							  },eval(2000+""+speedControl));
							 
							  setTimeout(function(){
											$(".bg_blue2_nw").removeClass("blue");	  
										$(".bg_blue3_nw").addClass("blue");
										$(".tab23_td11_1_nw").css("visibility","visible");		
										
							  },eval(2400+""+speedControl));
							 
							
							   setTimeout(function(){
												   $(".bg_blue3_nw").removeClass("blue");
												   	$(".tab3_3_1_nw").css("visibility","visible");
												  $(".tab3_2_1_nw").css("visibility","visible");
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(2700+""+speedControl));

							
								 
							
							speedSpacebar = eval(2700+""+speedControl); 
						  }
						  
						  
						  
						  
						  
						  
						  
						  
						  
						   else if((spaceclick==5) && (buttonSequence==6)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 
							 $(".bdr_right_nw").css("border-color","#000");
							 $(".tab24_td1_1_nw").css("visibility","visible");
							 
							 setTimeout(function(){
								$(".tab24_td2_1_nw").css("visibility","visible");
											
							  },eval(800+""+speedControl));
									 
							    setTimeout(function(){
										$(".tab24_td3_1_nw").css("visibility","visible");
							  },eval(1400+""+speedControl));
								
							 setTimeout(function(){
											$(".tab24_td4_1_nw").css("visibility","visible");
							  },eval(2000+""+speedControl));
							 
							  setTimeout(function(){
									$(".tab24_td5_1_nw").css("visibility","visible");	
											
							  },eval(2600+""+speedControl));
							  
							   setTimeout(function(){
												  
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(2800+""+speedControl));
							  
							 
							
							speedSpacebar = eval(3000+""+speedControl); 
						  }
						  
						  
						  
						  
						  else if((spaceclick==6) && (buttonSequence==6)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
							 $(".tab24_td6_1_nw").css("visibility","visible");
							 
							  setTimeout(function(){
								$(".tab24_td7_1_nw").css("visibility","visible");
											
							  },eval(800+""+speedControl));
							  
							  
									 
							    setTimeout(function(){
										$(".tab24_td8_1_nw").css("visibility","visible");
							  },eval(1400+""+speedControl));
								
							 setTimeout(function(){
											$(".tab24_td9_1_nw").css("visibility","visible");
							  },eval(1500+""+speedControl));
							 
							  setTimeout(function(){
									$(".tab24_td10_1_nw").css("visibility","visible");	
											
							  },eval(2300+""+speedControl));
							
							   setTimeout(function(){
												  
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(2800+""+speedControl));
							  
							 
							
							speedSpacebar = eval(3000+""+speedControl); 
						  }
						  
						   else if((spaceclick==7) && (buttonSequence==6)){
						  $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
						 				 
							    $(".tab4_0_1_nw").css("visibility","visible");
							   
							   $(".tab4_1_1_nw").css("visibility","visible");
							   
							    setTimeout(function(){
													
							$(".bg_blue4_nw").addClass("blue_nw");
							$(".tab24_td15_1_nw").css("visibility","visible");
							},eval(800+""+speedControl));
								
							  setTimeout(function(){
							  $(".tab24_td14_1_nw").css("visibility","visible");		
							  },eval(1100+""+speedControl));
									 
								
							  setTimeout(function(){
							  $(".Ar_1").fadeIn();		
							  },eval(1800+""+speedControl));
								
								
								setTimeout(function(){
							  $(".carry").css("visibility","visible");		
							  },eval(2300+""+speedControl));
								
								
								
							  setTimeout(function(){
							  $(".color_1").css("color","blue");		
							  },eval(2800+""+speedControl));
								
								
								
									 
									 
									 
									 
							    setTimeout(function(){
													$(".bg_blue4_nw").removeClass("blue");
										$(".bg_blue5_nw").addClass("blue");
										
										$(".tab24_td13_1_nw").css("visibility","visible");
							  },eval(3300+""+speedControl));
								
								 setTimeout(function(){
							  $(".color_1").css("color","black");		
							  },eval(3800+""+speedControl));
								 
								 
								
								
							 setTimeout(function(){
												 
										$(".tab24_td12_1_nw").css("visibility","visible");	
							  },eval(4300+""+speedControl));
							 
							  setTimeout(function(){
											$(".bg_blue5_nw").removeClass("blue");	  
										$(".bg_blue6_nw").addClass("blue");
										$(".tab24_td11_1_nw").css("visibility","visible");		
										
							  },eval(4800+""+speedControl));
							 
							
							   setTimeout(function(){
												   $(".bg_blue6_nw").removeClass("blue");
												   	$(".tab4_3_1_nw,.hand7").css("visibility","visible");
												  $(".tab4_2_1_nw").css("visibility","visible");
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(5300+""+speedControl));
							
							
							speedSpacebar = eval(5500+""+speedControl); 
						  }
						  
						  
						  else if((spaceclick==2) && (buttonSequence==7)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
						
							 
							  setTimeout(function(){
								$(".btn7_d1").css("visibility","visible");
											
							  },eval(800+""+speedControl));
							  
							  
									 
							    setTimeout(function(){
										$(".btn7_d2").css("visibility","visible");
							  },eval(1300+""+speedControl));
								
							 setTimeout(function(){
											$(".btn7_d3").css("visibility","visible");
							  },eval(1800+""+speedControl));
							 
							  setTimeout(function(){
									$(".btn7_d4").css("visibility","visible");	
											
							  },eval(2300+""+speedControl));
							  
							  
							   setTimeout(function(){
									$(".btn7_d5").css("visibility","visible");	
											
							  },eval(2800+""+speedControl));
							   
							   
							
							   setTimeout(function(){
												  
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
													
											  },eval(3300+""+speedControl));
							  
							 
							
							 SpaceAndAutorunSpeed = eval(3300+""+speedControl); 
						  }
						  
						  
						   else if((spaceclick==3) && (buttonSequence==7)){
						  	
						 	
							 
							 $(".bdr_right1").css("border-color","#000");
							 
							 SpaceAndAutorunSpeed = eval(500+""+speedControl); 
						  }
		
						
						
						 else if((spaceclick==4) && (buttonSequence==7)){
						  	
						 	 $(".disableauto").show().css("cursor","default");
							 $("button").prop("disabled",true).css("cursor","default");
						
							 	$(".content7_4").css("visibility","visible");
							  setTimeout(function(){
								$(".btn7_d6").css("visibility","visible");
											
							  },eval(800+""+speedControl));
							  
							  
									 
							    setTimeout(function(){
										$(".btn7_d7").css("visibility","visible");
							  },eval(1300+""+speedControl));
								
							 setTimeout(function(){
											$(".btn7_d8").css("visibility","visible");
							  },eval(1800+""+speedControl));
							 
							  setTimeout(function(){
									$(".btn7_d9").css("visibility","visible");	
											
							  },eval(2300+""+speedControl));
							  
							  
							   setTimeout(function(){
									$(".btn7_d10").css("visibility","visible");	
											
							  },eval(2800+""+speedControl));
							   
							   
							
							   setTimeout(function(){
												  
												 $(".disableauto").hide().css("cursor","pointer");
							 $("button").prop("disabled",false).css("cursor","pointer");
												$(".hand8").css("visibility","visible");		
											  },eval(3300+""+speedControl));
							  
							 
							
							 SpaceAndAutorunSpeed = eval(3300+""+speedControl); 
						  }
						  
		
	
	
	
						  
						  
						   else{
		   SpaceAndAutorunSpeed = eval(500+""+speedControl); 
		  }
		
		
	}
	Local2 = function () {}
	Local3 = function () {}
	Local4 = function () {}
	Local5 = function () {}



















});