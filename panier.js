panier();


function panier() {
    displaybtnstatus()
    let TotalCommande = document.getElementById("TotalCommande");
    let Totalpanier = JSON.parse(localStorage.getItem('Total'));
    let ProductStorage = JSON.parse(localStorage.getItem('product'));
    let Commandeligne = document.querySelector(".Commandeligne");
    for (let j = 0; j < ProductStorage.length; j++) {
        Commandeligne.innerHTML += `<tr>
<td class="name">${ProductStorage[j].nom}</td><td>${ProductStorage[j].price}</td> <td>${ProductStorage[j].color}</td>

<td>
<form><select onchange="TotalPrice()" class="selectqt">
<option >${ProductStorage[j].quantity}</option>
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

if(Totalpanier){
    TotalCommande.innerText += `${Totalpanier}` + ' ' + 'euros';
}
}




function displaybtnstatus() {
    let ProductStorage = JSON.parse(localStorage.getItem('product'));
    if (ProductStorage.length) {
      
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
            TotalPrice();
            window.location.href = "panier.html";

        })
    }
}



function viderPanier() {
    localStorage.clear();
  localStorage.setItem('product',JSON.stringify([]));
    window.location.href = 'panier.html';
}










function TotalPrice() {
    let tabqt = [];
    let tab = [];
    let ProductStorage = JSON.parse(localStorage.getItem('product'));
    let Totalproduct = document.querySelectorAll('.selectqt');
    let Total = 0;
    for (let l = 0; l < ProductStorage.length; l++) {
        Total = Total + parseInt(ProductStorage[l].price * Totalproduct[l].value);
        ProductStorage[l].quantity = Totalproduct[l].value;
        tabqt.push(ProductStorage);
        localStorage.setItem('product', JSON.stringify(ProductStorage));

    }
    tab.push(Total);
    localStorage.setItem('Total', JSON.stringify(tab));
    window.location.href = 'panier.html';
}
