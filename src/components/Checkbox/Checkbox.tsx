import * as React from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.scss";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography/Typography";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * If the Checkbox is checked
   *
   * @default false
   */
  isChecked?: boolean;
  /**
   * The label for the Checkbox
   */
  label?: string;
  /**
   * The callback fired when requesting to change the Checkbox state
   */
  onChange: () => void;
}

/**
 * @public
 *
 * @description
 *
 * The Checkbox allows a user to select an item.
 */
export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    className,
    isChecked = false,
    label,
    onChange,
    ...rest
  } = props;

  return (
    <div className={styles.container}>
      <IconButton
        className={classNames(
          className,
          isChecked && styles.isChecked,
          styles.checkboxIcon
        )}
        content={
          isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
        }
        onClick={onChange}
        role="checkbox"
        {...rest}
      />
      <Typography
        className={classNames(isChecked && styles.checked)}
        variant="secondary"
      >
        {label}
      </Typography>
    </div>
  );
};

Checkbox.displayName = "Checkbox";
