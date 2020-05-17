var moves = 0;
var array = [];
var filled = ["", "", "", "", "", "", "", "", ""];
var con = 1;

function putXO(square){
	console.log("putXO");
	if ($(square).html() == ""){
		$(square).html("X");
		moves++;
		array.push($(square).attr("id"));
		filled[$(square).attr("id") - 1] = 'X';

		//computer move here
		if (moves < 9){
				$.ajax({
				method: "GET",
				url: "server.php?token=computerTurn&pos=" + array,
				success: function(data){
					$("#" + data).html("O");
					filled[data - 1] = 'O';
				}
			});
			console.log(filled);
			moves++;
		}

		$.ajax({
			method: "GET",
			url: "server.php?token=check&filled=" + filled,
			success: function(data){
				console.log(data);
				if (data == "CONTINUE GAME"){
					
				}
				else{
					alert(data);
					restart();
					con = 0;
				}
			}
		})
		if (con == 0){
			return;
		}
	}
	else
		alert("Square already filled");
}

function restart(){
	$(".game").each(function(){
		$(this).html("");
	});
	moves = 0;
	array = [];
	filled = ["", "", "", "", "", "", "", "", ""];
	con = 1;
}

$(document).ready(function(){
	console.log("here");
	$(".game").each(function(){
		$(this).click(function(){
			putXO($(this));
		});
	});
});