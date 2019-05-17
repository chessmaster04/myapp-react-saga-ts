import { all } from 'redux-saga/effects';
import newsSaga from './newsActions';

export default function* () {
    yield all([
        newsSaga()
    ]);
}
