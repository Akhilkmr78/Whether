window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone');
    let icon = document.querySelector('.icon');

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position =>{
           long = position.coords.longitude;
           lat = position.coords.latitude;
           const api = `https://api.weatherstack.com/current?access_key=3268b592ebc90d90b76bf356195dff4e&query=${lat},${long}`;
           fetch(api).then(data => {
            return data.json();
        }).then(data1 => {
            console.log(data1);
            const {temperature, weather_descriptions} = data1.current;
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = weather_descriptions;
            locationTimeZone.textContent = `${data1.location.name}/${data1.location.region}`;
            icon.setAttribute('src', data1.current.weather_icons[0]);
        })
       });

       
    }else{
        h1.textContent = "Please enable your location"
    }
})