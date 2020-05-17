<?php
	$side = $_GET['side'];

	$mysqli = mysqli_connect("localhost", "cpir2468", "cpir2468", "cpir2468");

	if ($side == "left"){
		$result = mysqli_query($mysqli, "SELECT DISTINCT Plecare from statii");

		$data = array();
		while ($row = mysqli_fetch_assoc($result)) {
			$data[] = $row;
		}

		echo json_encode($data);
	}
	else {
		$sosire = $_GET['plecare'];
	
		$result = mysqli_query($mysqli, "SELECT Sosire from statii where Plecare = '" . $sosire . "'");

		$data = array();
		while ($row = mysqli_fetch_assoc($result)) {
			$data[] = $row;
		}

		echo json_encode($data);
	}
?>