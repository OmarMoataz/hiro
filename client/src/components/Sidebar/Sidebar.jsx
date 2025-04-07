"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Button } from "../Header/ui/button";

export function Sidebar(props) {
  const { data } = props;

  const [visibleMatrix, setVisibleMatrix] = useState({});

  useEffect(() => {
    const visibilityHash = {};
    data.forEach((item) => {
      visibilityHash[item] = false;
    });

    setVisibleMatrix(visibilityHash);
  }, []);

  return (
    <aside className="w-80">
      <div className="p-4 w-full flex justify-between border-b">
        <h1> Menu </h1>
        <Button onClick={() => {
          
        }}> <FontAwesomeIcon icon={faGear} className="text-black" /> </Button>
      </div>
      <ul className="px-2 py-4">
        {data.map((item) => (
          <li className="px-2 py-2" key={item.title}>
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => {
                if (visibleMatrix[item.title])
                  setVisibleMatrix({ ...visibleMatrix, [item.title]: false });
                else setVisibleMatrix({ ...visibleMatrix, [item.title]: true });
              }}
            >
              <span className="flex justify-between w-full p-2 bg-gray-100">
                {item.title}{" "}
                {item.children && !visibleMatrix[item.title] && (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
                {item.children && visibleMatrix[item.title] && (
                  <FontAwesomeIcon icon={faAngleUp} />
                )}
              </span>
            </Button>
            <ul className="ms-3">
              {visibleMatrix[item.title] &&
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
