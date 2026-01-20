import Link from "next/link";

import { Fragment } from "react/jsx-runtime";

const Header = () => {
  const nav = [
    { id: 1, title: "Next JS", link: "/next-js" },
    { id: 2, title: "React JS", link: "/react-js" },
    { id: 3, title: "Contexct API", link: "/contextApi" },
    { id: 4, title: "CSS Props", link: "/cssProps" },
    { id: 5, title: "HOC", link: "/hoc" },
    { id: 6, title: "Mock Interviews", link: "/mock-interviews" },
  ];

  return (
    <Fragment>
      <div className="page-header">
        <nav className="top-menu">
          {nav.map((item) => (
            <Link key={item.id} className="top-eachNave" href={item.link}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
