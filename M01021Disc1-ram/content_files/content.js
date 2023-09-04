$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
							
							
						     					 
							 $(".hand1").show();

	$(".first_button").click(function () {
		buttonSequence = 1;
		ContentCount =6;

		 $(".autorun").css("pointer-events","auto");
		
		$(".hand,.ContentContainer").hide();
		$(".tick1,.ContentFirstButton,.hand2,.middle1").show().css("display", "inline-block");
		
		$(".two_no,.three_no,.four_no,.five_no,.one_mug,.two_mug,.three_mug,.four_mug,.five_mug,.six_mug,.seven_mug").hide();
		
		$(".img_2,.img_3,.img_4,.img_5,.img_6,.img_7,.img_8,.img_9,.img_10,.img_11,.img_12").hide();
		
		$(".anim1_1,.anim1_2,.anim1_3,.anim1_4").hide();
		
		$(".anim1_1_final,.anim1_2_final,.anim1_3_final,.anim1_4_final,.a1,.a2,.a3,.a4,.a5,.a6").css("visibility","hidden");
		
		$(".bdr_right_1").css("border-color","transparent");
		
		$(".bdr_right_2").css("border-color","transparent");
		
		$(".bdr_right_3").css("border-color","transparent");
		
		$(".content1_1").removeClass("bgcolor_1");
		
		/*$(".box_shadow1").css("box-shadow","none");*/
		
	});

	$(".second_button").click(function () {
		buttonSequence = 2;
		ContentCount = 8;
	
		$(".hand,.ContentContainer").hide();
		
		$(".tick2,.ContentSecondButton,.hand3,.middle2").show().css("display", "inline-block");
		
		$(".img_13,.img_14,.img_15,.img_16,.img_17,.img_18,.img_19,.img_20,.img_21,.img_22").hide();
		
		$(".b1,.b2,.b3,.b4,.b5,.b6,.b7,.b8,.b9,.b10,.b11,.b12").hide();
		
		$(".tab4_td2_1,.tab4_td3_1,.tab4_td4_1,.tab4_td5_1").css("visibility","hidden");
		
		$(".tab4_td6").removeClass("bgcolor_2");
		
		$(".tab4_td8").removeClass("bgcolor_2");
		
		$(".tab4_td10").removeClass("bgcolor_2");
		
		
	});

	$(".third_button").click(function () {
		buttonSequence = 3;
		ContentCount = 9;
		i=100;
		
		$(".hand,.ContentContainer").hide();
		
		$(".tick3,.ContentThirdButton,.hand3,.middle3").show().css("display", "inline-block");
		
		$(".img_23,.img_24,.img_25,.img_26,.img_27,.img_28,.img_29,.img_30,.img_31,.img_32,.img_33,.img_34,.img_35,.img_36,.img_37,.img_38,.img_39,.img_40,.img_41,.img_42,.img_43,.img_44,.img_45,.img_46,.img_47,.img_48,.img_49,.img_50,.img_51,.img_52,.img_53,.img_54,.img_55,.img_56,.img_57,.img_58,.img_59,.img_60,.img_61,.img_62,.img_63,.img_64,.img_65,.img_66,.img_67,.img_68,.img_69,.img_70,.brac,.b1z").hide();
		
		$(".a1,.a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a12,.a13,.a14,.a15,.a16,.a17,.a18,.a19,.a20,.a21,.a22,.a23,.a24,.a25,.a26,.a27,.a28,.a29,.a30,.a31,.a32,.a33,.a34,.a35,.a36,.a37,.a38").hide();
		$(".tab4_td4_1").css("visibility","hidden");
		
		$(".tab13_td2_1,.tab13_td7_1,.tab13_td4_1,.tab13_td9_1,.b1,.b2,.tab14_td7_1,.tab14_td9_1,.tab14_td14_1,.tab14_td16_1,.tab15_td7_1,.tab15_td9_1,.tab15_td12_1,.tab15_td14_1,.tab15_td17_1,.tab15_td20_1,.tab15_td4_1 ").css("visibility","hidden");
		
		$(".bg_color1").removeClass("bgcolor_1");
		
		$(".bg_color2").removeClass("bgcolor_1");
		
		$(".bg_color3").removeClass("bgcolor_1");
		
		$(".bdr_right").css("border-color","transparent");
		
	});
	
	

	$(".fourth_button").click(function () {
		buttonSequence = 4;
		ContentCount =6;
		$(".hand,.ContentContainer").hide();
		
		$(".anim1,.anim2,.anim3,.c1,.c2,.arrow_1,.arrow_2,.arrow_3,.arrow_4,.arrow_5").hide();
		
		$(".d1,.d2").css("visibility","hidden");
		
		$(".boy_1").show();
		$(".tick4,.ContentFourthButton,.hand4,.middle4").show().css("display", "inline-block");
		
	});
	
	
	$(".fifth_button").click(function () {
		buttonSequence = 5;
		ContentCount = 7;
		
		$(".hand,.ContentContainer,.Ar_0").hide();
		$(".tick5,.ContentFifthButton,.middle5").show().css("display", "inline-block");
		
		
		$(".tab23_td2_1,.tab23_td3_1,.tab23_td4_1,.tab23_td5_1,.tab23_td6_1,.tab23_td7_1,.tab23_td8_1,.tab23_td9_1,.tab23_td10_1,.tab23_td11_1,.tab23_td12_1,.tab23_td13_1,.tab23_td14_1,.tab23_td15_1,.content5_4").css("visibility","hidden");
		
		
		$(".tab24_td1_1,.tab24_td2_1,.tab24_td3_1,.tab24_td4_1,.tab24_td5_1,.tab24_td6_1,.tab24_td7_1,.tab24_td8_1,.tab24_td9_1,.tab24_td10_1,.tab24_td11_1,.tab24_td12_1,.tab24_td13_1,.tab24_td14_1,.tab24_td15_1,.carry_0,.txt_2").css("visibility","hidden");
		
		$(".tab3_0_1,.tab3_1_1,.tab3_2_1,.tab3_3_1,.tab4_0_1,.tab4_1_1,.tab4_2_1,.tab4_3_1").css("visibility","hidden");
		
		$(".bdr_right").css("border-color","transparent");
		
		$(".bdr_right1").css("border-color","transparent");

$(".bg_blue1").addClass("blue");

$(".bg_blue2").addClass("blue");

$(".bg_blue3").addClass("blue");

$(".bg_blue4").addClass("blue");

$(".bg_blue5").addClass("blue");

$(".bg_blue6").addClass("blue");




$(".bg_blue1").removeClass("blue");

$(".bg_blue2").removeClass("blue");

$(".bg_blue3").removeClass("blue");

$(".bg_blue4").removeClass("blue");

$(".bg_blue5").removeClass("blue");

$(".bg_blue6").removeClass("blue");
		
		
	});



