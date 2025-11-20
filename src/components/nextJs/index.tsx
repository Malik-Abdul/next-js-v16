"use client";
import { Fragment, useState } from "react";
import Routing from "./Routing";
import DynamicRouting from "./DynamicRouting";

const MockInterviews = () => {
    const [currentTopic, setCurrentTopic] = useState<number>(1);
    const allTopics: { [key: number]: React.ReactNode } = {
        1: <Routing />,
        2: <DynamicRouting />,
    }
  const links = [
    { title: "Routing", value: 1 },
    { title: "Dynamic Routing", value: 2 },
    { title: "API routes", value: 3 },
    { title: "Rendering", value: 4 },
    { title: "Data fetching", value: 5 },
    { title: "Styling", value: 6 },
  ];
  
  return (
    <Fragment>
      <h2>Next JS Insights</h2>
      <div className="">
        {links.map((link) => (
          <div key={link.value}>
            <a href="#" onClick={()=>setCurrentTopic(link.value)}>{link.title}</a>
          </div>
        ))}
      </div>
      {currentTopic && allTopics[currentTopic]}
    </Fragment>
  );
};

export default MockInterviews;
