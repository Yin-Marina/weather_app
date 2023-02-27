
    var apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=a431df0ede444e358ab143615232702&q=K2G2M6&days=7&aqi=yes&alerts=no';
    function getWeather(){fetch(apiUrl).then(response => {
      return response.json();
    }).then(data => {
       console.log(data);// Work with JSON data here
        var locationData = data.location.name;
        document.getElementById('location').textContent = locationData;
        console.log("location: " + locationData);

        var temperatureData = data.current.temp_c;
        document.getElementById('temperature').textContent = temperatureData;
        console.log("temperature: " + temperatureData);

        var weatherDescription = data.current.condition.text;
        document.getElementById('weatherDescription').textContent = weatherDescription;
        console.log("weather description: " + weatherDescription);


        var weatherImgAdd = data.current.condition.icon;
        document.getElementById('weatherImg').src = weatherImgAdd;
        console.log("weather img: " + weatherImgAdd);
    
    
    }).catch(err => {
      // Do something for an error here
    });} 

    getWeather();

    document.getElementById('refreshButton').onclick = () =>{
        getWeather();
    }

    const header = document.querySelector('.navbar');




    
    

   


   
    


