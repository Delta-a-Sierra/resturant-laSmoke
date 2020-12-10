import "./styles/main.scss";
import navBar from "./js/nav.js";
import loadHome from "./js/home.js";
import loadMenu from "./js/menu.js";
import loadContact from "./js/contact.js"




const createContentSplitter = () => {
    const contentDiv = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('content-splitter');
    contentDiv.append(div);
};

const updateBtn = () => {
    let homeBtn = document.querySelector('#home');
    let menuBtn = document.querySelector('#menu');
    let contactBtn = document.querySelector('#contact');

    menuBtn.addEventListener('click', () => {
        loadPage('menu');
    });

    homeBtn.addEventListener('click', () => {
        loadPage('home');
    });

    contactBtn.addEventListener('click', () => {
        loadPage('contact');
    });
}

const loadPage = (page) => {
    const contentDiv = document.querySelector('#content');
    if(contentDiv.firstElementChild != null){
        contentDiv.firstElementChild.remove();
    }
    createContentSplitter()

    switch (page) {
        case 'home':
            navBar.loadnav(page);
            loadHome();
            break;
        case 'menu':
            navBar.loadnav(page);
            loadMenu();
            break;
        case 'contact':
            navBar.loadnav(page);
            loadContact();
            break;
        default:
            break;
    }

    updateBtn();
}

loadPage('home');



