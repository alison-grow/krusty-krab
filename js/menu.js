const menu = [
{
    id: 1,
    title: "Krabby Patty with Cheese",
    category: "patties",
    price: 2.99,
    img: "https://cl.buscafs.com/www.sandiegored.com/public/uploads/images/196024_832x624.jpg",
    desc: `The standard Krabby Patty. Features a single patty, kelp cheese, lettuce, tomato, pickle. `,
},
{
    id: 2,
    title: "Krabby Double Deluxe with Cheese",
    category: "patties",
    price: 3.99,
    img: "./img/Deluxe_Krabby_Patty.webp",
    desc: `A standard Krabby Patty with double patties and cheese. Double the flavor!`,
},
{
    id: 3,
    title: "Jelly Patty",
    category: "patties",
    price: 3.99,
    img: "./img/Jelly_Patty.webp",
    desc: `A sweet twist on a savory classic. Features a patty, lettuce, tomato, pickle, and fresh-made jellyfish jelly.`,
},
{
    id: 4,
    title: "King Size Ultra Krabby Supreme",
    category: "patties",
    price: 6.99,
    img: "./img/king-size.webp",
    desc: `A Krabby Patty with triple patties and cheese, deep fried on a stick. A meal fit for a king!`,
},
{
    id: 5,
    title: "Pipsqueak Patty",
    category: "patties",
    price: 2.99,
    img: "./img/pipsqueak.webp",
    desc: `Our kids' meal! A smaller version of our original patty, with a smiley face on the top bun :)`,
},
{
    id: 6,
    title: "Pretty Patties",
    category: "patties",
    price: '2.99 each',
    img: "./img/pretty-patty.webp",
    desc: `Our standard patty but in prettier colors! Comes in any color or pattern under the sun. Try the plaid!`,
},
{
    id: 7,
    title: "Kelp Fries",
    category: "sides",
    price: 2.99,
    img: "http://en.spongepedia.org/images/c/c1/130a_Kelp_Fries.jpg",
    desc: `Fresh farm to table kelp strips, battered and deep fried to golden perfection.`,
},
{
    id: 8,
    title: "Coral Bits",
    category: "sides",
    price: 2.99,
    img: "./img/coral-bits.jpg",
    desc: `Salted and fried bits of fresh picked pink coral! Delicious? Yes!!`,
},
{
    id: 9,
    title: "Kelp Shake",
    category: "drinks",
    price: 1.99,
    img: "http://en.spongepedia.org/images/5/54/Tang-Shake.jpg",
    desc: `A Krusty Krab classic, this is a delicious shake made from coconut milk ice cream and red kelp! `,
},
{
    id: 10,
    title: "Seafoam Soda",
    category: "drinks",
    price: 1.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHNMALjK0wtQFMDA0KFTcuDayPlWhgF8QKQ&usqp=CAU",
    desc: `The best soda you will ever drink! Made in-house from coconut water and red algae, sweetened with coconut palm sap.`,
},
{
    id: 11,
    title: "Bowtie French Fries",
    category: "sides",
    price: 2.99,
    img: "./img/bowtie.webp",
    desc: `Our delicious original kelp fries with a fancy twist - edible ketchup flavored bowties!`,
},
{
    id: 12,
    title: "Sequin Milkshake",
    category: "drinks",
    price: 4.99,
    img: "./img/SBg17.webp",
    desc: `Our delicious classic kelp shake with a fancier twist - organic kelp and a specialty sequined reusable cup!`,
},
];
const sectionCenter = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded", function () {
let displayMenu = menu.map(function (item) {
    return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
            <header>
            <h4 class="item-title">${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
        </article>`;
});
displayMenu = displayMenu.join("");
console.log(displayMenu);
sectionCenter.innerHTML = displayMenu;
});


// const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}