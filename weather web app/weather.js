var submit = document.querySelector("#sub");
var textInput = document.querySelector("#City");


function getData(){
    var city = document.getElementById('City').value;
	var data;
	var t, h, w, d;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=&units=metric`)
		.then(data => data.json())
		.then(data =>
		{
			t = data.main.temp;
			h = data.main.humidity;
			w = data.wind.speed;
			d = data.weather[0].main;

			document.getElementById('info').style.border = "1px solid white";
			if(d=='Clear')
			{
				document.body.style.backgroundImage = "url('gif/sunny.gif')";
				document.getElementById('icon').style.backgroundImage = "url(images/sun.png)";
			}

			else if(d=='Clouds')
			{
				if(data.weather[0].description=='broken clouds' || data.weather[0].description=='few clouds')
				{
					document.body.style.backgroundImage = "url('gif/cloudy2.gif')";
					document.getElementById('icon').style.backgroundImage = "url(images/cloudy.png)";
					d = "Few " + d;
				}
				else
				{
					document.body.style.backgroundImage = "url('gif/cloud.gif')";
					document.getElementById('icon').style.backgroundImage = "url(images/cloud.png)";
				}
			}
			else if(d=='Rain')
			{
				document.body.style.backgroundImage = "url('gif/rain.gif')";
				document.getElementById('icon').style.backgroundImage = "url(images/rain.png)";
			}
			else if(d=='Haze')
			{
				document.body.style.backgroundImage = "url('gif/haze.gif')";
				document.getElementById('icon').style.backgroundImage = "url(images/haze.png)";
			}
			else if(d=='Dust')
			{
				document.body.style.backgroundImage = "url('gif/dust.gif')";
				document.getElementById('icon').style.backgroundImage = "url(images/dust.png)";
			}
			else if(d=='Mist')
			{
				document.body.style.backgroundImage = "url('gif/mist.gif')";
				document.getElementById('icon').style.backgroundImage = "url(images/mist.png)";
			}
			else if(d=='Snow')
			{
				document.body.style.backgroundImage = "url('gif/snow.gif')";
				document.getElementById('icon').style.backgroundImage = "url(images/snow.png)";
			}
			else if(d=='Thunderstorm')
			{
				document.body.style.backgroundImage = "url('gif/storm.gif')";
				document.getElementById('icon').style.backgroundImage = "url(images/storm.png)";
			}
			else if(d=='Drizzle')
			{
				document.body.style.backgroundImage = "url('gif/drizzle.gif')";
				document.getElementById('icon').style.backgroundImage = "url(images/drizzle.png)";	
			}
		
			document.getElementById('today').innerText = `Today`
			document.getElementById('place').innerText = `${city}`
			document.getElementById('day').innerText = `${d}`
			document.getElementById('temp').innerText = `Temperature: ${t}˚C`
			document.getElementById('hum').innerText = `Humidity: ${h}`
			document.getElementById('wind').innerText = `Wind: ${w}`;


		})

}

submit.addEventListener("click", () => {
    getData();
});
       
textInput.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        getData();
    }
});	

