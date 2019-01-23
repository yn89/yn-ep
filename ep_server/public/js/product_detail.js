$(function(){
  var title=document.querySelector("div.p-detail h6");
  title.onclick=function(e){
    e.preventDefault();
    var title=this;
    if(title.className=="my_small font-weight-bold open"){
      title.classList.remove("open");
    }else{
      title.classList.add("open");
    }
  }
})