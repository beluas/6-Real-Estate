import React from "react";
import InitialForm from "../initial-form/InitialForm.component";
//import Property from "../property/Property.component";
import { connect } from "react-redux";
import "./header.styles.scss";
import Carousel from "../carousel/Carousel.component";

class Header extends React.Component {
	render() {
		//const { apts } = this.props;

		return (
			<div className="header">
				<InitialForm />
				{/* {apts ? <Property apt={apts[0]} /> : "wait..."} */}
				<Carousel />
			</div>
		);
	}
}

const stateToProps = ({ apts }) => ({
	apts,
});

export default connect(stateToProps, null)(Header);
