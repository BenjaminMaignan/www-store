import { IconStarFilled } from '@tabler/icons-react';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  averageRate: number;
}

export function ArticleRate({ averageRate, ...props }: Readonly<Props>) {
  const fullStars = Math.floor(averageRate / 20);
  const partialStar = (averageRate % 20) * 5;

  const getClipPath = (index: number) => {
    if (index < fullStars) {
      return 'none';
    } else if (index > fullStars) {
      return 'inset(0 100% 0 0)';
    } else {
      return `inset(0 ${100 - partialStar}% 0 0)`;
    }
  };

  return (
    <div {...props} className={'flex items-end gap-2'}>
      <div className={'grid grid-cols-5 w-16 h-4'}>
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={'rating_stars_' + index} className={'relative'}>
            <IconStarFilled className={'absolute w-full text-zinc-200'} />
            <IconStarFilled
              className={'absolute w-full text-zinc-800'}
              style={{
                clipPath: getClipPath(index),
              }}
            />
          </span>
        ))}
      </div>
      <div>
        <p className={'text-[0.6rem] leading-none'}>1600</p>
      </div>
    </div>
  );
}
