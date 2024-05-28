import React from "react";

const SimpleCounter = ({digitFive, digitFour ,digitThree ,digitTwo ,digitOne}) => {
	return (
		<div className="container">
			<div className="row justify-content-around mt-5">
				<div className="col-2 cuadro h2 text-center">
					<i className="fas fa-clock"></i>
				</div>
				<div className="col-2 cuadro h2 text-center">
					{digitFive}
				</div>
				<div className="col-2 cuadro h2 text-center">
					{digitFour}
				</div>
				<div className="col-2 cuadro h2 text-center">
					{digitThree}
				</div>
				<div className="col-2 cuadro h2 text-center">
					{digitTwo}
				</div>
				<div className="col-2 cuadro h2 text-center">
					{digitOne}
				</div>
			</div>
		</div>
	);
}

export default SimpleCounter


