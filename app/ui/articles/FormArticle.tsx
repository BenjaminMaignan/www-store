import { addArticle } from '@lib/actions/article';

export function FormArticle() {
  const submit = async (formData: FormData) => {
    'use server';
    const name = formData.get('name') as string;
    const price = formData.get('price') as string;
    const availableStock = formData.get('availableStock') as unknown as number;
    await addArticle({ name, price, availableStock } as Article);
  };

  return (
    <form action={submit} className={'bg-zinc-50 p-8 flex flex-col gap-8'}>
      <div>
        <label htmlFor='name'>Name :</label>
        <input type='text' name='name' id='name' />
      </div>
      <div>
        <label htmlFor='price'>Price :</label>
        <input type='text' name='price' id='price' />
      </div>
      <div>
        <label htmlFor='availableStock'>Stock:</label>
        <input type='number' name='availableStock' id='availableStock' />
      </div>
      <button className={'bg-black text-white p-2 rounded-lg'}>Submit</button>
    </form>
  );
}
