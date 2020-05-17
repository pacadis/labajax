var page = 0;
var prev = document.getElementById('prev');
var next = document.getElementById('next');

prev.onclick = function(){
	prevPage();
}

next.onclick = function(){
	nextPage();
}

function getRows(){
	var request = new XMLHttpRequest();
	var method = "GET";
	var async = true;
	var url = "server.php";

	request.open(method, url, async);
	request.send();

	request.onreadystatechange = function(data){
		if (request.readyState == 4){
			if (request.status == 200){
				var data = JSON.parse(request.responseText);
			
				var rows = [];
				for (var i = 0; i < data.length; i++){
					var row = [data[i].Nume, data[i].Prenume, data[i].Telefon, data[i].Email];
					rows.push(row);
				}
				createTable(rows);
				if (page + 1 > Math.floor(data.length / 3))
					next.disabled = true;
				else
					next.disabled = false;

				if (page == 0)
					prev.disabled = true;
				else
					prev.disabled = false;
			}
		}
	}
}

function createTable(array){
	array = array.slice(page * 3, page * 3 + 3);


	var table = document.getElementById("table");
	table.innerHTML = "";

	var header = table.createTHead(0);
	var row = header.insertRow(0);
	var cells = [];
	for (var i = 0; i < 4; i++){
		cells.push(row.insertCell(i));
	}
	cells[0].innerHTML = "Nume";
	cells[1].innerHTML = "Prenume";
	cells[2].innerHTML = "Telefon";
	cells[3].innerHTML = "Email";

	for (var i = 0; i < array.length; i++){
		var row = table.insertRow(i + 1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);

		cell1.innerHTML = array[i][0];
		cell2.innerHTML = array[i][1];
		cell3.innerHTML = array[i][2];
		cell4.innerHTML = array[i][3];
	}

}

function prevPage(){
	page--;
	getRows();
}

function nextPage(){
	page++;
	getRows();
}

getRows();