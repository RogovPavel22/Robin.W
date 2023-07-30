// HEADER SCROLL

const header = document.querySelector(".header");

window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add("header__active");
    } else {
        header.classList.remove("header__active");
    }
}

// ANCHORS

const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);
        
        window.scroll({
            top: elem.offsetTop - 20,
            behavior: "smooth"
        });
    });
});

// BURGER MENU

const burgerItem = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const burgerItemClose = document.querySelector(".header__nav-close");
const menuLinks = document.querySelectorAll(".header__nav a");

burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav-active");
});

burgerItemClose.addEventListener("click", () => {
    menu.classList.remove("header__nav-active");
});

if (window.innerWidth < 769) {
    menuLinks.forEach(item => item.addEventListener("click", () =>{
        menu.classList.remove("header__nav-active");
    }));
};

// TABS

const tabsBtn = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

function hideTabs () {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtn.forEach(item => item.classList.remove("active"));
}

function showTab (index) {
    tabsItems[index].classList.remove("hide");
    tabsBtn[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtn.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));