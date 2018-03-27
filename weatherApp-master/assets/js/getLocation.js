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

const url ='https://api.openweathermap.org/data/2.5/weather?q=' +
sessionStorage.getItem('currentLocation') +
'&APPID=' + token +
'&units=metric'

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
  localTime.innerHTML = now
})
