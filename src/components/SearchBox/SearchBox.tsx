
interface ISearchBox {
  className?: string;
}

export function SearchBox(props: ISearchBox) {
  const { className } = props;

  return (
    <input
      className={`bg-white text-black rounded-full px-3 py-2 w-full ${className}`}
      placeholder="Search by name, job, or title..."
    />
  );
}
