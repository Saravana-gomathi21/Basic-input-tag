var btn=document.getElementById('btn_submit');
var head_txt=document.getElementById('head');
var head_txt1=document.getElementById('head_txt1');
btn.addEventListener('click', function getvalue(){
    head_txt1.textContent=head_txt.value;
})