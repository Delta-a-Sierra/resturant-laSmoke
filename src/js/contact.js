const loadContact = () => {

    let infos = 
    [
        {
            title : "location",
            text : "39 Floral St, Covent Garden,<br> London WC2E 9DG"
        },
        {
            title : "number",
            text : "0208 746 2794"
        },
        {
            title : "email",
            text : "info@lasmoke.co.uk"
        }
    ]

    const createContentContainer = () => {
        const contentSplitter = document.querySelector('.content-splitter');
        const div = document.createElement('div');
        div.classList.add('main-content','contact-content');
        contentSplitter.append(div);
    }

    const CreatHeadline = () => {
        const mainContent = document.querySelector('.main-content')
        const h1 = document.createElement('h1')
        h1.innerText = "CONTACT"
        const hr = document.createElement('hr')
        mainContent.append(h1)
        mainContent.append(hr)
        const h2 = document.createElement('h2')
        h2.innerText = "Come and Grab a Bite"
        mainContent.append(h2)
    }

    const contactInfo = () => {
        const div = document.createElement('div')
        div.classList.add('contact-info-container')
        const contactInfoContainer = document.createElement('div')
        infos.forEach(info => {
            const div2 = document.createElement('div')
            const icon = document.createElement('div')
            const h6 = document.createElement('h6')
            icon.id = info.title
            icon.classList.add('square', 'icon')
            h6.innerHTML = info.text
            div2.append(icon)
            div2.append(h6)
            div2.classList.add('row')
            div.append(div2)
        });

        contactInfoContainer.append(div)
        const paddingLR = document.querySelector('.paddingLR')
        paddingLR.append(contactInfoContainer)
    }

    const addMap = () => { 
        const div = document.createElement('div')
        div.classList.add('paddingLR')
        const div2 = document.createElement('div')
        const mainContent = document.querySelector('.main-content')
        const map = document.createElement('iframe')
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1755.751389252406!2d-0.1253664389057338!3d51.51307974158674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cc891f82c3%3A0x701a90bd351bd5eb!2sCamper!5e0!3m2!1sen!2suk!4v1607607300289!5m2!1sen!2suk"
        map.width = "600"
        map.height = "450"
        map.frameborder="0"
        map.style="border:0"
        map.allowFullscreen=""
        map["aria-hidden"] = "false"
        map.tabIndex = "0"
        map.id="map"
        div2.append(map)
        div.append(div2)
        mainContent.append(div)
    }

    const addSocialIcons = () => {
        const contactContainer = document.querySelector('.contact-info-container')
        const hr = document.createElement('hr')
        const div = document.createElement('div')
        div.id = "social-icons"
        div.classList.add('row')
        contactContainer.append(hr)
        contactContainer.append(div)
    }
 
    const load = () =>{
        createContentContainer()
        CreatHeadline()
        addMap()
        contactInfo()
        addSocialIcons()
    }

    load()
}

export default loadContact