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
        newdiv += `<option  value="${colorsNumb[i]}">${colorsNumb[i]}</option>;`
    }
   
    produit.innerHTML = `
 <div class="  card-body card-product" >
 <img class=”card-img-top" src=${product.imageUrl}>

<form>
<label for="options-couleurs">Choisir la couleur</label>
<select name="colors" id="options-colors" onchange="getChoice()">
<option  value="${i }"></option>;
${newdiv}
</select> 
</form>

<hr>
<div id="name-price">
<h4 class="card-title">${product.name}</h4>
<p class="card-text prix ">${product.price / 100} €</p>
<button type="button" class="btn btn-dark">Acheter</button>
</div>  
<hr>
<p class="card-text">${product.description}</p>
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

async function getChoice(){
    var SelectedChoice = await document.getElementById("options-colors").value;
    console.log(SelectedChoice );
    localStorage.setItem('Choice', SelectedChoice);
}

