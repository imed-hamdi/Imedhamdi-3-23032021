
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



 function btnBuy(){


    var nameproduct =document.getElementById("nom").textContent;
    var priceproduct =document.getElementById("prix").textContent;
    var colorproduct =document.getElementById("options-colors").value;
     localStorage.setItem('nom',nameproduct);
     localStorage.setItem('prix',parseInt(priceproduct));
     localStorage.setItem('color',colorproduct);
   

}



