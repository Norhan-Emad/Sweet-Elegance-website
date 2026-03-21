//////// our array ///////////////

var cakeProducts = [
  {
    id: 1,
    name: "Strawberry Dream",
    category: "Layer Cake",
    price: 32,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
    description:
      "Soft vanilla sponge layered with fresh strawberries and whipped cream frosting, creating a light fruity cake perfect for celebrations.",
    tags: ["strawberry", "birthday", "fresh"],
  },
  {
    id: 2,
    name: "Chocolate Royal Cake",
    category: "Chocolate",
    price: 38,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
    description:
      "Rich dark chocolate sponge layered with silky ganache and finished with elegant gold flakes for indulgent premium dessert lovers.",
    tags: ["chocolate", "premium", "best-seller"],
  },
  {
    id: 3,
    name: "Vanilla Cupcake",
    category: "Cupcake",
    price: 6,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce",
    description:
      "Fluffy vanilla cupcake topped with smooth rose-shaped buttercream frosting, offering delicate sweetness for parties and afternoon treats.",
    tags: ["cupcake", "vanilla", "sweet"],
  },
  {
    id: 4,
    name: "Caramel Drip Cake",
    category: "Layer Cake",
    price: 35,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    description:
      "Moist sponge layered with creamy caramel filling and finished with glossy golden drip glaze for luxurious sweet indulgence.",
    tags: ["caramel", "luxury", "celebration"],
  },
  {
    id: 5,
    name: "Macaron Box",
    category: "Macarons",
    price: 18,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    description:
      "Colorful French macarons filled with strawberry, pistachio, and vanilla creams, beautifully arranged inside elegant gift-ready packaging.",
    tags: ["macaron", "gift", "colorful"],
  },
  {
    id: 6,
    name: "Mint Frost Cake",
    category: "Specialty",
    price: 40,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f",
    description:
      "Elegant mint sponge layered with smooth cream and decorated with floral accents and delicate golden decorative touches.",
    tags: ["mint", "premium", "event"],
  },
  {
    id: 7,
    name: "Red Velvet Romance",
    category: "Layer Cake",
    price: 34,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7",
    description:
      "Classic red velvet sponge layered with smooth cream cheese frosting, delivering rich flavor and romantic bakery-style presentation.",
    tags: ["red-velvet", "romantic", "best-seller"],
  },
  {
    id: 8,
    name: "Oreo Crunch Cake",
    category: "Chocolate",
    price: 36,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb",
    description:
      "Chocolate sponge layered with creamy Oreo filling and crunchy cookie bits, creating delightful texture contrast in every bite.",
    tags: ["oreo", "chocolate", "kids"],
  },
  {
    id: 9,
    name: "Lemon Zest Delight",
    category: "Layer Cake",
    price: 30,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb",
    description:
      "Light lemon sponge layered with citrus cream and topped with fresh zest for refreshing vibrant flavor experience.",
    tags: ["lemon", "fresh", "light"],
  },
  {
    id: 10,
    name: "Pistachio Luxury Cake",
    category: "Specialty",
    price: 42,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description:
      "Premium pistachio sponge layered with silky nut cream and topped with crushed pistachios for refined sophisticated flavor.",
    tags: ["pistachio", "premium", "luxury"],
  },
  {
    id: 11,
    name: "Chocolate Box",
    category: "Cupcake",
    price: 12,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1607478900766-efe13248b125",
    description:
      "Box of four rich chocolate cupcakes topped with smooth ganache frosting, perfect for sharing during celebrations.",
    tags: ["cupcake", "chocolate", "box"],
  },
  {
    id: 12,
    name: "Blueberry Bliss",
    category: "Layer Cake",
    price: 33,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
    description:
      "Soft vanilla sponge layered with blueberry jam and smooth cream frosting delivering fruity elegant dessert experience.",
    tags: ["blueberry", "fresh", "fruity"],
  },
  {
    id: 13,
    name: "Tiramisu Classic",
    category: "Specialty",
    price: 37,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d",
    description:
      "Traditional Italian tiramisu layered with espresso-soaked sponge and mascarpone cream offering smooth texture and bold coffee flavor.",
    tags: ["coffee", "italian", "premium"],
  },
  {
    id: 14,
    name: "Raspberry Rose Cake",
    category: "Layer Cake",
    price: 35,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    description:
      "Delicate raspberry sponge layered with light cream and decorated with floral buttercream roses for romantic occasions.",
    tags: ["raspberry", "romantic", "floral"],
  },
  {
    id: 15,
    name: "Chocolate Fudge",
    category: "Chocolate",
    price: 39,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
    description:
      "Deep chocolate fudge sponge layered with triple ganache frosting delivering intense flavor and irresistibly smooth texture.",
    tags: ["fudge", "chocolate", "intense"],
  },
];

