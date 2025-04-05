import { childDoctors } from "./childDoctors.js"
// import { adultDoctors } from "./adultsDoctors.js"

const childDoctorHTML = document.querySelector(".child-doctors")
childDoctorHTML.style = 'display: flex; flex-direction: column;'

const newChildDoctor = (childDoctors) => {

    for(let i = 0; i < childDoctors.length; i++){
    const newDiv = document.createElement('div')
    const newArticle = document.createElement('article')
    const newH2 = document.createElement('h2')
    const newSpecialites = document.createElement('h3')
    const newAddress = document.createElement('p')
    const newIframeGoogleMaps = document.createElement('iframe')

    newDiv.classList.add('publications')
    newH2.innerText = `${childDoctors[i].prenom} ${childDoctors[i].nom}`
    newSpecialites.innerText = `${childDoctors[i].specialites}`
    newAddress.innerText = `${childDoctors[i].adresse}, ${childDoctors[i].codePostal}, ${childDoctors[i].ville}`
    newIframeGoogleMaps.setAttribute(`src`, `${childDoctors[i].iframeGoogleMaps}`)
    newIframeGoogleMaps.classList.add('iframe-google-maps')

    newArticle.appendChild(newH2)
    newArticle.appendChild(newSpecialites)
    newArticle.appendChild(newAddress)
    newArticle.appendChild(newIframeGoogleMaps)

    newDiv.appendChild(newArticle)
    childDoctorHTML.appendChild(newDiv)
    }
    
}
newChildDoctor(childDoctors)