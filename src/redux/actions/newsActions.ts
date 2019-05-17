import { all, take, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import { GET_NEWS, PUT_NEWS_TO_STORE } from "../../types";

// ///////////
// actions //
// ///////////

export const getNews = () => ({
    type: GET_NEWS,
});

// ///////////
// sagas ////
// ///////////

const getNewsSaga = function* () {
    while (true)
        try {
            yield take(GET_NEWS)
            // const result = yield axios.get('http://myserver/news');
            yield put({
                type: PUT_NEWS_TO_STORE,
                // payload: result.data,
                payload: {
                    news: [{
                        id: 1,
                        title: "News1"
                    }]
                },
            });
        } catch (error) {
            console.log("err");
        }
};

export default function* () {
    yield all([
        getNewsSaga(),
    ]);
}
