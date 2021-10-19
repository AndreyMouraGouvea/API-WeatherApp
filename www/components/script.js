// Calling api
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
const seach_button = document.querySelector('.btn');
const low_high = document.querySelector('.low-high');





const div = document.createElement('div');
div.innerHTML = "<big>Andrey é demais!</big>"
function teste(){
  alert("oi");
}