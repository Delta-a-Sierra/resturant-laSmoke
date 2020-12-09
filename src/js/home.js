const loadHome = () => {
    const contentSplitter = document.querySelector('.content-splitter')
    let contentContainer = ""
    let headLines = ["EAT","DRINK","ENJOY"]

    const createContainer = () =>{
        const div = document.createElement('div')
        div.classList.add('main-content', 'home-content')
        contentSplitter.append(div)
        contentContainer = div
    }
    
    const addHeadline = () => {
        headLines.forEach(headLine =>{
            const h2 = document.createElement('h2')
            h2.innerText = headLine
            contentContainer.append(h2)
        })

    }
    
    createContainer()
    addHeadline()
}

export default loadHome