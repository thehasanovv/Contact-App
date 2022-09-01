import { Skeleton } from "antd";
import React from "react";
import classes from "./skeleton.module.scss";

const SkeletonCards = () => (
  <div className={classes.skeleton}>
    <Skeleton
      active={true}
      avatar
      paragraph={{
        rows: 3,
      }}
    />
  </div>
);

export default SkeletonCards;
