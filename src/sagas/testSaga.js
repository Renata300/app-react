import { call, delay, fork, put, take } from "redux-saga/effects";

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

function* doNothing() {
  console.log('I have been called');
  yield delay(1000);
  console.log('I am doing nothing');
}

export function* testFork() {
  while(true) {
    yield take('TEST_MESSAGE_2');
    yield fork(doNothing) // 'fork' ocorre em paralelo
    yield call(doNothing) // 'call' espera pelo resultado
   
  }
}

export function* dispatchTest() {
  while(true) {
    yield delay(5000);
    yield put({ type: 'TEST_MESSAGE_2', payload: 1000 })
  }
}
