'use client';

import { useQuery } from '@lib/hooks/useQuery';
import { useSearchParams } from 'next/navigation';

export function SortingSelector() {
  const { setQuery } = useQuery();
  const searchParams = useSearchParams();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setQuery('sort', value);
  };

  return (
    <select
      name='sort'
      id='sort'
      className={'w-full p-2 bg-white border border-zinc-300'}
      defaultValue={searchParams.get('sort') ?? 'price_asc'}
      onChange={onChange}
    >
      <option value='price_asc'>Prix croissant</option>
      <option value='price_desc'>Prix décroissant</option>
    </select>
  );
}
