import React from "react";
import { connect } from "react-redux";
import { fetchStart, initialFetch } from "./redux/actions";

import Header from "./components/header/Header.component";
import InfoBoxSec from "./components/info-box-section/InfoBoxSec.component";
import FeaturedApts from "./components/featured-apts/FeaturedApts.component";

function App(props) {
	props.initialFetch();
	return (
		<div className="App">
			<div className="container-flex-2">
				<Header />
				<InfoBoxSec />
				<FeaturedApts />
			</div>
		</div>
	);
}

const dispatchToProps = {
	fetchStart,
	initialFetch,
};

export default connect(null, dispatchToProps)(App);
