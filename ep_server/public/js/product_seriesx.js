/**
 *生成树形结构菜单列表
 */
//根据菜单主键id生成菜单列表html
//id：菜单主键id
//arry：菜单数组信息
var menus = [];
var name;

function GetData(id, arry) {
    var childArry = GetParentArry(id, arry);
    if (childArry.length > 0) {
        var child = [];
        for (var i in childArry) {
            if (childArry[i].family_id == 0) {
                name = childArry[i].name;;
            }
            //console.log(childArry[i].name);
            child.push({ "name": childArry[i].name, "pid": childArry[i].family_id });
            GetData(childArry[i].id, arry);

        }

        menus.push({ "name": name, "child": child });
    }
};

//根据菜单主键id获取下级菜单
//id：菜单主键id
//arry：菜单数组信息
function GetParentArry(id, arry) {
    var newArry = new Array();
    for (var i in arry) {
        if (arry[i].family_id == id)
            newArry.push(arry[i]);
    }
    return newArry;
};
function loadProduct(family_id=3){
    ajax({
        url: "http://127.0.0.1:8000/productSeries/productList",
        type: "get",
        data:"family_id="+3,
        dataType: "json"
    }).then((result)=>{
        //console.log(result);
        //1:所有分类
        GetData(0, result.type);
        //console.log(menus);
        var type = document.getElementById("product_series_left").firstElementChild;
        var html = "";
        for (var item of menus) {
            html += `<li>
                <span>${item.name}</span>
                <ul class="list-unstyled">`;
            for (var child of item.child) {
                html+= `<li><a href="javascript:;" class="my_small">${child.name}</a></li>`;
            }
            html+=`</ul>
            </li>`;
            type.innerHTML = html;
        }
        var spans = document.querySelectorAll("div#product_series_left span");
        for (var sp of spans) {
            sp.onclick = function() {
                var span = this;
                if (span.className == "open") {
                    span.className = "";
                } else {
                    var openSpan = document.querySelector("div#product_series_left span.open");
                    if (openSpan != null) {
                        openSpan.className = "";
                    }
                    span.className = "open";
                }
            }
        }
        //2:产品列表
        var product=result.product;
        //console.log(product);
        var productlist=document.getElementById("product_right");
        var html1="";
        for(var products of product){
            html1+=`<li class="col-lg-3 col-sm-6 my-col-sm-6 p-1 productBlock">
                <img src="./img/product1.jpg" alt="" class="w-100">
                <div class="product_bg">
                <div class="product_content">
                    <h5 class="font-weight-bold">${products.name}</h5>
                    <p>${products.price}RMB</p>
                    <p>了解更多</p>
                    <span class="blackLine"></span>
                </div>
                </div>
            </li>`;
        }
        //2.1:鼠标移入移出效果
        productlist.innerHTML=html1;
        var imgs = document.querySelectorAll("li.productBlock");
        for (var im of imgs) {
            im.onmouseover = function() {
                var img = this.children[1];
                img.classList.add("open");
            }
            im.onmouseout = function() {
                var img = this.children[1];
                img.classList.remove("open");
            }
            im.onclick=function(){
                location.href="http://127.0.0.1:5500/product_detail.html";
            }
        }
    })
}
loadProduct();

$("div#product_series_left>ul").on("click","a",function(e){
    e.preventDefault();
    var name=$(this).html();
    console.log(name);
    //console.log(menus);
})

