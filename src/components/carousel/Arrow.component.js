import React from "react";

const Arrow = ({ direction, handleClick }) => {
	return (
		<div className={`${direction}-arrow`} onClick={handleClick}>
			{direction === "right" ? <h3>NEXT</h3> : null}
			<i
				className={`fa fa-angle-${direction} fa-3x`}
				aria-hidden="true"
			></i>
			{direction === "left" ? <h3>PREV</h3> : null}
		</div>
	);
};

export default Arrow;
