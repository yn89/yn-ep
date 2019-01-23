$(function(){
  $.ajax({
    url:"http://127.0.0.1:8000/header.html",
    type:"get",
    success: function(res) {
      $(res).replaceAll("#header"); 
    }
  })
})