function fill_startPoint(){
	var method = "GET";
	var size = 0;

	$.ajax({
		type: method,
		url: "server.php?side=left",
		success: function(data){
			var data = JSON.parse(data);

			for (var i = 0; i < data.length; i++){
				var plecare = data[i].Plecare;
				var option = "<option id=" + plecare + " value=" + plecare + ">" + plecare + "</option>";
				$("#selectLeft").append(option);
				size++;	
			}
			$("#selectLeft").attr("size", size);
		}
	});
}

function fill_endPoint(startPoint){
	$("#selectRight").empty();
	var size = 0;
	$.ajax({
		type: "GET",
		url: "server.php?side=right&plecare=" + startPoint,
		success: function(data){
			var data = JSON.parse(data);

			for (var i = 0; i < data.length; i++){
				var sosire = data[i].Sosire;
				var option = "<option id=" + sosire + " value=" + sosire + ">" + sosire + "</option>";
				$("#selectRight").append(option);
				size++;
			}
			$("#selectRight").attr("size", size);
		}
	});
}

$(document).ready(function(){
	fill_startPoint();
	$("#selectLeft").attr("size", $("#selectLeft").children('option').length);

	$("#selectLeft").click(function(){
		fill_endPoint($("#selectLeft option:selected").attr("id"));
	});
});