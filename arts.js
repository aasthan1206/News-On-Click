window.addEventListener("load", ()=> {

    // Selectors
    
    // Column 1
    const artsContainerColumn1Img = document.querySelector("#arts-container-column1-img")
    const artsContainerColumn1Heading = document.querySelector("#arts-container-column1-heading")
    const artsContainerColumn1Text = document.querySelector("#arts-container-column1-text")
    const artsContainerColumn1Date = document.querySelector("#arts-container-column1-date")
    const artsContainerColumn1Credit = document.querySelector("#arts-container-column1-credit")    

    // Column 2
    const artsContainerColumn2Img = document.querySelector("#arts-container-column2-img")
    const artsContainerColumn2Heading = document.querySelector("#arts-container-column2-heading")
    const artsContainerColumn2Text = document.querySelector("#arts-container-column2-text")
    const artsContainerColumn2Date = document.querySelector("#arts-container-column2-date")
    const artsContainerColumn2Credit = document.querySelector("#arts-container-column2-credit")    

    // Column 3
    const artsContainerColumn3Img = document.querySelector("#arts-container-column3-img")
    const artsContainerColumn3Heading = document.querySelector("#arts-container-column3-heading")
    const artsContainerColumn3Text = document.querySelector("#arts-container-column3-text")
    const artsContainerColumn3Date = document.querySelector("#arts-container-column3-date")
    const artsContainerColumn3Credit = document.querySelector("#arts-container-column3-credit")    


    const artsAPI = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=kb1Vw7eCIHY310le0YmGb2IESuywiNoT"
    // Fetching API
    fetch (artsAPI)
    .then(response => {
        return response.json()
    })
    .then(artsData => {
        console.log(artsData)
        const {results} = artsData
        
        // First column
        artsContainerColumn1Img.src = results[0].multimedia[0].url
        artsContainerColumn1Heading.textContent = results[0].title
        artsContainerColumn1Text.textContent = results[0].abstract
        artsContainerColumn1Date.textContent = results[0].byline
        artsContainerColumn1Credit.textContent = results[0].published_date

        // Second column
        artsContainerColumn2Img.src = results[1].multimedia[0].url
        artsContainerColumn2Heading.textContent = results[1].title
        artsContainerColumn2Text.textContent = results[1].abstract
        artsContainerColumn2Date.textContent = results[1].byline
        artsContainerColumn2Credit.textContent = results[1].published_date

        // Third column
        artsContainerColumn3Img.src = results[2].multimedia[0].url
        artsContainerColumn3Heading.textContent = results[2].title
        artsContainerColumn3Text.textContent = results[2].abstract
        artsContainerColumn3Date.textContent = results[2].byline
        artsContainerColumn3Credit.textContent = results[2].published_date

     })

})