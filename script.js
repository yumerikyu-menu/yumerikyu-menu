const menus = {
  champagne: [
    { type: "header", title: "ARMAND" },
    {
      name: "ARMAND GOLD",
      price: "¥150,000",
      image: "images/Armand Gold bottle.png"
    },
    {
      name: "ARMAND GREEN",
      price: "¥120,000",
      image: "images/Armand-Green.png"
    },
    {
      name: "ARMAND SILVER",
      price: "¥90,000",
      image: "images/Armand-Silver.png"
    },

    { type: "header", title: "SOMEI" },
    {
      name: "SOMEI RED",
      price: "¥90,000",
      image: "images/SOMEI_RED.png"
    },
    {
      name: "SOMEI BLUE",
      price: "¥90,000",
      image: "images/SOMEI_BLUE.png"
    },
    {
      name: "SOMEI BLACK",
      price: "¥90,000",
      image: "images/SOMEI_BLACK.png"
    },
    {
      name: "SOMEI PLATINA",
      price: "¥90,000",
      image: "images/SOMEI_PLATHINA.png"
    },
    {
      name: "SOMEI ROSE",
      price: "¥90,000",
      image: "images/SOMEI_ROSE.png"
    },
    {
      name: "SOMEI",
      price: "¥90,000",
      image: "images/SOMEI.png"
    },

    { type: "header", title: "MOËT & CHANDON" },
    {
      name: "MOET BRUT",
      price: "¥80,000",
      image: "images/MOET_BRUT.png"
    },
    {
      name: "MOET ICE",
      price: "¥80,000",
      image: "images/MOET_ICE.png"
    },
    {
      name: "MOET NECTAR",
      price: "¥80,000",
      image: "images/MOET_NECTOR.png"
    },
    {
      name: "MOET ROSE",
      price: "¥80,000",
      image: "images/MOET_ROSE.png"
    },

    { type: "header", title: "DOM PÉRIGNON" },
    {
      name: "DOM PERIGNON",
      price: "¥80,000",
      image: "images/DOMPERI.png"
    }
  ],

  whisky: [
    { type: "header", title: "JAPANESE WHISKY" },
    {
      name: "山崎12年",
      price: "¥30,000",
      image: "images/yamazaki12.png"
    },
    {
      name: "山崎18年",
      price: "¥30,000",
      image: "images/yamazaki18.png"
    },
    {
      name: "白州",
      price: "¥30,000",
      image: "images/hakusyu.png"
    },
    {
      name: "響",
      price: "¥35,000",
      image: "images/hibiki.png"
    },

    { type: "header", title: "SCOTCH WHISKY" },
    {
      name: "MACALLAN",
      price: "¥25,000",
      image: "images/macallan.png"
    }
  ],

  wine: [
    { type: "header", title: "RED WINE" },
    {
      name: "Opus-One",
      price: "¥15,000",
      image: "images/opas-one.png"
    },

    {
      name: "La dame de Monrose",
      price: "¥15,000",
      image: "images/radum.png"
    },
    
    { type: "header", title: "WHITE WINE" },
    {
      name: "WHITE WINE",
      price: "¥15,000",
      image: "images/white-wine.png"
    }
  ],

  shochu: [
    { type: "header", title: "芋焼酎" },
    {
      name: "黒霧島",
      price: "¥8,000",
      image: "images/kurokirishima.png"
    },
    {
      name: "赤霧島",
      price: "¥9,000",
      image: "images/akakirishima.png"
    },

    { type: "header", title: "麦焼酎" },
    {
      name: "吉四六",
      price: "¥10,000",
      image: "images/kicchomu.png"
    },
    {
      name: "二階堂",
      price: "¥8,000",
      image: "images/nikaido.png"
    },

  ],

  shot: [
    { type: "header", title: "TEQUILA" },
    {
      name: "ANEHO SHOT",
      price: "¥2,000",
      image: "images/aneho.png"
    },
    {
      name: "SAUZA SHOT",
      price: "¥2,000",
      image: "images/sauza.png"
    },
    {
      name: "テキーラ観覧車",
      price: "¥2,000",
      image: "images/tequila_kanransya.png"
    },

    

  ]
};

const titles = {
  champagne: "CHAMPAGNE",
  whisky: "WHISKY",
  wine: "WINE",
  shochu: "SHOCHU",
  shot: "SHOT DRINK"
};

function showMenu(category) {
  const drinkCategoryScreen = document.getElementById("drinkCategoryScreen");
  const listScreen = document.getElementById("listScreen");
  const menuOpeningScreen = document.getElementById("menuOpeningScreen");
  const menuOpeningTitle = document.getElementById("menuOpeningTitle");
  const menuList = document.getElementById("menuList");
  const categoryTitle = document.getElementById("categoryTitle");

  drinkCategoryScreen.classList.add("hidden");
  listScreen.style.display = "none";

  menuOpeningTitle.textContent = `${titles[category]} MENU`;
  menuOpeningScreen.style.display = "flex";
  setTimeout(() => {
    menuOpeningScreen.style.display = "none";
    listScreen.style.display = "block";

    categoryTitle.textContent = `${titles[category]} MENU`;
    menuList.innerHTML = "";

    menus[category].forEach(item => {
      if (item.type === "header") {
        const sectionTitle = document.createElement("div");
        sectionTitle.className = "section-title";
        sectionTitle.textContent = item.title;
        menuList.appendChild(sectionTitle);
        return;
      }

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h2>${item.name}</h2>
          <p>${item.price}</p>
        </div>
      `;

      menuList.appendChild(card);
    });

    window.scrollTo(0, 0);
  }, 1200);
}

function showCategories() {
  document.getElementById("categoryScreen").style.display = "flex";
  document.getElementById("listScreen").style.display = "none";
  document.getElementById("menuOpeningScreen").style.display = "none";
  window.scrollTo(0, 0);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("openingScreen").style.display = "none";
    document.getElementById("mainHeader").classList.remove("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
  }, 3200);
});
function showDrinkCategories() {
  document.getElementById("mainMenuScreen").classList.add("hidden");
  document.getElementById("drinkCategoryScreen").classList.remove("hidden");
  document.getElementById("listScreen").style.display = "none";
  document.getElementById("menuOpeningScreen").style.display = "none";
  window.scrollTo(0, 0);
}

function showMainMenu() {
  document.getElementById("mainMenuScreen").classList.remove("hidden");
  document.getElementById("drinkCategoryScreen").classList.add("hidden");
  document.getElementById("listScreen").style.display = "none";
  document.getElementById("menuOpeningScreen").style.display = "none";
  window.scrollTo(0, 0);
}

function showComingSoon(title) {
  alert(`${title} は準備中です`);
}
