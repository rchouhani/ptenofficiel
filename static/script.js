import { childDoctors } from "./childDoctors.js"
// import { adultDoctors } from "./adultsDoctors.js"

const childDoctorHTML = document.querySelector(".childDoctors")

const newChildDoctor = (childDoctors) => {
    // for (let i = 0; i < childDoctors.length; i++){
    // console.log(childDoctors[i].nom)
    // const newDiv = document.createElement('div')
    // const newArticle = document.createElement('article')
    // const newH2 = document.createElement('h2')
    // const newParagraph = document.createElement('p')

    // newH2.innerHTML = `${childDoctors[i].prenom} ${childDoctors[i].nom}`
    // newParagraph.innerHTML = `${childDoctors[i].specialites}`
    // newParagraph.innerHTML = `${childDoctors[i].adresse}`

    // childDoctorHTML.appendChild(newParagraph)
    // newArticle.appendChild(newH2)
    // newDiv.appendChild(newArticle)
    // childDoctorHTML.appendChild(newDiv)
    // }
    const newDiv = document.createElement('div')
    const newArticle = document.createElement('article')
    const newH2 = document.createElement('h2')
    const newParagraph = document.createElement('li')

    newDiv.classList.add('publications')
    newH2.innerHTML = `${childDoctors[0].prenom} ${childDoctors[0].nom}`
    newParagraph.innerHTML = `${childDoctors[0].specialites}`
    newParagraph.innerHTML = `${childDoctors[0].adresse}`

    newArticle.appendChild(newH2)
    newArticle.appendChild(newParagraph)
    newDiv.appendChild(newArticle)
    childDoctorHTML.appendChild(newDiv)
    
}
newChildDoctor(childDoctors)