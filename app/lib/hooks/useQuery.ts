import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value.trim() === '') {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  const setQuery = useCallback(
    (name: string, value: string) => {
      const queryString = createQueryString(name, value);
      router.push(`${pathname}?${queryString}`);
    },
    [createQueryString]
  );

  return {
    setQuery,
  };
}
