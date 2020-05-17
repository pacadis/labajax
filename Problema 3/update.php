<?php
	
	$id = $_GET['id'];
	$marca = $_GET['marca'];
	$model = $_GET['model'];
	$km = $_GET['km'];

	$mysqli = mysqli_connect("localhost", "root", "", "labajax");

	$sql  "UPDATE masini SET Marca = '" . $marca . "', Model = '" . $model . "', Kilometrii = " . $km . " WHERE Id = " . $id;
	$result = $mysqli->query($sql);
?>