$(".sixth_button").click(function(){
																   buttonSequence = 6;
																   ContentCount =7;
															   $(".hand,.ContentContainer,.handA,.tickA,.Ar_1").hide();
													           $(".tick6,.ContentSixthButton,.middle6_1").show().css("display","inline-block");
															    $(".six_button1,.six_button2").css("color", "#000");
																$(".bdr_right_1").css("border-color","#000");
															   $(".tab23_td2_1_nw,.tab23_td3_1_nw,.tab23_td4_1_nw,.tab23_td5_1_nw,.tab23_td6_1_nw,.tab23_td7_1_nw,.tab23_td8_1_nw,.tab23_td9_1_nw,.tab23_td10_1_nw,.tab23_td11_1_nw,.tab23_td12_1_nw,.tab23_td13_1_nw,.tab23_td14_1_nw,.tab23_td15_1_nw,.content5_4_nw").css("visibility","hidden");
		
		$(".tab24_td1_1_nw,.tab24_td2_1_nw,.tab24_td3_1_nw,.tab24_td4_1_nw,.tab24_td5_1_nw,.tab24_td6_1_nw,.tab24_td7_1_nw,.tab24_td8_1_nw,.tab24_td9_1_nw,.tab24_td10_1_nw,.tab24_td11_1_nw,.tab24_td12_1_nw,.tab24_td13_1_nw,.tab24_td14_1_nw,.tab24_td15_1_nw").css("visibility","hidden");
		
		
		$(".tab3_0_1_nw,.tab3_1_1_nw,.tab3_2_1_nw,.tab3_3_1_nw,.tab4_0_1_nw,.tab4_1_1_nw,.tab4_2_1_nw,.tab4_3_1_nw,.carry,.hand7").css("visibility","hidden");
		
		$(".bdr_right_nw").css("border-color","transparent");
		
		$(".bdr_right1_nw").css("border-color","transparent");

$(".bg_blue1_nw").addClass("blue");

$(".bg_blue2_nw").addClass("blue");

$(".bg_blue3_nw").addClass("blue");

$(".bg_blue4_nw").addClass("blue");

$(".bg_blue5_nw").addClass("blue");

$(".bg_blue6_nw").addClass("blue");




$(".bg_blue1_nw").removeClass("blue");

$(".bg_blue2_nw").removeClass("blue");

$(".bg_blue3_nw").removeClass("blue");

$(".bg_blue4_nw").removeClass("blue");

$(".bg_blue5_nw").removeClass("blue");

$(".bg_blue6_nw").removeClass("blue");
															   
 });




 $(".seventh_button").click(function(){
																   buttonSequence = 7;
																   ContentCount =4;
															   $(".hand,.ContentContainer").hide();
													           $(".tick7,.ContentSeventhButton,.middle7").show().css("display","inline-block");	
$(".bdr_right1").css("border-color","transparent");
		$(".content7_4,.hidd,.hand8").css("visibility","hidden");
		
																 });
 





});