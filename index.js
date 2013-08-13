function loadHTML() {
    video = document.getElementById('video');
    source = document.getElementById('source');
    url = document.getElementById('input');
}

function loadvideo() {
    var file = url.files[0];
    var fileURL = URL.createObjectURL(file);
    source.src = fileURL;
    video.load();
    video.play();
}

function setVideoSize(width, height){
    video.width=width;
    video.height=height;
}
window.onload = function() {
    loadHTML()
};
var video, source, url;