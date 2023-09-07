/*console.log("HOLA MUNDO");

function sumar(n1,n2){
    return n1+n2
}*/

const shareDiv = document.createElement("div");
const cantidad = document.createElement("span");
const shares = document.createElement("span");

const text1 = document.createTextNode("1K");
cantidad.appendChild(text1);
const text2 = document.createTextNode("Shares");
shares.appendChild(text2);

shareDiv.appendChild(cantidad);
shareDiv.appendChild(shares);

const stat = document.querySelector(".stat");

stat.appendChild(shareDiv);
