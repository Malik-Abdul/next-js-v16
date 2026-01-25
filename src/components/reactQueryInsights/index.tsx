"use client";
import { Fragment, useState } from "react";
// import Routing from "./Routing";
// import DynamicRouting from "./DynamicRouting";
import T01WithOutReactQuery from "./T01WithOutReactQuery";
import T02WithReactQuery from "./T02WithReactQuery";

const ReactQueryInsights = () => {
  const [currentTopic, setCurrentTopic] = useState<number>(1);
  const allTopics: { [key: number]: React.ReactNode } = {
    1: <T02WithReactQuery />,
    2: <T01WithOutReactQuery />,
  };
  const links = [
    { title: "T01WithOutReactQuery", value: 2 },
    { title: "T02WithReactQuery", value: 1 },
  ];

  return (
    <Fragment>
      <h2>React Query</h2>
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

export default ReactQueryInsights;
