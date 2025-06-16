'use client';

import { useQuery } from '@lib/hooks/useQuery';

export function SearchBar() {
  const { setQuery } = useQuery();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.trim() === '') {
      setQuery('name', '');
    } else {
      setQuery('name', value);
    }
  };

  return (
    <input
      type='text'
      className={'w-full p-2 bg-white border border-zinc-300'}
      placeholder='Search...'
      onChange={onChange}
    />
  );
}
