import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <input
        {...otherProps}
        className={clsx(styles.input, className)}
        ref={ref}
      >
        {children}
      </input>
    );
  }
);

Input.displayName = "Input";

export { Input };
