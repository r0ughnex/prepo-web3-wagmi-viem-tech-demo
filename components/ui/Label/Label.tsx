import clsx from "clsx";
import { LabelHTMLAttributes, forwardRef } from "react";
import styles from "./Label.module.scss";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <label
        {...otherProps}
        className={clsx(styles.label, className)}
        ref={ref}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
