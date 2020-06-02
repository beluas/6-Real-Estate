export const fetchAll = (payload) => ({
	type: "FETCH_ALL",
	payload,
});

export const fetchStart = () => ({
	type: "FETCH_START",
});

export const initialFetch = (payload) => ({
	type: "FETCH_START",
	payload,
});

export const result = (payload) => ({
	type: "RESULT",
	payload,
});
