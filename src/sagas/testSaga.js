import { call, delay, put, take } from "redux-saga/effects";

function double(number) {
  return number*2;
}

// essa function possui um '*' pois pode retornar multiplos valores
export function* testSaga() {
  while (true) {
    console.log('Start Saga Function');
    const state = yield take('TEST_MESSAGE');
    const a = yield call(double, 2);
    console.log('a: ', a);
    const b = yield double(3);
    console.log('b: ', b)
    console.log('Finish Saga Function', state);
  }
}

export function* dispatchTest() {
  while(true) {
    yield delay(1000);
    yield put({ type: 'TEST_MESSAGE', payload: 1000 })
  }
}
