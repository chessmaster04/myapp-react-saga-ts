import { State } from './index';

export default (initialState: any, handlers: any) => (
    state = initialState,
    action: any = {}
) => {
    if (action.hasOwnProperty('type')) {
        if (handlers[action.type]) {
            return handlers[action.type](state, action);
        }
        return state;
    }
    return state;
};
