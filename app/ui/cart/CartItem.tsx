import { DeleteCartItem } from '@ui/cart/DeleteCartItem';
import { QuantitySelector } from '@ui/cart/QuantitySelector';
import { CurrencyFormatter } from '@ui/component/CurrencyFormatter';

interface Props {
  cartId: string;
  cartItem: CartItem;
}

export function CartItem({ cartId, cartItem }: Readonly<Props>) {
  return (
    <li className={'relative flex gap-4 border-b w-full'}>
      <div className={'aspect-square h-32 my-auto'}>
        <img
          className={'w-full h-full object-cover'}
          src='https://mrmockup.com/wp-content/uploads/2023/07/Free-T-Shirt-on-Men-Mockup-01.jpg'
          alt='Sweat'
        />
      </div>
      <div className={'p-3 w-full'}>
        <div className={'w-full flex justify-between items-start'}>
          <h3 className={'font-semibold mb-2'}>
            {cartItem.articleItem.name}
          </h3>
          <DeleteCartItem cartItemId={cartItem.id} />
        </div>
        <p className={'text-xs text-zinc-500 mb-2'}>
          Couleur : <span className={'font-bold text-zinc-700'}>{cartItem.articleItem.color}</span>
        </p>
        <p className={'text-xs text-zinc-500 mb-2'}>
          Taille : <span className={'font-bold text-zinc-700'}>{cartItem.articleItem.size}</span>
        </p>
        <div className={'w-full flex justify-between items-end'}>
          <QuantitySelector
            cartId={cartId}
            cartItemId={cartItem.id}
            articleItemId={cartItem.articleItem.id}
            quantity={cartItem.quantity}
            availableQuantity={cartItem.articleItem.availableStock}
          />
          <CurrencyFormatter
            className={'font-medium mb-2'}
            value={cartItem.articleItem.price}
          />
        </div>
      </div>
    </li>
  );
}
