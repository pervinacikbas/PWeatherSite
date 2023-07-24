const apiKey = 'f3d0e2a3dfcc549a117025cfc9c5156d';


async function getWeather() {
  const tomorrowInfoDiv = document.querySelector(".tomorrowInfo");
  const weatherInfoDiv = document.querySelector("#weatherInfo");
  weatherInfoDiv.style.display = "none";
  tomorrowInfoDiv.style.display = "none";



  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=tr&appid=${apiKey}&units=metric`;

  const url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&units=metric&cnt=40&appid=${apiKey}`;




  try {
    const response = await fetch(url);
    const data = await response.json();


    // Hava durumu bilgilerini alın
    const weatherInfo = {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      date: new Date(data.dt * 1000),
      feelsLikes: data.main.feels_like,
      icon: data.weather[0].icon,
    };



    const IconInfoDiv = document.getElementById('icon');
    const cityInfoDiv = document.getElementById('cityInfo');
    const temperatureInfoDiv = document.getElementById('temperatureInfo');
    const descriptionInfoDiv = document.getElementById('descriptionInfo');
    const dateInfoDiv = document.getElementById('dateInfo');
    const feelsLikesInfoDiv = document.getElementById('feelsLikesInfo');



    weatherInfoDiv.style.display = "block";
    tomorrowInfoDiv.style.display = "block";


    cityInfoDiv.innerHTML = `<p>Şehir: ${weatherInfo.city}</p>`;
    temperatureInfoDiv.innerHTML = `<p>Sıcaklık: ${weatherInfo.temperature} °C</p>`;
    descriptionInfoDiv.innerHTML = `<p>Durum: ${weatherInfo.description}</p>`;
    dateInfoDiv.innerHTML = `<p>Bugün </p>`;
    feelsLikesInfoDiv.innerHTML = `<p>Hissedilen sıcaklık: ${weatherInfo.feelsLikes}°C</p>`;


    if (weatherInfo.icon == "01d" || weatherInfo.icon == "01n") {
      document.body.style.backgroundImage = 'url(g.jpg)' //transparan backroung bold write text
      IconInfoDiv.innerHTML = `<img src="sun.png" width="100px" height="100px"alt="icon">`;

    }
    else if (weatherInfo.icon == "02d" || weatherInfo.icon == "02n") {
      document.body.style.backgroundImage = 'url(c..jpg)';
      IconInfoDiv.innerHTML = `<img src="cloudy.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo.icon == "03d" || weatherInfo.icon == "03n" || weatherInfo.icon == "04d" || weatherInfo.icon == "04n") {

      document.body.style.backgroundImage = 'url(cc.jpg)';
      IconInfoDiv.innerHTML = `<img src="clouds.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo.icon == "09d" || weatherInfo.icon == "09n" || weatherInfo.icon == "10d" || weatherInfo.icon == "10n") {

      document.body.style.backgroundImage = 'url(r.jpg)'; //transparan backroung bold write text
      IconInfoDiv.innerHTML = `<img src="hail.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo.icon == "11d" || weatherInfo.icon == "11n") {

      document.body.style.backgroundImage = 'url(sss.jpg)';//transparan backroung bold write text
      IconInfoDiv.innerHTML = `<img src="thunderstorm.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo.icon == "13d" || weatherInfo.icon == "13n") {

      document.body.style.backgroundImage = 'url(k.jpg)';
      IconInfoDiv.innerHTML = `<img src="snow.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo.icon == "50d" || weatherInfo.icon == "50n") {

      document.body.style.backgroundImage = 'url(ssisli.jpg)';
      IconInfoDiv.innerHTML = `<img src="fog.png" width="100px" height="100px"alt="icon">`;

    }


  } catch (error) {
    console.error('Hava durumu bilgisi alınırken bir hata oluştu:', error);


    alert("Hava durumu bilgisi alınırken bir hata oluştu:")
  }

  try {
    const response1 = await fetch(url1);
    const data1 = await response1.json();


    const weatherInfo1 = {
      city1: data1.city.name,
      temperatureMin1: data1.list[8].main.temp_min,
      temperatureMax1: data1.list[8].main.temp_max,
      description1: data1.list[8].weather[0].description,
      date1: new Date(data1.list[8].dt * 1000),
      icon1: data1.list[8].weather[0].icon,
    };

    const IconInfoDiv1 = document.getElementById('1icon');
    const cityInfoDiv1 = document.getElementById('city1');
    const tempMin1 = document.getElementById('1tempMin');
    const tempMax1 = document.getElementById('1tempMax');
    const descriptionInfoDiv1 = document.getElementById('1descriptionInfo');
    const dateInfoDiv1 = document.getElementById('1dateInfo');



    cityInfoDiv1.innerHTML = `<p>Şehir: ${weatherInfo1.city1}</p>`;
    tempMax1.innerHTML = `<p>Maximum Sıcaklık: ${weatherInfo1.temperatureMax1} °C</p>`;
    tempMin1.innerHTML = `<p>Minimum Sıcaklık: ${weatherInfo1.temperatureMin1} °C</p>`;
    descriptionInfoDiv1.innerHTML = `<p>Durum: ${weatherInfo1.description1}</p>`;
    dateInfoDiv1.innerHTML = `<p>Yarın </p>`;


    IconInfoDiv1.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherInfo1.icon1}.png" width="100px" height="100px"alt="icon">`;

    if (weatherInfo1.icon1 == "01d" || weatherInfo1.icon1 == "01n") {
      IconInfoDiv1.innerHTML = `<img src="sun.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo1.icon1 == "02d" || weatherInfo1.icon1 == "02n") {
      IconInfoDiv1.innerHTML = `<img src="cloudy.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo1.icon1 == "03d" || weatherInfo1.icon1 == "03n" || weatherInfo1.icon1 == "04d" || weatherInfo1.icon1 == "04n") {

      IconInfoDiv1.innerHTML = `<img src="clouds.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo1.icon1 == "09d" || weatherInfo1.icon1 == "09n" || weatherInfo1.icon1 == "10d" || weatherInfo1.icon1 == "10n") {

      IconInfoDiv1.innerHTML = `<img src="hail.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo1.icon1 == "11d" || weatherInfo1.icon1 == "11n") {

      IconInfoDiv1.innerHTML = `<img src="thunderstorm.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo1.icon1 == "13d" || weatherInfo1.icon1 == "13n") {

      IconInfoDiv1.innerHTML = `<img src="snow.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo1.icon1 == "50d" || weatherInfo1.icon1 == "50n") {

      IconInfoDiv1.innerHTML = `<img src="fog.png" width="100px" height="100px"alt="icon">`;

    }

  }

  catch {
    alert("Hava durumu bilgisi alınırken bir hata oluştu:")
  }
  try {
    const response2 = await fetch(url1);
    const data2 = await response2.json();


    const weatherInfo2 = {
      city2: data2.city.name,
      temperatureMin2: data2.list[16].main.temp_min,
      temperatureMax2: data2.list[16].main.temp_max,
      description2: data2.list[16].weather[0].description,
      date2: new Date(data2.list[16].dt * 1000),
      icon2: data2.list[16].weather[0].icon,
    };

    const IconInfoDiv2 = document.getElementById('2icon');
    const cityInfoDiv2 = document.getElementById('2city');
    const tempMin2 = document.getElementById('2tempMin');
    const tempMax2 = document.getElementById('2tempMax');
    const descriptionInfoDiv2 = document.getElementById('2descriptionInfo');
    const dateInfoDiv2 = document.getElementById('2dateInfo');

    const gunAdlari = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const gunAdi = gunAdlari[weatherInfo2.date2.getDay()];

    cityInfoDiv2.innerHTML = `<p>Şehir: ${weatherInfo2.city2}</p>`;
    tempMax2.innerHTML = `<p>Maximum Sıcaklık: ${weatherInfo2.temperatureMax2} °C</p>`;
    tempMin2.innerHTML = `<p>Minimum Sıcaklık: ${weatherInfo2.temperatureMin2} °C</p>`;
    descriptionInfoDiv2.innerHTML = `<p>Durum: ${weatherInfo2.description2}</p>`;
    dateInfoDiv2.innerHTML = `<p>${gunAdi}</p>`;


    if (weatherInfo2.icon2 == "01d" || weatherInfo2.icon2 == "01n") {
      IconInfoDiv2.innerHTML = `<img src="sun.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo2.icon2 == "02d" || weatherInfo2.icon2 == "02n") {
      IconInfoDiv2.innerHTML = `<img src="cloudy.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo2.icon2 == "03d" || weatherInfo2.icon2 == "03n" || weatherInfo2.icon2 == "04d" || weatherInfo.icon == "04n") {

      IconInfoDiv2.innerHTML = `<img src="clouds.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo2.icon2 == "09d" || weatherInfo2.icon2 == "09n" || weatherInfo2.icon2 == "10d" || weatherInfo.icon == "10n") {

      IconInfoDiv2.innerHTML = `<img src="hail.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo2.icon2 == "11d" || weatherInfo2.icon2 == "11n") {

      IconInfoDiv2.innerHTML = `<img src="thunderstorm.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo2.icon2 == "13d" || weatherInfo2.icon2 == "13n") {

      IconInfoDiv2.innerHTML = `<img src="snow.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo2.icon2 == "50d" || weatherInfo2.icon2 == "50n") {

      IconInfoDiv2.innerHTML = `<img src="fog.png" width="100px" height="100px"alt="icon">`;

    }

  }

  catch {
    alert("Hava durumu bilgisi alınırken bir hata oluştu:")
  }
  try {
    const response3 = await fetch(url1);
    const data3 = await response3.json();


    const weatherInfo3 = {
      city3: data3.city.name,
      temperatureMin3: data3.list[24].main.temp_min,
      temperatureMax3: data3.list[24].main.temp_max,
      description3: data3.list[24].weather[0].description,
      date3: new Date(data3.list[24].dt * 1000),
      icon3: data3.list[24].weather[0].icon,
    };

    const IconInfoDiv3 = document.getElementById('3icon');
    const cityInfoDiv3 = document.getElementById('3city');
    const tempMin3 = document.getElementById('3tempMin');
    const tempMax3 = document.getElementById('3tempMax');
    const descriptionInfoDiv3 = document.getElementById('3descriptionInfo');
    const dateInfoDiv3 = document.getElementById('3dateInfo');

    const gunAdlari = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const gunAdi = gunAdlari[weatherInfo3.date3.getDay()];

    cityInfoDiv3.innerHTML = `<p>Şehir: ${weatherInfo3.city3}</p>`;
    tempMax3.innerHTML = `<p>Maximum Sıcaklık: ${weatherInfo3.temperatureMax3} °C</p>`;
    tempMin3.innerHTML = `<p>Minimum Sıcaklık: ${weatherInfo3.temperatureMin3} °C</p>`;
    descriptionInfoDiv3.innerHTML = `<p>Durum: ${weatherInfo3.description3}</p>`;
    dateInfoDiv3.innerHTML = `<p>${gunAdi}</p>`;

    if (weatherInfo3.icon3 == "01d" || weatherInfo3.icon3 == "01n") {
      IconInfoDiv3.innerHTML = `<img src="sun.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo3.icon3 == "02d" || weatherInfo3.icon3 == "02n") {
      IconInfoDiv3.innerHTML = `<img src="cloudy.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo3.icon3 == "03d" || weatherInfo3.icon3 == "03n" || weatherInfo3.icon3 == "04d" || weatherInfo.icon == "04n") {

      IconInfoDiv3.innerHTML = `<img src="clouds.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo3.icon3 == "09d" || weatherInfo3.icon3 == "09n" || weatherInfo3.icon3 == "10d" || weatherInfo.icon == "10n") {

      IconInfoDiv3.innerHTML = `<img src="hail.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo3.icon3 == "11d" || weatherInfo3.icon3 == "11n") {

      IconInfoDiv3.innerHTML = `<img src="thunderstorm.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo3.icon3 == "13d" || weatherInfo3.icon3 == "13n") {

      IconInfoDiv3.innerHTML = `<img src="snow.png" width="100px" height="100px"alt="icon">`;
    }
    else if (weatherInfo3.icon3 == "50d" || weatherInfo3.icon3 == "50n") {

      IconInfoDiv3.innerHTML = `<img src="fog.png" width="100px" height="100px"alt="icon">`;

    }
  }

  catch {
    alert("Hava durumu bilgisi alınırken bir hata oluştu:")
  }
}
