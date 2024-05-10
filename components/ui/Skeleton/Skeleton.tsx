import clsx from "clsx";
import { HTMLAttributes } from "react";
import styles from "./Skeleton.module.scss";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
}

export function Skeleton({
  style,
  width,
  height,
  className,
  ...otherProps
}: SkeletonProps) {
  return (
    <div
      {...otherProps}
      style={{
        ...style,
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={clsx(styles.skeleton, className)}
    />
  );
}
