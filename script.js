const baseURL = "https://ghibliapi.herokuapp.com/people"
// console.log(baseURL)

const nme = document.querySelector(".name");
const mve = document.querySelector(".film");
const yr = document.querySelector(".year");
const btn = document.querySelector(".btn");

//Contents//
async function apiFetch(){
    const ranInfo = (Math.floor(Math.random() * 40 -2) + 2)
    const response = await fetch(`${baseURL}`)
    console.log(response);
    const json = await response.json();
    displayInfo(json, ranInfo)
    console.log(json)
}
btn.addEventListener('click', apiFetch)

//Display//
let displayInfo = (data, ranInfo) => {
    
    nme.innerHTML = data[ranInfo].name;
    // mve.innerHTML = data.film;
    // yr.innerHTML = data.year;
    console.log(data[0].name)
}