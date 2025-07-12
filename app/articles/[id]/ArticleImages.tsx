'use client';

import { useArticle } from '@lib/context/ArticleContext';

export function ArticleImages() {
  const { selectedArticleItem } = useArticle();

  const imageUrl =
    selectedArticleItem?.imageUrl ??
    'https://mrmockup.com/wp-content/uploads/2023/07/Free-T-Shirt-on-Men-Mockup-01.jpg';

  return (
    <div className={'flex gap-4'}>
      <div
        className={
          'w-full flex items-center justify-center [&>img]:mix-blend-darken'
        }
      >
        <img src={imageUrl} alt='ImageArticle' className={"max-w-[600px] w-full"} />
      </div>
    </div>
  );
}
