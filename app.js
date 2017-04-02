function getWeather(){
var city=document.getElementById("city").value;
var country=document.getElementById("country").value;
var urlWeather ='https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?apikey=5d69c7906d613a64e45165c2fdfdd0e5&units=metric&q='+city+','+country;

fetch(`${urlWeather}`)
	.then(function(res){ 
		res.json().then(function (data){
			console.log(data);
			document.getElementById("weatherLbl").innerHTML = data.main.temp + " \xB0C";
				//document.getElementById("description").innerHTML = data.main.pressure;
					document.getElementById("description").innerHTML = data.weather[0].description;
					var i=  data.weather[0].description;
					console.log(i);
					if(i == 'haze'){
						document.getElementById("icon").src= 'images/haze.png';
					}
					else if (i == 'overcast clouds' || 'cloudy' || 'clouds'){
							document.getElementById("icon").src= 'images/cloudy.png';
					}
					else if(i == 'light rain' || 'moderate rain'){
						document.getElementById("icon").src= 'images/lightrain.png';
					}
					else if(i == 'clear sky' || 'sunny' || 'sun' || 'sun shine'){
						document.getElementById("icon").src= 'images/sunny.ico';
					}
					
					else{
						console.log("nothing");
					}
					console.log(i);
					
					
		})
		
	 })
	.catch(function(e){ 
		console.log(`${e} 'something is donkin up your wiz biz'`);
	})

}
function getFiveDayWeather(){
var city=document.getElementById("city").value;
var country=document.getElementById("country").value;
var urlWeather ='https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?apikey=5d69c7906d613a64e45165c2fdfdd0e5&units=metric&q='+city+','+country+'&cnt=5';

fetch(`${urlWeather}`)
	.then(function(res){ 
		res.json().then(function (data){
				console.log(data);
				//document.getElementById("weatherfiveday").innerHTML = data.main.temp + " \xB0C";
				
				
				 for(var i=0; i<data.list.length; i++){
				 	var dt = new Date();
				 	//dt = dt.setDate(dt.getDate()+i);
				 	//var date=new Date(dt);
                    
				 	 console.log(data.list[i].temp.max);
				 	 var min_f_temperature = data.list[0].temp.min;
				 	 var max_f_temperature = data.list[0].temp.max;
				 	dt = dt.setDate(dt.getDate()+0);
				 	var firstdate=new Date(dt);
				 	console.log(data.list[i].temp.min);
				 	console.log(firstdate);
				 	document.getElementById("firstdate").innerHTML = firstdate;
				 	document.getElementById("firstmin").innerHTML = min_f_temperature + " \xB0C";
				 	document.getElementById("firstmax").innerHTML = max_f_temperature + " \xB0C";
				 	
				 	 var min_s_temperature = data.list[1].temp.min;
				 	 var max_s_temperature = data.list[1].temp.max;
				 	 	var dt = new Date();
				 	dt = dt.setDate(dt.getDate()+1);
				 	var seconddate=new Date(dt);
				 	document.getElementById("seconddate").innerHTML = seconddate;
				 	document.getElementById("secondmin").innerHTML = min_s_temperature + " \xB0C";
				 	document.getElementById("secondmax").innerHTML = max_s_temperature + " \xB0C";
				 	
				 	 var min_t_temperature = data.list[2].temp.min;
				 	 var max_t_temperature = data.list[2].temp.max;
				 	 	var dt = new Date();
				 	dt = dt.setDate(dt.getDate()+2);
				 	var thirddate=new Date(dt);
				 	console.log(data.list[i].temp.min);
				 	console.log(firstdate);
				 	document.getElementById("thirddate").innerHTML = seconddate;
				 	document.getElementById("thirdmin").innerHTML = min_t_temperature + " \xB0C";
				 	document.getElementById("thirdmax").innerHTML = max_t_temperature + " \xB0C";
				 	
				 	 var min_f_temperature = data.list[3].temp.min;
				 	 var max_f_temperature = data.list[3].temp.max;
				 	 	var dt = new Date();
				 	dt = dt.setDate(dt.getDate()+3);
				 	var fourthdate=new Date(dt);
				 	document.getElementById("fourthdate").innerHTML = seconddate;
				 	document.getElementById("fourthmin").innerHTML = min_f_temperature + " \xB0C";
				 	document.getElementById("fourthmax").innerHTML = max_f_temperature;
				 	
				 	 var min_fv_temperature = data.list[4].temp.min;
				 	 var max_fv_temperature = data.list[4].temp.max;
				 	 	var dt = new Date();
				 	dt = dt.setDate(dt.getDate()+4);
				 	var fifthdate=new Date(dt);
				 	document.getElementById("fifthdate").innerHTML = seconddate;
				 	document.getElementById("fifthmin").innerHTML = min_fv_temperature + " \xB0C";
				 	document.getElementById("fifthmax").innerHTML = max_fv_temperature + " \xB0C";
				 	
				 }
			})
		})
	.catch(function(e){ 
		console.log(`${e} 'something is donkin up your wiz biz'`);
	})
}