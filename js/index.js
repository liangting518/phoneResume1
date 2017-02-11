/**
 * Created by DELL on 2016/12/19.
 */
(function(){
    var banner = document.getElementById('banner');
    var slide = banner.getElementsByTagName("div");
    var btnLeft = document.getElementById('prev');
    var btnRight = document.getElementById('next');
    var bannerTip = document.getElementById('bannerTip');
    var bannerTipLi = bannerTip.getElementsByTagName('li');
    var n = 0;
    var timer = null;
    timer = setInterval(autoMove,2000);
    function autoMove(){
        if(n>=slide.length-1){
            n=-1;
        }
        n++;
        setBanner();
    }
    function setBanner() {
        for (var i = 0; i < slide.length; i++) {
            if (i == n) {//要显示的图片
                utils.css(slide[i], 'zIndex', 1);
                animate({
                    id: slide[i],
                    target: {
                        opacity: 1
                    },
                    callback: function () {
                        var siblings = utils.sibling(this);
                        for (var i = 0; i < siblings.length; i++) {
                            utils.css(siblings[i], 'opacity', 0);
                        }
                    }
                })
            }else{
                utils.css(slide[i],'zIndex',0);
            }
            bannerTip1();
        }
    }
    function bannerTip1(){
        for(var i=0;i<bannerTipLi.length;i++){
            bannerTipLi[i].className = i==n ?'on':'';
        }
    }
    //左右轮播
    btnRight.onclick = autoMove();
    btnLeft.onclick = function(){
            if(n<=0){
                n = slide.length;
            }
            n--;
    }
    $(function(){
        $('.ft_main li').hover(function(){
            $('.radius').addClass("move")
        },function(){
            $('.radius').removeClass("move")
        })
        $('.main2Con div').hover(function(){
            $('.mainBtn').addClass("btnHover");
        },function(){
            $('.mainBtn').removeClass("btnHover");
        })
    })
})()