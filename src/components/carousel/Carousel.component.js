import React from "react";
import Slide from "./Slide.component";
import Arrow from "./Arrow.component";
import "./carousel.styles.scss";

class Carousel extends React.Component {
	state = {
		activeIndex: 0,
		length: 20,
		slides: [],
	};

	componentDidMount() {
		this.setState({ slides: this.props.apts }, () =>
			console.log(this.state)
		);
	}

	prevSlide = () => {
		let index = this.state.activeIndex;
		let length = this.state.length;

		if (index < 1) {
			index = length - 1;
		} else {
			index--;
		}

		this.setState({ activeIndex: index });
	};

	nextSlide = () => {
		let index = this.state.activeIndex;
		let length = this.state.length;

		if (index === length - 1) {
			index = 0;
		} else {
			index++;
		}

		this.setState({ activeIndex: index });
	};

	render() {
		return (
			<div className="slider">
				<div className="slider-items">
					<div className="slider-text">
						<Slide activeIndex={this.state.activeIndex} />
						<div className="arrows">
							<h3>Recent Properties</h3>
							<Arrow
								direction="left"
								handleClick={this.prevSlide}
							/>

							<Arrow
								direction="right"
								handleClick={this.nextSlide}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Carousel;
