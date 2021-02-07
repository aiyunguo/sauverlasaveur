// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
import {generateQuery} from 'backend/logic.jsw';
import wixLocation from 'wix-location';
import {session} from 'wix-storage';

let ingredients = [];

$w.onReady(function () {
	
});

export async function generate_click(event) {

//record the user input in this list
	let selectedVals = $w("selectionTags1").value;
	for (var val in selectedVals) {
		if (val === undefined) {
			continue;
		} else {
			ingredients.push(val);
		}
	}
		/*
		console.log($w('#switch1').enabled);
		if ($w('#switch1').enabled) {
			session.setItem("", "on");
		} else {
			session.setItem("", "off");
		}*/

		wixLocation.to('/exercises');
	}
}