
var baskaVarMi;



//Bir başlık daha girip girilmeyeceğini soran fonksiyon.
function baskaVarMiSoru(){
	baskaVarMi = prompt("Baska baslik giricek misiniz? evet yada hayir yazınız.");
	if(baskaVarMi != "evet" && baskaVarMi != "hayir"){
		baskaVarMiKontrol();	
	};
};




//Evet veya hayır yazılıp yazılmadığını kontrol eden fonksiyon.
function baskaVarMiKontrol() {
	alert("Sadece evet veya hayir yaziniz. Dikkat edin hayir i le yazılıyor. Hayir ve evet küçük harfle yazılacak.");
	baskaVarMiSoru();
	if(baskaVarMi != "evet" && baskaVarMi != "hayir") {
	baskaVarMiKontrol();
	};
};