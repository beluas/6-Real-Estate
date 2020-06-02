import React, { Component } from "react";
import { connect } from "react-redux";

class Slide extends Component {
	render() {
		return (
			<div>
				{this.props.slides
					? this.props.slides.slice(0, 20).map((slide, i) => (
							<div
								className={
									i === this.props.activeIndex
										? "active"
										: "inactive"
								}
								key={i}
							>
								<div
									className="slide-img"
									style={{
										backgroundImage: `url(${slide.images[0].image_medium})`,
									}}
								>
									<div className="desc">
										<h2>{slide.address}</h2>
										<h4>
											{slide.bedrooms} bedrooms, €
											{Math.floor(
												parseInt(
													slide.price.replace("€", "")
												) /
													100 /
													30
											)}
											\day
										</h4>
									</div>
								</div>
								<div
									className="slide-img"
									style={{
										backgroundImage: `url(${slide.images[0].image_medium})`,
									}}
								>
									<div className="desc">
										<h2>{slide.address}</h2>
										<h4>
											{slide.bedrooms} bedrooms, €
											{Math.floor(
												parseInt(
													slide.price.replace("€", "")
												) /
													100 /
													30
											)}
											\day
										</h4>
									</div>
								</div>
							</div>
					  ))
					: null}
			</div>
		);
	}
}

const stateToProps = ({ apts }) => ({
	slides: apts,
});

export default connect(stateToProps, null)(Slide);
