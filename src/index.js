import "./styles/main.scss";
import navBar from "./js/nav.js";
import loadHome from "./js/home.js";
import loadMenu from "./js/menu.js";




const createContentSplitter = () => {
    const contentDiv = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('content-splitter');
    contentDiv.append(div);
};

const updateBtn = () => {
    let homeBtn = document.querySelector('#home');
    let menuBtn = document.querySelector('#menu');

    menuBtn.addEventListener('click', () => {
        loadPage('menu');
    });

    homeBtn.addEventListener('click', () => {
        loadPage('home');
    });
}

const loadPage = (page) => {
    const contentDiv = document.querySelector('#content');
    if(contentDiv.firstElementChild != null){
        contentDiv.firstElementChild.remove();
    }
    createContentSplitter()
    if(page === "home"){
        navBar.loadnav(page);
        loadHome();
    }else{
        navBar.loadnav(page);
        loadMenu();
    }
    updateBtn();
}

loadPage('home');



