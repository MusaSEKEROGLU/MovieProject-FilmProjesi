
function UI(){

}

UI.prototype.addFilmToUI = function(newFilm){
//film tbody elementini secme
const filmList = document.getElementById("films");
//film ekleme liste
filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Sil</a></td>
        </tr> 
`;
}
//Film ekleme bittikten sonra Input ları boşaltma - project.js de clearInputs fonksiyonunu çağır
UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

//Inputların boş geçilmesi-Hata Mesajı
UI.prototype.displayMessages = function(message,type){
//1.cardbody secimi
    const cordBody = document.querySelector(".card-body");
//Alert div'ini oluştur.Hata mesajı
    const newdiv = document.createElement("div");  //yeni div elementi yaratma
    newdiv.className = `alert alert-${type}`;    // div elementine className verme ve msj'ın tipini belirtme
    newdiv.textContent = message;     // mesajda ne yazacak 
    cordBody.appendChild(newdiv);
//hata mesajının kaybolma süresi
    setTimeout(function() {
        newdiv.remove();
    }, 2000);
}
//localStorage'dan UI'ya filmleri ekleme
UI.prototype.loadAllsFilms = function(films){
    const filmList = document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Sil</a></td>
        </tr>     
        `;
    });
}
//Filmleri Arayüzden Silme
UI.prototype.deleteFilmFromUI = function(element){
               //tr elementinin içinde td ve a elementi olduğu için sil butonuna basınca komple tr elemeni silmek istiyoruz 
               //onun için a dan tr ye kadar parentElement ile gidiyoruz
               //parentElement = üst elemanı sec demektir.
               //<a>-<td>-<tr>    element = a , parentElement = td , 2. parentElement = tr   oluyor
    element.parentElement.parentElement.remove();
}

//Tüm Filmleri Arayüzden Silme
UI.prototype.deleteAllFilmsUI = function(){

    const filmList = document.getElementById("films"); //tbody Filmleri secme
    
       while(filmList.firstElementChild !== null){   //child olduğu sürece
      
        filmList.firstElementChild.remove();
       }   
}