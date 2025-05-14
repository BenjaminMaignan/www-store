import { clsx } from 'clsx';

interface Props {
  colors: string[];
}

export function ArticleColorSelector({ colors }: Readonly<Props>) {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-800';
      case 'blue':
        return 'bg-blue-800';
      case 'green':
        return 'bg-green-800';
      case 'yellow':
        return 'bg-yellow-800';
      case 'purple':
        return 'bg-purple-800';
      default:
        return '';
    }
  };

  return (
    <div className={'flex flex-wrap gap-2'}>
      {colors.map((color) => (
        <div
          key={color}
          className={clsx(
            'w-10 h-10 bg-zinc-100 flex items-center justify-center',
            'border-b-4 border-zinc-300'
          )}
        >
          <div className={`w-3 h-3 ${getColorClass(color)} rounded-full`} />
        </div>
      ))}
    </div>
  );
}
