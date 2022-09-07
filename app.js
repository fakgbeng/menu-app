const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "dinner",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// Selecting DOM Element
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Using ES6 classes (OOP)
class MenuView {
  _data;
  _parentElement;
  constructor(data, section) {
    this._data = data;
    this._parentElement = section;
  }
  _renderRecipe(rec) {
    const all = rec
      .map((rec) => {
        return `<article class="menu-item">
        <img src="${rec.img}" alt="" class="photo" />
        <div class="item-info">
          <header>
            <h4>${rec.title}</h4>
            <h4 class="price">$${rec.price}</h4>
          </header>

          <p class="item-text">
           ${rec.desc}
          </p>
        </div>
      </article>`;
      })
      .join("");
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", all);
  }
  allRecipe() {
    const all = this._data;
    this._renderRecipe(all);
  }
  breakfastRecipe() {
    const breakfast = this._data.filter((rec) => rec.category === "breakfast");
    this._renderRecipe(breakfast);
  }
  lunchRecipe() {
    const lunch = this._data.filter((rec) => rec.category === "lunch");
    this._renderRecipe(lunch);
  }
  shakesRecipe() {
    const shakes = this._data.filter((rec) => rec.category === "shakes");
    this._renderRecipe(shakes);
  }
  dinnerRecipe() {
    const dinner = this._data.filter((rec) => rec.category === "dinner");
    this._renderRecipe(dinner);
  }
}

const newMenu = new MenuView(menu, section);

// Initialization
const init = function () {
  newMenu.allRecipe();
  btnContainer.addEventListener("click", (e) => {
    if (e.target.dataset.id === "all") newMenu.allRecipe();
    if (e.target.dataset.id === "breakfast") newMenu.breakfastRecipe();
    if (e.target.dataset.id === "lunch") newMenu.lunchRecipe();
    if (e.target.dataset.id === "shakes") newMenu.shakesRecipe();
    if (e.target.dataset.id === "dinner") newMenu.dinnerRecipe();
  });
};
// Window load Event
window.addEventListener("DOMContentLoaded", init);
