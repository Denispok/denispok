var myImage = document.querySelector('.main-img');
var clickOnMeCount = 0;

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.jpg' && clickOnMeCount >= 4) {
      myImage.setAttribute ('src','images/me-1.png');
      clickOnMeCount = 0;
    } else if(mySrc === 'images/me-1.png') {
      myImage.setAttribute ('src','images/me-2.png');
    } else if(mySrc === 'images/me-2.png') {
      myImage.setAttribute ('src','images/me.jpg');
    } else {
        clickOnMeCount = clickOnMeCount+1;
    }
}