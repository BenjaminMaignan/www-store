interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  selected: boolean;
  onClick: () => void;
}

export function SizeButton({ value, selected, onClick, ...props }: Readonly<Props>) {
  return (
    <button
      {...props}
      className={'border border-zinc-300 disabled:text-zinc-500 px-3 py-1'}
      onClick={onClick}
      style={{
        ...(props.disabled && {
          background:
            'linear-gradient(to bottom right,#0000 49%, #d4d4d8 ,#0000 51%)',
        }),
        ...(selected && {
          background:'#000',
          color: '#fff',
          border: '1px solid #000',
        }),
      }}
    >
      {value}
    </button>
  );
}
