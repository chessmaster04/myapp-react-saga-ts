import initialState from './initialState';
import injectReducer from './injectReducer';
import { GET_NEWS, PUT_NEWS_TO_STORE } from "../../types";
const handlers = {
    [PUT_NEWS_TO_STORE]: (state: any, { payload }: any) => ({
        ...state,
        ...payload
    }),
};

export default injectReducer(initialState.news, handlers);
