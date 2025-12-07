import dynamic from "next/dynamic";
export const SortProductsCatsWise = dynamic(
  () => import("./SortProductsCatsWise")
);
export const FetchUsersWithState = dynamic(
  () => import("./FetchUsersWithState")
);
