import { createSelector } from "reselect";

//selector is a redux library that caches data and allows Redux to store the minimum possible state
//two types of selectors: inputSelector which does not require createSelector
//& outputSelctor, which does

//inputSelector
const selectCart = state => state.cart;

//outputSelector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
