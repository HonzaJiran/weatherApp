'use strict'

let local_city = document.querySelector('.local_city')
let rychlost_vetru = document.querySelector('.rychlost_vetru')
let vlhkost = document.querySelector('.vlhkost')
let visibility = document.querySelector('.visibility')
let pressure = document.querySelector('.pressure')
let precipitation = document.querySelector('.precipitation')
let maxTemp = document.querySelector('.maxTemp')
let minTemp = document.querySelector('.minTemp')



const token = '41f5862ac7b5555d058bb9ca0a710d0d'

let city = document.querySelector('.search_input')

city.addEventListener('keypress', (e) => {
    if(e.keyCode == 13){

        const url ='https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&APPID=' + token + '&units=metric'

        fetch(url)
        .then( res => res.json())
        .then( data => {
            console.log(data)

            rychlost_vetru.innerHTML = data.wind.speed + ' km/h'
            vlhkost.innerHTML = data.main.humidity + ' %'

            let visibilityCalculated = data.visibility/1000

            visibility.innerHTML = visibilityCalculated + ' km'
            pressure.innerHTML = data.main.pressure + ' hPa'
            //precipitation.innerHTML = data.precipitation.value + ' mm'
            maxTemp.innerHTML = data.main.temp_max
            minTemp.innerHTML = data.main.temp_min
        })
    }
})