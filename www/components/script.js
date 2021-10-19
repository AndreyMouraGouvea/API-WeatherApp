// Calling api
// https://openweathermap.org/current
const api = {
  key: "70b852138f2c472c9b34d8187d9a9fba",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "pt-br",
  units: "metric"
}
// Calling id's as consts
const city = document.querySelector('.city');
const date = document.querySelector('.date');
const container_img = document.querySelector('.container-img');
const container_temp = document.querySelector('.container-temp');
const temp_number = document.querySelector('.container-temp div');
const temp_unit = document.querySelector('.container-temp span');
const weather_t = document.querySelector('.weather');
const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');
const low_high = document.querySelector('.low-high');

// on mobile
search_button.addEventListener('click', function(){
  searchResults(search_input.value)
})

// on pc by pressing "enter" enter = 13
search_button.addEventListener('keypress', enter)
function enter(event){
  key = event.keyCode
  if(key === 13){
    searchResults(search_input.value)
  }
}

// function search based on fetch
// returning responses on a json file
function searchResults(city){
  fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
  .then(response => {
    console.log(response)
    if(!response.ok){
      throw new Error (`http error: status $(response.status)`)
    }
    return response.json();
  })
  .catch(error => {
    alert(error.message)
  })
  .then(response => {
   displayResults (response)
  });
}