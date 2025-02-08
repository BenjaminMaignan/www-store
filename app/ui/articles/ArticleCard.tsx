export function ArticleCard({ article }: Readonly<{ article: Article }>) {
  return (
    <div className={'w-40 h-40 shadow grid grid-rows-5'}>
      <section className={'row-span-4'}>
        <img
          className={'w-full h-full object-cover'}
          src='https://assets.wordans.fr/files/model_specifications/2020/1/27/1052931/1052931_big.jpg?1733634037'
          alt='Sweat'
        />
      </section>
      <section className={'grid grid-flow-col grid-cols-3'}>
        <h1 className={'col-span-2'}>{article.name}</h1>
        <p className={'text-end'}>{article.price}€</p>
      </section>
    </div>
  );
}
