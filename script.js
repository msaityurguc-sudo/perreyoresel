let products=[];

const list=document.getElementById("product-list");

const search=document.getElementById("searchInput");

const category=document.getElementById("categoryFilter");

fetch("products.json")

.then(r=>r.json())

.then(data=>{

products=data;

renderProducts(products);

});

function renderProducts(array){

list.innerHTML="";

array.forEach(product=>{

list.innerHTML+=`

<div class="card">

<img src="${product.resim}" class="product-image">

<h3>${product.ad}</h3>

<p>${product.aciklama}</p>

<h4>${product.fiyat} ₺ / ${product.birim}</h4>

<button onclick="order('${product.ad}')">

WhatsApp Sipariş

</button>

</div>

`;

});

}

function filterProducts(){

let filtered=products.filter(p=>{

const searchMatch=p.ad.toLowerCase().includes(search.value.toLowerCase());

const categoryMatch=

category.value==="Hepsi"

||

p.kategori===category.value;

return searchMatch&&categoryMatch;

});

renderProducts(filtered);

}

search.addEventListener("keyup",filterProducts);

category.addEventListener("change",filterProducts);

function order(product){

const phone="905512530087";

const text=`Merhaba, ${product} siparişi vermek istiyorum.`;

window.open(

`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,

"_blank"

);

}
