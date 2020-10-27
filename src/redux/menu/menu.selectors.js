import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

export const selectMobileMenuHidden = createSelector(
    [selectMenu],
    (menu) => menu.mobileMenuHidden
);