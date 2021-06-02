
func()

async function func() {
    const query = window.location.search;
    const url = new URLSearchParams(query);
    const id = url.get("id");
    const product = await getProductbyid(id);
    displayproduit(product)
}


function displayproduit(product) {

    const produit = document.getElementById("main-produit");
    let colorsNumb = product.colors;
    let newdiv = [];
    for (i = 0; i < colorsNumb.length; i++) {
        newdiv += `<option  value="${colorsNumb[i]}">${colorsNumb[i]}</option>`
    }

    produit.innerHTML = `
   
 <div class="  card-body card-product" >
 
 <img class=”card-img-top" src=${product.imageUrl}>
<div class="cardDescription">
 <form>
 <label for="options-couleurs">Choisir la couleur</label>
  <select name="colors" id="options-colors" required >
 <option  value="${i}"></option>;
  ${newdiv}
 </select> 
 </form>

<hr>
<div id="name-price">
<h4 class="card-title" id="nom">${product.name}</h4>
<div class='logo'>
<p class="card-text prix " id="prix">${product.price / 100}</p><span>€</span>
</div>
<a href="panier.html">
<button type="button" id="btnCommande" onclick="btnBuy()" class="btn btn-dark">Acheter</button></a>
</div>  
<hr>
<p class="card-text">${product.description}</p>
<p  id="idprod"> ${product._id}</p>
</div>
</div>

    `


}
function getProductbyid(id) {
    return fetch(`http://localhost:3000/api/teddies/${id}`)
        .then(response => response.json())
        .then(function (product) {
            return product
        })
}



function btnBuy() {

    var nameproduct = document.getElementById("nom").textContent;
    var priceproduct = document.getElementById("prix").textContent;
    var colorproduct = document.getElementById("options-colors").value;
    var idproduct = document.getElementById('idprod').textContent;

    let ProductOption = {
        id: idproduct,
        quantity: 1,
        nom: nameproduct,
        price: priceproduct,
        color: colorproduct,
    }

    let ProductStorage = JSON.parse(localStorage.getItem('product'));
    
    if (!ProductStorage ) {
        ProductStorage = [];
    }
        ProductStorage.push(ProductOption);
        localStorage.setItem('product', JSON.stringify(ProductStorage));
        TotalPriceCommande();
    }









function TotalPriceCommande() {

    let tab = [];
    let ProductStorage = JSON.parse(localStorage.getItem('product'));
    let Total = 0;
    for (let l = 0; l < ProductStorage.length; l++) {
        Total = Total + parseInt(ProductStorage[l].price * ProductStorage[l].quantity);
    }
    tab.push(Total);
    localStorage.setItem('Total', JSON.stringify(tab));

}
