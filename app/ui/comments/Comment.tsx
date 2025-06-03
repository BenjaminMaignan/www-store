import { ArticleRate } from '@ui/articles/ArticleRate';

export function Comment() {
  return (
    <div className={'p-3 border'}>
      <ArticleRate averageRate={20} className={'mb-4'} />
      <h3 className={'text-lg font-semibold mb-3'}>Sweat au top</h3>
      <p className={'text-sm font-semibold mb-1'}>bmaignan</p>
      <p className={'text-xs text-zinc-400 mb-4'}>il y a deux jours</p>
      <p className={'text-sm text-zinc-500'}>Super sweat, je recommande</p>
    </div>
  );
}
