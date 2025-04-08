import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function IconAndText(props) {
  const { fontIcon, text, styles } = props;

  return (
    <span className={styles}>
      <FontAwesomeIcon icon={fontIcon} /> <span> {text} </span>
    </span>
  );
}
