const initialState = {};

export const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "FETCH_ALL":
			return {
				...state,
				apts: payload,
			};
		case "RESULT":
			return {
				...state,
				aptsToDisplay: payload,
			};
		default:
			return state;
	}
};
