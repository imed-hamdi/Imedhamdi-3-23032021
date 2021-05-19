main()

async function main(){
    const products = await getProduct()
    for (product of products) {
        displayListProduct()
        
    }

  
}

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

     function getProduct(){
return fetch('http://localhost:3000/api/teddies')
.then(response =>response.json())
.then(function (products) {
    return products})
}


 
