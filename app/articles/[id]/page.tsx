import { getArticle } from '@lib/actions/article';
import { getCart } from '@lib/actions/cart';
import { ArticleProvider } from '@lib/context/ArticleContext';
import { CartProvider } from '@lib/context/CartContext';
import { NotificationProvider } from '@lib/context/NotificationContext';

import { ArticleDetail } from '@/app/articles/[id]/ArticleDetail';
import { ArticleImages } from '@/app/articles/[id]/ArticleImages';

import { Comment } from '@ui/comments/Comment';
import { Breadcrumb } from '@ui/component/Breadcrumb';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArticlePage({ params }: Readonly<Props>) {
  const { id } = await params;
  const article: Article = await getArticle(id);
  const cart: Cart = await getCart('11111111-1111-4444-1111-111111111119');

  const breadcrumbs: Breadcrumb[] = [
    { label: "Page d'accueil", href: '/' },
    { label: 'Article', href: `/article/${id}`, active: true },
  ];

  return (
    <CartProvider cart={cart}>
      <NotificationProvider>
        <ArticleProvider article={article}>
          <div className={'max-w-[90rem] mx-auto p-4'}>
            <div className={'py-2 mb-4'}>
              <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>
            <div
              className={'grid grid-cols-[2fr,1fr] gap-4 p-4 mb-8 bg-zinc-100'}
            >
              <ArticleImages />
              <ArticleDetail />
            </div>
            <div>
              <h2 className={'font-bold text-4xl mb-4'}>Commentaires</h2>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
          </div>
        </ArticleProvider>
      </NotificationProvider>
    </CartProvider>
  );
}
