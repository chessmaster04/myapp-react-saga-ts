import initialState from './initialState';
import injectReducer from './injectReducer';
import { FETCH_NEWSR_REQUEST_START, FETCH_NEWSR_REQUEST_COMPLETED } from "../types";
const handlers = {
    [FETCH_NEWSR_REQUEST_COMPLETED]: (state: any, { payload }: any) => ({
        ...state,
        ...payload
    }),
};

export default injectReducer(initialState.news, handlers);
