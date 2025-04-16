import { adultDoctors } from "./adultDoctors.js";

const adultDoctorHTML = document.querySelector('.adult-doctors');
adultDoctorHTML.style = 'display: flex; flex-direction: column;';

const newAdultDoctor = (adultDoctors) => {
    console.log('😎😎')

    for(let i = 0; i < adultDoctors.length; i++){
    const newDiv = document.createElement('div');
    const newArticle = document.createElement('article');
    const newH2 = document.createElement('h2');
    const newSpecialites = document.createElement('h3');
    const newAddress = document.createElement('p');
    const newIframeGoogleMaps = document.createElement('iframe');

    newDiv.classList.add('publications');
    newH2.innerText = `${adultDoctors[i].prenom} ${adultDoctors[i].nom}`;
    newSpecialites.innerText = `${adultDoctors[i].specialites}`;
    newAddress.innerText = `${adultDoctors[i].adresse}, ${adultDoctors[i].codePostal}, ${adultDoctors[i].ville}`;
    newIframeGoogleMaps.setAttribute(`src`, `${adultDoctors[i].iframeGoogleMaps}`);
    newIframeGoogleMaps.classList.add('iframe-google-maps');

    newArticle.appendChild(newH2);
    newArticle.appendChild(newSpecialites);
    newArticle.appendChild(newAddress);
    newArticle.appendChild(newIframeGoogleMaps);

    newDiv.appendChild(newArticle);
    adultDoctorHTML.appendChild(newDiv);
    }
    
}
newAdultDoctor(adultDoctors);