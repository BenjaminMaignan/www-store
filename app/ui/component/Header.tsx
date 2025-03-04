import { OpenCartModalButton } from '@ui/cart/OpenCartModalButton';

export function Header() {
  return (
    <header>
      <nav className={'bg-black p-3'}>
        <div className={'flex justify-between'}>
          <div>
            <h1 className={'font-bold text-2xl text-white'}>E-commerce</h1>
          </div>
          <div className={'flex gap-4'}>
            <OpenCartModalButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
