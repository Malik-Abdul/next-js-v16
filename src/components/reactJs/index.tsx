"use client";
import { Fragment, useState } from "react";
// import Routing from "./Routing";
// import DynamicRouting from "./DynamicRouting";
import PropsDrillingF from "./PropsDrillingF";
import T02UseOfUseMemo from "./T02UseOfUseMemo";
import T01Debounce from "./T01Debounce";
import T03ModerenWayToFetchData from "./T03ModerenWayToFetchData";

const ReactJS = () => {
  const [currentTopic, setCurrentTopic] = useState<number>(1);
  const allTopics: { [key: number]: React.ReactNode } = {
    4: <PropsDrillingF />,
    2: <T01Debounce />,
    3: <T02UseOfUseMemo />,
    1: <T03ModerenWayToFetchData />,
  };
  const links = [
    { title: "Props Drilling", value: 1 },
    { title: "Debounce", value: 2 },
    { title: "UseMemo", value: 3 },
    { title: "Moderen way to use UseEffect", value: 4 },
    { title: "Use of Suspense", value: 5 },
  ];

  return (
    <Fragment>
      <h2>React JS Insights</h2>
      <div className="">
        {links.map((link) => (
          <div key={link.value}>
            <a href="#" onClick={() => setCurrentTopic(link.value)}>
              {link.title}
            </a>
          </div>
        ))}
      </div>
      {currentTopic && allTopics[currentTopic]}
    </Fragment>
  );
};

export default ReactJS;
