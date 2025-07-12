'use client';

import { useQuery } from '@lib/hooks/useQuery';
import { IconSearch } from '@tabler/icons-react';

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
    <div className={'relative'}>
      <input
        type='text'
        className={'max-w-[600px] min-w-[400px] w-full p-2 bg-white border border-zinc-300'}
        placeholder='Search...'
        onChange={onChange}
      />
      <IconSearch className={'absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400'} />
    </div>
  );
}
