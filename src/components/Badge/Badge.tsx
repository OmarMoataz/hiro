interface IBadgeProps {
  text: string;
  styles?: string;
}

export function Badge(props: IBadgeProps) {
  const { text, styles } = props;
  return (
    <span className={`inline-block py-1 px-2 bg-white text-xs ${styles}`}>
      {" "}
      {text}{" "}
    </span>
  );
}
