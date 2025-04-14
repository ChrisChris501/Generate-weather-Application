const fetchWeather = async () => {const API_KEY = '9213870c31d7acee36d52415a30cf820';
	const city = document.getElementById('cityInput').value;
	if (!city) {
		alert('please enter a city name');
		return;
	}
	
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather`,
			{
				params: {
					q: city,
					appid: API_KEY,
					units: 'metric',
				},
			}
		);
		const weatherData = response.data;
		const temperature = weatherData.main.temp;
		const description = weatherData.weather[0].description;

		document.getElementById('weatherInfo').innerHTML = `
            <h2>Weather in ${city}</h2>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p><strong>Condition:</strong> ${description}</p>
        `; 
	} catch (error) {
		console.error(
			'Error fetching weather data:',
			error.response?.data || error.message
		);
	}
};
