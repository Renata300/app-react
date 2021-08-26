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

function* addEntry({id, description, value/*, date*/}) {
    yield console.log(id, description/*, date*/);
    axios.post('http://localhost:3001/entries', {
        id,
        description, 
        value,
        /*date*/
    });
}

function* addEntryDetails({id, isExpense, value/*, date*/}) {
    yield console.log(id, isExpense, value/*, date*/);
    axios.post('http://localhost:3001/values', {
        id,
        value,
        /*date,*/
        isExpense
    });
}
