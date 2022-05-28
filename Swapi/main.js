//const { default: axios } = require("axios")

//const { default: axios } = require("axios");

const getResidentBtn = document.querySelector("button")

const residentContainer = document.querySelector("body")

const buttonClickedStr = () => axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then(results => {
        results.data.results[0].residents.forEach(element => {
            axios.get(element).then(results => {
                const residentName = document.createElement('h2');
                residentName.innerHTML = results.data.name
                residentName.className = 'resident'
                residentContainer.appendChild(residentName)
            })
        });
    })


getResidentBtn.addEventListener("click", buttonClickedStr)

