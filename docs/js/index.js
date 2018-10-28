function contentLoader(){
    var url = window.location.href;
    if(url.indexOf("index.html") === -1){
        window.location.href += "index.html";
        url = window.location.href;
    }
    else if(url.indexOf("?page=") === -1){
        window.location.href += "?page=";
        url = window.location.href;
    }
    var file = url.substring(url.lastIndexOf('=')+1);
    if(file === ""){
        window.location.href += "home";
        url = window.location.href;
    }
//}

//function contentLoader(){
    $("#content").load("./html/" + file + ".html");
    document.getElementById(file).classList.add("active");
};

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

