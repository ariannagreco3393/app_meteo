//seleziono elementi dall'html
const rootElement = document.documentElement;
const weatherIcon = document.querySelector('.weather-icon')
const weatherLocation = document.querySelector('.weather-location')
const weatherTemperature = document.querySelector('.weather-temperature')



//recupero la posizione
window.navigator.geolocation.getCurrentPosition(success, error)



      
