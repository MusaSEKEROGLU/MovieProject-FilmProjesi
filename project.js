
// FORM VE ELEMENTLERİNİ SEÇME
const form = document.getElementById("film-form"); // form
const titleElement = document.querySelector("#title"); //film ismi imputu
const directorElement = document.querySelector("#director"); // yönetmen imputu
const urlElement = document.querySelector("#url"); // link imputu
const cardbody = document.querySelectorAll(".card-body")[1];  //2.cardbody elemanını seçme
const clear = document.getElementById("clear-films"); // tüm resimleri sil butonunu secme



//UI Objesini Başlatma
const ui = new UI();
//Storage Objesi Üretme
const storage = new Storage();
//Tüm Eventleri Yükleme
addEventListeners();
//forma submit event'i atama
function addEventListeners(){
    form.addEventListener("submit",addFilm);
    //Filmleri LocalStorage'dan UI'ya ekleme, hazır event kullanma (DOMContentLoaded)
    document.addEventListener("DOMContentLoaded",function(){

        let films = storage.getFilmsFromStorage(); // storage deki fonksiyon.
        ui.loadAllsFilms(films);  //localstrage deki filmleri uı kısmına gönderdik.
    });
    //Filmleri Arayüzden Silme İşlemleri
    cardbody.addEventListener("click",deleteFilm);
   //Tüm Filmleri Arayüzden Silme İşlemleri
   clear.addEventListener("click",deleteAllFilms);
    
}
//Inputların değerlerini alma
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

if(title === "" || director === "" || url === ""){
    //Hata
    ui.displayMessages("Lütfen tüm alanları doldurunuz...","danger");  // textContent -type   =>  message-type
}
else{
  //Yeni Film Ekleme
    const newFilm = new Film(title,director,url);
    //AraYüze Film Ekleme
    ui.addFilmToUI(newFilm);
    storage.addFilmToStorage(newFilm);   // Storage Film Ekleme 
    ui.displayMessages("Film başarı ile eklendi...","success");// textContent -type   =>  message-type
}
//Inputları temizleme fonsiyonu - UI'da çağır
ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}


//Filmleri Arayüzden silme
function deleteFilm (e){
        
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target); // e.target = a elemeti
        //Filmleri LocalStorage2dan silme işlemleri
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme İşlemi Başarı ile Gerçekleşmiştir...","success");
    }
}
//Tüm Filmleri Arayüzden silme
function deleteAllFilms(){
    if(confirm("Emin misiniz?")){

        ui.deleteAllFilmsUI();
        storage.deleteAllFilmsFromStorage();
    }    
}