"use client";

import styled from "styled-components";
import { usePathname } from "next/navigation";

const SidebarWrapper = styled.div`
  width: 260px;
  height: 100vh;
  background-color: #0f172a; /* dark blue */
  color: #e5e7eb;
  padding: 20px;
  box-sizing: border-box;
`;
const SidebarTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #38bdf8; /* light blue */
`;
const Section = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;
const SectionTitle = styled.li`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  color: #94a3b8;
`;

const SectionItem = styled.li`
  font-size: 14px;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #1e293b;
    color: #38bdf8;
  }
`;

const SideBar = () => {
  const pathname = usePathname();
  
  // Extract page name from pathname (e.g., /next-js -> "Next JS")
  const getPageName = () => {
    if (!pathname || pathname === "/") {
      return "Home";
    }
    
    // Get the last segment of the path
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "Home";
    
    // Format: replace hyphens with spaces and capitalize words
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <SidebarWrapper>
      <div className="">
        <SidebarTitle>{getPageName()}</SidebarTitle>
        <Section>
          <SectionTitle>Routing</SectionTitle>
          <SectionItem>Basic Routing</SectionItem>
          <SectionItem>Dynamic Routing</SectionItem>
          <SectionItem>API Routing</SectionItem>
        </Section>
        <Section>
          <SectionTitle>Rendering</SectionTitle>
          <SectionItem>Server Rendering</SectionItem>
          <SectionItem>Data Fetching</SectionItem>
          <SectionItem>Styling</SectionItem>
        </Section>
      </div>
    </SidebarWrapper>
  );
};

export default SideBar;
