function ipLookUp () {
    $.ajax('http://ip-api.com/json')
    .then(
        function success(res) {
            sessionStorage.setItem('currentLocation', res.city)
            document.querySelector('.local_city').innerHTML = res.city
            document.querySelector('.search_input').value = res.city
            console.log(res)
        },

        function fail(data, status) {
            console.log('Request failed.  Returned status of',status)
        }
    );
  }
ipLookUp()

let localTime = document.querySelector('.localTime')
const d = new Date()
      h = d.getHours()
      m = d.getMinutes()
      now = h + ' : ' + m

const urlCurrent ='https://api.openweathermap.org/data/2.5/weather?q=' +
sessionStorage.getItem('currentLocation') +
'&APPID=' + token +
'&units=metric'

fetch(urlCurrent)
.then( res => res.json())
.then( data => {
  console.log(data)

  const icon = data.weather.map(weatherIcon => {
    return weatherIcon.icon
  })

  rychlost_vetru.innerHTML = data.wind.speed + ' km/h'
  vlhkost.innerHTML = data.main.humidity + ' %'

  let visibilityCalculated = data.visibility/1000

  visibility.innerHTML = visibilityCalculated + ' km'
  pressure.innerHTML = data.main.pressure + ' hPa'
  //precipitation.innerHTML = data.precipitation.value + ' mm'
  maxTemp.innerHTML = data.main.temp_max
  minTemp.innerHTML = data.main.temp_min
  localTime.innerHTML = now

  let current_weather_image = document.createElement("img")
  current_weather_image.setAttribute('class', 'current_weather')
  current_weather_image.src = 'http://openweathermap.org/img/w/' + icon + '.png'
  current_weather_image.alt = 'current weather image'
  current_weather_image.style.width = '50%'
  document.querySelector('.image').appendChild(current_weather_image)
})


const urlForecast ='https://api.openweathermap.org/data/2.5/forecast?q=' +
sessionStorage.getItem('currentLocation') +
'&APPID=' + token +
'&units=metric'

fetch(urlForecast)
.then( res => res.json())
.then( data => {
  console.log(data)

})
