import { call, put, take } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions';
import axios from 'axios';
import types from "../actions/entries.actions";

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES)
    const result = yield call(axios, 'http://localhost:3001/entries');
    console.log(result);
    yield put({types: types.POPULATE_ENTRIES, payload: result.data});
} 
