import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    //this is the default if no state will be modified in the future
    switch(action.type) {
        default:
            return state;
    }
}

export default shopReducer;