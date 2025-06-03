interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  value: number;
}

export function CurrencyFormatter({ value, ...props }: Readonly<Props>) {
  return (
    <p {...props}>
      {new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
      }).format(value)}
    </p>
  );
}