

var ekleme;
var tablo;
var tumElemanlarListe = [];


//Başlık satırını oluşturan fonksiyon.
function baslikSatirOlustur(){
	ekleme += "<tr>";
	baslikListe.forEach(tabloBaslikla);
	ekleme += "</tr>";
};

//Eleman satırını oluşturan fonksiyon.
function elemanSatirOlustur(){
	elemanListe = [];
	baslikListe.forEach(elemanGirme);
	tumElemanlarListe.push(elemanListe);
	ekleme += "<tr>";
	tumElemanlarListe[i-1].forEach(elemanTablola);
	ekleme += "</tr>";
	i++;
};

//Tablo başlıklarını daha sonra yazdırmak üzere düzenleyen fonksiyon.
function tabloBaslikla(item){
	ekleme += "<th>" + item + "</th>";
};

//Tablo elemanlarını daha sonra yazdırmak üzere düzenleyen fonksiyon.
function elemanTablola(item){
	ekleme += "<td>" + item + "</td>";
}

//Tabloyu bitiren fonksiyon.
function tabloyuBitir(){
	tablo = "<table>" + ekleme + "</table>";
	document.getElementById("tablo").innerHTML = tablo;
	//document.getElementById("table").style.border = "thick solid #0000FF";
}