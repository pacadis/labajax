var page = 0;

function getRows(){
	var method = "GET";
	var url = "server.php";

	$.ajax({
		type: method,
		url: url,
		success: function(data){
			data = JSON.parse(data);
			var rows = []
			for (var i = 0; i < data.length; i++){
				var row = [data[i].Nume, data[i].Prenume, data[i].Telefon, data[i].Email];
				rows.push(row);
			}
			createTable(rows);
			if (page + 1 > Math.floor(rows.length / 3))
				$("#next").prop('disabled', true);
			else {
				$("#next").prop('disabled', false);
			}
		}
	});
}

function createTable(array){
	array = array.slice(page * 3, page * 3 + 3);
	var rows = "<tr><th>Nume</th>\n" + "<th>Prenume</th>\n" + "<th>Telefon</th>\n" + "<th>Email</th></tr>";


	for (var i = 0; i < array.length; i++){
		rows += "<tr><td>"+ array[i][0] +"</td><td>"+ array[i][1] + "</td><td>"+ array[i][2] + "</td><td>"+ array[i][3] +"</td> </tr>";
	}
	$("#table").empty();
	$("#table").append(rows);
}

function nextPage(){
	page++;
	getRows();
	modifyButtons();
}

function previousPage(){
	page--;
	getRows();
	modifyButtons();
}

function modifyButtons(){
	if (page == 0){
		$("#prev").prop('disabled', true);
	}
	else if ($("#prev").prop('disabled') == true)
		$("#prev").prop('disabled', false);
}

$(document).ready(function(){
	getRows();

	if (page == 0){
		$("#prev").prop('disabled', true);
	}
	else
		$("prev").prop('disabled', false);


	$("#prev").click(function(position){
		previousPage();
	});

	$("#next").click(function(position){
		nextPage();
	});
});