var myOrder = [];

//////////variables//////////
var search = document.getElementById("search");

var cards = document.getElementById("cardsRow");

/////////global/////////////
showData();

////functions////

function showData() {
  var container = "";
  for (i = 0; i < cakeProducts.length; i++) {
    var item = `<div class="col-xl-4 col-lg-4 col-md-6 mb-3">
                            <div class="card border-0 shadow rounded-2">
                                <img src="${cakeProducts[i].image}" class="card-img-top" alt="image">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4 class="card-title">${cakeProducts[i].name}</h4>
                                        <h4 id="price" class="fs-5">${cakeProducts[i].price}$</h4>
                                    </div>
                                    <p class="card-text lead fs-6 mt-1 mb-0">${cakeProducts[i].description}</p>
                                    <p id="tages" class="my-1">${cakeProducts[i].tags}</p>
                                    <p id="stars"><i class="fa-solid fa-star softGold my-0"></i><i class="fa-solid fa-star-half-stroke softGold"></i><span id="rating" class="ps-1 fs-6">${cakeProducts[i].rating}</span></p>
                                    <div class="buttons">
                                        <button class="btn rounded-2 fs-6" id="knowMore">Know More</button>
                                        <button class="btn rounded-2 fs-6" id="Add" onclick="addItem(${i}) , showAlert()"><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                                </div>
                        </div>`;
    container += item;
  }
  cards.innerHTML = container;
}

function searchItem() {
  var searchValue = search.value;
  console.log(searchValue);

  var container = "";
  for (i = 0; i < cakeProducts.length; i++) {
    if (
      cakeProducts[i].name.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      var item = `<div class="col-md-3 mb-3">
                            <div class="card border-0 shadow rounded-2">
                                <img src="${cakeProducts[i].image}" class="card-img-top" alt="image">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4 class="card-title">${cakeProducts[i].name}</h4>
                                        <h4 id="price" class="fs-5">${cakeProducts[i].price}$</h4>
                                    </div>
                                    <p class="card-text lead fs-6 mt-1 mb-0">${cakeProducts[i].description}</p>
                                    <p id="tages" class="my-1">${cakeProducts[i].tags}</p>
                                    <p id="stars"><i class="fa-solid fa-star softGold my-0"></i><i class="fa-solid fa-star-half-stroke softGold"></i><span id="rating" class="ps-1 fs-6">${cakeProducts[i].rating}</span></p>
                                    <div class="buttons">
                                        <button class="btn rounded-2 fs-6" id="knowMore">Know More</button>
                                        <button class="btn rounded-2 fs-6" id="Add" onclick='${addItem(i)}'><i class="fa-solid fa-plus pe-none"></i></button>
                                    </div>
                                </div>
                                </div>
                        </div>`;
      container += item;
    }
  }
  cards.innerHTML = container;
}



function addItem(Item) {
  myOrder.push(cakeProducts[Item]);

  console.log(myOrder);

  ////////add to local storage ///////
  localStorage.setItem("orders", JSON.stringify(myOrder));
  console.log(localStorage);
}

////////events/////
search.addEventListener("input", function () {
  searchItem();
});


/////alert////////
var alertBox = document.getElementById("alertBox");

function showAlert(){
alertBox.style.display = "block";
setTimeout(() => {
  alertBox.style.display = "none";
}, 3000);
}


