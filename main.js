let img = document.getElementById("img");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let eye = document.getElementById("eye");
let race = document.getElementById("race");
let name = document.getElementById("name");
let Hcolor = document.querySelector(".Hcolor");
let Gender = document.querySelector(".Gender");
let iq = document.getElementById("iq");

document.getElementById('next').addEventListener('click', (e) => {
  location.reload(true);
})

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9e42bcfccbmsh23f232faa430803p1303f0jsne8eeae4e570f',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
  }
};
let n = Math.floor(Math.random()*10);
fetch('https://superhero-search.p.rapidapi.com/api/heroes', options)
  .then(response => response.json())
  .then((data) => {
    img.src = data[n].images.md;
    name.innerHTML = `Name-: ${data[1].name}`;
    eye.innerHTML = `Eye-Color-: ${data[n].appearance.eyeColor}`;
    height.innerHTML = `Height -:  ${data[n].appearance.height}`;
    weight.innerHTML = `Weight -: ${data[n].appearance.weight}`;
    race.innerHTML = `Race -: ${data[n].appearance.race} `
    Hcolor.innerHTML = `HairColor -: ${data[n].appearance.hairColor} `
    Gender.innerHTML = `Gender -: ${data[n].appearance.gender} `
    iq.innerHTML = `intelligence -: ${data[n].powerstats.intelligence +70
} IQ`

  })
