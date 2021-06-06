
/* function global qui va recuperer les elements du Localstorage et  les affiché ainsi que le prix total de la commande  */
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

    if (Totalpanier) {
        TotalCommande.innerText += `${Totalpanier}` + ' ' + 'euros';
    }
}

/* si le panier est vide le bouton "vider le panier ainsi que le prix total de la commande doit etre invisible" */
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
/* effacer un produit de la liste */
/* pour chaque produit ily'a l'option couleur  */
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
            TotalPrice();
        })
    }
}

/* Vider le panier (effacer tout les produits de la liste ) */
function viderPanier() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([]));
    window.location.href = 'panier.html';
}
/* afficher le prix total de la commande et le stocker dans le LocalStorage pour le sauvgarder  */
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
/* Verfication du formulaire et la presence des produits dans le panier  */
/* Creation d'un objet Order qui contient un objet contact et un tableau de produit */
/* recuperation  de la reponse du serveur orderId et le transmettre dans l'URL de la page confirmation */
function confirmCommande() {
    let tabproducts = [];
    let ProductStorage = JSON.parse(localStorage.getItem('product'));
    const firstname = document.getElementById('firstName').value
    const lastname = document.getElementById('lastName').value
    const adressuser = document.getElementById('adresse').value
    const email = document.getElementById('email').value
    const cityuser = document.getElementById('ville').value
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const stringregex = /^[a-zA-Z]+$/
    if (!(
        firstname.length > 1
        && stringregex.test(firstname)
        && lastname.length > 1
        && stringregex.test(lastname)
        && emailRegex.test(email)
        && adressuser.length > 6
        && cityuser.length > 1
        && ProductStorage.length >0
    )) {
        alert("Veuillez remplir les champs correctements avant de procéder au paiement ou choisir un produit ")
        return
    }  else {
        const products = Object.values(ProductStorage).map((product) => {
            return product.id
        });
        const order = {
            contact: {
                firstName: firstname,
                lastName: lastname,
                address: adressuser,
                city: cityuser,
                email: email,
            },
            products: tabproducts,
        }
       const requestOptions = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
        }
        fetch('http://localhost:3000/api/teddies/order', requestOptions)
            .then((response) => response.json())
            .then((data) => {

                window.location.href = `${window.location.origin}/confirmation.html?orderId=${data.orderId}`
            })
            .catch(() => {
                alert(error)
            })
    }
}