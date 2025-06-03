'use client';

import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import { NotificationCart } from '@ui/component/NotificationCart';
import { NotificationContainer } from '@ui/component/NotificationContainer';

interface NotificationContextType {
  openNotification: (
    content: ReactNode,
    type?: 'pending' | 'success' | 'error'
  ) => void;
  removeNotification: (id: string) => void;
}

interface NotificationType {
  id: string;
  content: ReactNode;
  type?: 'pending' | 'success' | 'error';
}

interface Props {
  children: React.ReactNode;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within an NotificationProvider'
    );
  }
  return context;
}

export function NotificationProvider({ children }: Readonly<Props>) {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const openNotification = (
    content: ReactNode,
    type?: NotificationType['type']
  ) => {
    const id = 'DEFAULT_ID';
    setNotifications((prev) => [...prev, { id, content, type }]);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const value = useMemo(() => ({ openNotification, removeNotification }), []);

  return (
    <NotificationContext.Provider value={value}>
      <div className={'absolute top-20 right-4 z-[100]'}>
        {notifications.map((notification) => (
          <NotificationContainer
            key={notification.id}
            id={notification.id}
            onClose={removeNotification}
          >
            <NotificationCart
              articleItem={{
                id: 'article-item-id',
                size: 'M',
                color: 'Red',
                availableStock: 10,
              }}
              article={{ id:'', name: 'Article Name', price: 19.99, articleItems: [] }}
              handleClose={() => removeNotification(notification.id)}
            />
          </NotificationContainer>
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
}
