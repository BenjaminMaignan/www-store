import { AddToCart } from '@ui/articles/AddToCart';
import { ArticleRate } from '@ui/articles/ArticleRate';

export function ArticleCard({ article }: Readonly<{ article: Article }>) {
  const currencyFormatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <div className={' bg-zinc-50 border flex flex-col gap-4'}>
      <section className={'bg-white'}>
        <img
          className={'w-full aspect-square object-cover'}
          src='https://assets.wordans.fr/files/model_specifications/2020/1/27/1052931/1052931_big.jpg?1733634037'
          alt='Sweat'
        />
      </section>
      <section className={'flex flex-col gap-2 px-4'}>
        <h3 className={'font-semibold text-base'}>{article.name}</h3>
        <ArticleRate averageRate={30} />
        <p className={'font-semibold text-base'}>
          {currencyFormatter.format(article.price)}
        </p>
      </section>
      <section className={'px-4 pb-4'}>
        <AddToCart articleId={article.id} />
      </section>
    </div>
  );
}
