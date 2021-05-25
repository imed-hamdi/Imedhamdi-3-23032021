 

let Commandeligne =document.querySelector(".Commandeligne");
var nameProd  = localStorage.getItem('nom');
var priceProd = JSON.parse(localStorage.getItem('prix'));
var colorProd  =localStorage.getItem('color');

Commandeligne.innerHTML +=  `
<td>${nameProd}</td><td>${priceProd}</td> <td>${colorProd}</td>

<td>
<form><select id="selectqt">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
</form>
</td>`










