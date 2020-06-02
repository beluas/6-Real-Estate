import React from "react";
import "./infoBoxSec.styles.scss";

const Box = ({ title, text, icon }) => {
	return (
		<div className="box">
			<div className="radius-icon">
				<i className={icon}></i>
			</div>

			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default Box;
