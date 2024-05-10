import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";
import styles from "./Card.module.scss";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...otherProps }, ref) => {
    return (
      <div {...otherProps} className={clsx(styles.card, className)} ref={ref} />
    );
  }
);

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...otherProps }, ref) => {
    return (
      <div
        {...otherProps}
        className={clsx(styles.cardHeader, className)}
        ref={ref}
      />
    );
  }
);

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...otherProps }, ref) => {
  return (
    <h3
      {...otherProps}
      className={clsx(styles.cardTitle, className)}
      ref={ref}
    />
  );
});

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...otherProps }, ref) => {
  return (
    <p
      {...otherProps}
      className={clsx(styles.cardDescription, className)}
      ref={ref}
    />
  );
});

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...otherProps }, ref) => {
    return (
      <div
        {...otherProps}
        className={clsx(styles.cardContent, className)}
        ref={ref}
      />
    );
  }
);

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...otherProps }, ref) => {
    return (
      <div
        {...otherProps}
        className={clsx(styles.cardFooter, className)}
        ref={ref}
      />
    );
  }
);

Card.displayName = "Card";
CardTitle.displayName = "CardTitle";
CardHeader.displayName = "CardHeader";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
