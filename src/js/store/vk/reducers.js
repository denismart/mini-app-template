import * as types from './actionTypes';

const initialState = {
    accessToken: null,
};

export const vk = (state = initialState, action) => {
    switch (action.type) {
        case types.VK_SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.accessToken,
            };

        default:
            return state;
    }
};
