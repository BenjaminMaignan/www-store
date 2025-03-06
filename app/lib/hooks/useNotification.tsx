import { ReactNode, useState } from 'react';

import { NotificationCart } from '@ui/component/NotificationCart';
import { NotificationContainer } from '@ui/component/NotificationContainer';

interface NotificationType {
  id: string;
  content: ReactNode;
  type?: 'pending' | 'success' | 'error';
}

export function useNotification() {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const openNotification = () => {
    setNotifications((prev) => [...prev, { id: '1', content: 'test' }]);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const contextHolder: ReactNode = (
    <div className={'absolute top-20 right-4 z-[100]'}>
      {notifications.map((notification) => (
        <NotificationContainer
          key={notification.id}
          id={notification.id}
          onClose={removeNotification}
        >
          <NotificationCart />
        </NotificationContainer>
      ))}
    </div>
  );

  return {
    openNotification,
    removeNotification,
    contextHolder,
  };
}
