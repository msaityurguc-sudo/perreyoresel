document.addEventListener("DOMContentLoaded", () => {

    const productList = document.getElementById("product-list");

    fetch("products.json")
        .then(response => response.json())
        .then(products => {

            products.forEach(product => {

                const card = document.createElement("div");

                card.className = "card";

                card.innerHTML = `
                    <img src="${product.resim}" alt="${product.ad}" class="product-image">

                    <h3>${product.ad}</h3>

                    <p>${product.aciklama}</p>

                    <h4>${product.fiyat} ₺ / ${product.birim}</h4>

                    <a class="hero-btn"
                    target="_blank"
                    href="https://wa.me/905512530087?text=Merhaba,%20${encodeURIComponent(product.ad)}%20ürünü%20hakkında%20bilgi%20almak%20istiyorum.">
                    WhatsApp Sipariş
                    </a>
                `;

                productList.appendChild(card);

            });

        });

});
