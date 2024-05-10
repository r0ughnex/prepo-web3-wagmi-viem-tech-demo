import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Container.module.scss";

type Size = "default" | "small" | "full";

type Padding = "default" | "none";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  padding?: Padding;
  size?: Size;
}

export function Container({
  children,
  className,
  size = "default",
  padding = "default",
}: ContainerProps) {
  return (
    <div
      className={clsx(
        styles.container,
        { [styles.containerSizeFull]: size === "full" },
        { [styles.containerSizeSmall]: size === "small" },
        { [styles.containerSizeDefault]: size === "default" },
        { [styles.containerWithPadding]: padding === "default" },
        { [styles.containerWithoutPadding]: padding === "none" },
        className
      )}
    >
      {children}
    </div>
  );
}
