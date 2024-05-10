import clsx from "clsx";
import { HTMLAttributes } from "react";
import styles from "./Skeleton.module.scss";

interface SkeletonHeight {
  outer: number;
  inner: number;
}

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  height: number | SkeletonHeight;
  width: number;
}

export function Skeleton({
  style,
  width,
  height,
  className,
  ...otherProps
}: SkeletonProps) {
  const isHeightNumber = typeof height === "number";

  return (
    <div
      className={clsx(styles.skeletonOuter, className)}
      style={{
        height: !isHeightNumber ? `${height.outer}px` : undefined,
      }}
    >
      <div
        {...otherProps}
        className={styles.skeletonInner}
        style={{
          ...style,
          width: `${width}px`,
          height: !isHeightNumber ? `${height.inner}px` : `${height}px`,
        }}
      />
    </div>
  );
}
