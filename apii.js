

fetch('  http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(function (posts) {
        for (post of posts) {

            document.getElementById("main").innerHTML += `
            <ul class="list-product">
            <a href="#">
             <li>
            <div class="  card-body " >
                <img class=”card-img-top crtaa" src=${post.imageUrl}>
                <hr>
                <h4 class="card-title">${post.name}</h4>
                <p class="card-text">${post.price}$</p>
                <button type="button" class="btn btn-dark">acheter</button>
               
               </div>
               </li>
               </a>
               </ul>
       `

        }
    });
