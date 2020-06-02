import React from "react";
import { connect } from "react-redux";
import AptBox from "./AptBox.component";
import "./FeaturedApts.styles.scss";

const FeaturedApts = ({ apts, aptsToDisplay }) => {
	const itemsInitial = apts
		? apts.slice(0, 6).map((apt) => <AptBox key={apt.id} {...apt} />)
		: null;

	const itemsResult = aptsToDisplay
		? aptsToDisplay.map((aptToDisplay) => (
				<AptBox key={aptToDisplay.id} {...aptToDisplay} />
		  ))
		: null;

	return (
		<div className="ft-section">
			<h2 id="featured">Featured Properties</h2>
			<div className="ft-section-container">
				{itemsResult ? itemsResult : itemsInitial}
			</div>
			<a href="#home">View All properties</a>
		</div>
	);
};

const stateToProps = ({ apts, aptsToDisplay }) => ({
	apts,
	aptsToDisplay,
});

export default connect(stateToProps, null)(FeaturedApts);

// apts
