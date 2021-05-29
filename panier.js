


let ProductStorage = JSON.parse(localStorage.getItem('product'));
displaybtnstatus();
let Commandeligne = document.querySelector(".Commandeligne");
for (let j = 0; j < ProductStorage.length; j++) {
    Commandeligne.innerHTML += `<tr>
<td class="name">${ProductStorage[j].nom}</td><td>${ProductStorage[j].price}</td> <td>${ProductStorage[j].color}</td>

<td>
<form><select onchange="TotalPrice()" class="selectqt">
<option>${ProductStorage[j].quantity}</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
</form>
</td>
<td id="total">${ProductStorage[j].price * ProductStorage[j].quantity}</td>
<td><button type="button" class="btn btn-dark btnDelete" onclick="deleteItem()"><i class="far fa-trash-alt"></i></button></td>
</tr>
`}

function displaybtnstatus() {

    if (ProductStorage) {
        document.getElementById("btnviderpanier").hidden = false;
        document.getElementById("panierstatut").hidden = true;
        document.getElementById("TotalCommande").hidden = false;
    } else {
        document.getElementById("btnviderpanier").hidden = true;
        document.getElementById("panierstatut").hidden = false;
        document.getElementById("TotalCommande").hidden = true;
    }
}

function deleteItem() {
    let btnDel = document.querySelectorAll('.btnDelete');
    let ProductStorage = JSON.parse(localStorage.getItem('product'));
    for (let k = 0; k < btnDel.length; k++) {
        let objet = ProductStorage[k].id;
        let objetcol = ProductStorage[k].color;
        btnDel[k].addEventListener('click', () => {
            ProductStorage = ProductStorage.filter(el => ((el.id !== objet) || (el.color !== objetcol)));
            localStorage.setItem('product', JSON.stringify(ProductStorage));
            window.location.href = "panier.html";

        })
    }
}

function viderPanier() {
    localStorage.clear();
    window.location.href = 'panier.html';
}






function TotalPrice() {
    let tab = [];
    let ProductStorage = JSON.parse(localStorage.getItem('product'));
    let Totalproduct = document.querySelectorAll('.selectqt');
    for (let l = 0; l < ProductStorage.length; l++) {
        ProductStorage[l].quantity = Totalproduct[l].value;
        tab.push(ProductStorage);
        localStorage.setItem('product', JSON.stringify(ProductStorage));
    }
    window.location.href = 'panier.html';
}
