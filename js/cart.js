// ================== GET DATA ==================
var cakeProducts = JSON.parse(localStorage.getItem("orders")) || [];
var prices = 0;
var productsNum = 0;

// ================== CALCULATE ==================
for (let i = 0; i < cakeProducts.length; i++) {
  var item = Number(cakeProducts[i].price);
  var qty = cakeProducts[i].quantity || 1;

  prices += item * qty;
  productsNum += qty; // ✅ FIXED
}

var totalPrice = prices - prices * 0.05;

// ================== HTML ELEMENTS ==================
var items = document.getElementById("items");
var subtotal = document.getElementById("subtotal");
var discount = document.getElementById("discount");
var total = document.getElementById("Total");
var cards = document.getElementById("cardsCart");

// ================== INITIAL UI ==================
items.innerHTML = "Number of items : " + productsNum;
subtotal.innerHTML = "subTotal : " + prices + "$";
discount.innerHTML = "Discount : 5%";
total.innerHTML = "Total : " + totalPrice + "$";

displayOrdersData();

// ================== DISPLAY ==================
function displayOrdersData() {
  var container = "";

  if (cakeProducts.length === 0) {
    cards.innerHTML = "<h3 class='text-center mt-5'>Your cart is empty</h3>";
    return;
  }

  for (let i = 0; i < cakeProducts.length; i++) {
    var qty = cakeProducts[i].quantity || 1;

    var item = `
      <div class="card mb-3 p-0 border-0 bg-transparent ">
        <div class="row d-flex align-items-center justify-content-between">
          
          <div class="col-md-3">
            <img src="${cakeProducts[i].image}" class='rounded-2 shadow' alt="image">                
          </div>

          <div class="col-md-9 mt-0 rounded-2 bg-white d-flex justify-content-center align-items-center shadow">
            <div class="card-body">

              <div class="d-flex justify-content-between align-items-center">
                <h4 class="card-title">${cakeProducts[i].name}</h4>
                <h4 class="fs-5">${cakeProducts[i].price}$</h4>
              </div>

              <p class="card-text lead fs-6 mt-1 mb-0">${cakeProducts[i].description}</p>
              <p class="my-1">${cakeProducts[i].tags}</p>

              <p>
                <i class="fa-solid fa-star softGold"></i>
                <i class="fa-solid fa-star-half-stroke softGold"></i>
                <span class="ps-1 fs-6">${cakeProducts[i].rating}</span>
              </p>

              <div class="buttons d-flex justify-content-between align-items-center mt-3">
                
                <button class="btn rounded-2 fs-6" id='knowMore'>Know More</button>

                <div class='part d-flex align-items-center'>
                  
                  <button class='btn rounded-2 fs-6 d-flex align-items-center'>
                    <i class="fa-solid fa-plus plus" onclick='plusValue(${i})'></i>
                    
                    <span class='num fs-5 mx-2'>${qty}</span>
                    
                    <i class="fa-solid fa-minus minus" onclick='minusValue(${i})'></i>
                  </button>

                  <button class="btn rounded-2 fs-4 text-danger remove" onclick='removeItem(${i})'>
                    <i class="fa-solid fa-trash"></i>
                  </button>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    `;

    container += item;
  }

  cards.innerHTML = container;
}

// ================== PLUS ==================
function plusValue(index) {
  cakeProducts[index].quantity = (cakeProducts[index].quantity || 1) + 1;
  updateCart();
}

// ================== MINUS ==================
function minusValue(index) {
  if ((cakeProducts[index].quantity || 1) > 1) {
    cakeProducts[index].quantity--;
  }
  updateCart();
}

// ================== REMOVE ==================
function removeItem(index) {
  cakeProducts.splice(index, 1);
  updateCart();
}

// ================== UPDATE ==================
function updateCart() {
  localStorage.setItem("orders", JSON.stringify(cakeProducts));

  prices = 0;
  productsNum = 0;

  for (let i = 0; i < cakeProducts.length; i++) {
    var item = Number(cakeProducts[i].price);
    var qty = cakeProducts[i].quantity || 1;

    prices += item * qty;
    productsNum += qty; // ✅ FIXED
  }

  totalPrice = prices - prices * 0.05;

  items.innerHTML = "Number of items : " + productsNum;
  subtotal.innerHTML = "subTotal : " + prices + "$";
  total.innerHTML = "Total : " + totalPrice + "$";

  displayOrdersData();
}
