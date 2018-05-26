window.onload = function(){
	var touchleft=document.getElementById("xiahua-shang-left");
	var touchright=document.getElementById("xiahua-shang-right");
	var xialeft=document.getElementById("xia-left");
	var xiaright=document.getElementById("xia-right");
//	var xihuaone=document.getElementById("xiahua-xia-left-top");
//	var xiahuatwo=document.getElementById("xiahua-xia-left-center");
//	var xiahuasan=document.getElementById("xiahua-xia-left-bottom");
	
//		滑动换页那点
		touchleft.onmouseover=function(){
			touchleft.style.color="white";
			xialeft.style.display="block";
			xiaright.style.display="none";
		}
		touchright.onmouseover=function(){
			touchright.style.color="white";
			xialeft.style.display="none";
			xiaright.style.display="block";
		}
		touchright.onmouseout=function(){
			touchright.style.color="darkgray";
		}
		touchleft.onmouseout=function(){
			touchleft.style.color="darkgray";
		}
//		滑动换页左栏滑动出现滑块
		$(function(){
			$("#xiahua-xia-left-top").mouseenter(function(){
				$("#xiahua-xia-left-top > div").animate({
					"left":-36,
					"opacity":1,
				})
			})
			$("#xiahua-xia-left-top").mouseleave(function(){
				$("#xiahua-xia-left-top > div").animate({
					"left":0,
					"opacity":0,
				})
			})
			$("#xiahua-xia-left-center").mouseenter(function(){
				$("#xiahua-xia-left-center > div").animate({
					"left":-36,
					"opacity":1,
				})
			})
			$("#xiahua-xia-left-center").mouseleave(function(){
				$("#xiahua-xia-left-center > div").animate({
					"left":0,
					"opacity":0,
				})
			})
			$("#xiahua-xia-left-bottom").mouseenter(function(){
				$("#xiahua-xia-left-bottom > div").animate({
					"left":-36,
					"opacity":1,
				})
			})
			$("#xiahua-xia-left-bottom").mouseleave(function(){
				$("#xiahua-xia-left-bottom > div").animate({
					"left":0,
					"opacity":0,
				})
			})
			
		})
		
		
		
//轮播
$(function() {
    /***用于放图片的数组*****/
    var arr = ["../img/lun.jpg", "../img/lun1.jpg","../img/lun2.jpg"];
    var col = ["#411a4f","#29251A","#974fbb"];
    /****初始化页面启动显示的图片*****/
    $(".ul_img li img").attr("src", arr[0]);
	var count = 0;
    var index = 0;
    var timer = null;
    var timer1 = null;
    /****当鼠标滑动到列表索引按钮时，显示当前的图片*****/
    $(".ul_text li").hover(function() {
        clearInterval(timer);
        index = $(this).index();
        //alert(index);
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({
            'opacity': 1
        }, 2000);
//      左边侧栏和上部的点击栏
        $("#header").css("background-color",col[index]);
		$("#xiahua-shang > div").css("background-color",col[index]);
    }, function() {
        auto();
    });

    auto();
    /*****自动播放图片的定时器****/
$("#header").css("background-color",col[0]);
$("#xiahua-shang > div").css("background-color",col[0]);
    function auto() {
        timer = setInterval(function() {
            index++;
            if (index > 2) {
                index = 0;
            }
            $(".ul_text li").eq(index).addClass("hover").siblings().removeClass("hover");
            $(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({
                'opacity': 1
            }, 1000);
            
           count++;
		if(count>2){
			count = 0;
		}
		$("#header").css("background-color",col[count]);
		$("#xiahua-shang > div").each(function(){
			$(this).css("background-color",col[count]);
		})
            
        }, 2000);
        
    }
 $(".ul_img li img").hover(function(){
            	clearInterval(timer)
            	
            },function(){
            	auto();
            })		
	});	
		
//	导航上面小鱼hover的时候转个圈
	$(function(){
		$(".yu").mouseenter(function(){
			$(this).children("img").rotate({
				angle:0, 
				duration: 400, 
				animateTo: 360
			})
			$(this).children("span").css("color","#e74085")
		})
		$(".yu").mouseleave(function(){
			$(this).children("span").css("color","black")
		})
	})
	
	$(function(){
		$(".yb").mouseenter(function(){
			$(this).animate({
				"margin-left":-10
			},400)
		})
		$(".yb").mouseleave(function(){
			$(this).animate({
				"margin-left":0
			},400)
		})
	})
	var yan=document.getElementById("yan");
	var srr="";
	Ajax({
		url:"../model.json",
		type:"get",
		success:function(data){
			data=JSON.parse(data);
			console.log(data);
			for(var i in data){
				srr+= `<li>${data[i].name}	<a>${data[i].number}</a><span>${data[i].name1}	</span><a>${data[i].number1}</a> 
				<ul>
					<li><img src="${data[i].list.bigimg[0]}"/><span>${data[i].list.bigname[0]}</span></li>
					<li><span>${data[i].list.listname[0]}	</span><img src="${data[i].list.bigimg[1]}"/>|<span>${data[i].list.listlist[0]}</span>|<span>${data[i].list.listlist[1]}</span>|<span>${data[i].list.listlist[2]}</span>|<span>${data[i].list.listlist[3]}</span>|<span>${data[i].list.listlist[4]}</span></li>
				</ul>
				<ul>
					<li><img src="${data[i].list.bigimg[1]}"/><span>${data[i].list.bigname[0]}</span></li>
					<li><span>${data[i].list.listname[0]}	</span><img src="${data[i].list.bigimg[2]}"/>|<span>${data[i].list.listlist[0]}</span>|<span>${data[i].list.listlist[1]}</span>|<span>${data[i].list.listlist[2]}</span>|<span>${data[i].list.listlist[3]}</span>|<span>${data[i].list.listlist[4]}</span></li>
				</ul>
				</li>
					`
				
			}
				yan.innerHTML=srr;
				console.log(srr)
			
		}
	})













}


