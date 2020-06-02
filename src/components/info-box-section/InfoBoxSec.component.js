import React from "react";
import "./infoBoxSec.styles.scss";
import Box from "./Box.component";

const InfoBoxSec = () => {
	return (
		<div className="box-container">
			<Box
				title="Various Locations"
				text=" Lorem ipsr sit amet consectetur adipisicing elit. Esse di"
				icon="fas fa-map-marker-alt"
			/>

			<Box
				title="No Commissions"
				text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. "
				icon="fas fa-coins"
			/>

			<Box
				title="View Apartments"
				text=" Esse dicta provident dolore ad cupiditate maiores consectetur."
				icon="fas fa-search"
			/>
		</div>
	);
};

export default InfoBoxSec;
