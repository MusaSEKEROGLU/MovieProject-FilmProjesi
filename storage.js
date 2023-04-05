function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){
    
   let films = this.getFilmsFromStorage();
   films.push(newFilm);
   localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.getFilmsFromStorage = function(){

    let films;

    if(localStorage.getItem("films") === null){

        films = [];
    }
    else {
        //localstorage sadece string değerler kabul ettiği için parse ediyoruz. array haline çevirdik.
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}
//Filmleri LocalStorage'dan Silme
Storage.prototype.deleteFilmFromStorage =  function(filmTitle){

    let films = this.getFilmsFromStorage();

    films.forEach(function(film,index) {
        
        if(film.title === filmTitle){ 
            films.splice(index,1);   // array'den birtane silme  splice  ile
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}
//Tüm Filmleri LocalStorage'dan Silme
Storage.prototype.deleteAllFilmsFromStorage = function(){
  
    localStorage.removeItem("films");
}