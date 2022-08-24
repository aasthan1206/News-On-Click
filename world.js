window.addEventListener("load", ()=> {

    // Selectors
    
    // Column 1
    const worldContainerColumn1Img = document.querySelector("#world-container-column1-img")
    const worldContainerColumn1Heading = document.querySelector("#world-container-column1-heading")
    const worldContainerColumn1Text = document.querySelector("#world-container-column1-text")
    const worldContainerColumn1Date = document.querySelector("#world-container-column1-date")
    const worldContainerColumn1Credit = document.querySelector("#world-container-column1-credit")    

    // Column 2
    const worldContainerColumn2Img = document.querySelector("#world-container-column2-img")
    const worldContainerColumn2Heading = document.querySelector("#world-container-column2-heading")
    const worldContainerColumn2Text = document.querySelector("#world-container-column2-text")
    const worldContainerColumn2Date = document.querySelector("#world-container-column2-date")
    const worldContainerColumn2Credit = document.querySelector("#world-container-column2-credit")    

    // Column 3
    const worldContainerColumn3Img = document.querySelector("#world-container-column3-img")
    const worldContainerColumn3Heading = document.querySelector("#world-container-column3-heading")
    const worldContainerColumn3Text = document.querySelector("#world-container-column3-text")
    const worldContainerColumn3Date = document.querySelector("#world-container-column3-date")
    const worldContainerColumn3Credit = document.querySelector("#world-container-column3-credit")    


    const worldAPI = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=kb1Vw7eCIHY310le0YmGb2IESuywiNoT"
    // Fetching API
    fetch (worldAPI)
    .then(response => {
        return response.json()
    })
    .then(worldData => {
        console.log(worldData)
        const {results} = worldData
        
        // First column
        worldContainerColumn1Img.src = results[1].multimedia[0].url
        worldContainerColumn1Heading.textContent = results[1].title
        worldContainerColumn1Text.textContent = results[1].abstract
        worldContainerColumn1Date.textContent = results[1].byline
        worldContainerColumn1Credit.textContent = results[1].published_date

        // Second column
        worldContainerColumn2Img.src = results[3].multimedia[0].url
        worldContainerColumn2Heading.textContent = results[3].title
        worldContainerColumn2Text.textContent = results[3].abstract
        worldContainerColumn2Date.textContent = results[3].byline
        worldContainerColumn2Credit.textContent = results[3].published_date

        // Third column
        worldContainerColumn3Img.src = results[2].multimedia[0].url
        worldContainerColumn3Heading.textContent = results[2].title
        worldContainerColumn3Text.textContent = results[2].abstract
        worldContainerColumn3Date.textContent = results[2].byline
        worldContainerColumn3Credit.textContent = results[2].published_date

     })

})