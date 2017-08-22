import { all, fork } from 'redux-saga/effects';

// import appSagas from './containers/App';

const sagas = [
  // appSagas,
  // NOTE: put other App sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
