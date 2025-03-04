import { getArticles } from '@lib/actions/article';

import { ArticleCard } from '@ui/articles/ArticleCard';
import { Breadcrumb } from '@ui/component/Breadcrumb';

export default async function Home() {
  const articles: Article[] = await getArticles();

  const breadcrumbs: Breadcrumb[] = [
    { label: "Page d'accueil", href: '/', active: true },
  ];

  return (
    <div className={'max-w-[90rem] mx-auto'}>
      <div className={'p-3'}>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <div>
          <h1 className={'font-bold text-4xl'}>Mode pour homme</h1>
          <p className={'text-xs'}>
            {articles.length} résultat{articles.length > 1 && 's'}
          </p>
        </div>
      </div>
      <div className={'p-3 grid grid-cols-[16rem_1fr] gap-6'}>
        <aside>
          <h2 className={'font-bold text-xl'}>Filtrer et trier</h2>
          <select
            name='sort'
            id='sort'
            className={'w-full p-2 bg-white border border-zinc-300'}
          >
            <option value=''>Plus récent</option>
            <option value=''>Prix croissant</option>
            <option value=''>Prix décroissant</option>
          </select>
        </aside>
        <main className={'grid sm:grid-cols-3 lg:grid-cols-4 gap-3'}>
          {articles.map((article, index) => {
            return (
              <ArticleCard key={index + 'articleCard'} article={article} />
            );
          })}
        </main>
      </div>
    </div>
  );
}
