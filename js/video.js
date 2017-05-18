$(document).ready(function() { 
	var clientH=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  $('.videoWrap').css({'width':'100%','height':clientH});
  $('.videoBox').css({'width':'100%','height':clientH});
	$('.h5video').css({'width':'100%','height':clientH});
	$('.landWrap').css({'width':'100%','height':clientH});
	$('.follow').css({'width':'100%','height':clientH});
	$('.videoBox').css({'width':'120%','left':'-10%'});
	$('.h5video').css({'width':'100%'});
	//为 <video> 元素添加 ontimeupdate 事件，如果当前播放位置改变则执行函数 
	var video=$('#h5video')[0];
     video.addEventListener('playing', function() {
           video.addEventListener('timeupdate', function() {
            	if(video.ended){
              		$('#videoWrap').hide();
       				    $('.landWrap').show();
       			  }
           })
    })

}); 
