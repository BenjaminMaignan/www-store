'use client';

import { clsx } from 'clsx';
import { useState } from 'react';

const images = [
  <img
    src='https://assets.wordans.fr/files/model_specifications/2020/1/27/1052931/1052931_big.jpg?1733634037'
    alt='Sweat'
  />,
  <img
    src='https://www.copinew.com/418362-large_default/sweat-a-capuche-basic-hoody.jpg'
    alt='Sweat'
  />,
  <img
    src='https://juvia-b2c-cloud-production.imgix.net/product/202111/d/juvia-sweat-a-capuche-oversize-790-rear-df2b6a1450.jpg?auto=format&bg=%23f2f1f0&w=2000'
    alt='Sweat'
  />,
  <img
    src='https://www.vibs.com/on/demandware.static/-/Sites-Cache_cache_master/default/dw328af03e/sweat-a-capuche-vert-femme-vue3-36125396630964779.jpg'
    alt='Sweat'
  />,
];

export function ArticleImages() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={'flex gap-4'}>
      <div className={'flex flex-col gap-4'}>
        {images.map((image, index) => (
          <button
            key={'image_article_' + index}
            className={clsx(
              'w-16 h-16 bg-white shadow flex items-center justify-center',
              'transform transition duration-100 active:scale-95'
            )}
            onClick={() => setSelectedImage(index)}
          >
            {image}
          </button>
        ))}
      </div>
      <div className={'w-full flex items-center justify-center [&>img]:mix-blend-darken'}>
        {images[selectedImage]}
      </div>
    </div>
  );
}
