document.addEventListener("keydown",function(event){
    document.getElementById("key").textContent = event.key;
    document.getElementById("code").textContent = event.code;
    document.getElementById("keycode").textContent = event.keyCode;

});



