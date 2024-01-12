const item1Day = document.getElementById("item1Day")
const item1Date = document.getElementById("item1Date")
const item1Location = document.getElementById("currentLocation")
const item1Icon = document.getElementById("currentIcon")
const item1Degree = document.getElementById("currentDegree")
const item1State = document.getElementById("currentState")
const item1Rain = document.getElementById("currentRain")
const item1Wind = document.getElementById("currentWind")
const item1Direction = document.getElementById("currentDirection")
const item2Date = document.getElementById("day2Date")
const item3Date = document.getElementById("day3Date")
const day2Icon = document.getElementById("day2Icon")
const day3Icon = document.getElementById("day3Icon")
const day2Deg = document.getElementById("day2Deg")
const day3Deg = document.getElementById("day3Deg")
const day2Feel = document.getElementById("day2Feel")
const day3Feel = document.getElementById("day3Feel")
const day2Status = document.getElementById("day2Status")
const day3Status = document.getElementById("day3Status")
const searchInp = document.getElementById("searchInp")
const searchBtn = document.getElementById("searchBtn")
let city = "paris"



async function getData(){
    let recieveData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=918d2df56713412695a154628232912&q=${city}&days=3`)
    const res = await recieveData.json()
    return res
}

getData().then(data=>{
    console.log(data)
    const {current, forecast, location} = data
     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     const currentDate = new Date()
     const forecast1Date = new Date(`${forecast.forecastday[1].date}`)
     const forecast2Date = new Date(`${forecast.forecastday[2].date}`)
     const dayNumber = currentDate.getDate()
     const currentDay = weekday[currentDate.getDay()]
     const currentMonth = months[currentDate.getMonth()]
     item1Day.innerHTML = `${currentDay}`
     item1Date.innerHTML = `${ dayNumber +" "+ currentMonth}`
     item1Location.innerHTML = `${location.name}`
     item1Icon.setAttribute("src",`${current.condition.icon}`)
     item1Degree.innerHTML = `${current.temp_c + "°C"}`
     item1State.innerHTML = `${current.condition.text}`
     item1Rain.innerHTML = `${current.precip_in + "%"}`
     item1Wind.innerHTML = `${current.wind_kph + "Km/h"}`
     item1Direction.innerHTML = `${current.wind_dir}`
     item2Date.innerHTML = weekday[forecast1Date.getDay()]
     item3Date.innerHTML = weekday[forecast2Date.getDay()]
     day2Icon.setAttribute("src",`${forecast.forecastday[1].day.condition.icon}`)
     day3Icon.setAttribute("src",`${forecast.forecastday[2].day.condition.icon}`)
     day2Deg.innerHTML = `${forecast.forecastday[1].day.maxtemp_c + "°C"}`
     day2Feel.innerHTML = `${forecast.forecastday[1].day.maxtemp_f + "°f"}`
     day3Deg.innerHTML = `${forecast.forecastday[2].day.maxtemp_c + "°C"}`
     day3Feel.innerHTML = `${forecast.forecastday[2].day.maxtemp_f + "°f"}`
     day2Status.innerHTML = `${forecast.forecastday[1].day.condition.text}`
     day3Status.innerHTML = `${forecast.forecastday[2].day.condition.text}`
})

searchBtn.addEventListener("click", ()=>{
    if(searchInp.value.length > 3){
     city = searchInp.value
     async function getData(){
        let recieveData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=918d2df56713412695a154628232912&q=${city}&days=3`)
        const res = await recieveData.json()
        return res
    }
    
    getData().then(data=>{
        console.log(data)
        const {current, forecast, location} = data
         const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
         const currentDate = new Date()
         const forecast1Date = new Date(`${forecast.forecastday[1].date}`)
         const forecast2Date = new Date(`${forecast.forecastday[2].date}`)
         const dayNumber = currentDate.getDate()
         const currentDay = weekday[currentDate.getDay()]
         const currentMonth = months[currentDate.getMonth()]
         item1Day.innerHTML = `${currentDay}`
         item1Date.innerHTML = `${ dayNumber +" "+ currentMonth}`
         item1Location.innerHTML = `${location.name}`
         item1Icon.setAttribute("src",`${current.condition.icon}`)
         item1Degree.innerHTML = `${current.temp_c + "°C"}`
         item1State.innerHTML = `${current.condition.text}`
         item1Rain.innerHTML = `${current.precip_in + "%"}`
         item1Wind.innerHTML = `${current.wind_kph + "Km/h"}`
         item1Direction.innerHTML = `${current.wind_dir}`
         item2Date.innerHTML = weekday[forecast1Date.getDay()]
         item3Date.innerHTML = weekday[forecast2Date.getDay()]
         day2Icon.setAttribute("src",`${forecast.forecastday[1].day.condition.icon}`)
         day3Icon.setAttribute("src",`${forecast.forecastday[2].day.condition.icon}`)
         day2Deg.innerHTML = `${forecast.forecastday[1].day.maxtemp_c + "°C"}`
         day2Feel.innerHTML = `${forecast.forecastday[1].day.maxtemp_f + "°f"}`
         day3Deg.innerHTML = `${forecast.forecastday[2].day.maxtemp_c + "°C"}`
         day3Feel.innerHTML = `${forecast.forecastday[2].day.maxtemp_f + "°f"}`
         day2Status.innerHTML = `${forecast.forecastday[1].day.condition.text}`
         day3Status.innerHTML = `${forecast.forecastday[2].day.condition.text}`
    })
    }
 })

