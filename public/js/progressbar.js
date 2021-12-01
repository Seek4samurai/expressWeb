var percent = document.getElementById('preogressbar');
var percent = document.getElementById('percent');

var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    var progress = (window.pageYOffset / totalHeight) * 100;
    preogressbar.style.height = progress + "%";
}
