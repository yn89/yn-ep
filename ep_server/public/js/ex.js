$(function() {
    var menuArry = [
        { id: 1, name: "雅莹精品", namea: "EP精品", pid: 1 },
        { id: 1, name: "雅莹精品", namea: "雅莹系列", pid: 1 },
        { id: 2, name: "下装", namea: "裙子", pid: 2 },

    ];
    getTree(menuArry);
    GetData(0, menuArry)
    console.log(menus);
    $("body").append(menus);
});

function getTree(params) {
    var map = new Array();
    var array = new Array();
    var temp = -100;

    params.forEach(element => {
        map[element.id] = element;
    });
    console.log(map);
    var ddfdsa = [];
    var all = {};
    params.forEach(element => {
        debugger;
        for (var d in map) {
            console.log(map[d]);
            if (map[d].id == element.pid) {
                ddfdsa.push({ "child": element.namea });
            }
        }
    });
    console.log(ddfdsa);
}


var menus = "";



function GetData(id, array) {
    var childArray = GetParentData(id, array);
    if (childArray.length > 0) { //如果有值，采用递归得到他的子元素
        menus += '<ul>'
        for (var i in childArray) {
            menus += '<li>' + childArray[i].name;
            GetData(childArray[i].id, array);
            menus += '</li>';
        }
        menus += '</ul>';
    }
}

function GetParentData(id, array) {
    var newArray = [];
    for (var i in array) {
        if (array[i].pid == id)
            newArray.push(array[i]);
    }
    return newArray;
}