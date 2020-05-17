<?php
	
	$id = $_GET['index'];

	$mysqli = mysqli_connect("localhost", "root", "", "labajax");

	$result = mysqli_query($mysqli, "SELECT Marca, Model, Kilometrii from masini where Id = " . $id);
	$data = mysqli_fetch_assoc($result);
	
	echo json_encode($data);	
?>