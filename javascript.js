
// Apply Style to Box Based on Button Click
var oBox = document.getElementById("box");

function ApplyStyle(oButton) {
	Alerts("enter ApplyStlye");

	switch(oButton) {
		//big
		case "button1":
			Alerts("inside " + oButton);
			oBox.style.height = "300px";
			oBox.style.width = "300px";
			break;

		//blue
		case "button2":
			Alerts("inside " + oButton);
			oBox.style.backgroundColor = "blue" ;
			break;
		
		//fade
		case "button3":
			Alerts("inside " + oButton);
			oBox.style.opacity = "0.3";
			break;

		//Reset
		case "button4":
			Alerts("inside " + oButton);
			oBox.style.opacity = "1.0";
			oBox.style.height = "150px";
			oBox.style.width = "150px" ;
			oBox.style.backgroundColor = "orange" ;
			oBox.style.margin = "25px";
			break;
		
		default:
			break;
	}

	function Alerts(myString){
		//alert(myString);
	}
}