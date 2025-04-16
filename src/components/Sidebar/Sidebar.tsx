"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

interface ISidebarItem {
  id: string;
  title: string;
  target: string;
  children?: Array<ISidebarItem>;
}

interface ISidebarProps {
  data: Array<ISidebarItem>
}

export function Sidebar(props: ISidebarProps) {
  const { data } = props;

  const [visibleMatrix, setVisibleMatrix] = useState(new Map());

  useEffect(() => {
    data.forEach((item) => {
      setVisibleMatrix(visibleMatrix.set(item.title, false));
    });
  }, []);

  return (
    <aside className="md:w-80 hidden md:block">
      <div className="p-4 w-full flex justify-between border-b">
        <h1> Menu </h1>
        <Button variant="ghost" onClick={() => {}}>
          {" "}
          <FontAwesomeIcon icon={faGear} className="text-black" />{" "}
        </Button>
      </div>
      <ul className="px-2 py-4">
        {data.map((item) => (
          <li className="px-2 py-2" key={item.title}>
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => {
                if (visibleMatrix.get(item.title)) {
                  setVisibleMatrix(new Map(visibleMatrix.set(item.title, false)));
                }
                else {
                  setVisibleMatrix(new Map(visibleMatrix.set(item.title, true)));
                }
              }}
            >
              <span className="flex justify-between w-full p-2 bg-gray-100">
                {item.title}{" "}
                {item.children && !visibleMatrix.get(item.title) && (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
                {item.children && visibleMatrix.get(item.title) && (
                  <FontAwesomeIcon icon={faAngleUp} />
                )}
              </span>
            </Button>
            <ul className="ms-3">
              {visibleMatrix.get(item.title) &&
                item?.children?.map((child) => (
                  <li className="p-2" key={child.title}>
                    {" "}
                    {child.title}{" "}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}
