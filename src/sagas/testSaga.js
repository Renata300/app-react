import { call, delay, fork, put, take, takeEvery } from "redux-saga/effects";

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
    yield fork(doNothing) // 'fork' ocorre em paralelo
    yield fork(doNothing) // 'fork' ocorre em paralelo
  }
}

export function* testSagaTakeEveryProccess({payload}) {
  console.log(`Start process for index ${payload}`);
  yield delay(3000);
  console.log(`Finish process for index ${payload}`);
}

export function* testSagaTakeEvery() {
  const {payload} = yield takeEvery('TEST_MESSAGE_3', testSagaTakeEveryProccess);
  console.log(`Finish TakeEvery for index ${payload}`);
}

export function* dispatchTest() {
  let index = 0;

  while(true) {
    yield delay(500);
    yield put({ type: 'TEST_MESSAGE_3', payload: index });
    index++;
  }
}
