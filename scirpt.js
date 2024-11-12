// script.js

// ãÕİæİÉ ÊÍÊæí Úáì ÈíÇäÇÊ ÇáãäÊÌÇÊ (50 ãäÊÌğÇ ãÚ ÊäæÚ İí ÇáİÆÇÊ)
const products = [
    { name: "áÈä ßÇãá ÇáÏÓã", category: "dairy", price: { dollar: "1.5$", egp: "30 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=áÈä+ßÇãá+ÇáÏÓã" },
    { name: "ÒÈÏÉ", category: "dairy", price: { dollar: "2$", egp: "40 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=ÒÈÏÉ" },
    { name: "ÌÈä ŞÑíÔ", category: "dairy", price: { dollar: "2$", egp: "40 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=ÌÈä+ŞÑíÔ" },
    { name: "áÍã ãİÑæã", category: "meat", price: { dollar: "7$", egp: "140 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=áÍã+ãİÑæã" },
    { name: "ÏÌÇÌ ãİÑæã", category: "meat", price: { dollar: "5$", egp: "100 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=ÏÌÇÌ+ãİÑæã" },
    { name: "ÓÌŞ", category: "meat", price: { dollar: "4$", egp: "80 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=ÓÌŞ" },
    { name: "ÔíÈÓ ÈØÇØÓ", category: "snacks", price: { dollar: "1$", egp: "20 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=ÔíÈÓ+ÈØÇØÓ" },
    { name: "ßæßíÒ", category: "snacks", price: { dollar: "2$", egp: "40 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=ßæßíÒ" },
    { name: "ÔæßæáÇÊÉ", category: "snacks", price: { dollar: "3$", egp: "60 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=ÔæßæáÇÊÉ" },
    { name: "ÈØÇØÓ ãŞáíÉ", category: "snacks", price: { dollar: "1$", egp: "25 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=ÈØÇØÓ+ãŞáíÉ" },
    { name: "ÔæßæáÇÊÉ ÈÇáÈäÏŞ", category: "snacks", price: { dollar: "3$", egp: "60 Ìäíå" }, image: "https://via.placeholder.com/200x150?text=ÔæßæáÇÊÉ+ÈÇáÈäÏŞ" },
    // ÅÖÇİÉ 40 ãäÊÌğÇ ÂÎÑ ÍÓÈ ÇáÍÇÌÉ...
];

// ÓáÉ ÇáÊÓæŞ
let cart = [];

// ÚÑÖ ÇáãäÊÌÇÊ İí ÇáÕİÍÉ
function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("products-list");
    productList.innerHTML = ''; // ãÓÍ ÇáãÍÊæì ÇáÓÇÈŞ
    filteredProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>ÇáÓÚÑ: ${product.price.egp} / ${product.price.dollar}</p>
            <button onclick="addToCart(${index})">ÅÖÇİÉ Åáì ÇáÓáÉ</button>
        `;
        productList.appendChild(productElement);
    });
}

// ÅÖÇİÉ ãäÊÌ Åáì ÇáÓáÉ
function addToCart(index) {
    const product = products[index];
    cart.push(product);
    alert(`${product.name} Êã ÅÖÇİÊå Åáì ÇáÓáÉ!`);
    updateCart();
}

// ÊÍÏíË ÇáÓáÉ
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - ${product.price.egp}`;
        cartItems.appendChild(cartItem);
        total += parseFloat(product.price.egp);
    });
    
    cartTotal.textContent = `ÅÌãÇáí: ${total} Ìäíå`;
}

// ÅÊãÇã ÇáÏİÚ (ÇÎÊíÇÑÇÊ ÇáÏİÚ)
function checkout() {
    const paymentMethod = prompt("ÇÎÊÑ æÓíáÉ ÇáÏİÚ: 1) ÈØÇŞÉ ÇÆÊãÇä  2) ÏİÚ ÚäÏ ÇáÇÓÊáÇã");
    alert(`Êã ÇÎÊíÇÑ ÇáÏİÚ ÚÈÑ ${paymentMethod === "1" ? "ÈØÇŞÉ ÇÆÊãÇä" : "ÇáÏİÚ ÚäÏ ÇáÇÓÊáÇã"}`);
}

// ÅÙåÇÑ / ÅÎİÇÁ ÇáÓáÉ
function toggleCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.style.display = (cartContainer.style.display === "none" || cartContainer.style.display === "") ? "block" : "none";
}

// İÊÍ ÔÇÊ ÎÏãÉ ÇáÚãáÇÁ
function openChat() {
    document.getElementById("chat-container").style.display = "flex";
}

// ÅÛáÇŞ ÔÇÊ ÎÏãÉ ÇáÚãáÇÁ
function closeChat() {
    document.getElementById("chat-container").style.display = "none";
}

// ÅÑÓÇá ÑÓÇáÉ İí ÇáÔÇÊ
function sendMessage() {
    const chatInput = document.getElementById("chat-input").value;
    if (chatInput.trim() !== "") {
        const chatBody = document.querySelector(".chat-body");
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message");
        userMessage.innerHTML = `<p><strong>ÃäÊ:</strong> ${chatInput}</p>`;
        chatBody.appendChild(userMessage);
        document.getElementById("chat-input").value = "";

        // ÅÖÇİÉ ÑÏ ãä ÎÏãÉ ÇáÚãáÇÁ
        setTimeout(() => {
            const customerServiceMessage = document.createElement("div");
            customerServiceMessage.classList.add("chat-message");
            customerServiceMessage.innerHTML = `<p><strong>ÎÏãÉ ÇáÚãáÇÁ:</strong> ÔßÑğÇ áÊæÇÕáß ãÚäÇ!</p>`;
            chatBody.appendChild(customerServiceMessage);
            chatBody.scrollTop = chatBody.scrollHeight; // ÇáÊãÑíÑ áÃÓİá
        }, 1500);
    }
}

// İáÊÑÉ ÇáãäÊÌÇÊ ÍÓÈ ÇáİÆÉ
document.getElementById("category-filter").addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    const filteredProducts = selectedCategory === "all" 
        ? products 
        : products.filter(product => product.category === selectedCategory);
    displayProducts(filteredProducts);
});

// ÚäÏ ÊÍãíá ÇáÕİÍÉ
window.onload = () => {
    displayProducts();
};
