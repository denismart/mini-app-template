import * as types from './actionTypes';

export const vkSetAccessToken = (accessToken) => ({
    type: types.VK_SET_ACCESS_TOKEN,
    accessToken,
});
