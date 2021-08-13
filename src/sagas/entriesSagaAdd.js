import axios from "axios";
import { call, put, take, takeLatest } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions';

export function* addEntrySaga() {
    yield takeLatest(entriesTypes.ADD_ENTRY, addEntrie);
}

function* addEntrie(payload) {
    yield console.log(payload);
    yield call(addEntry, payload);
    yield call(addEntryDetails, payload);
}

function* addEntry({id, description}) {
    yield console.log(id, description);
}

function* addEntryDetails({id, isExpense, value}) {
    yield console.log(id, isExpense, value);
}
