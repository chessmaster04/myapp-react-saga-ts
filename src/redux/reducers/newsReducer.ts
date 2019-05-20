import initialState from './initialState';
import injectReducer from './injectReducer';
import { FETCH_NEWS_REQUEST_START, FETCH_NEWS_REQUEST_COMPLETED, DEL_NEWS_REQUEST_START, DEL_NEWS_REQUEST_COMPLETED } from "../types";
const handlers = {
    [FETCH_NEWS_REQUEST_COMPLETED]: (state: any, { payload }: any) => ({
        ...state,
        ...payload
    }),
    [DEL_NEWS_REQUEST_START]: (state: any, { payload }: any) => ({
        ...state,
        ...payload
    }),
    [DEL_NEWS_REQUEST_COMPLETED]: (state: any, { payload }: any) => ({
        ...state,
        ...payload
    }),
};

export default injectReducer(initialState.news, handlers);
