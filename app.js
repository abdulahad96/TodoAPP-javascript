function add(){
    var val = document.getElementById("val");
    var list = document.getElementById("list");
    var li = document.createElement("li");
    var te =document.createElement("i");
    var btn = document.createElement("button");
    var btn1 =document.createElement("button");
    var btnText = document.createTextNode("");
    var btnText1 =document.createTextNode("");
    btn1.appendChild(btnText1);

    btn.appendChild(btnText);
    btn.className += "glyphicon glyphicon-trash butt";
    btn1.className += "glyphicon glyphicon-edit butt";
    btn.onclick = function(){
        var li = this.parentNode;
        var ul = li.parentNode;
        ul.removeChild(li);

    }
    btn1.onclick = function(){
        var x =prompt("enter text");
        var te = this.parentNode;
        te.innerHTML = x;
        te.appendChild(btn);
        te.appendChild(btn1);
        // li.appendChild(te);
        // list.appendChild(li);
        
    }
    var text = document.createTextNode(val.value);
    te.appendChild(text);
    te.appendChild(btn);
    te.appendChild(btn1)
    li.appendChild(te);
    list.appendChild(li);
    val.value = "";
}
function delet(){
    alert("Are you sure to delete");
    document.getElementById("list").innerHTML="";
}