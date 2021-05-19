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
    produit.innerHTML = `<div class="  card-body card-product" >
    <img class=”card-img-top" src=${product.imageUrl}>
    <div class="card-description>
       <h4 class="card-title">${product.name}</h4>
        <div class="price-btn">
          <p class="card-text prix">${product.price / 100} €</p>
          <button type="button" class="btn btn-dark">Ajouter</button>
        </div>
        <p class="card-text card-text-descreption">${product.description}</p>
    
    </div>
    </div>`
}
function getProductbyid(id) {
    return fetch(`http://localhost:3000/api/teddies/${id}`)
        .then(response => response.json())
        .then(function (product) {
            return product
        })
}

