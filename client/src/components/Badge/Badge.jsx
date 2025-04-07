export function Badge(props) {
  const { text, styles } = props;
  return (
    <span className={`inline-block py-1 px-2 bg-white text-xs ${styles}`}>
      {" "}
      {text}{" "}
    </span>
  );
}
