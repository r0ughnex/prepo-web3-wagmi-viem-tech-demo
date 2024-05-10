import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "primary", ...otherProps }, ref) => {
    return (
      <button
        {...otherProps}
        className={clsx(
          styles.button,
          { [styles.buttonPrimary]: variant === "primary" },
          { [styles.buttonSecondary]: variant === "secondary" },
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
