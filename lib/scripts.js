class Weather {
  constructor(){
    this.url = `https://immense-taiga-31152.herokuapp.com/api/v1/forecast?location=`
    this.currentTemperature = null;
    this.currentSummary = null;
    this.high = null;
    this.low = null;
    this.city = null;
    this.state = null;
    this.country = null;
    this.time = null;
    this.date = null;
    this.location = null;
  }

  serviceRequest() {
    fetch(this.url + this.location)
      .then(response => response.json())
      .then(forecast => this.forecast = forecast.data.attributes)
      .catch(error   => console.log("shits fucked", error))
  }

  setElements () {
    this.currentTemperature = document.querySelector(".temperature")
    this.currentSummary = document.querySelector(".summary")
    this.high = document.querySelector(".high")
    this.low = document.querySelector(".low")
    this.city = document.querySelector(".city")
    this.state = document.querySelector(".state")
    this.country = document.querySelector(".country")
    this.time = document.querySelector(".time")
    this.date = document.querySelector(".temperature")
  }

  loadForecast () {
    this.currentTemperature.insertAdjacentHTML('beforeend', this.forecast.current_weather_forecast.temperature)
    this.currentSummary.insertAdjacentHTML('beforeend', this.forecast.current_weather_forecast.summary)
    this.high.insertAdjacentHTML('beforeend', this.forecast.daily_weather[0].high)
    this.low.insertAdjacentHTML('beforeend', this.forecast.daily_weather[0].low)
    this.city.insertAdjacentHTML('beforeend', this)
  }

  getLocation () {
    this.setElements()
    this.location = document.querySelector('.city-state').value
    this.serviceRequest()
    this.loadForecast()
  }

  details () {
    
  }

  forecast () {
    
  }
}

weather = new Weather
weather.setElements()
