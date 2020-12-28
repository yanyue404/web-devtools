// ==UserScript==
// @name         百度文库破解加强、全网VIP视频破解，免费在线看、抖音去水印下载、知乎使用增强、CSDN使用增强，等多功能脚本
// @namespace    congcongguoke_baiduwenku_script
// @version      2.0.13
// @description  【自用，长期维护】【功能有】1：百度文库文档免费下载、文档内容自由复制、广告过滤；2：CSDN阅读加强：CSDN自动展开、去广告、净化剪贴板、免登陆等；3：知乎使用增强：外链接直接跳出、内容自动展开、短视频下载等；4：抖音去水印原视频下载，非调用第三方；5：视频解析，支持大部分视频播放平台[支持优酷 | 腾讯 | 爱奇艺 | 哔哩哔哩等常用视频]；6：全网音乐直接下载；7：优惠券查询
// @author       匆匆过客、gorgiaxx、王超
// @include      *://wenku.baidu.com/*
// @match        *://music.163.com/*
// @match        *://y.qq.com/*
// @match        *://www.kugou.com/*
// @include      *://www.iesdouyin.com/share/video/*
// @include      *://*.zhihu.com/*
// @include      *://v.vzuu.com/video/*
// @include      *://video.zhihu.com/video/*
// @include      *://blog.csdn.net/*/article/details/*
// @include      *://*.blog.csdn.net/article/details/*
// @include      *://bbs.csdn.net/topics/*
// @include      *://*.iteye.com/blog/*
// @include      *://*.youku.com/v_*
// @include      *://*.iqiyi.com/v_*
// @include      *://*.iqiyi.com/w_*
// @include      *://*.iqiyi.com/a_*
// @include      *://*.le.com/ptv/vplay/*
// @include      *://v.qq.com/x/cover/*
// @include      *://v.qq.com/x/page/*
// @include      *://*.tudou.com/listplay/*
// @include      *://*.tudou.com/albumplay/*
// @include      *://*.tudou.com/programs/view/*
// @include      *://*.mgtv.com/b/*
// @include      *://film.sohu.com/album/*
// @include      *://tv.sohu.com/v/*
// @include      *://*.acfun.cn/v/*
// @include      *://*.bilibili.com/video/*
// @include      *://*.bilibili.com/anime/*
// @include      *://*.bilibili.com/bangumi/play/*
// @include      *://*.baofeng.com/play/*
// @include      *://vip.pptv.com/show/*
// @include      *://v.pptv.com/show/*
// @include      *://item.taobao.com/*
// @include      *://*detail.tmall.com/*
// @include      *://*detail.tmall.hk/*
// @include      *://*product.suning.com/*
// @include      *://*item.jd.com/*
// @include      *://*detail.vip.com/*
// @include      *://*mobile.yangkeduo.com/goods*
// @require      http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @connect      ixigua.com
// @connect      zhihu.com
// @connect      vzuu.com
// @connect      douyinvod.com
// @connect      aweme.snssdk.com
// @connect      iesdouyin.com
// @connect      www.whatbuytoday.com
// @grant        GM_info
// @grant        GM_download
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @run-at       document-idle
// @charset		 UTF-8
// @license      GPL License
// ==/UserScript==

