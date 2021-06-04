
const orderId = new URL(location.href).searchParams.get('orderId') || 'ERREUR';
document.getElementById('commandId').innerText = orderId;
let total = JSON.parse(localStorage.getItem('Total'));
console.log(total);
document.getElementById('total').innerText = total + ' ' + 'euros';
localStorage.clear();
localStorage.setItem('product', JSON.stringify([]));


