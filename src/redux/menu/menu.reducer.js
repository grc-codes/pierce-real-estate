import { MenuActionTypes } from './menu.types';

const INITIAL_STATE = {
    mobileMenuHidden: true
};

const menuReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case MenuActionTypes.TOGGLE_MOBILE_MENU_ICON:
            return {
                ...state,
                mobileMenuHidden: !state.mobileMenuHidden
            };
        default:
            return state;
    };
};

export default menuReducer;