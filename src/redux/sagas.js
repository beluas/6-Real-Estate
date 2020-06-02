import { takeLatest, put, take } from "redux-saga/effects";

export function* fetchAptSaga() {
<<<<<<< HEAD
	const data = yield fetch(
		"https://beluas.github.io/6-Real-Estate/real_estate.json"
	);
=======
	const data = yield fetch("https://beluas.github.io/6-Real-Estate/real_estate.json");
>>>>>>> 6a1e5b9a4275a57f88167143e722cbe469b70f74
	const apts = yield data.json();

	yield put({ type: "FETCH_ALL", payload: apts });
}

export function* fetchSaga() {
	yield takeLatest("FETCH_START", fetchAptSaga);
	yield take("FIRST_FETCH", fetchAptSaga);
}
