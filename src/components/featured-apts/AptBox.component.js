import React from "react";
import "./FeaturedApts.styles.scss";

const AptBox = ({
	price,
	images,
	address,
	amenities,
	bedrooms,
	bathrooms,
	garage,
}) => {
	console.log(images);
	const styles = {
		backgroundImage: `url(${images[0].image_small})`,
	};
	return (
		<div className="aptBox-container">
			<div style={styles} className="featured-apt-box">
				<span className="price">
					{" "}
					{Math.floor(parseInt(price.replace("€", "")) / 100)}
					{" € Monthly"}
				</span>
			</div>
			<h4 className="ft-title">{address}</h4>
			<hr />
			<div className="amenities">
				<span>{amenities[0].sqmt} Sq Mt</span>
				<span>{bedrooms} Bedrooms</span>
				<span>{bathrooms} Bathrooms</span>
				<span>{garage} Garage</span>
			</div>
		</div>
	);
};

export default AptBox;
