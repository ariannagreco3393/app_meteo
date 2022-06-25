//seleziono elementi dall'html
const rootElement = document.documentElement;
const weatherIcon = document.querySelector('.weather-icon')
const weatherLocation = document.querySelector('.weather-location')
const weatherTemperature = document.querySelector('.weather-temperature')



//recupero la posizione
window.navigator.geolocation.getCurrentPosition(success, error)


//in caso di successo

function success(position) {
    //console.log(position) // prendere latitudine e longitudine

    const latitude = position.coords.latitude //recupero la latitudine da position
    const longitude = position.coords.longitude //recupero la longitudine da position
    const language = 'it' // resitutisco la lingua italiana
    const units = 'metric' // restituisco i grandi centigradi
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather' // prendo url per la chiamata API
    const apiKey = '34a62786845263f299a358cde472ecd2' //api key from https://home.openweathermap.org/api_keys

    // creo l'indirizzo con la query string
    const API = `${apiUrl}?lon=${longitude}&lat=${latitude}&units=${units}&q=&lang=${language}&appid=${apiKey}`;

    //console.log(API);

    // chiamata api
    fetch(API).then(function (response) {
        //console.log(response);
        const data = response.json()
        return data
    }).then(function (data) {
        //console.log(data);
        const location = data.name;
        const temperature = Math.floor(data.main.temp) //arrotondo i gradi
        const icon = data.weather[0].icon
        //console.log(icon);

        //stampo in pagina
        weatherLocation.innerHTML = location
        weatherTemperature.innerHTML = `${temperature}°`
        weatherIcon.src = `images/${icon}.png`

    })

}

      
