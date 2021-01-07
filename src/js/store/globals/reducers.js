import * as types from './actionTypes';

const initialState = {
    isPanelAnimation: false,
};

export const globals = (state = initialState, action) => {
    switch (action.type) {
        case types.GLOBALS_SET_IS_PANEL_ANIMATION:
            return {
                ...state,
                isPanelAnimation: true,
            };

        default:
            return state;
    }
};
