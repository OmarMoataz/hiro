import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IIconAndText {
  fontIcon: IconProp;
  text: string;
  styles?: string;
}

export function IconAndText(props: IIconAndText) {
  const { fontIcon, text, styles } = props;

  return (
    <span className={styles}>
      <FontAwesomeIcon icon={fontIcon} /> <span> {text} </span>
    </span>
  );
}
