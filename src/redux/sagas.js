import { takeLatest, put, take } from "redux-saga/effects";

export function* fetchAptSaga() {
	const data = yield fetch("/real_estate.json");
	const apts = yield data.json();

	yield put({ type: "FETCH_ALL", payload: apts });
}

export function* fetchSaga() {
	yield takeLatest("FETCH_START", fetchAptSaga);
	yield take("FIRST_FETCH", fetchAptSaga);
}
