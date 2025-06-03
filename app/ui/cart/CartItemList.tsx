import { CartItem } from '@ui/cart/CartItem';

interface Props {
  cart: Cart;
}

export async function CartItemList({ cart }: Readonly<Props>) {
  return (
    <ul>
      {cart.cartItems.length > 0 ? (
        cart.cartItems.map((item) => (
          <CartItem
            key={'cart_' + item.id + '_' + item.quantity}
            cartId={cart.id}
            cartItem={item}
          />
        ))
      ) : (
        <p>Votre panier est vide.</p>
      )}
    </ul>
  );
}
