'use client';

import Link from 'next/link';

export interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

interface Props {
  breadcrumbs: Breadcrumb[];
}

export function Breadcrumb({ breadcrumbs }: Readonly<Props>) {
  return (
    <nav className={'text-xs text-zinc-400'}>
      <ul className={'flex gap-2 hover:[&_a]:text-black'}>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <li key={'breadcrumb_location_' + index}>
              {breadcrumb?.active ? (
                <span className={'text-black'}>{breadcrumb.label}</span>
              ) : (
                <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className={'ml-2'}>/</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
