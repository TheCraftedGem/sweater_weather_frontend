class Weather {
  constructor(){
    this.url = `https://immense-taiga-31152.herokuapp.com/api/v1/forecast?location=denver,co`
  }

  location () {
    
  }

  details () {

  }

  forecast () {

  }

  serviceRequest () {
    fetch(this.url) 
      .then(response => response.json())
      .then(forecast => this.forecast = forecast.data.attributes)
  }
}

weather = new Weather
console.log(weather.serviceRequest())