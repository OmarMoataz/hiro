interface ITitleCard {
  src: string;
  title: string;
  shortDesc: string;
}

export function TitleCard(props: ITitleCard) {
  const { src, title, shortDesc } = props;
  return (
    <div className="flex gap-2">
      <img className="w-15 h-15" src={src} />
      <div>
        <div className="font-bold"> {title} </div>
        <span> {shortDesc} </span>
      </div>
    </div>
  );
}
