import { deleteCartItem, updateCartItem } from '@lib/actions/cartitem';

export function useCart() {
  const updateItemInCart = async (
    cartId: string,
    cartItemId: string,
    articleItemId: string,
    quantity: number
  ) => {
    await updateCartItem({
      id: cartItemId,
      cartId: cartId,
      articleItemId: articleItemId,
      quantity: quantity,
    });
  };

  const removeItemFromCart = async (cartItemId: string) => {
    await deleteCartItem(cartItemId);
  };

  return {
    updateItemInCart,
    removeItemFromCart,
  };
}
