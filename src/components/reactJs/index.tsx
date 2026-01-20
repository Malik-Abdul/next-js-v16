"use client";
import { Fragment, useState } from "react";
// import Routing from "./Routing";
// import DynamicRouting from "./DynamicRouting";
import PropsDrillingF from "./PropsDrillingF";

const ReactJS = () => {
  const [currentTopic, setCurrentTopic] = useState<number>(1);
  const allTopics: { [key: number]: React.ReactNode } = {
    1: <PropsDrillingF />,
    // 2: <DynamicRouting />,
  };
  const links = [{ title: "Props Drilling", value: 1 }];

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
