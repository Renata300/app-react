import { call, cancel, cancelled, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";

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

export function* infinitySaga() {
  console.log('Start infinity saga');
  let index = 0;

  while(true) {
    index++;
    try {
      console.log(`Inside infinity loop ${index}`);
      yield delay(1000);
    } 
    catch (error){
      console.error('An error has occured: ', error);
    } 
    finally {
      console.log('The fork was cancelled? ', yield cancelled());
    }

  }
}

export function* testSagaCancelled() {
  yield take('TEST_MESSAGE_4');
  const handleCancel = yield fork(infinitySaga);
  yield delay(3000);
  yield cancel(handleCancel);
}

export function* testSagaTakeLatest() {
  yield takeLatest('TEST_MESSAGE_5', infinitySaga);
}

export function* dispatchTest() {
  let index = 0;
  //yield put({ type: 'TEST_MESSAGE_5', payload: index });

  while(true) {
    yield delay(5000);
    yield put({ type: 'TEST_MESSAGE_5', payload: index });
    index++;
  }
}
