window.addEventListener("load", ()=> {

    //Setting Up day and date (header section)
    const d = new Date()

    //day and month is returned in integer value
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[d.getMonth()]


    const day = document.querySelector(".day")
    const date = document.querySelector(".date")

    day.textContent = `${dayNames[d.getDay()]}, `
    date.textContent = `${month} ${d.getDate()}, ${d.getFullYear()}`

    //calling api
    const api = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=kb1Vw7eCIHY310le0YmGb2IESuywiNoT`

    fetch (api)
    .then(response => {
        return response.json()
    })
    .then(data =>  {
        console.log(data)
        const {results} = data

        //Left Section
        const leftHeading = document.querySelector("#container-left-body-heading")
        const leftText1 = document.querySelector("#container-left-body-text-1")
        const leftText2 = document.querySelector("#container-left-body-text-2")
        const leftLink = document.querySelector("#container-left-link")
        const leftImg = document.querySelector("#container-left-img")

        leftHeading.textContent = results[0].title
        leftText1.textContent = results[0].abstract
        leftText2.textContent = results[0].multimedia[0].caption
        leftLink.href = results[0].url
        leftImg.src = results[0].multimedia[0].url
    

        //Right Section
        const rightHeading = document.querySelector("#container-right-body-heading")
        const rightText1 = document.querySelector("#container-right-body-text-1")
        const rightText2 = document.querySelector("#container-right-body-text-2")
        const rightLink = document.querySelector("#container-right-link")
        const rightImg = document.querySelector("#container-right-img")

        rightHeading.textContent = results[1].title
        rightText1.textContent = results[1].abstract
        rightText2.textContent = results[1].multimedia[0].caption
        rightLink.href = results[1].url
        rightImg.src = results[1].multimedia[0].url
    })   

})