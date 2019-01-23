//向http://localhost:3000/index发送get请求
ajax({
  url:"http://127.0.0.1:8000/index",
  type:"get",
  dataType:"json"
}).then(function(result){
  var html="";
  var ul=document.getElementById("banner").firstElementChild;
  for(var item of result){
    html+=`<li class="carousel-item"><a href="${item.href}"><img src="${item.img_url}" alt="" class="w-100"/></a></li>`;
    ul.innerHTML=html;
  }
  var liFirst=document.querySelector("ul>li:first-child");
  liFirst.classList.add("active");
})