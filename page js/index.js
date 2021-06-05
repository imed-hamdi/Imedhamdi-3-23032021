main()
/* la fonction main() : function globale async  ,elle attend la reponse de la function getProduct() pour afficher 
la liste des produits sous forme de carte dans la page d'accueil   */
async function main(){
    const products = await getProduct()
    for (product of products) {
        displayListProduct()   
    }
}
/* Recuperation des informations des produits dans l'API  */
function getProduct(){
    return fetch('http://localhost:3000/api/teddies')
    .then(response =>response.json())
    .then(function (products) {
        return products})
    }
       
/* la creation d'une liste de carte qui contiennent les informations de chaque produits present dans l'API */
 function displayListProduct() {
    const peluche = document.getElementById("main");
    peluche.innerHTML += `
    <a href="produit.html?id=${product._id}">
    <li id="carte" >
    <div class="  card-body " >
    <img class=”card-img-top" src=${product.imageUrl}>
    <hr>
    <div id="name-price">
    <h4 class="card-title">${product.name}</h4>
    <p class="card-text prix ">${product.price / 100} €</p>
    </div>
  
    <hr>
    <p class="card-text">${product.description}</p>
    </div>
    </li>
     </a>
     `
 }


 
