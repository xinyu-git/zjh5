$(function(){
		$("html,body").stop(true,true).animate({scrollTop:0},1000);
		$('#plane1').on('webkitAnimationEnd',function(){
			$('#pageImg2').addClass('pageImgAni');  //第二个格子亮
			$('#plane2').addClass('plane2Ani');		//第二个飞机飞入
		})
		$('#plane2').on('webkitAnimationEnd',function(){
			$('#dialog1').addClass('dialogAni');  //第一个对话框显示
			//$('#dialog1_audio')[0].play();  
			audioPlay('dialog1_audio')
			$('#pageImg3').addClass('pageImgAni'); //第三个格子亮
			$('#plane3').addClass('plane3Ani');		//第三个飞机淡出
		})
		
		$('#plane3').on('webkitAnimationEnd',function(){
			$('#dialog2').addClass('dialogAni');//第二个对话框显示
			//$('#dialog2_audio')[0].play(); 
			audioPlay('dialog2_audio')
			$('#fire').addClass('fireAni');    
			setTimeout(function(){
				//$('#audio_fire')[0].play();  //战舰开火
				audioPlay('audio_fire')
			},2000);
		})
		$('#fire').on('webkitAnimationEnd',function(){
			$('#pageImg4').addClass('pageImgAni'); //第四个格子亮
			$('#spray').addClass('sprayAni');   //水花渐入
			setTimeout(function(){
				//$('#audio_water')[0].play();  //战舰开火
				audioPlay('audio_water')
			},1000);
		})
		$('#spray').on('webkitAnimationEnd',function(){
			$('#pageImg5').addClass('pageImgAni'); //第五个格子亮
			$('#dunker').addClass('dunkerAni');   //潜艇淡入		
		})
		$('#dunker').on('webkitAnimationEnd',function(){
			$('#water_fire').addClass('fireAni')  //水下炮火
		})
		$('#water_fire').on('webkitAnimationEnd',function(){
			showScroll();
			$('#dialog3').addClass('dialogAni');//第三个对话框显示
			//$('#dialog3_audio')[0].play(); 
			audioPlay('dialog3_audio')
		})
		$('#dialog3').on('webkitAnimationEnd',function(){
			$('#pageBottom').addClass('boardAni');
			$('#rudder').addClass('rudderAni');  //船舵动
            $('#pointerImg').addClass('pointerAni');  //指针动
		})
		$('#pointerImg').on('webkitAnimationEnd',function(){
            $('#pointerImg').addClass('pointerAni1');  //指针循环动           	
        })
		var srcEl = $('#pageBottom');
		var oBtn=srcEl.find('.btn');
		srcEl[0].addEventListener('dualtouchstart', function(event) {
			//dualtouchstart 双指操作
			oBtn.addClass('btn_active');
           	$('.wrap-slide').hide();
			$('#videoWrap').show();
            //$('#h5video')[0].play();   
           videoPlay('h5video');     
        }, false);
		document.body.addEventListener('touchmove', function(e) {
            e.preventDefault();
            return false;
        }, false);
})

function showScroll(){
	var wrapH=$('.wrap').height();
	var clientH=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var difH=wrapH-clientH;
	$("html,body").stop(true,true).animate({scrollTop:difH},1000);
}
function audioAutoPlay(id){  
	var audio = document.getElementById(id) 
	var play = function(){  
	        audio.play();  
	        document.removeEventListener("touchstart",play, false);  
	    };  
	audio.play();  
	document.addEventListener("WeixinJSBridgeReady", function () {  
	    play();  
	}, false);  
	document.addEventListener('YixinJSBridgeReady', function() {  
	    play();  
	}, false);  
	document.addEventListener("touchstart",play, false);  
}
function audioPlay(id){
	var audio = document.getElementById(id);
	audio.addEventListener("loadedmetadata",function(){
   	 	audio.play();
	});
	audio.play(); 
	document.addEventListener("WeixinJSBridgeReady", function () {  
	   audio.play(); 
	}, false);  
}

//可以在这个事件触发后播放一次然后暂停（这样以后视频会处于加载状态，为后面的流畅播放做准备）
function videoPlay(id){
	var video=document.getElementById(id);
	video.play();
	document.addEventListener("WeixinJSBridgeReady", function (){ 
   	 	video.play();
    	video.pause();
	}, false)
}