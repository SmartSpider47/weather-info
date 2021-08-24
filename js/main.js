
var req = "";

function GenerateRequest (city, language) {
	req = "";
	req += "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3fc2aad4eadfd206166269b57fa7303b&units=metric&lang=" + language;
}

async function SetInfoRus () {
	try {
		var cname = document.getElementById("id_city_name").value;
		GenerateRequest(cname, "ru");
		let response = await fetch(req);
		let content = await response.json();
		var html = "";
		var tw = "15px";
		html += "<img src=\"https://openweathermap.org/img/w/" + content.weather[0].icon + ".png\" />";
		html += content.weather[0].description;

		html += "<table border=\"0\">";

		html += "<tr><td>" + "Температура:" + "</td><td width=\"" + tw + "\"></td><td>" + content.main.temp + "<sup>o</sup>" + "</td></tr>";
		html += "<tr><td>" + "Облака:" + "</td><td width=\"" + tw + "\"></td><td>" + content.clouds.all + "%" + "</td></tr>";
		html += "<tr><td>" + "Влажность:" + "</td><td width=\"" + tw + "\"></td><td>" + content.main.humidity + "%" + "</td></tr>";
		html += "<tr><td>" + "Давление:" + "</td><td width=\"" + tw + "\"></td><td>" + content.main.pressure + "гПа" + "</td></tr>";
		html += "<tr><td>" + "Направление ветра:" + "</td><td width=\"" + tw + "\"></td><td>" + content.wind.deg + "<sup>o</sup>" + "</td></tr>";
		html += "<tr><td>" + "Скорость ветра:" + "</td><td width=\"" + tw + "\"></td><td>" + content.wind.speed + "м/с" + "</td></tr>";

		html += "</table>";

		document.getElementById("id_label_cname").innerHTML = content.name;
		document.getElementById("id_info_content").innerHTML = html;
	}catch {
		var cur = document.getElementById("id_city_name").value;
		document.getElementById("id_label_cname").innerHTML = "Город не найден";
		document.getElementById("id_info_content").innerHTML = "Не можем найти город с именем \'" + cur + "\'!";
	}
}

async function SetInfoEng () {
	try {
		var cname = document.getElementById("id_city_name").value;
		GenerateRequest(cname, "en");
		let response = await fetch(req);
		let content = await response.json();
		var html = "";
		var tw = "15px";
		html += "<img src=\"https://openweathermap.org/img/w/" + content.weather[0].icon + ".png\" />";
		html += content.weather[0].description;

		html += "<table border=\"0\">";

		html += "<tr><td>" + "Temperature:" + "</td><td width=\"" + tw + "\"></td><td>" + content.main.temp + "<sup>o</sup>" + "</td></tr>";
		html += "<tr><td>" + "Clouds:" + "</td><td width=\"" + tw + "\"></td><td>" + content.clouds.all + "%" + "</td></tr>";
		html += "<tr><td>" + "Humidity:" + "</td><td width=\"" + tw + "\"></td><td>" + content.main.humidity + "%" + "</td></tr>";
		html += "<tr><td>" + "Pressure:" + "</td><td width=\"" + tw + "\"></td><td>" + content.main.pressure + "hPa" + "</td></tr>";
		html += "<tr><td>" + "Wind Direction:" + "</td><td width=\"" + tw + "\"></td><td>" + content.wind.deg + "<sup>o</sup>" + "</td></tr>";
		html += "<tr><td>" + "Wind Speed:" + "</td><td width=\"" + tw + "\"></td><td>" + content.wind.speed + "m/s" + "</td></tr>";

		html += "</table>";

		document.getElementById("id_label_cname").innerHTML = content.name;
		document.getElementById("id_info_content").innerHTML = html;
	}catch {
		var cur = document.getElementById("id_city_name").value;
		document.getElementById("id_label_cname").innerHTML = "City not found";
		document.getElementById("id_info_content").innerHTML = "Can\'t find city with name \'" + cur + "\'!";
	}
}