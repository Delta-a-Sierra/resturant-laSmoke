
const navBar = (() => {
    let navContainer = null;
    let currentPage = "";

    const tabs = [{
        name : "home",
        img : "./assets/imgs/home-white-18dp.svg",
        isActive : false        
    },
    {
        name : "menu",
        img : "./assets/imgs/menu_book-white-18dp.svg",
        isActive : false        
    }]

    const createNav = () => {
        const ContentSplitter = document.querySelector('.content-splitter');
        const nav = document.createElement('nav');
        ContentSplitter.append(nav);
        navContainer = nav;
    }

    const addLogo = () => {
        const logo = document.createElement('div');
        logo.id = "logo";
        navContainer.append(logo);
    }

    const loadnav = (page) => {
        currentPage = page;
        createNav();
        addLogo();
        addTabs();
    }

    const addTabs = () => {
        const div = document.createElement('div');
        const tabs = createTabs();

        tabs.forEach(tab => {
            div.append(tab);
        })
        navContainer.append(div);
    }

    const createTabs = () => {
        let tabArr = []
        tabs.forEach(tab => {
            const button = document.createElement('button');
            button.id = tab.name;

            if(tab.name === currentPage){
                button.classList.add('activeBtn');
                tab.isActive = true;
            }
            tabArr.push(button);
        });
        return tabArr;
    }
    return {loadnav};
})()

export default navBar;