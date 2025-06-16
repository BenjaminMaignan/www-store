import { getArticles } from '@lib/actions/article';

import { ArticleCard } from '@ui/articles/ArticleCard';
import { Breadcrumb } from '@ui/component/Breadcrumb';
import { SortingSelector } from '@ui/component/SortingSelector';

export default async function Home({
  searchParams,
}: Readonly<{
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}>) {
  const { sort = 'price_asc' } = await searchParams;
  const articles: ArticleLight[] = await getArticles(sort as string);
  const breadcrumbs: Breadcrumb[] = [
    { label: "Page d'accueil", href: '/', active: true },
  ];

  return (
    <div className={'max-w-[90rem] mx-auto p-4'}>
      <div className={'py-2 mb-4'}>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <div>
          <h1 className={'font-bold text-4xl'}>Mode pour homme</h1>
          <p className={'text-xs'}>
            {articles.length} résultat{articles.length > 1 && 's'}
          </p>
        </div>
      </div>
      <div className={'grid grid-cols-[16rem_1fr] gap-6'}>
        <aside>
          <h2 className={'font-bold text-xl mb-2'}>Filtrer et trier</h2>
          <SortingSelector />
        </aside>
        <main className={'grid sm:grid-cols-3 lg:grid-cols-4 gap-3'}>
          {articles.map((article, index) => (
            <ArticleCard key={index + 'articleCard'} article={article} />
          ))}
        </main>
      </div>
    </div>
  );
}
