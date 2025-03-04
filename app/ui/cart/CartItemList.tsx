import { getCart } from '@lib/actions/cart';

import { CartItem } from '@ui/cart/CartItem';

export async function CartItemList() {
  const cart: Cart = await getCart('11111111-1111-4444-1111-111111111119');

  return (
    <ul>
      {cart.cartItems.length > 0 ? (
        cart.cartItems.map((item) => {
          return (
            <CartItem
              key={'cart_' + item.id + '_' + item.quantity}
              cartId={cart.id}
              cartItem={item}
            />
          );
        })
      ) : (
        <p>Votre panier est vide.</p>
      )}
    </ul>
  );
}
