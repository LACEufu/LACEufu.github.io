/*My JavaScript

var banners = ["img/banner1.jpg", "img/banner2.png"];
var bannerAtual = 0; //nao pre isava do ;

fuction changeBanner(){
	bannerAtual = (bannerAtual+1)%2; // bannerAtual++ e volta ao 0 a cada 2
	document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}

setInterval(changeBanner, 4000);