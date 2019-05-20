import { all, take, put, takeLatest, fork, call, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import { FETCH_NEWS_REQUEST_START, FETCH_NEWS_REQUEST_COMPLETED, DEL_NEWS_REQUEST_START, DEL_NEWS_REQUEST_COMPLETED } from "../types";
import { NewsEntity, NewsEntities } from "../../model";
import { newsAPI } from "../../api/news";

// ///////////
// actions //
// ///////////

export const getNews = () => ({
    type: FETCH_NEWS_REQUEST_START,
});

export const delNewsItem = (id: number) => ({
    type: DEL_NEWS_REQUEST_START,
    payload: {
        news_id: id
    }
});

const getNewsCompleted = (news: NewsEntities) => ({
    type: FETCH_NEWS_REQUEST_COMPLETED,
    payload: {
        news
    },
})

const delNewsCompleted = (deletedNewsItem: NewsEntity | null, news: NewsEntities, news_id: null) => ({
    type: FETCH_NEWS_REQUEST_COMPLETED,
    payload: {
        deletedNewsItem,
        news,
        news_id
    },
})

// ///////////
// sagas ////
// ///////////

const getNewsSaga = function* () {
    let news: NewsEntities = null;
    try {
        news = yield call(newsAPI.fetchNewsAsync);
    } catch (error) {
        const { REACT_APP_USE_MOCK } = process.env;
        if (REACT_APP_USE_MOCK === "1")
            news = yield call(newsAPI.fetchNewsMock);
        else
            throw new Error();
    } finally {
        yield put(getNewsCompleted(news));
    }
};

const delNewsSaga = function* () {
    let newsItem: NewsEntity | null = null;
    const state = yield select();
    try {
        newsItem = yield call(newsAPI.delNewsAsync.bind(null, state.news.news_id));
    } catch (error) {
        const { REACT_APP_USE_MOCK } = process.env;
        if (REACT_APP_USE_MOCK === "1")
            newsItem = yield call(newsAPI.delNewsMock);
        else
            throw new Error();
    } finally {
        yield put(delNewsCompleted(newsItem, state.news.news.filter((item: NewsEntity) => item.id !== state.news.news_id), null));
    }
};

export const getNewsSagaWatcher = function* () {
    try {
        yield takeLatest(FETCH_NEWS_REQUEST_START, getNewsSaga);
        yield takeLatest(DEL_NEWS_REQUEST_START, delNewsSaga);
    } catch (error) {
        console.log("err");
    }
    // takeLatest = while(true) + take + fork + cancel
    // takeEvery = while(true) + take + fork
    // the same:
    // while (true)
    //     try {
    //         yield take(FETCH_NEWS_REQUEST_START);
    //         yield fork(getNewsSaga)
    //     } catch (error) {
    //         console.log("err");
    //     }
};

