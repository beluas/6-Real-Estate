import React from "react";
import { connect } from "react-redux";
import "./initialForm.styles.scss";
import { result } from "../../redux/actions";

class InitialForm extends React.Component {
	state = {
		city: "Milan",
		status: "sale",
		type: "House",
		apts: [],
	};

	takeSelectOptionsFromJson = (apts) => {
		const cities = [];
		apts.forEach((apt) => {
			if (cities.indexOf(apt.city) === -1) {
				cities.push(apt.city);
			}
		});

		return cities;
	};

	handleSubmit = (e) => {
		e.preventDefault();

		return (apts) => {
			apts.forEach((apt) => {
				if (apt.city === this.state.city) {
					this.setState({ city: apt.city });
				}
				if (apt.status === this.state.status) {
					this.setState({ status: apt.status });
				}

				if (apt.apt_type === this.state.type) {
					this.setState({ type: apt.apt_type });
				}
			});

			const aptsToDisplay = apts.filter((apt) => {
				return (
					apt.city === this.state.city &&
					apt.status === this.state.status &&
					apt.apt_type === this.state.type
				);
			});
			this.props.result(aptsToDisplay);
			console.log(aptsToDisplay);
		};
	};

	handleSelectChange = (e) => {
		const id = e.nativeEvent.target.selectedIndex;

		this.setState({
			[e.target.name]: e.nativeEvent.target[id].value,
		});
	};

	render() {
		const { apts } = this.props;

		const cities = apts ? this.takeSelectOptionsFromJson(apts) : null;
		return (
			<div className="form-container">
				<form
					className="form"
					onSubmit={(e) => this.handleSubmit(e)(apts)}
				>
					<h2>Find your property</h2>
					<select name="city" onChange={this.handleSelectChange}>
						{cities
							? cities.map((city) => (
									<option key={city} value={city}>
										{city}
									</option>
							  ))
							: null}
					</select>
					<div className="fields">
						<select name="type" onChange={this.handleSelectChange}>
							<option value="House">House</option>
							<option value="Apartment">Apartment</option>
							<option value="Lot">Lot</option>
						</select>
						<select
							name="status"
							onChange={this.handleSelectChange}
						>
							<option value="sale">For sale</option>
							<option value="rent">For rent</option>
						</select>
					</div>

					<button type="submit">
						<a href="#featured">Search </a>
					</button>
				</form>
			</div>
		);
	}
}

const stateToProps = ({ apts }) => ({
	apts,
});

const dispatchToProps = {
	result,
};

export default connect(stateToProps, dispatchToProps)(InitialForm);
