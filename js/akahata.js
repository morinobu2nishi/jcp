// -------------------------------------------------
// 蛻晄悄險ｭ螳夲ｼ医＞縺｣縺溘ｓHTML繧堤ｩｺ縺ｫ縺吶ｋ��
// -------------------------------------------------
$(function(){
	$("section.akahatabox p").html("");
});

	// -------------------------------------------------
	// XML隱ｭ縺ｿ霎ｼ縺ｿ
	// -------------------------------------------------

	function xmlLoad(){
	$.ajax({
	url:'akahata.xml',
	type:'get',
	cache : false,
	dataType:'xml',
	timeout:1000,
	success:parse_xml
	});
	}

	// -------------------------------------------------
	// XML繝��繧ｿ繧貞叙蠕�
	// -------------------------------------------------

	function parse_xml(xml,status){
	if(status!='success')return;
	$(xml).find('entry').each(disp);
	}

	// -------------------------------------------------
	// HTML逕滓�髢｢謨ｰ
	// -------------------------------------------------

	function disp(){

	//蜷�ｦ∫ｴ�繧貞､画焚縺ｫ譬ｼ邏�
	var $day = $(this).find('day').text();
	var $label = $(this).find('label').text();
	var $title = $(this).find('title').text();
	var $content = $(this).find('content').text();
	var $url = $(this).find('url').text();
	var $image = $(this).find('image').text();
	var $alt = $(this).find('alt').text();

	if($label === 'main'){
			$('<a href="https://www.jcp.or.jp/akahata/">赤旗記事一覧</a>'+'<span class="data">'+$day+'</span>').appendTo('section.akahatabox p');
			if($image != ""){
				$('<li>'+
					'<a href="'+$url+'"><div><p class="title">'+$title.substring(0,36) +'</p>'+
					'<p class="text">'+$content.substring(0,90)+'.....'+'</p></div>'+
					'<div><img src="'+$image+'" alt="'+$alt+'" ></div>'+
					'</a></li>').appendTo('section.akahatabox ul');
				}else {
					$('<li  class="noimg">'+
					'<a href="'+$url+'"><div><p class="title">'+$title.substring(0,36) +'</p>'+
					'<p class="text">'+$content.substring(0,90)+'......'+'</p></div>'+
					'</a></li>').appendTo('section.akahatabox ul');
				}
		} else if ($label === 'sub'){
			$('<li>'+
			'<a href="'+$url+'">'+$title.substring(0,36)+'</a>'+
			'</li>').appendTo('section.akahatabox ul');
		} else if ($label === 'syutyo'){ 
			$('<li>'+
			'<a href="'+$url+'">'+$title.substring(0,33)+'</a>'+
			'</li>').appendTo('section.akahatabox ul');
		} else if ($label === 'tyouryu'){
			$('<li>'+
			'<a href="'+$url+'">きょうの潮流'+$title.substring(0,33)+'</a>'+
			'</li>').appendTo('section.akahatabox ul');
		} else {
		}
	}

	$(function(){
	xmlLoad();
	});