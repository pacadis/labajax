<?php
	
	$token = $_GET['token'];

	if ($token == "computerTurn"){
		$array = $_GET['pos'];
		
		$array = explode(",", $array);

		$pos = rand(1, 9);
		while (in_array($pos, $array)){
			$pos = rand(1, 9);
		}
		echo $pos;
	}
	else{
		$result = "CONTINUE GAME";
		$filled = $_GET['filled'];
		$filled = explode(",", $filled);
		if ($filled[0] == $filled[1] && $filled[1] == $filled[2])
			if ($filled[0] == "X")
				$result = "HUMAN WINS";
			else if ($filled[0] == "O")
				$result = "COMPUTER WINS";

		if ($filled[3] == $filled[4] && $filled[4] == $filled[5])
			if ($filled[3] == "X")
				$result = "HUMAN WINS";
			else if ($filled[3] == "O")
				$result = "COMPUTER WINS";

		if ($filled[6] == $filled[7] && $filled[7] == $filled[8])
			if ($filled[6] == "X")
				$result = "HUMAN WINS";
			else if ($filled[6] == "O")
				$result = "COMPUTER WINS";

		if ($filled[0] == $filled[3] && $filled[3] == $filled[6])
			if ($filled[0] == "X")
				$result = "HUMAN WINS";
			else if ($filled[0] == "O")
				$result = "COMPUTER WINS";

		if ($filled[1] == $filled[4] && $filled[4] == $filled[7])
			if ($filled[1] == "X")
				$result = "HUMAN WINS";
			else if ($filled[1] == "O")
				$result = "COMPUTER WINS";

		if ($filled[2] == $filled[5] && $filled[5] == $filled[8])
			if ($filled[2] == "X")
				$result = "HUMAN WINS";
			else if ($filled[2] == "O")
				$result = "COMPUTER WINS";

		if ($filled[0] == $filled[4] && $filled[4] == $filled[8])
			if ($filled[0] == "X")
				$result = "HUMAN WINS";
			else if ($filled[0] == "O")
				$result = "COMPUTER WINS";

		if ($filled[2] == $filled[4] && $filled[4] == $filled[6])
			if ($filled[2] == "X")
				$result = "HUMAN WINS";
			else if ($filled[2] == "O")
				$result = "COMPUTER WINS";
			
		echo $result;
	}
?>