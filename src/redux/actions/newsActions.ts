import { all, take, put, takeLatest, fork, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import { FETCH_NEWSR_REQUEST_START, FETCH_NEWSR_REQUEST_COMPLETED } from "../types";
import { NewsEntity } from "../../model";
import { newsAPI } from "../../api/news";

// ///////////
// actions //
// ///////////

export const getNews = () => ({
    type: FETCH_NEWSR_REQUEST_START,
});

const getNewsCompleted = (news: NewsEntity[]) => ({
    type: FETCH_NEWSR_REQUEST_COMPLETED,
    payload: {
        news
    },
})

// ///////////
// sagas ////
// ///////////

const getNewsSaga = function* () {
    let news: Array<NewsEntity>;
    try {
        news = yield call(newsAPI.fetchNewsAsync);
    } catch (error) {
        console.log(process.env)
        // if (process.env.USE_MOCK_DATA === 1)
        news = yield call(newsAPI.fetchNewsMock);
        // else
        // throw new Error();
    }
    yield put(getNewsCompleted(news));
};

export const getNewsSagaWatcher = function* () {
    try {
        yield takeLatest(FETCH_NEWSR_REQUEST_START, getNewsSaga);
    } catch (error) {
        console.log("err");
    }
    // takeLatest = while(true) + take + fork + cancel
    // takeEvery = while(true) + take + fork
    // the same:
    // while (true)
    //     try {
    //         yield take(FETCH_NEWSR_REQUEST_START);
    //         yield fork(getNewsSaga)
    //     } catch (error) {
    //         console.log("err");
    //     }
};

