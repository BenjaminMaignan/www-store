import { addArticle, getArticles } from '@lib/actions/article';

import { ArticleCard } from '@ui/articles/ArticleCard';

export default async function ArticlesPage() {
  const articles: Article[] = await getArticles();

  const submit = async (formData: FormData) => {
    'use server';
    const name = formData.get('name') as string;
    const price = formData.get('price') as string;
    await addArticle({ name, price } as Article);
  };

  return (
    <div>
      <h1>Articles</h1>
      <div className={'flex flex-wrap gap-8'}>
        {articles.map((article, index) => {
          return <ArticleCard key={index + 'articleCard'} article={article} />;
        })}
      </div>
      <form action={submit} className={'bg-zinc-50 p-8'}>
        <label htmlFor='name'>Name :</label>
        <input type='text' name='name' id='name' />
        <label htmlFor='price'>Price :</label>
        <input type='text' name='price' id='price' />
        <button>Submit</button>
      </form>
    </div>
  );
}
