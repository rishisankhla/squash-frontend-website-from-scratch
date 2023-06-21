//progress bar code for info page

window.onload = function(){
    var bar = document.getElementById("the_progress_bar");
    var cca = '0px';
    var w = 0;
    var bo_scroll_height = 0;
    function ftr(){
        bo_scroll_height = document.documentElement.scrollHeight;
        w = window.innerWidth;
        var rt = w/1100;
        cca = ((w*window.scrollY)/bo_scroll_height)*rt; 
        cca = cca.toString();
        cca = cca.concat("px");
    }
    window.addEventListener('scroll',function(){bar.style.width = cca;});
    window.addEventListener('scroll',ftr);
}
