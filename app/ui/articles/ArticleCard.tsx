import Link from 'next/link';

import { ArticleRate } from '@ui/articles/ArticleRate';
import { CurrencyFormatter } from '@ui/component/CurrencyFormatter';

export function ArticleCard({ article }: Readonly<{ article: ArticleLight }>) {
  return (
    <Link
      href={`articles/${article.id}`}
      className={' bg-zinc-50 border flex flex-col gap-4'}
    >
      <section className={'bg-white'}>
        <img
          className={'w-full aspect-square object-cover'}
          src='https://mrmockup.com/wp-content/uploads/2023/07/Free-T-Shirt-on-Men-Mockup-01.jpg'
          alt='Sweat'
        />
      </section>
      <section className={'flex flex-col gap-2 px-4 pb-4'}>
        <h3 className={'font-semibold text-base'}>{article.name}</h3>
        <ArticleRate averageRate={30} />
        <CurrencyFormatter
          className={'font-semibold text-base'}
          value={article.price}
        />
      </section>
    </Link>
  );
}
