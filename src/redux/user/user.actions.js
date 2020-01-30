export const setCurrentUser = user => ({
    //type matches value set in userReducer case
    type: 'SET_CURRENT_USER',
    payload: user
})