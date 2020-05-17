function fill_startPoint(){
	var request = new XMLHttpRequest();
	var method = "GET";
	var async = true;
	var url = "server.php?side=left";

	var selectLeft = document.getElementById("selectLeft");
	var size = 0;

	request.open(method, url, async);
	request.send();

	request.onreadystatechange = function(){
		if (request.readyState == 4){
			if (request.status == 200){
				var data = JSON.parse(request.responseText);

				for (var i = 0; i < data.length; i++){
					var option = document.createElement("option");
					option.id = data[i].Plecare;
					option.value = data[i].Plecare;
					option.innerHTML = data[i].Plecare;
					selectLeft.append(option);
					size++;
				}
				selectLeft.setAttribute("size", size);
			}
			else
				console.log('Error request.status ' + request.status);
		}
	}
}

function fill_endPoint(startPoint){
	var request = new XMLHttpRequest();
	var method = "GET";
	var async = true;
	var url = "server.php?side=right&plecare=" + startPoint;

	var selectRight = document.getElementById("selectRight");
	var size = 0;

	request.open(method, url, async);
	request.send();

	request.onreadystatechange = function(){
		if (request.readyState == 4){
			if (request.status == 200){
				var data = JSON.parse(request.responseText);

				for (var i = 0; i < data.length; i++){
					var option = document.createElement("option");
					option.id = data[i].Sosire;
					option.value = data[i].Sosire;
					option.innerHTML = data[i].Sosire;
					selectRight.append(option);
					size++;
				}
				selectRight.setAttribute("size", size);
			}
			else
				console.log('Error request.status ' + request.status);
		}
	}
}

fill_startPoint();
selectLeft.onclick = function(){
	var select = document.getElementById("selectRight");
	var length = select.options.length;
	for (var i = 0; i < select.options.length; i++) {
  		select.options[i] = null;
  	}
	select = selectLeft.options[selectLeft.selectedIndex].id;
	console.log(select);
	fill_endPoint(select);
}