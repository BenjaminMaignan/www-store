'use client';

import { clsx } from 'clsx';
import {
  Attributes,
  ReactElement,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from 'react';

interface Props {
  id: string;
  onClose: (id: string) => void;
  children: ReactElement;
}

export function NotificationContainer({
  id,
  onClose,
  children,
}: Readonly<Props>) {
  const [state, setState] = useState<'isCreated' | 'isOpen' | 'isClosed'>(
    'isCreated'
  );

  useEffect(() => {
    setTimeout(() => {
      setState('isOpen');
    }, 100);

    setTimeout(() => {
      handleClose();
    }, 3000);
  }, []);

  const handleClose = () => {
    setState('isClosed');
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  // @ts-ignore
  return (
    <div
      id={id}
      className={clsx('transition ease-in-out transform duration-300', {
        'translate-x-0 opacity-100': state == 'isOpen',
        'translate-x-80 opacity-0 scale-0':
          state == 'isCreated' || state === 'isClosed',
      })}
    >
      {isValidElement(children)
        ? cloneElement(children, { handleClose } as Attributes)
        : children}
    </div>
  );
}
