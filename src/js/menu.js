
const loadMenu = () => {
    const menuItems = [
        {
            name: "Maccaroni Cheese",
            price: 18,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        },
        {
            name: "Pineapple Pizza",
            price: 20,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        },
        {
            name: "Airy Pudding",
            price: 9,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        },
        {
            name: "Spilt Milk",
            price: 48,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        },
        {
            name: "Cartier Sandal",
            price: 82,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        },
    ];
    
    const createContentContainer = () => {
        const contentSplitter = document.querySelector('.content-splitter');
        const div = document.createElement('div');
        div.classList.add('main-content','menu-content');
        contentSplitter.append(div);
    }

    const MenuContainer = () => {
        const  menuContent = document.querySelector('.menu-content');
        const div = document.createElement('div');
        div.classList.add('item-container');
        menuContent.append(div);
    }

    const  createHeadline = () => {
        const  menuContent = document.querySelector('.menu-content');
        const h1 = document.createElement('h1');
        h1.innerText = "MENU";
        menuContent.append(h1);
    }

    const createItems = () => {
        let items = [];
        menuItems.forEach(item => {
            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            const h4 = document.createElement('h4');
            const p = document.createElement('p');
            div.classList.add('item');
            h3.innerText = item.name;
            h4.innerText = `£${item.price}`;
            p.innerText = item.description;
            div.append(h3);
            div.append(h4);
            div.append(p);
            items.push(div);
        });
       return items; 
    }

    const addItems = () => {
        const itemCotainer = document.querySelector('.item-container');
        const items = createItems();

        items.forEach(item => {
            itemCotainer.append(item);
        });
    }

    const load = () => {
        createContentContainer();
        createHeadline();
        MenuContainer();
        addItems();
    }

    load();    
}

export default loadMenu;