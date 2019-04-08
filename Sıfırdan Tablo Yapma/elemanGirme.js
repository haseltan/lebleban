

var baslikListe = [];
var baslikElemanı;
var eleman;
var elemanListe = [];

//Başlık elemanı girme fonksiyonu.
function baslikElemanGir(){
	baslikElemanı = prompt("Tablo başlığı giriniz");
	baslikListe.push(baslikElemanı);
};


//Eğer sayisizliste 1 elemanlı ise liste olsun mu diye sorulabilir.
function sayisizBaslikElemanGir(){
	baslikElemanGir();
	baskaVarMiSoru();
	if(baskaVarMi == "evet"){
		sayisizBaslikElemanGir();	
	}else {
		baslikSatirOlustur();
		elemanSatirOlustur();
		tabloyuBitir();
	};
};


//Tablo elemanını kullanıcıdan girmesini isteyen ve girilen elemanı listeye ekleyen fonksiyon.
function elemanGirme(item, index){
	eleman = prompt(i + ". satirin " + item + " elemanını giriniz.");
	elemanListe.push(eleman);
};
