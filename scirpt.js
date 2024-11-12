// script.js

// ������ ����� ��� ������ �������� (50 ������ �� ���� �� ������)
const products = [
    { name: "��� ���� �����", category: "dairy", price: { dollar: "1.5$", egp: "30 ����" }, image: "https://via.placeholder.com/200x150?text=���+����+�����" },
    { name: "����", category: "dairy", price: { dollar: "2$", egp: "40 ����" }, image: "https://via.placeholder.com/200x150?text=����" },
    { name: "��� ����", category: "dairy", price: { dollar: "2$", egp: "40 ����" }, image: "https://via.placeholder.com/200x150?text=���+����" },
    { name: "��� �����", category: "meat", price: { dollar: "7$", egp: "140 ����" }, image: "https://via.placeholder.com/200x150?text=���+�����" },
    { name: "���� �����", category: "meat", price: { dollar: "5$", egp: "100 ����" }, image: "https://via.placeholder.com/200x150?text=����+�����" },
    { name: "���", category: "meat", price: { dollar: "4$", egp: "80 ����" }, image: "https://via.placeholder.com/200x150?text=���" },
    { name: "���� �����", category: "snacks", price: { dollar: "1$", egp: "20 ����" }, image: "https://via.placeholder.com/200x150?text=����+�����" },
    { name: "�����", category: "snacks", price: { dollar: "2$", egp: "40 ����" }, image: "https://via.placeholder.com/200x150?text=�����" },
    { name: "��������", category: "snacks", price: { dollar: "3$", egp: "60 ����" }, image: "https://via.placeholder.com/200x150?text=��������" },
    { name: "����� �����", category: "snacks", price: { dollar: "1$", egp: "25 ����" }, image: "https://via.placeholder.com/200x150?text=�����+�����" },
    { name: "�������� �������", category: "snacks", price: { dollar: "3$", egp: "60 ����" }, image: "https://via.placeholder.com/200x150?text=��������+�������" },
    // ����� 40 ������ ��� ��� ������...
];

// ��� ������
let cart = [];

// ��� �������� �� ������
function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("products-list");
    productList.innerHTML = ''; // ��� ������� ������
    filteredProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>�����: ${product.price.egp} / ${product.price.dollar}</p>
            <button onclick="addToCart(${index})">����� ��� �����</button>
        `;
        productList.appendChild(productElement);
    });
}

// ����� ���� ��� �����
function addToCart(index) {
    const product = products[index];
    cart.push(product);
    alert(`${product.name} �� ������ ��� �����!`);
    updateCart();
}

// ����� �����
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
    
    cartTotal.textContent = `������: ${total} ����`;
}

// ����� ����� (�������� �����)
function checkout() {
    const paymentMethod = prompt("���� ����� �����: 1) ����� ������  2) ��� ��� ��������");
    alert(`�� ������ ����� ��� ${paymentMethod === "1" ? "����� ������" : "����� ��� ��������"}`);
}

// ����� / ����� �����
function toggleCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.style.display = (cartContainer.style.display === "none" || cartContainer.style.display === "") ? "block" : "none";
}

// ��� ��� ���� �������
function openChat() {
    document.getElementById("chat-container").style.display = "flex";
}

// ����� ��� ���� �������
function closeChat() {
    document.getElementById("chat-container").style.display = "none";
}

// ����� ����� �� �����
function sendMessage() {
    const chatInput = document.getElementById("chat-input").value;
    if (chatInput.trim() !== "") {
        const chatBody = document.querySelector(".chat-body");
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message");
        userMessage.innerHTML = `<p><strong>���:</strong> ${chatInput}</p>`;
        chatBody.appendChild(userMessage);
        document.getElementById("chat-input").value = "";

        // ����� �� �� ���� �������
        setTimeout(() => {
            const customerServiceMessage = document.createElement("div");
            customerServiceMessage.classList.add("chat-message");
            customerServiceMessage.innerHTML = `<p><strong>���� �������:</strong> ����� ������� ����!</p>`;
            chatBody.appendChild(customerServiceMessage);
            chatBody.scrollTop = chatBody.scrollHeight; // ������� �����
        }, 1500);
    }
}

// ����� �������� ��� �����
document.getElementById("category-filter").addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    const filteredProducts = selectedCategory === "all" 
        ? products 
        : products.filter(product => product.category === selectedCategory);
    displayProducts(filteredProducts);
});

// ��� ����� ������
window.onload = () => {
    displayProducts();
};
