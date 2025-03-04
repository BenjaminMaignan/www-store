import { DeleteCartItem } from '@ui/cart/DeleteCartItem';
import { QuantitySelector } from '@ui/cart/QuantitySelector';

interface Props {
  cartId: string;
  cartItem: CartItem;
}

export function CartItem({ cartId, cartItem }: Readonly<Props>) {
  const currencyFormatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <li className={'relative flex gap-4 border-b w-full'}>
      <div className={'aspect-square h-32'}>
        <img
          className={'w-full h-full object-cover'}
          src='https://assets.wordans.fr/files/model_specifications/2020/1/27/1052931/1052931_big.jpg?1733634037'
          alt='Sweat'
        />
      </div>
      <div className={'p-3 w-full'}>
        <h3 className={'font-semibold text-base mb-2'}>
          {cartItem.article.name}
        </h3>
        <p className={'font-medium text-base mb-2'}>
          {currencyFormatter.format(cartItem.article.price)}
        </p>
        <p className={'font-normal text-xs text-zinc-500 mb-2'}>
          Some description
        </p>
        <div className={'w-full flex justify-between'}>
          <QuantitySelector
            cartId={cartId}
            cartItemId={cartItem.id}
            articleId={cartItem.article.id}
            quantity={cartItem.quantity}
            availableQuantity={cartItem.article.availableStock}
          />
          <DeleteCartItem cartItemId={cartItem.id} />
        </div>
      </div>
    </li>
  );
}
