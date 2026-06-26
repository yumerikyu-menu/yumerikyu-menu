const menus = {
  champagne: [
    { type: "header", title: "ARMAND" },
    {
      name: "ARMAND GOLD",
      price: "¥146,300",
      image: "images/Armand Gold bottle.png"
    },
    {
      name: "ARMAND GREEN",
      price: "¥231,000",
      image: "images/Armand-Green.png"
    },
    {
      name: "ARMAND SILVER",
      price: "¥423,500",
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
      price: "¥880,000",
      image: "images/SOMEI_BLUE.png"
    },
    {
      name: "SOMEI BLACK",
      price: "¥518,100",
      image: "images/SOMEI_BLACK.png"
    },
    {
      name: "SOMEI PLATINA",
      price: "¥364,100",
      image: "images/SOMEI_PLATHINA.png"
    },
    {
      name: "SOMEI ROSE",
      price: "¥210,100",
      image: "images/SOMEI_ROSE.png"
    },
    {
      name: "SOMEI",
      price: "¥115,500",
      image: "images/SOMEI.png"
    },

    { type: "header", title: "MOËT & CHANDON" },
    {
      name: "MOET BRUT",
      price: "¥24,750",
      image: "images/MOET_BRUT.png"
    },
    {
      name: "MOET ICE",
      price: "¥34,100",
      image: "images/MOET_ICE.png"
    },
    {
      name: "MOET NECTAR",
      price: "¥31,900",
      image: "images/MOET_NECTOR.png"
    },
    {
      name: "MOET ROSE",
      price: "¥29,700",
      image: "images/MOET_ROSE.png"
    },

    { type: "header", title: "DOM PÉRIGNON" },
    {
      name: "DOM PERIGNON",
      price: "¥107,800",
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
    }
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
    }
  ]
};

const titles = {
  champagne: "CHAMPAGNE",
  whisky: "WHISKY",
  wine: "WINE",
  shochu: "SHOCHU",
  shot: "SHOT DRINK"
};

function hideAllScreens() {
  document.getElementById("mainMenuScreen").classList.add("hidden");
  document.getElementById("drinkCategoryScreen").classList.add("hidden");
  document.getElementById("menuOpeningScreen").classList.add("hidden");
  document.getElementById("listScreen").classList.add("hidden");
}

function showMainMenu() {
  hideAllScreens();
  document.getElementById("mainMenuScreen").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function showDrinkCategories() {
  hideAllScreens();
  document.getElementById("drinkCategoryScreen").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function showComingSoon(title) {
  alert(`${title} は準備中です`);
}

function showSetMenu() {
  hideAllScreens();

  const listScreen = document.getElementById("listScreen");
  const categoryTitle = document.getElementById("categoryTitle");
  const menuList = document.getElementById("menuList");

  categoryTitle.textContent = "SET MENU";
  menuList.innerHTML = "";

  const setMenu = [
    { type: "header", title: "MAIN ROOM" },
    {
      name: "20:00 ～ 20:59",
      detail: "40 min",
      price: "¥4,400"
    },
    {
      name: "21:00 ～ LAST",
      detail: "60 min",
      price: "¥6,600"
    },

    { type: "header", title: "KARAOKE VIP ROOM" },
    {
      name: "20:00 ～ LAST",
      detail: "60 min",
      price: "¥7,700"
    },

    { type: "header", title: "OPTION" },
    {
      name: "延長 (30 min)",
      detail: "",
      price: "¥4,400"
    },
    {
      name: "延長 60 (min)",
      detail: "",
      price: "¥6,600"
    },
    {
      name: "VIP延長 (60 min)",
      detail: "",
      price: "¥7,700"
    },
    {
      name: "追加指名",
      detail: "",
      price: "¥1,100"
    },
    {
      name: "持ち込み料",
      detail: "",
      price: "¥1,100"
    }
  ];

function showFoodMenu() {
  hideAllScreens();

  const listScreen = document.getElementById("listScreen");
  const categoryTitle = document.getElementById("categoryTitle");
  const menuList = document.getElementById("menuList");

  categoryTitle.textContent = "FOOD MENU";

  menuList.innerHTML = `
    <div class="food-image-list">
      <img src="images/LUSH_MENU.png" alt="LUSH">
      <img src="images/三寿司_MENU.png" alt="三寿司">
      <img src="images/鳥八_MENU.png" alt="鳥八">
    </div>
  `;

  listScreen.classList.remove("hidden");
  window.scrollTo(0, 0);
}

  setMenu.forEach(item => {
    if (item.type === "header") {
      const title = document.createElement("div");
      title.className = "set-section-title";
      title.textContent = item.title;
      menuList.appendChild(title);
      return;
    }

    const row = document.createElement("div");
    row.className = "luxury-set-row";

    row.innerHTML = `
      <div class="set-info">
        <h2>${item.name}</h2>
        ${item.detail ? `<p>${item.detail}</p>` : ""}
      </div>
      <div class="luxury-price">${item.price}</div>
    `;

    menuList.appendChild(row);
  });

  listScreen.classList.remove("hidden");
  window.scrollTo(0, 0);
}

function showMenu(category) {
  const menuOpeningScreen = document.getElementById("menuOpeningScreen");
  const menuOpeningTitle = document.getElementById("menuOpeningTitle");
  const listScreen = document.getElementById("listScreen");
  const categoryTitle = document.getElementById("categoryTitle");
  const menuList = document.getElementById("menuList");

  hideAllScreens();

  menuOpeningTitle.textContent = `${titles[category]} MENU`;
  menuOpeningScreen.classList.remove("hidden");

  setTimeout(() => {
    hideAllScreens();

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

    listScreen.classList.remove("hidden");
    window.scrollTo(0, 0);
  }, 1200);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("openingScreen").style.display = "none";
    document.getElementById("mainHeader").classList.remove("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    showMainMenu();
  }, 3200);
});
