/**
 * Created by web on 2018/12/15.
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

ajax({
    url: "http://127.0.0.1:8000/productSeries/productType",
    type: "get",
    dataType: "json"
}).then(
    //菜单列表html
    //var menus = '';
    function(result) {
        GetData(0, result);
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
    }
);

