import { IconX } from '@tabler/icons-react';

interface Props {
  handleClose?: () => void;
}

export function NotificationCart({ handleClose }: Readonly<Props>) {
  return (
    <div className={'w-80 bg-white shadow-2xl border border-zinc-100'}>
      <div
        className={
          'bg-zinc-100 flex items-center justify-between pr-3 pl-6 py-4'
        }
      >
        <h2 className={'font-bold text-xl'}>Article ajouté au panier</h2>
        <button
          className={
            'aspect-square w-8 rounded flex items-center justify-center text-zinc-400 hover:text-zinc-800 hover:bg-zinc-200 transition ease-in'
          }
          onClick={() => {
            if (handleClose) {
              handleClose();
            }
          }}
        >
          <IconX className={'w-5 h-5'} />
        </button>
      </div>
      <div className={'p-4 border-t border-zinc-300'}>article</div>
      <div className={'p-4 border-t border-zinc-300'}>
        <div
          className={
            'mb-4 flex items-center justify-between text-zinc-800 font-bold'
          }
        >
          <p>2 Articles</p>
          <p>150,00€</p>
        </div>
        <button
          className={
            'w-full bg-black text-white uppercase text-lg font-semibold p-3'
          }
        >
          Afficher le panier
        </button>
      </div>
    </div>
  );
}
