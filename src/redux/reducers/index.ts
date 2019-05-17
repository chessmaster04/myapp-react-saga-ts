import newsReducer from './newsReducer';

export interface BaseAction {
    type: string;
    payload: any;
}

export type State = {
    news: any;
    router: any;
};


export default {
    news: newsReducer
};