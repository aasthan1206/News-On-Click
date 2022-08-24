window.addEventListener("load", ()=> {

    // Selectors
    
    // Column 1
    const usContainerColumn1Img = document.querySelector("#us-container-column1-img")
    const usContainerColumn1Heading = document.querySelector("#us-container-column1-heading")
    const usContainerColumn1Text = document.querySelector("#us-container-column1-text")
    const usContainerColumn1Date = document.querySelector("#us-container-column1-date")
    const usContainerColumn1Credit = document.querySelector("#us-container-column1-credit")    

    // Column 2
    const usContainerColumn2Img = document.querySelector("#us-container-column2-img")
    const usContainerColumn2Heading = document.querySelector("#us-container-column2-heading")
    const usContainerColumn2Text = document.querySelector("#us-container-column2-text")
    const usContainerColumn2Date = document.querySelector("#us-container-column2-date")
    const usContainerColumn2Credit = document.querySelector("#us-container-column2-credit")    

    // Column 3
    const usContainerColumn3Img = document.querySelector("#us-container-column3-img")
    const usContainerColumn3Heading = document.querySelector("#us-container-column3-heading")
    const usContainerColumn3Text = document.querySelector("#us-container-column3-text")
    const usContainerColumn3Date = document.querySelector("#us-container-column3-date")
    const usContainerColumn3Credit = document.querySelector("#us-container-column3-credit")    


    const usAPI = "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=kb1Vw7eCIHY310le0YmGb2IESuywiNoT"
    // Fetching API
    fetch (usAPI)
    .then(response => {
        return response.json()
    })
    .then(usData => {
        console.log(usData)
        const {results} = usData
        
        // First column
        usContainerColumn1Img.src = results[0].multimedia[0].url
        usContainerColumn1Heading.textContent = results[0].title
        usContainerColumn1Text.textContent = results[0].abstract
        usContainerColumn1Date.textContent = results[0].byline
        usContainerColumn1Credit.textContent = results[0].published_date

        // Second column
        usContainerColumn2Img.src = results[3].multimedia[0].url
        usContainerColumn2Heading.textContent = results[3].title
        usContainerColumn2Text.textContent = results[3].abstract
        usContainerColumn2Date.textContent = results[3].byline
        usContainerColumn2Credit.textContent = results[3].published_date

        // Third column
        usContainerColumn3Img.src = results[2].multimedia[0].url
        usContainerColumn3Heading.textContent = results[2].title
        usContainerColumn3Text.textContent = results[2].abstract
        usContainerColumn3Date.textContent = results[2].byline
        usContainerColumn3Credit.textContent = results[2].published_date

     })

})