import { fork, all } from 'redux-saga/effects';
import { getNewsSagaWatcher } from './newsActions';

export default function* () {
    yield all([
        fork(getNewsSagaWatcher)
    ]);
}
