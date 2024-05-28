//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SimpleCounter from "./component/SimpleCaunter";

//import your own components
let counter = 0;
setInterval(function() {
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++

	ReactDOM.render(
		<SimpleCounter
			digitFive={five % 10}
			digitFour={four % 10}
			digitThree={three % 10}
			digitTwo={two % 10}
			digitOne={one % 10}
		/>,
		document.querySelector("#app")
	);
}, 1000);