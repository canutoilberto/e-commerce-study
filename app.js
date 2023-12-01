const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    desc: "Descubra o poder da autenticidade e do conforto com o Nike Air Force, uma verdadeira obra-prima que transcende as tendências e se torna um ícone atemporal da moda urbana.",
    price: 599,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    desc: "Eleve seu jogo com o lendário Air Jordan, uma fusão perfeita entre estilo icônico e tecnologia de vanguarda.",
    price: 699,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    desc: "O Nike Blazer personifica a elegância urbana com um toque de nostalgia, trazendo consigo a autenticidade do estilo vintage.",
    price: 399,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    desc: "Apresentando o Nike Crater, uma obra-prima de inovação sustentável que redefine os limites do design consciente.",
    price: 299,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    desc: "O Nike Hippie é uma expressão de liberdade, individualidade e estilo boho-chic que desafia as convenções da moda tradicional. ",
    price: 199,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //muda para o produto selecionado
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //muda para o produto escolhido
    choosenProduct = products[index];

    //muda para os textos do produto escolhido
    currentProductTitle.textContent = choosenProduct.title.toUpperCase();
    currentProductPrice.textContent = "R$" + choosenProduct.price;
    currentProductDesc.textContent = choosenProduct.desc;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assinala as cores dos produtos
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

//muda a cor do produto
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
