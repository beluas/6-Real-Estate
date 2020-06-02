import { takeLatest, put, take } from "redux-saga/effects";

export function* fetchAptSaga() {
	const data = yield fetch("https://beluas.github.io/6-Real-Estate/real_estate.json");
	const apts = yield data.json();

	yield put({ type: "FETCH_ALL", payload: apts });
}

export function* fetchSaga() {
	yield takeLatest("FETCH_START", fetchAptSaga);
	yield take("FIRST_FETCH", fetchAptSaga);
}
