window.addEventListener("load", ()=> {

    // Selectors
    
    // Column 1
    const businessContainerColumn1Img = document.querySelector("#business-container-column1-img")
    const businessContainerColumn1Heading = document.querySelector("#business-container-column1-heading")
    const businessContainerColumn1Text = document.querySelector("#business-container-column1-text")
    const businessContainerColumn1Date = document.querySelector("#business-container-column1-date")
    const businessContainerColumn1Credit = document.querySelector("#business-container-column1-credit")    

    // Column 2
    const businessContainerColumn2Img = document.querySelector("#business-container-column2-img")
    const businessContainerColumn2Heading = document.querySelector("#business-container-column2-heading")
    const businessContainerColumn2Text = document.querySelector("#business-container-column2-text")
    const businessContainerColumn2Date = document.querySelector("#business-container-column2-date")
    const businessContainerColumn2Credit = document.querySelector("#business-container-column2-credit")    

    // Column 3
    const businessContainerColumn3Img = document.querySelector("#business-container-column3-img")
    const businessContainerColumn3Heading = document.querySelector("#business-container-column3-heading")
    const businessContainerColumn3Text = document.querySelector("#business-container-column3-text")
    const businessContainerColumn3Date = document.querySelector("#business-container-column3-date")
    const businessContainerColumn3Credit = document.querySelector("#business-container-column3-credit")    


    const businessAPI = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=kb1Vw7eCIHY310le0YmGb2IESuywiNoT"
    // Fetching API
    fetch (businessAPI)
    .then(response => {
        return response.json()
    })
    .then(businessData => {
        console.log(businessData)
        const {results} = businessData
        
        // First column
        businessContainerColumn1Img.src = results[0].multimedia[0].url
        businessContainerColumn1Heading.textContent = results[0].title
        businessContainerColumn1Text.textContent = results[0].abstract
        businessContainerColumn1Date.textContent = results[0].byline
        businessContainerColumn1Credit.textContent = results[0].published_date

        // Second column
        businessContainerColumn2Img.src = results[3].multimedia[0].url
        businessContainerColumn2Heading.textContent = results[3].title
        businessContainerColumn2Text.textContent = results[3].abstract
        businessContainerColumn2Date.textContent = results[3].byline
        businessContainerColumn2Credit.textContent = results[3].published_date

        // Third column
        businessContainerColumn3Img.src = results[2].multimedia[0].url
        businessContainerColumn3Heading.textContent = results[2].title
        businessContainerColumn3Text.textContent = results[2].abstract
        businessContainerColumn3Date.textContent = results[2].byline
        businessContainerColumn3Credit.textContent = results[2].published_date

     })

})