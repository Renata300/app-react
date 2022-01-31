import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions';

export function* addEntrySaga() {
    yield takeLatest(entriesTypes.ADD_ENTRY, addEntrie);
}

function* addEntrie({payload}) {
    yield call(addEntry, payload);
    yield call(addEntryDetails, payload);
    yield put({type: entriesTypes.ADD_ENTRY_RESULT, payload})
}

function* addEntry({id, description, value}) {
    yield console.log(id, description);
    axios.post('http://localhost:3001/entries', {
        id,
        description, 
        value
    });
    new Promise((s) => setTimeout(s,3000));
}

function* addEntryDetails({id, isExpense, value}) {
    yield console.log(id, isExpense, value);
    axios.post('http://localhost:3001/values', {
        id,
        value,
        isExpense
    });
    new Promise((s) => setTimeout(s,3000));
}
