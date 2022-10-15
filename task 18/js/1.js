// alert(1);
var value;
function move() {
    var element = document.getElementById('circle');
    element.onmousedown = function () {
        value = element;
    }
}
document.onmouseup = function () {
    // console.log(1);
    value = null;
}
document.onmousemove = function (e) {
    var a = e.clientX;  // horizontal coordinate
    var b = e.clientY;  // vertical coordinate

    value.style.left = a + "px";
    value.style.top = b + "px";
}