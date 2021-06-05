/* recuperation de l'id de la commande (retourner par le serveur) de l'URL et l'inserer
dans la page de confirmation ainsi que le prix total de la commande et effcaer le local storage   */
confirm();
function confirm(){
const orderId = new URL(location.href).searchParams.get('orderId') || 'ERREUR';
document.getElementById('commandId').innerText = orderId;
let total = JSON.parse(localStorage.getItem('Total'));
console.log(total);
document.getElementById('total').innerText = total + ' ' + 'euros';
localStorage.clear();
localStorage.setItem('product', JSON.stringify([]));

}
