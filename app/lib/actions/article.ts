'use server';

import { revalidateTag } from 'next/cache';

export async function getArticles(sort: string): Promise<ArticleLight[]> {
  const params = new URLSearchParams();

  params.set('sort', sort);

  const queryString = params.toString();

  const url = `http://localhost:8080/api/articles${queryString ? `?${queryString}` : ''}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['articles'], revalidate: 60 },
  }).then((res) => res.json());
}

export async function getArticle(id: string): Promise<Article> {
  return fetch(`http://localhost:8080/api/articles/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
}

export async function addArticle(article: Article) {
  return fetch('http://localhost:8080/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  })
    .then(() => revalidateTag('articles'))
    .catch((error) => console.error('Error:', error));
}
