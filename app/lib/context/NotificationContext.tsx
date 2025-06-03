'use client';

import { Suspense, createContext, useContext, useMemo, useState } from 'react';

import { NotificationCart } from '@ui/component/NotificationCart';
import { NotificationContainer } from '@ui/component/NotificationContainer';

interface NotificationContextType {
  openNotification: (
    article: Article,
    articleItem: ArticleItem,
    type?: 'pending' | 'success' | 'error'
  ) => void;
  removeNotification: (id: string) => void;
}

interface NotificationType {
  id: string;
  article: Article;
  articleItem: ArticleItem;
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
    article: Article,
    articleItem: ArticleItem,
    type?: NotificationType['type']
  ) => {
    const id = 'DEFAULT_ID';
    setNotifications((prev) => [...prev, { id, article, articleItem, type }]);
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
            <Suspense fallback={<div>Loading...</div>}>
              <NotificationCart
                article={notification.article}
                articleItem={notification.articleItem}
                handleClose={() => removeNotification(notification.id)}
              />
            </Suspense>
          </NotificationContainer>
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
}
