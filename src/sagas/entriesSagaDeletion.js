import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions';

export function* deleteEntrySaga() {
    while(true) {
        const {payload} = yield take(entriesTypes.REMOVE_ENTRY);
        yield call(deleteEntrie, payload.id);
        yield put({type: 'REMOVE_ENTRY_RESULT', payload: {id: payload.id}})
    }
}

function deleteEntrie(id) {
    axios.delete(`http://localhost:3001/entries/${id}`);
    axios.delete(`http://localhost:3001/values/${id}`);
    new Promise((s) => setTimeout(s, 3000));
}
