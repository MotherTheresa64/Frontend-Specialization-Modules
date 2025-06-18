import type { RootState } from '../../app/store';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);

export const selectCartCount = (state: RootState) => state.cart.items.length;
