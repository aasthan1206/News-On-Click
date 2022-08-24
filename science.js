window.addEventListener("load", ()=> {

    // Selectors
    
    // Column 1
    const scienceContainerColumn1Img = document.querySelector("#science-container-column1-img")
    const scienceContainerColumn1Heading = document.querySelector("#science-container-column1-heading")
    const scienceContainerColumn1Text = document.querySelector("#science-container-column1-text")
    const scienceContainerColumn1Date = document.querySelector("#science-container-column1-date")
    const scienceContainerColumn1Credit = document.querySelector("#science-container-column1-credit")    

    // Column 2
    const scienceContainerColumn2Img = document.querySelector("#science-container-column2-img")
    const scienceContainerColumn2Heading = document.querySelector("#science-container-column2-heading")
    const scienceContainerColumn2Text = document.querySelector("#science-container-column2-text")
    const scienceContainerColumn2Date = document.querySelector("#science-container-column2-date")
    const scienceContainerColumn2Credit = document.querySelector("#science-container-column2-credit")    

    // Column 3
    const scienceContainerColumn3Img = document.querySelector("#science-container-column3-img")
    const scienceContainerColumn3Heading = document.querySelector("#science-container-column3-heading")
    const scienceContainerColumn3Text = document.querySelector("#science-container-column3-text")
    const scienceContainerColumn3Date = document.querySelector("#science-container-column3-date")
    const scienceContainerColumn3Credit = document.querySelector("#science-container-column3-credit")    


    const scienceAPI = "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=kb1Vw7eCIHY310le0YmGb2IESuywiNoT"
    // Fetching API
    fetch (scienceAPI)
    .then(response => {
        return response.json()
    })
    .then(scienceData => {
        console.log(scienceData)
        const {results} = scienceData
        
        // First column
        scienceContainerColumn1Img.src = results[4].multimedia[0].url
        scienceContainerColumn1Heading.textContent = results[4].title
        scienceContainerColumn1Text.textContent = results[4].abstract
        scienceContainerColumn1Date.textContent = results[4].byline
        scienceContainerColumn1Credit.textContent = results[4].published_date

        // Second column
        scienceContainerColumn2Img.src = results[3].multimedia[0].url
        scienceContainerColumn2Heading.textContent = results[3].title
        scienceContainerColumn2Text.textContent = results[3].abstract
        scienceContainerColumn2Date.textContent = results[3].byline
        scienceContainerColumn2Credit.textContent = results[3].published_date

        // Third column
        scienceContainerColumn3Img.src = results[2].multimedia[0].url
        scienceContainerColumn3Heading.textContent = results[2].title
        scienceContainerColumn3Text.textContent = results[2].abstract
        scienceContainerColumn3Date.textContent = results[2].byline
        scienceContainerColumn3Credit.textContent = results[2].published_date

     })

})