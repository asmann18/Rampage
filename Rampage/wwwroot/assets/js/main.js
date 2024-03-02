// Main Slider Start
var swiper = new Swiper(".mySwiper", {});
// Main Slider End

// Basket Start
let basketClick = document.querySelector(".basket_click");
let basketContainer = document.querySelector(".basket-container");

basketClick.addEventListener("click", () => {
  basketContainer.style.transform = "translateX(0)";
});

let closeBtnClick = document.querySelector(".close_btn_click");
closeBtnClick.addEventListener("click", () => {
  basketContainer.style.transform = "translateX(100%)";
});

// Basket End
// Shop İtem Container Start
let menu_btn = document.getElementById("shop-menu");
let shop_items = document.querySelector(".shop-item-container");
let header_color = document.querySelector(".header");

menu_btn.addEventListener("click", () => {
  if (!shop_items.style.display || shop_items.style.display === "none") {
    shop_items.style.display = "block";
    header_color.style.position = "fixed";
    header_color.style.background = "#464646";
    menu_btn.className = "fa-solid fa-x";
  } else {
    menu_btn.className = "fa-solid fa-bars";
    shop_items.style.display = "none";
    header_color.style.background = "transparent";
    header_color.style.position = "absolute";
  }
});
// Shop İtem Container end

//Search Item Container Start
const searchOpen = document.querySelector(".search-open-icon");
const searchClose = document.querySelector(".search-close-icon");
const shopSearch = document.querySelector(".shop-item-search-container");
const form = document.getElementById("form");
const formInput = document.querySelector(".form_input");

searchOpen.addEventListener("click", () => {
  shopSearch.style.opacity = "1";
  shopSearch.style.visibility = "visible";
});

searchClose.addEventListener("click", () => {
  shopSearch.style.opacity = "0";
  setTimeout(() => {
    shopSearch.style.visibility = "hidden";
  }, 400); 
});

form.addEventListener("input", (event) => {
  if (event.target.value.length >= 3) {
    form.style.margin = "40px auto";
    form.style.transition = formInput.style.transition = "0.5s";
    formInput.style.fontSize = "60px";
  } else if (event.target.value.length === 0) {
    form.style.margin = "150px auto";
    formInput.style.fontSize = "101px";
  }
});

//Search Item Container End

// Product Count Minus Plus Start

document.addEventListener("DOMContentLoaded", function () {
  var qtyPlusBtn = document.querySelectorAll(".qty-plus");
  var qtyMinusBtn = document.querySelectorAll(".qty-minus");
  var inputs = document.querySelectorAll('input[name="adet"]');

  qtyPlusBtn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      var value = parseInt(inputs[index].value);
      inputs[index].value = value + 1;
    });
  });

  qtyMinusBtn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      var value = parseInt(inputs[index].value);
      if (value > 1) {
        inputs[index].value = value - 1;
      }
    });
  });
});

// Product Count Minus Plus End
//Shop Image Slider Start
var swiper = new Swiper(".corusel", {
  slidesPerView: 4,
  // loop: true,
  spaceBetween: 30,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1,
    },
  },
});
//Shop Image Slider End

//FOR YOU Sections Slider Start
var swiper = new Swiper(".foryou", {
  slidesPerView: 2,
  // loop: true,
  spaceBetween: 30,
  freeMode: true,
});
//FOR YOU Sections Slider End

const powerCategoryMap = {
  1: {
    category: document.querySelector(".power-slider-categori1"),
    box: document.querySelector(".power-slider-boxs1"),
  },
  2: {
    category: document.querySelector(".power-slider-categori2"),
    box: document.querySelector(".power-slider-boxs2"),
  },
  3: {
    category: document.querySelector(".power-slider-categori3"),
    box: document.querySelector(".power-slider-boxs3"),
  },
};

powerCategoryMap[1].category.style.color = "white";
powerCategoryMap[1].category.style.borderColor = "white";
powerCategoryMap[1].box.style.display = "block";

for (let i = 2; i <= 3; i++) {
  powerCategoryMap[i].category.style.color = "#464646";
  powerCategoryMap[i].category.style.borderColor = "#464646";
  powerCategoryMap[i].box.style.display = "none";
}

function handleCategoryClick(categoryNumber) {
  for (const [key, value] of Object.entries(powerCategoryMap)) {
    const { category, box } = value;
    if (key === categoryNumber) {
      category.style.color = "white";
      category.style.borderColor = "white";
      box.style.display = "block";
    } else {
      category.style.color = "#464646";
      category.style.borderColor = "#464646";
      box.style.display = "none";
    }
  }
}

for (const [key, value] of Object.entries(powerCategoryMap)) {
  const { category } = value;
  category.addEventListener("click", () => handleCategoryClick(key));
}

//FOR YOU Sections Slider End

//Category Tab Menu Start
const categoryClassNames = [
  ".category-menu1",
  ".category-menu2",
  ".category-menu3",
  ".category-menu4",
];
const productClassNames = [
  ".category-cards1",
  ".category-cards2",
  ".category-cards3",
  ".category-cards4",
];

const tabs = categoryClassNames.map((className) =>
  document.querySelector(className)
);
const productTabs = productClassNames.map((className) =>
  document.querySelector(className)
);

tabs.forEach((tab) => {
  tab.style.border = "1px solid #464646";
  tab.style.color = "#ffff";
});

tabs[0].style.border = "1px solid white";

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    productTabs.forEach((productTab) => {
      productTab.style.display = "none";
    });
    productTabs[index].style.display = "block";

    tabs.forEach((t) => {
      t.style.border = "1px solid #464646";
    });

    tab.style.border = "1px solid white";
  });
});

//Category Tab Menu End

//User Comments Start
var swiper = new Swiper(".user-comment-slider", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
});
//User Comments End
