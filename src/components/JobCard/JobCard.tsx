import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "../Badge/Badge";
import { IconAndText } from "../IconAndText/IconAndText";
import { TitleCard } from "./subComponents/TitleCard/TitleCard";

import {
  faLocationPin,
  faCalendar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

interface IJobCard {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string,
  timeSincePosted: string,
  styles?: string,
}

export function JobCard(props: IJobCard) {
  const {
    companyLogo,
    jobTitle,
    companyName,
    location,
    timeSincePosted,
    styles,
  } = props;
  return (
    <div className={`bg-green-100 p-4 flex ${styles}`}>
      <div className="grow-1">
        <TitleCard src={companyLogo} title={jobTitle} shortDesc={companyName} />
        <div className="mt-3">
          <IconAndText
            styles="text-sm me-2"
            text={location}
            fontIcon={faLocationPin}
          />
          <IconAndText
            styles="text-sm"
            text={timeSincePosted}
            fontIcon={faCalendar}
          />
        </div>
        <div className="mt-3 flex gap-2">
          <Badge text="0-3y of exp" />
          <Badge text="Full time" />
          <Badge text="Remote" />
        </div>
      </div>
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
}