(function() {
	'use strict';
	/////***********************
	//true:开启  false:关闭，想关闭某个模块只需把对应的值改为false即可
	var isOpenWenkuModule = true;      //是否开启文库功能模块
	var iSOpenDouyinModule = true;     //是否开启抖音功能模块
	var isOpenVideoVipModule = true;   //是否开启视频解析模块
	var isOpenMusicVipModule = true;   //是否开启音乐解析模块
	var isOpenGoodsCouponModule = true;//是否开启优惠券模块
	var isOpenZhihuModule = true;      //是否开启知乎优化模块
	/////***********************
	
	var $ = $ || window.$;
	var window_url = window.location.href;
	var website_host = window.location.host;
	
	//--百度文库开始
	var baiduwenkuHelper={};
	baiduwenkuHelper.wenkudownloadUrl = "http://www.tool77.com/tampermonkey/doc/download?wenku_url=";
	baiduwenkuHelper.removeAD=function(){
    	if(website_host.indexOf("wenku.baidu.com") != -1){
		    setInterval(function(){
		    	$(".banner-ad").hide();
		    	$(".union-ad-bottom").hide();
		    	$("iframe").hide();
		    	
		    	//VIP去广告小按钮
		    	$(".ggbtm-vip-close").hide();
		    	$(".ad-vip-close-bottom").hide();
		    	$(".ad-vip-close").hide();
		    	
		    	//搜索页面
		    	$("#fengchaoad").hide();
		    	$(".search-aside-adWrap").hide();
		    },300);
	    }
	};
	baiduwenkuHelper.generateHtml=function(){
		var $that = this;
    	if(window_url.indexOf("wenku.baidu.com/view")==-1 || website_host!="wenku.baidu.com"){
    		return;
    	}
		
		this.openAllPage();  //折叠的文档全部展开
		
		var topBox = "<div style='position:fixed;z-index:999999;background-color:#ccc;cursor:pointer;top:40%;left:0px;'>"+
						"<div id='baiduwenku_helper_download_btn' style='font-size:12px;padding:8px 2px;color:#FFF;background-color:#25AE84;'>下载</div>"+
						"<div id='baiduwenku_helper_copyall_btn' style='font-size:12px;padding:8px 2px;color:#FFF;background-color:#FE8A23;'>复制</div>"+
				 	 "</div>";
		$("body").append(topBox);
		
		//解析下载
		$("body").on("click","#baiduwenku_helper_download_btn",function(){
			var wenkuUrl = $that.wenkudownloadUrl+encodeURIComponent(window_url);
			GM_openInTab(wenkuUrl, { active: true });
		});
		
		if($("#reader-container").length == 0){ //这是旧的文档展示页面
			var onePageCopyContentHtml = '<div class="baiduwenku_helper_copy_onepage" style="float:left;padding:3px 8px;background:green;z-index:999;position:relative;top:60px;color:#fff;background-color:#FE8A23;font-size:13px;cursor:pointer;">复制此页面内容</div>'; 
			$('.mod.reader-page.complex, .ppt-page-item, .mod.reader-page-mod.complex, .reader-page-wrap').each(function() {
				$(this).prepend(onePageCopyContentHtml);
			});
			//复制全部文档内容
			$("body").on("click","#baiduwenku_helper_copyall_btn",function(){
				$that.copybaiduWenkuAll();
			});
			//复制每一页内容
			$("body").on("click",".baiduwenku_helper_copy_onepage",function(){
				var $inner = $(this).parent(".mod").find(".inner")
				$that.copybaiduWenkuOne($inner, true);
			});
		}else{ //新的付费页面
			var onePageCopyContentHtml = '<div class="baiduwenku_helper_copy_onepage" style="float:left;padding:3px 8px;background:green;z-index:999;position:relative;top:60px;color:#fff;background-color:#FE8A23;font-size:13px;cursor:pointer;">复制此页面内容</div>'; 
			setInterval(function(){  //添加复制按钮
				$('.reader-page').each(function() {
					if($(this).find(".baiduwenku_helper_copy_onepage").length==0){
						$(this).prepend(onePageCopyContentHtml);
					}
				});
			},200);
			//复制全部文档内容
			$("body").on("click","#baiduwenku_helper_copyall_btn",function(){
				$that.copybaiduWenkuAll_VIP();
			});
			//复制每一页内容
			$("body").on("click", ".baiduwenku_helper_copy_onepage", function(){
				$that.copybaiduWenkuOne_VIP($(this).parents(".reader-page"), true);
			});
		}		
   	};
    baiduwenkuHelper.showBaiduCopyContentBox=function(str){
    	var ua = navigator.userAgent;
    	var opacity = '0.95';
		if (ua.indexOf("Edge") >= 0) {
		    opacity = '0.6';
		} else{
		    opacity = '0.95';
		}
    	var copyTextBox = '<div id="baiduwenku_helper_copy_text_box" style="width:100%;height:100%;position: fixed;z-index: 9999;display: block;top: 0px;left: 0px;background:rgba(255,255,255,' + opacity + ');-webkit-backdrop-filter: blur(20px);display: flex;justify-content:center;align-items:center;">'+
    						'<div id="baiduwenku_helper_copy_box_close" style="width:100%;height:100%;position:fixed;top:0px;left:0px;"><div style="font-size:16px;margin-top:20px;text-align:center;"><b>点击文本外关闭弹框</b></div></div>'+
    					  	'<pre id="baiduwenku_helper_copy_text_content" style="padding:20px;border:1px solid #CCC;border-radius:4px;width:60%;font-size:16px;line-height:22px;z-index:10000;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;word-break:break-all;max-height:70%;overflow:auto;"></pre>'+
    					  '</div>"';
    	$('#baiduwenku_helper_copy_text_box').remove();
	    $('body').append(copyTextBox);
	    $('#baiduwenku_helper_copy_text_content').html(str);
	    $('#baiduwenku_helper_copy_box_close').click(function() {
	       $('#baiduwenku_helper_copy_text_box').remove();
	    });
   	};
   	baiduwenkuHelper.showDialog=function(str){
   		var dialogHtml = '<div id="baiduwenku_helper_dialog" style="margin:0px auto;opacity:0.8;padding:5px 10px;position:fixed;z-index: 10001;display: block;bottom:30px;left:44%;color:#fff;background-color:#CE480F;font-size:13px;border-radius:3px;">'+str+'</div>';
   		$('#baiduwenku_helper_dialog').remove();
	    $('body').append(dialogHtml);
	    setTimeout(function(){
	    	$('#baiduwenku_helper_dialog').remove();
	    }, 1500);
   	};
	baiduwenkuHelper.openAllPage=function(){
		var readall = $(".read-all");
		if(readall.length!=0){
			setTimeout(function(){
				readall.click();
			},100);
		};
		
		var bannerMoreBtn = $(".banner-more-btn");
		if(bannerMoreBtn.length!=0){
			setTimeout(function(){
				bannerMoreBtn.click();
			},100);
		}
	};
	
	/*** 新页面内容提取 ****/
	baiduwenkuHelper.copybaiduWenkuAll_VIP=function(){
		var contentHtml = "";
		var that = this;
		$(".reader-page").each(function(){
			contentHtml += that.copybaiduWenkuOne_VIP($(this), false);
		});
		if(!!contentHtml){
			this.showBaiduCopyContentBox(contentHtml);
		}else{
			this.showDialog("提取文档内容失败了");
		}
	};
	baiduwenkuHelper.copybaiduWenkuOne_VIP=function($page, isappend){
		var $that = this;
		var contentHtml = "";  //提取文字
		var picNum = 0;        //图片数目
		var picTemplate = "<div style='margin:10px 0px;text-align:center;'><img src='@' width='90%'><div>____图(#)____</div></div>";
		
		//word，xlsx类型的文档
		$page.find(".reader-pic-layer,.reader-txt-layer").each(function(){
			if($(this).hasClass("reader-pic-layer")){
				$(this).find("img").each(function(){
					var imageurl = $(this).attr("src");
					if(!!imageurl){
						picNum++;
						var imageHtml = picTemplate;
						imageHtml = imageHtml.replace(/#/g,picNum);
						imageHtml = imageHtml.replace(/@/g,imageurl);
						contentHtml += imageHtml;
					}
				});
			}else{
				$(this).find(".reader-word-layer").each(function(){
					contentHtml += $(this).text().replace(/\u2002/g, ' ');
				});
			}
		});
		
		//txt类型的文档
		$page.find(".p-txt").each(function(){
			contentHtml += $(this).text().replace(/\u2002/g, ' ');
		});
		
		contentHtml = contentHtml.replace(/。\s/g, '。\r\n');
		if(!!contentHtml){
			if(isappend){
				$that.showBaiduCopyContentBox(contentHtml);
			}
			return contentHtml;
		}else{
			if(isappend){
				$that.showDialog("提取文档内容失败了");
			}
			return "";
		}
	}
	
	/*** 旧页面内容提取 ****/
    baiduwenkuHelper.copybaiduWenkuAll=function(){
		var contentHtml = "";
		var that = this;
		$(".inner").each(function(){
			contentHtml += that.copybaiduWenkuOne($(this), false);
		});
		if(!!contentHtml){
			this.showBaiduCopyContentBox(contentHtml);
		}else{
			this.showDialog("提取文档内容失败了");
		}
    };
    baiduwenkuHelper.copybaiduWenkuOne=function($inner, isappend){
    	var $that = this;
		var str = "";  //提取文字
		
		$inner.find('.reader-word-layer').each(function(){
			str += $(this).text().replace(/\u2002/g, ' ');
		});
		$inner.find('.p-txt').each(function(){
			str += $(this).text().replace(/\u2002/g, ' ');
		});
		str = str.replace(/。\s/g, '。\r\n');
		
		//提取css中的图片
		var picHtml = "";
		var picUrlReg = /\(((\'|\")?https.*?)\)/i;
		var cssUrl = "";
		var picNum = 0;
		var picUrlLengthMin = 65;
		var picTemplate = "<div style='margin:10px 0px;text-align:center;'><img src='@' width='90%'><div>____图(#)____</div></div>";
		$inner.find('.reader-pic-item').each(function(){
			cssUrl= $(this).css("background-image");
			if(!!cssUrl && (cssUrl.indexOf("https")!=-1 || cssUrl.indexOf("HTTPS")!=-1)){
				var array = cssUrl.match(picUrlReg);
				if(array.length>1){
					cssUrl = array[1].replace(/\"/g, "");
					if(!!cssUrl && cssUrl.length>picUrlLengthMin){
						picNum ++;
						var onePic = picTemplate;
						onePic = onePic.replace(/#/g,picNum);
						onePic = onePic.replace(/@/g,cssUrl);
						picHtml += onePic;
					}
				}
			}
			
		});
		
		var srcUrl = "";
		$inner.find('img').each(function(){
			srcUrl = $(this).attr("src");
			if(!!srcUrl && srcUrl.length>picUrlLengthMin && srcUrl.indexOf("https://wkretype")!=-1){
				picNum ++;
				var onePic = picTemplate;
				onePic = onePic.replace(/#/g,picNum);
				onePic = onePic.replace(/@/g,srcUrl);
				picHtml += onePic;
			}
		});
		
		//追加内容
		var contentHtml = str+picHtml;
		if(!!contentHtml && contentHtml.length>0){
			if(isappend){
				$that.showBaiduCopyContentBox(contentHtml);
			}
			return contentHtml;
		}else{
			if(isappend){
				$that.showDialog("提取文档内容失败了");
			}
			return "";
		}
    };
	baiduwenkuHelper.start=function(){
		this.generateHtml();
		this.removeAD();
	};
	if(isOpenWenkuModule){
		baiduwenkuHelper.start();
	}


	//音乐下载：无损音乐、封面、歌词
	var musicvip={};
	musicvip.operation=function(){
		var reWY = /163(.*)song/i;
		var reQQ = /QQ(.*)song/i;
		var reKG = /kugou(.*)song/i;
		
		var ayaMusicWebsite2 = "https://music.liuzhijin.cn/?url=";
		var ayaMusicTitle2 = "https://music.liuzhijin.cn/?name=@name@&type=netease";
		var vipBtn = '<div>';
			vipBtn += '<a target="_blank" id="ayasongurl999" style="margin:5px 10px 5px 0px;display:inline-block;padding:4px 8px;background-color:#FF410F;color:#FFF;vertical-align:bottom;text-decoration:none;font-size:13px;"><b>免费下载</b></a>';
			vipBtn += '<a target="_blank" id="ayasongtitle999" style="margin:5px 0px;display:inline-block;padding:4px 8px;background-color:#FF410F;color:#FFF;vertical-align:bottom;text-decoration:none;font-size:13px;"><b>歌名搜索</b></a>';
			vipBtn += '</div>';
		if(reWY.test(window_url)){
			var $title = $('.u-icn-37');
		    $title.parent('.hd').after(vipBtn);
		    var titleText = $(".tit").text();
		    $('#ayasongurl999').attr('href', ayaMusicWebsite2 + encodeURIComponent(window.location.href.replace('://music.163.com', "://music.163.com/#")));
		    $('#ayasongtitle999').attr("href", ayaMusicTitle2.replace("@name@", titleText));
		
		}else if(reQQ.test(window_url)){
			var $title = $('.data__name_txt');
			var titleText = $(".data__name_txt").text();
		    $title.parent('.data__name').after(vipBtn);
		    $('#ayasongurl999').attr('href', ayaMusicWebsite2 + encodeURIComponent(window.location.href));
		    $('#ayasongtitle999').attr("href", ayaMusicTitle2.replace("@name@", titleText));
		    
		}else if(reKG.test(window_url)){
			setTimeout(function(){
				var $title = $('.audioName');
				$title.parent('.songName').after(vipBtn);
				var titleText = $(".audioName").text();
		    	$('#ayasongurl999').attr('href', ayaMusicWebsite2 + encodeURIComponent(window.location.href));
		    	$('#ayasongtitle999').attr("href", ayaMusicTitle2.replace("@name@", titleText));
			},1200);
		}
	};
	musicvip.start=function(){
		if(window_url.indexOf("music.163.com")!=-1 || window_url.indexOf("y.qq.com")!=-1 || window_url.indexOf("www.kugou.com")!=-1){
			musicvip.operation();
		}
	};
	if(isOpenMusicVipModule){
		musicvip.start();
	}
	
	//--抖音解析开始
	var douyingHelper={};
	douyingHelper.anasetinterval=null;
	douyingHelper.generateHtml = function(){
		var topBox = "<div style='position:fixed;z-index:999999;top:40%;left:0px;'>"+
						"<div style='font-size:12px;padding:8px 2px;width:70px;text-align:center;color:#FFF;background-color:#F93A60;'>"+
						"<a style='color:#FFFFFF;' href='http://www.tool77.com/video' target='_blank'>网页解析</a></div>"+
						"<div id='douyin_helper_download_btn' style='font-size:12px;padding:8px 2px;width:130px;text-align:center;color:#FFF;background-color:#F93A60;margin-top:20px;'>"+
						"<a style='color:#FFFFFF;' href='javascript:void(0);' target='_blank'>本地解析：准备中</a></div>"+
				 	 "</div>";
		$("body").append(topBox);
	};
	douyingHelper.isDouyin=function(){
		if(window_url.indexOf("www.iesdouyin.com/share/video")!=-1){
			return true;
		}
		return false;
	}
	douyingHelper.getDownloadUrl=function(){
		
		var times=1;
		this.anasetinterval = setInterval(function(){
			$("#douyin_helper_download_btn").find("a").text("本地解析：准备中("+times+"S)");
			times++;
		},1000);
		
		var $that = this;
		return new Promise(function(resolve, reject){
			try{
				var windowurl = window.location.href;
				var itemID = windowurl.split("?")[0].replace("https://www.iesdouyin.com/share/video/","").replace("/","");
				var getVisitedUrl = "https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids="+itemID;
				GM_xmlhttpRequest({
					url: getVisitedUrl,
				  	method: "get",
				  	headers: {
				  		'User-agent': 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36'
				  	},
				  	onload: function(response) {
						var status = response.status;
						if(status==200||status=='200'){
							var responseText = response.responseText;
							if(!!responseText){
								try{
									var jsonObjeect = JSON.parse(responseText);
									var item_list = jsonObjeect["item_list"][0]["video"]["play_addr"]["url_list"][0];
									resolve({"status":"success", "playerUrl":item_list})
								}catch(e){}
							}
						}
						reject({"status":"error"});
				  	}
				});
			}catch(e){
				reject({"status":"error"});
			}
		});
	};
	douyingHelper.getPlayerUrl=function(){
		this.getDownloadUrl().then((data)=>{
			var playerUrl = data.playerUrl;
			playerUrl = playerUrl.replace("playwm","play");  //新版本需要20200428，改版
			var $a = $("#douyin_helper_download_btn").find("a");
			GM_xmlhttpRequest({
				url: playerUrl,
			  	method: "get",
			  	headers: {
			  		'User-agent': 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36'
			  	},
			  	onload: function(response) {
					clearInterval(douyingHelper.anasetinterval);
					douyingHelper.anasetinterval=null;
					
					var status = response.status;
					if(status==200||status=='200'){
						var finalUrl = response.finalUrl;
						if(!!finalUrl){
							$a.text("本地解析：点我下载");
							$a.attr("href",finalUrl);
						}else{
							$a.text("本地解析：出错了");
						}
					}
			  	}
			});
		}).catch((error)=>{$a.text("本地解析：出错了");});
	};
	douyingHelper.start=function(){
		if(this.isDouyin()){
			this.generateHtml();
			this.getPlayerUrl();
		}
	}
	if(iSOpenDouyinModule){
		douyingHelper.start();
	}
	
	//--VIP视频破解开始
	var VIPVIDEO={};
	VIPVIDEO.analysisWebsite="http://kivi8.top/mov/s?ssqr=0&url=@@";
	VIPVIDEO.judgeVipWebsite=function(){
		var isVip = false;
		var host = window.location.host;
		var vipWebsites = ["iqiyi.com","v.qq.com","youku.com", "le.com","tudou.com","mgtv.com","sohu.com",
			"acfun.cn","bilibili.com","baofeng.com","pptv.com"];
   		for(var b=0; b<vipWebsites.length; b++){
	   		if(host.indexOf(vipWebsites[b]) != -1){
	   			isVip = true;
	   			break;
	   		}
	   	}
   		return isVip;
	};
	VIPVIDEO.addStyle=function(){
		var innnerCss = 
		`
		#plugin_kiwi_analysis_vip_movie_box{position:fixed; top:290px; left:0px; width:35px; background-color:#BC2405;z-index:9999999899999;}
		#plugin_kiwi_analysis_vip_movie_box >.plugin_item{cursor:pointer; width:33px; padding:10px 0px; text-align:center;}
		#plugin_kiwi_analysis_vip_movie_box >.plugin_item >img{width:23px; display:inline-block; vertical-align:middle;}
		`;
		$("body").prepend("<style>"+innnerCss+"</style>");
	};
	VIPVIDEO.generateHtml=function(){
		var html="";
		var vipImgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAADBklEQVR4Xu2cz6tNURTHP7tI5iRlID9CJFMlkYGSRPGklBRKiCSSxJMBkYGSgWQq/gBT/gMDUzMzf8RX6959nuO9e+75sff54d69B+/W23evvdbnrLX32j/OdfgiaStwGzgBvHfOPc7qln9KsrpHRfU9/n+xgt6ngW/AK+fcT9PV2R9JZ4A3wHpvQBVh/yuETO/fwDXn3GfnAXxa9vTmAUJm8oJBMADmCfkyTxC+GAT1GMOD6DpBsIExeUKCMArH5AkJwnhcTp4wBcI85QmFnpAgAAlCgjAeMJMnJAjJE5YWdSkcIq5vvwP7IsprRVSrGaNzzuSfAz4Aa1qxIILQ1iHkNnKfAA8j6BxdRGcQ/IbuOuAtYDu+gymdQsh5xX7gHbB7CCR6gZCDccGPF6Ot/75KrxB8iKwCngL35hZCzit2Ac/8CVinPIo8YRH4OkWTQ1WO4WyKrGuNJDsGfAlsr9vW0v0mehdCqHCmV3oM1wRCzjPuAC9qgmiU6Q4Wgh8vNgJ2+HulIozZg5DzioMexuESGLMLIQfjkh+LNhXAmH0IPkTueq9YOwHEbEOQdMobv3dKSMwmBEl7fAhUWW/EhTCBdnaEn839bU+RtvS2PmyqXF11dmiid+9p8yTjJF0ELPZ3VjQ+6GuDgiDpAHAfOBZkVc3Gg4AgaQPwALieXSaraUfQ13uHIOmmN35bkCUBjXuDIOm4N/5ogP5RmnYOQdIOwJ7+1SgWRBDSGQRJNrXajVmL+80RdI8mYtp+QlknlfMESSe98UfKhAbW235CWVmhd6tLacBS3BvA5TLNItXHzRhjbKoAv4CiFV8ku/8RM0gIbRg6TWaC0PRKQdtjQvKErgkkTxgTjzsmNNm/7+HJL+8y6rnDAOzpToVW0+buzAjrKUFIF7zHHpQ8IUFInrA0mqZw8OHwY8IFqkaZV9hEFaV1E71HL4c+9wcdeS2aCItiRaCQJnovZC+MfwTO5hRoIixQ/yjN6+j994XxrGtJt4DzwBbgdaSdpSiW1RBSBcKKnw74AzEYpoku7zbwAAAAAElFTkSuQmCC";
		html+= "<div id='plugin_kiwi_analysis_vip_movie_box'>";
		html+= "<div class='plugin_item jump_analysis_website' title='VIP视频破解'><img src='"+vipImgBase64+"'></div>";
		html+= "</div>";
		$("body").append(html);
	};
	VIPVIDEO.operation=function(){
		$("body").on("click", "#plugin_kiwi_analysis_vip_movie_box .jump_analysis_website", function(){
			var jumpWebsite=VIPVIDEO.analysisWebsite.replace("@@", window.location.href);
			window.location.href=jumpWebsite;
		});
	};
	VIPVIDEO.start=function(){
    	if(VIPVIDEO.judgeVipWebsite() && window.top==window.self){
    		VIPVIDEO.addStyle();
			VIPVIDEO.generateHtml();
			VIPVIDEO.operation();
    	}
    };
	if(isOpenVideoVipModule){
		VIPVIDEO.start();
	}
	
	//--知乎助手开始
	var zhihuHelper={};
	zhihuHelper.start = function(){
	    if(website_host == "link.zhihu.com"){  //直接跳转到目标网页
	    	var regRet = location.search.match(/target=(.+?)(&|$)/);
	    	if(regRet && regRet.length==3){
	    		location.href = decodeURIComponent(regRet[1]);
	    	}
		}
	    //知乎正文
	    else if(website_host.indexOf("zhihu.com")!=-1){
	    	//问题全部展开
		    function autoExpandQuestionInfo() {
		        //展开问题描述
		        const s4 = document.querySelector('.QuestionRichText-more');
		        if (s4) {
		            s4.click();
		        }
		        const s0 = document.querySelector('.SignContainer-content');
			    if (s0) {
			        const s1 = document.querySelector('.Modal-backdrop');
			        if (s1) {
			            s1.click();
			        }
			        const s2 = document.querySelector('.Modal-closeButton');
			        if (s2) {
			            s2.click();
			        }
		        }
		    }
		    
		    //去除广告，可能造成误伤，用最小策略
		    function clearAdvert() {
		    	const ad1 = document.querySelector('.AppBanner');
		        if (ad1) {
		            ad1.style.display = "none";
		        }
		        const ad2 = document.querySelector('.AdblockBanner');
		        if (ad2) {
		            ad2.style.display = "none";
		        }
		    }
	        
	        //去除登录提示
	        function noLoginBox(){
				var IntervalUnit = 20;
				var totalIntervalMs = 0;
				var loginInterval = setInterval(function(){
					$(".Modal-wrapper").hide();
					$(".signFlowModal").children(".Modal-closeButton").click();
					totalIntervalMs += IntervalUnit;
					if(totalIntervalMs >= 2000){  //循环多次，我就不信还显示
						clearInterval(loginInterval);
					}
				}, IntervalUnit); 
				$(".AppHeader-login").click(function(){
					clearInterval(loginInterval);
					$(".Modal-wrapper").show();
				});
	        }
		    
		    //更改为直接高清显示
		    function changeHeightQualityPic(){
		    	$("body").find("img").each(function(){
		    		var dataoriginal = $(this).attr("data-original");
		    		if(!!dataoriginal){
		    			$(this).attr("src", dataoriginal);
		    		}
		    	});
		    }
		    
		    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
		    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
		    function timeFormat(time, fmt) { //author: meizz 
		        var o = {
		            "M+": time.getMonth() + 1, //月份 
		            "d+": time.getDate(), //日 
		            "h+": time.getHours(), //小时 
		            "m+": time.getMinutes(), //分 
		            "s+": time.getSeconds(), //秒 
		            "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
		            "S": time.getMilliseconds() //毫秒 
		        };
		        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
		        for (var k in o)
		            if (new RegExp("(" + k + ")").test(fmt))
		                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		        return fmt;
		    }
		    
		    function questiodate() {
		        function QuestionPage() {
		            const title = document.querySelector(".QuestionPage");
		            if (title) {
		                const dateCreated = title.querySelector("[itemprop~=dateCreated][content]").content;
		                const dateModified = title.querySelector("[itemprop~=dateModified][content]").content;
		
		                const ctime = timeFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
		                const mtime = timeFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");
		                const side = title.querySelector(".QuestionHeader-side");
		                var timediv = document.createElement('div');
		                timediv.innerHTML = `<p>创建于:&nbsp;${ctime}</p><p>编辑于:&nbsp;${mtime}</p>`;
		                timediv.style.cssText = 'color:#999;font-size:12;';
		                side.appendChild(timediv);
		            }
		        }
		
		        let listnum = 0;
		        function ContentItem() {
		            const list = document.querySelectorAll(".ContentItem");
		            if (listnum != list.length) {
		                listnum = list.length;
		                for (var i = 0; i < list.length; i++) {
		                    const item = list[i];
		                    if (item.getAttribute('zh_date_mk') != 'true') {
		                        const dateCreated = item.querySelector("[itemprop~=dateCreated][content]").content;
		                        const dateModified = item.querySelector("[itemprop~=dateModified][content]").content;
		
		                        const ctime = timeFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
		                        const mtime = timeFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");
		
		                        const sideitem = item.querySelector(".css-h5al4j");
		                        var timediv = document.createElement('span');
		                        timediv.innerHTML = `<p>创建于:&nbsp;${ctime}&nbsp;&nbsp;&nbsp;编辑于:&nbsp;${mtime}</p>`;
		                        timediv.class = "Voters";
		                        timediv.style.cssText = 'color:#999;display:block;padding:5px 0px;';
		                        sideitem.appendChild(timediv);
		                        item.setAttribute('zh_date_mk', 'true');
		                    }
		                }
		            }
		        }
		        QuestionPage();
		        document.querySelector(".Question-main").addEventListener('DOMNodeInserted', ContentItem);
		    }
		     
		    if(window_url.indexOf("https://www.zhihu.com/question/") != -1) {
		        autoExpandQuestionInfo();     //问题全部展开
        		questiodate();     //问题日期
		    }
		   
		    noLoginBox();   //去除登录框
		    setInterval(clearAdvert, 1000);  //去除广告
		   	setInterval(changeHeightQualityPic, 500);   //图片自动高清
		}
	};
	if(isOpenZhihuModule){
		zhihuHelper.start();
	}
	
	//领券
	var goodsCoupon={};
	goodsCoupon.getPlatform=function(){
		var couponUrl = window.location.href;
		var platform="";
		if(couponUrl.indexOf("suning.com")!=-1){
			platform = "suning";
		}else if(couponUrl.indexOf("detail.tmall")!=-1){
			platform = "tmall";
		}else if(couponUrl.indexOf("item.taobao.com")!=-1){
			platform = "taobao";
		}else if(couponUrl.indexOf("item.jd.com")!=-1){
			platform = "jd";
		}else if(couponUrl.indexOf("detail.vip.com")!=-1){
			platform = "vpinhui";
		}else if(couponUrl.indexOf("mobile.yangkeduo.com")!=-1){
			platform = "pdd";
		}
		return platform;
	}
	goodsCoupon.filterStr = function(str){
		if(!str) return "";
		str = str.replace(/\t/g,"");
		str = str.replace(/\r/g,"");
		str = str.replace(/\n/g,"");
		str = str.replace(/\+/g,"%2B");//"+"
		str = str.replace(/\&/g,"%26");//"&"
		str = str.replace(/\#/g,"%23");//"#"
		return encodeURIComponent(str)
	};
	goodsCoupon.getGoodsData=function(platform){
		var goodsId = "";
		var goodsName = "";
		var websiteUrl = window.location.href;
		if(platform=="taobao"){
			goodsId = this.getQueryString("id");
			goodsName=$(".tb-main-title").text();
			
		}else if(platform=="tmall"){
			goodsId = this.getQueryString("id");
			goodsName=$(".tb-detail-hd").text();
			
		}else if(platform=="jd"){
			goodsName=$("div.sku-name").text();
			goodsId = this.getQueryStringByUrl(websiteUrl);
			
		}else if(platform=="suning"){
			var text = $("#itemDisplayName").text();
			if(!!text){
				text = text.replace("苏宁超市","");
				text = text.replace("自营","");
			}
			goodsName=text;
			goodsId = this.getQueryStringByUrl(websiteUrl);
			
		}else if(platform=="vpinhui"){
			goodsId = this.getQueryStringByUrl(websiteUrl).replace("detail-","");
			goodsName = $(".pib-title-detail").text();
			
		}else if(platform=="pdd"){
			goodsId = this.getQueryString("goods_id");
			goodsName = $(".enable-select").text();
		}
		var data={"goodsId":goodsId, "goodsName":this.filterStr(goodsName)}
		return data;
	};
	goodsCoupon.createHtml = function(platform, goodsId, goodsName){
		if(!platform || !goodsId) return;
		var goodsCouponUrl = "https://www.whatbuytoday.com/api/plugin/hit/v2";
		if(platform!="vpinhui"){
			goodsCouponUrl = goodsCouponUrl+"?platform="+platform+"&id="+goodsId+"&q="+goodsName;
		}else{
			var vip = goodsId.split("-");
			var vaddition = vip[0];
			var vid = vip[1];
			goodsCouponUrl = goodsCouponUrl+"?platform="+platform+"&id="+vid+"&q="+goodsName+"&addition="+vaddition;
		}		
		GM_xmlhttpRequest({
			url: goodsCouponUrl,
		  	method: "GET",
		  	headers: {"Content-Type": "application/x-www-form-urlencoded"},
		  	onload: function(response) {
				var status = response.status;
				if(status==200||status=='200'){
					var serverResponseJson = JSON.parse(response.responseText);
					var data = serverResponseJson.data;
					var cssText = data.css;
					var htmlText = data.html;
					var handler = data.handler;
					if(!cssText || !htmlText || !handler){
						return;
					}
					$("body").prepend("<style>"+cssText+"</style>");
					var handlers = handler.split("@");
					for(var i=0; i<handlers.length; i++){
						var $handler = $(""+handlers[i]+"");
						if(platform=="taobao"){
							$handler.parent().after(htmlText);
						}else if(platform=="tmall"){
							$handler.parent().after(htmlText);
						}else if(platform=="jd"){
							$handler.after(htmlText);
						}else if(platform=="suning"){
							$handler.parent().after(htmlText);
						}else if(platform=="vpinhui"){
							$handler.parent().after(htmlText);
						}else if(platform=="pdd"){
							$handler.after(htmlText);
						}					
					}
				}
		  	}
		});
	};
	goodsCoupon.getQueryString = function(tag) {
		var t = new RegExp("(^|&)" + tag + "=([^&]*)(&|$)");
		var a = window.location.search.substr(1).match(t);
		if (a != null) return a[2];
		return "";
	};
	goodsCoupon.getQueryStringByUrl = function(url) {
		if(url.indexOf("?")!=-1){
			url = url.split("?")[0]
		}
		if(url.indexOf("#")!=-1){
			url = url.split("#")[0]
		}
		var splitText = url.split("/");
		var idText = splitText[splitText.length-1];
		idText = idText.replace(".html","");
		return idText;
	};
	goodsCoupon.start = function(){
		var platform = this.getPlatform();
		if(!platform) return;
		var delayMS = 0;
		if(platform=="vpinhui"){ //唯品会采用了异步加载
			var vipInterval = setInterval(function(){
				if($(".pib-title-detail").length!=0 || delayMS>=1200){
					var goodsData = goodsCoupon.getGoodsData(platform);
					goodsCoupon.createHtml(platform, goodsData.goodsId, goodsData.goodsName);
					clearInterval(vipInterval)
				}
				delayMS+=100;
			},100);
		}else{
			var goodsData = goodsCoupon.getGoodsData(platform);
			goodsCoupon.createHtml(platform, goodsData.goodsId, goodsData.goodsName);
		}
	};	
	if(isOpenGoodsCouponModule){
		goodsCoupon.start();
	}
})();

//下载知乎视频，作者：王超， 脚本链接：https://greasyfork.org/zh-CN/scripts/39206
//版本：1.18
//版权归原作者所有
(async () => {
    if (window.location.host == 'www.zhihu.com') return;

    const playlistBaseUrl = 'https://lens.zhihu.com/api/videos/';
    //const videoBaseUrl = 'https://video.zhihu.com/video/';
    const videoId = window.location.pathname.split('/').pop(); // 视频id
    const menuStyle = 'transform:none !important; left:auto !important; right:-0.5em !important;';
    const playerId = 'player';
    const coverSelector = '#' + playerId + ' > div:first-child > div:first-child > div:nth-of-type(2)';
    const controlBarSelector = '#' + playerId + ' > div:first-child > div:first-child > div:last-child > div:last-child > div:first-child';
    const svgDownload = '<path d="M9.5,4 H14.5 V10 H17.8 L12,15.8 L6.2,10 H9.5 Z M6.2,18 H17.8 V20 H6.2 Z"></path>';
    let player = document.getElementById(playerId);
    let resolutionMap = {'标清': 'sd', '高清': 'ld', '超清': 'hd'};
    let videos = []; // 存储各分辨率的视频信息
    let downloading = false;

    function getBrowerInfo() {
        let browser = (function (window) {
            let document = window.document;
            let navigator = window.navigator;
            let agent = navigator.userAgent.toLowerCase();
            // IE8+支持.返回浏览器渲染当前文档所用的模式
            // IE6,IE7:undefined.IE8:8(兼容模式返回7).IE9:9(兼容模式返回7||8)
            // IE10:10(兼容模式7||8||9)
            let IEMode = document.documentMode;
            let chrome = window.chrome || false;
            let system = {
                // user-agent
                agent: agent,
                // 是否为IE
                isIE: /trident/.test(agent),
                // Gecko内核
                isGecko: agent.indexOf('gecko') > 0 && agent.indexOf('like gecko') < 0,
                // webkit内核
                isWebkit: agent.indexOf('webkit') > 0,
                // 是否为标准模式
                isStrict: document.compatMode === 'CSS1Compat',
                // 是否支持subtitle
                supportSubTitle: function () {
                    return 'track' in document.createElement('track');
                },
                // 是否支持scoped
                supportScope: function () {
                    return 'scoped' in document.createElement('style');
                },

                // 获取IE的版本号
                ieVersion: function () {
                    let rMsie = /(msie\s|trident.*rv:)([\w.]+)/;
                    let match = rMsie.exec(agent);
                    try {
                        return match[2];
                    } catch (e) {
                        return IEMode;
                    }
                },
                // Opera版本号
                operaVersion: function () {
                    try {
                        if (window.opera) {
                            return agent.match(/opera.([\d.]+)/)[1];
                        }
                        else if (agent.indexOf('opr') > 0) {
                            return agent.match(/opr\/([\d.]+)/)[1];
                        }
                    } catch (e) {
                        return 0;
                    }
                }
            };

            try {
                // 浏览器类型(IE、Opera、Chrome、Safari、Firefox)
                system.type = system.isIE ? 'IE' :
                    window.opera || (agent.indexOf('opr') > 0) ? 'Opera' :
                        (agent.indexOf('chrome') > 0) ? 'Chrome' :
                            //safari也提供了专门的判定方式
                            window.openDatabase ? 'Safari' :
                                (agent.indexOf('firefox') > 0) ? 'Firefox' :
                                    'unknow';

                // 版本号
                system.version = (system.type === 'IE') ? system.ieVersion() :
                    (system.type === 'Firefox') ? agent.match(/firefox\/([\d.]+)/)[1] :
                        (system.type === 'Chrome') ? agent.match(/chrome\/([\d.]+)/)[1] :
                            (system.type === 'Opera') ? system.operaVersion() :
                                (system.type === 'Safari') ? agent.match(/version\/([\d.]+)/)[1] :
                                    '0';

                // 浏览器外壳
                system.shell = function () {
                    if (agent.indexOf('edge') > 0) {
                        system.version = agent.match(/edge\/([\d.]+)/)[1] || system.version;
                        return 'Edge';
                    }
                    // 遨游浏览器
                    if (agent.indexOf('maxthon') > 0) {
                        system.version = agent.match(/maxthon\/([\d.]+)/)[1] || system.version;
                        return 'Maxthon';
                    }
                    // QQ浏览器
                    if (agent.indexOf('qqbrowser') > 0) {
                        system.version = agent.match(/qqbrowser\/([\d.]+)/)[1] || system.version;
                        return 'QQBrowser';
                    }
                    // 搜狗浏览器
                    if (agent.indexOf('se 2.x') > 0) {
                        return '搜狗浏览器';
                    }

                    // Chrome:也可以使用window.chrome && window.chrome.webstore判断
                    if (chrome && system.type !== 'Opera') {
                        let external = window.external;
                        let clientInfo = window.clientInformation;
                        // 客户端语言:zh-cn,zh.360下面会返回undefined
                        let clientLanguage = clientInfo.languages;

                        // 猎豹浏览器:或者agent.indexOf("lbbrowser")>0
                        if (external && 'LiebaoGetVersion' in external) {
                            return 'LBBrowser';
                        }
                        // 百度浏览器
                        if (agent.indexOf('bidubrowser') > 0) {
                            system.version = agent.match(/bidubrowser\/([\d.]+)/)[1] ||
                                agent.match(/chrome\/([\d.]+)/)[1];
                            return 'BaiDuBrowser';
                        }
                        // 360极速浏览器和360安全浏览器
                        if (system.supportSubTitle() && typeof clientLanguage === 'undefined') {
                            let storeKeyLen = Object.keys(chrome.webstore).length;
                            let v8Locale = 'v8Locale' in window;
                            return storeKeyLen > 1 ? '360极速浏览器' : '360安全浏览器';
                        }
                        return 'Chrome';
                    }
                    return system.type;
                };

                // 浏览器名称(如果是壳浏览器,则返回壳名称)
                system.name = system.shell();
                // 对版本号进行过滤过处理
                // System.version = System.versionFilter(System.version);

            } catch (e) {
                // console.log(e.message);
            }

            return system;

        })(window);

        if (browser.name == undefined || browser.name == '') {
            browser.name = 'Unknown';
            browser.version = 'Unknown';
        }
        else if (browser.version == undefined) {
            browser.version = 'Unknown';
        }
        return browser;
    }

    function fetchRetry(url, options = {}, times = 1, delay = 1000, checkStatus = true) {
        return new Promise((resolve, reject) => {
            // fetch 成功处理函数
            function success(res) {
                if (checkStatus && !res.ok) {
                    failure(res);
                }
                else {
                    resolve(res);
                }
            }

            // 单次失败处理函数
            function failure(error) {
                times--;

                if (times) {
                    setTimeout(fetchUrl, delay);
                }
                else {
                    reject(error);
                }
            }

            // 总体失败处理函数
            function finalHandler(error) {
                throw error;
            }

            function fetchUrl() {
                return fetch(url, options)
                    .then(success)
                    .catch(failure)
                    .catch(finalHandler);
            }

            fetchUrl();
        });
    }

    // 下载指定url的资源
    async function downloadUrl(url, name = (new Date()).valueOf() + '.mp4') {
        let browser = getBrowerInfo();

        // Greasemonkey 需要把 url 转为 blobUrl
        if (GM_info.scriptHandler == 'Greasemonkey') {
            let res = await fetchRetry(url);
            let blob = await res.blob();
            url = URL.createObjectURL(blob);
        }

        // Chrome 可以使用 Tampermonkey 的 GM_download 函数绕过 CSP(Content Security Policy) 的限制
        if (window.GM_download) {
            GM_download({url, name});
        }
        else {
            // firefox 需要禁用 CSP, about:config -> security.csp.enable => false
            let a = document.createElement('a');
            a.href = url;
            a.download = name;
            // a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            setTimeout(function () {
                URL.revokeObjectURL(url);
            }, 100);
        }
    }

    function humanSize(size) {
        let n = Math.log(size) / Math.log(1024) | 0;
        return (size / Math.pow(1024, n)).toFixed(0) + ' ' + (n ? 'KMGTPEZY'[--n] + 'B' : 'Bytes');
    }

    if (!player) return;

    // 获取视频信息
    const res = await fetchRetry(playlistBaseUrl + videoId, {
        headers: {
            'referer': 'refererBaseUrl + videoId',
            'authorization': 'oauth c3cef7c66a1843f8b3a9e6a1e3160e20' // in zplayer.min.js of zhihu
        }
    }, 3);
    const videoInfo = await res.json();

    // 获取不同分辨率视频的信息
    for (let [key, video] of Object.entries(videoInfo.playlist)) {
        video.name = key;

        if (!videos.find(v => v.width == video.width)) {
            videos.push(video);
        }
    }

    // 按分辨率大小排序
    videos = videos.sort(function (v1, v2) {
        return v1.width == v2.width ? 0 : (v1.width > v2.width ? 1 : -1);
    }).reverse();

    document.addEventListener('DOMNodeInserted', (evt) => {
        let domControlBar = evt.relatedNode.querySelector(':scope > div:last-child > div:first-child');
        if (!domControlBar || domControlBar.querySelector('.download')) return;

        let domFullScreenBtn = domControlBar.querySelector(':scope > div:nth-last-of-type(1)');
        let domResolutionBtn = domControlBar.querySelector(':scope > div:nth-last-of-type(3)');
        let domDownloadBtn, defaultResolution, buttons;
        if (!domFullScreenBtn || !domFullScreenBtn.querySelector('button')) return;

        // 克隆分辨率菜单或全屏按钮为下载按钮
        domDownloadBtn = (domResolutionBtn && (domResolutionBtn.className == domFullScreenBtn.className))
            ? domResolutionBtn.cloneNode(true)
            : domFullScreenBtn.cloneNode(true);

        defaultResolution = domDownloadBtn.querySelector('button').innerText;

        // 生成下载按钮图标
        domDownloadBtn.querySelector('button:first-child').outerHTML = domFullScreenBtn.cloneNode(true).querySelector('button').outerHTML;
        domDownloadBtn.querySelector('svg').innerHTML = svgDownload;
        domDownloadBtn.className = domDownloadBtn.className + ' download';

        buttons = domDownloadBtn.querySelectorAll('button');

        // button 元素添加对应的下载地址
        buttons.forEach(dom => {
            let video = videos.find(v => v.name == resolutionMap[dom.innerText || defaultResolution]);
            video = video || videos[0];
            dom.dataset.video = video.play_url;
            if (dom.innerText) {
                (dom.innerText = `${dom.innerText} (${humanSize(video.size)})`);
            }
            else if (buttons.length == 1) {
                dom.nextSibling.querySelector('div').innerText = humanSize(video.size);
            }
        });

        // 鼠标事件 - 显示菜单
        domDownloadBtn.addEventListener('pointerenter', () => {
            let domMenu = domDownloadBtn.querySelector('div:nth-of-type(1)');
            if (domMenu) {
                domMenu.style.cssText = menuStyle + 'opacity:1 !important; visibility:visible !important';
            }
        });

        // 鼠标事件 - 隐藏菜单
        domDownloadBtn.addEventListener('pointerleave', () => {
            let domMenu = domDownloadBtn.querySelector('div:nth-of-type(1)');
            if (domMenu) {
                domMenu.style.cssText = menuStyle;
            }
        });

        // 鼠标事件 - 选择菜单项
        domDownloadBtn.addEventListener('pointerup', event => {
            if (downloading) {
                alert('当前正在执行下载任务，请等待任务完成。');
                return;
            }

            let e = event.srcElement || event.target;

            while (e.tagName != 'BUTTON') {
                e = e.parentNode;
            }

            downloadUrl(e.dataset.video);
        });

        // 显示下载按钮
        domControlBar.appendChild(domDownloadBtn);

    });
})();

//https://greasyfork.org/zh-CN/scripts/372452
//版本：1.3.2
//名称：CSDN自动展开+去广告+净化剪贴板+免登陆
//作者：gorgiaxx
(function () {
    'use strict';
    var currentURL = window.location.href;
    // 根据网速自己设置时间间隔
	var interval = 3000;
	var sideInterval = 4000;
	var bbsInterval = 3000; // 在ADBlock之后运行
	var iteyeInterval = 100;
    var blog = /article/;
    var bbs = /topics/;
    var iteye = /iteye/;
    //若为CSDN论坛,则：
    if(bbs.test(currentURL)){
        setTimeout(function () {
            $(".js_show_topic").click();
            document.getElementsByClassName("pulllog-box")[0].remove(); // 底部广告
            $(".mediav_ad").remove();       // 帖子尾部广告
            $(".post_recommend").remove();  // 帖子内[CSDN推荐]
            $(".ad_item").remove(); // 右侧广告
        }, bbsInterval);
    }else if (blog.test(currentURL)){
        csdn.copyright.init("", "", ""); //去除剪贴板劫持
        localStorage.setItem("anonymousUserLimit", ""); // 免登陆
        if (document.getElementsByClassName("btn-readmore")[0]){
            document.getElementsByClassName("btn-readmore")[0].click();
        } //自动展开
        if (document.getElementsByClassName("hide-article-box")[0]){
            document.getElementsByClassName("hide-article-box")[0].remove();
            document.getElementById("content_views").setAttribute("style", "user-select: text;")
        } //移除专栏
        if (document.getElementsByClassName("comment-list-box")[0]){
            document.getElementsByClassName("comment-list-box")[0].removeAttribute("style");
        } //自动展开
        $("#content_views").unbind("click");//移除url拦截
        setTimeout(function () {
            if (document.getElementsByClassName("csdn-tracking-statistics mb8 box-shadow")[0]) {
                document.getElementsByClassName("csdn-tracking-statistics mb8 box-shadow")[0].remove(); //左上广告
            }
            document.getElementById("asideFooter").remove();
            if (document.getElementById("adContent")) {
                document.getElementById("adContent").remove();
            }
            if (document.getElementsByClassName("p4course_target")[0]) {
                document.getElementsByClassName("p4course_target")[0].remove(); //左上广告
            }
            document.getElementsByClassName("bdsharebuttonbox")[0].remove();
            document.getElementsByClassName("vip-caise")[0].remove();
            if (document.getElementsByClassName("fourth_column")[0]) {
                document.getElementsByClassName("fourth_column")[0].remove(); //左上广告
            }
        }, interval);
        setTimeout(function () {
            if ($("div[id^='dmp_ad']")[0]) {
                $("div[id^='dmp_ad']")[0].remove();
            }
            if (document.getElementsByClassName("fourth_column")[0]) {
                document.getElementsByClassName("fourth_column")[0].remove();
            }
        }, sideInterval);
        setTimeout(function () {
            if (document.getElementsByClassName("pulllog-box")[0]) {
                document.getElementsByClassName("pulllog-box")[0].remove(); // 底部广告
            }
            var recommendObj = document.getElementsByClassName("recommend-fixed-box")[0].getElementsByClassName("right-item");
            for (var h = (recommendObj.length - 1); h>=0; h--) {
                if (recommendObj[h].tagName == "DIV") {
                    recommendObj[h].remove();
                }
            }
            if (document.getElementsByClassName("p4course_target")[0]) {
                document.getElementsByClassName("p4course_target")[0].remove();
            }
        }, sideInterval);
        setTimeout(function () {
            var hot = document.getElementsByClassName("type_hot_word");
            var recommend = document.getElementsByClassName("recommend-ad-box");
            for (var i = (hot.length - 1); i >= 0; i--) {
                hot[i].remove();
            }
            for (var j = (recommend.length - 1); j >= 0; j--) {
                recommend[j].remove();
            }
            if (document.getElementsByClassName("fourth_column")[0]) {
                document.getElementsByClassName("fourth_column")[0].remove();
            }
        }, sideInterval);
        setTimeout(function () {
            for(var x=470; x<490; x++){
                var kp_box = document.getElementById("kp_box_"+x); //右侧广告
                if(kp_box) {
                    kp_box.remove();
                }
            }
        }, 5000);
    } else if (iteye.test(currentURL)) {
        setInterval(function(){
            document.getElementById('btn-readmore').click();
        }, iteyeInterval);
        setTimeout(function () {
            document.getElementsByClassName("blog-sidebar")[0].remove();
            document.getElementById('main').style.width = '1000px';
        }, sideInterval);
    }
})();
