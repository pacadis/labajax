<?php

	$mysqli = mysqli_connect("localhost", "root", "", "labajax");

	$result = mysqli_query($mysqli, "SELECT Id from masini");

	$data = array();
	while ($row = mysqli_fetch_assoc($result)){
		$data[] = $row;
	}
	echo json_encode($data);
?>