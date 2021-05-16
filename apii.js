


function display() {

    let peluche = document.getElementById("main");
    peluche.innerHTML += `
    
    <a href="produit.html"   onclick="displayproduit()">
       <li id="carte">
        <div class="  card-body " >
        <img class=”card-img-top" src=${post.imageUrl}>
        <hr>
        <h4 class="card-title">${post.name}</h4>
       
        <div class="price-btn">
        <p class="card-text prix">${post.price / 100} €</p>
        <button type="button" class="btn btn-dark">Acheter</button>
        </div>
        <hr>
        <p class="card-text">${post.description}</p>
        

       </div>
       </li>
       </a>
       
`

}


fetch('  http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(function (posts) {
        for (post of posts) {
            display();

        }


    });


 
    fetch('  http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(function(posts) {
        for(let i=0;i<posts.length;i++){
            if (post.name = `${posts[i].name}`){
                displayproduit()
            }
    }  
});

        
function displayproduit() {
let teddi = document.getElementById("main-produit");
teddi.innerHTML += `   
<img class=”card-img-top" src=${post.imageUrl}>
<hr>
<h4 class="card-title">${post.name}</h4>
<div class="price-btn">
<p class="card-text">${post.price / 100} €</p>
<button type="button" class="btn btn-dark">Acheter</button>
</div>
<hr>
<p class="card-text">${post.description}</p>
<p class="card-text">${post._id}</p>
</div>
`

}