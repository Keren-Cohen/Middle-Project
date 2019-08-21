var imagesPath = ['images/250X110571325734.jpg', 'images/250X110668568400.jpg'];
var timeInterval = 5000;
window.addEventListener('load', function () {
    toReplaceImages(imagesPath);
})
function toReplaceImages(imagesPath) {
    var banner = document.getElementsByClassName('banner')[0];
       
        setInterval(function () {
            banner.setAttribute('src', imagesPath[0]);
            setTimeout(function(){
                banner.setAttribute('src', imagesPath[1]);
            },2000)
        }, timeInterval)
}

