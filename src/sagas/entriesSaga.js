import { call, fork, put, take } from "redux-saga/effects";
import entriesTypes, { populateEntries, populateEntriesDetails } from "../actions/entries.actions";
import axios from "axios";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const {data} = yield call(axios, "http://localhost:3001/entries");
  yield put(populateEntries(data));
}

export function* getEntryDetails(id) {
  const {data} = yield call(axios, `http://localhost:3001/values/${id}`);
  console.log(data);
  yield put(populateEntriesDetails(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);

  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    // entry.id = entry.length();
    yield fork(getEntryDetails, entry.id)
  }
}
