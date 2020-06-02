import React from "react";
import { PureComponent } from "react";
import "./property.styles.scss";

class Property extends PureComponent {
	render() {
		const { apt } = this.props;
		const styles = {
			backgroundImage: `url(${apt.images[0].image_medium})`,
		};

		return (
			<div className="property-container">
				<div style={styles} className="property">
					<div className="desc">
						<h3>{apt.address}</h3>
						<h4>
							{apt.bedrooms} bedrooms, €
							{Math.floor(
								parseInt(apt.price.replace("€", "")) / 100 / 30
							)}
							\day
						</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default Property;
