function fillIndexes(){
	var method = "GET";
	var url = "getIndexes.php";
	var size = 0;

	$.ajax({
		type: method,
		url: url,
		success: function(data){
			data = JSON.parse(data);

			for (var i = 0; i < data.length; i++){
				var index = data[i].Id;
				var option = "<option id=" + index + " value=" + index + ">" + index + "</option>";
				$("#index").append(option);
				size++;
			}
		}
	});
}

function fillForm(index){
	var method = "GET";
	var url = "getAttributes.php?index=" + index;

	$.ajax({
		type: method,
		url: url,
		success: function(data){
			data = JSON.parse(data);

			$("#marca").val(data.Marca);
			$("#model").val(data.Model);
			$("#kilometrii").val(data.Kilometrii);
		}
	});
}


function updateDataBase(){
	var id = parseInt($("#index option:selected").attr("id"));
	var marca = $("#marca").val();
	var model = $("#model").val();
	var km = parseInt($("#kilometrii").val());

	var method = "GET";
	var url = "update.php?id=" + id + "&marca=" + marca + "&model=" + model + "&km=" + kilometrii;

	$.ajax({
		type: method,
		url: url,
		success: function(){
			console.log("DataBase updated");
		}
	});
}

function enableButton(){
	$("#save").css({"background-color": "grey", "color": "white", "border": "grey"});
}

function disableButton(){
	$("#save").css({"background-color": "white", "color": "white", "border": "white"});
}

$(document).ready(function(){
	fillIndexes();

	$("#index").click(function(){
		console.log(parseInt($("#index option:selected").val()));
		fillForm($("#index option:selected").val());
	});

	$("input").keypress(function(){
		enableButton();
	});

	$("#save").click(function(){
		disableButton();
		updateDataBase();
	});
});