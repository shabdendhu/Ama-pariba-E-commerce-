import React from "react";
import Skeleton from "react-loading-skeleton";

const PageSkeleton = () => {
  return (
    <React.Fragment>
      <Skeleton height={70} />
      <br />
      <br />
      <br />
      <Skeleton count={10} />
      <br />
      <br />
      <br />
      <Skeleton count={10} />
    </React.Fragment>
  );
};
export default PageSkeleton;
