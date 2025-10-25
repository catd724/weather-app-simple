const cityMenu = document.querySelector("#selectCity");



const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const feels_like = document.querySelector(".feels_like");

const CityCords = {
    multan: [30.1864, 71.4886],
    islamabad: [33.6996, 73.0362],
    karachi: [24.8607, 67.0011],
    lahore: [31.5204, 74.3587]
}

function getWeather(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=45dec351a23d8d1d56cfd514c3c55a25`)
        .then((result) => {
            return (result.json())
        })
        .then((result) => {
            displayvalues(result)
        })
        .catch((error) => {
            console.log(error)
        })

}

function displayvalues(info) {
    city.textContent = info.name;
    temperature.textContent = kToC(info.main.temp);
    feels_like.textContent = (kToC(info.main.feels_like));
}
function kToC(value) {
    // this converts kelvin to celcius
    if (NaN) {
        console.log("not a valid value")
    } else {
        let numvalue = Number(value);
        numvalue = numvalue - 273;
        return (numvalue).toFixed(1);
    }
}


cityMenu.addEventListener("change",function() {
    let selectedCity = this.value
    // console.log(this.value);
    if(selectedCity != ""){
        
        
        getWeather(... CityCords[selectedCity]);
    }
    
})