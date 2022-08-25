var images=["Encanto.png","Encanto1.png","Encanto2.png","Encanto3.png","Encanto4.png","Encanto5.png","Encanto6.png","Encanto7.png","Encanto8.png","Encanto9.png"];
var nome=["Mirabel Madrigal","Isabela Madrigal","Luisa Madrigal","Alma Madrigal","Antonio Madrigal","Dolores Madrigal","Pepa e Felix Madrigal","Julieta e Agustin Madrigal","Camilo Madrigal","Bruno Madrigal"]

var contador=0;
function Proximo(){
    contador++; var numerodeparentes = 9
     if(contador > numerodeparentes) 
    { contador=0; }
    var adi=images[contador];
var adici=nome[contador];
document.getElementById("Família").src=adi;
document.getElementById("Nome").innerHTML = adici;
}