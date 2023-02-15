import { CSSTransition } from "react-transition-group";
import styles from "./Select.module.scss";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import * as React from "react";
import { SelectContainer } from "./SelectContainer";
import classNames from "classnames";
import { IconButton } from "../IconButton";

export interface SelectProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the Select
   */
  children: React.ReactNode;
  /**
   * If the Select is open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * The callback fired when the Select closes
   */
  onClose: () => void;
  /**
   * The callback fired when the Select opens
   */
  onOpen: () => void;
  /**
   * The placeholder for the Select
   */
  placeholder?: string;
  /**
   * The initial selected item's index for the Select
   */
  selected?: number;
}

/**
 * @public
 *
 * @description
 *
 * The Select component displays a dropdown of selectable options.
 */
export const Select: React.FC<SelectProps> = (props) => {
  const {
    className,
    children,
    isOpen = false,
    onClose,
    onOpen,
    placeholder,
    selected,
    ...rest
  } = props;

  const [selectedIndex, setSelectedIndex] =
    React.useState<number | undefined>(selected);
  const [value, setValue] = React.useState<string>();
  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (selectedIndex !== undefined) {
      setValue(
        React.Children.toArray(children)[selectedIndex] as string
      );
    }
  }, [selectedIndex]);

  const onSetSelectedIndex = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div
      className={classNames(className, styles.selectContainer)}
      ref={selectRef}
      {...rest}
    >
      <div
        className={classNames(
          styles.selectInput,
          isOpen && styles.isOpen
        )}
        onClick={() => {
          if (isOpen) {
            onClose();
          } else {
            onOpen();
          }
        }}
      >
        {value ?? <div style={{ color: "gray" }}>{placeholder}</div>}
      </div>
      {isOpen ? (
        <IconButton
          ariaLabel="Chevron Up"
          className={styles.icon}
          content={<IoMdArrowDropup />}
          onClick={onClose}
        />
      ) : (
        <IconButton
          ariaLabel="Chevron Down"
          className={styles.icon}
          content={<IoMdArrowDropdown />}
          onClick={onOpen}
        />
      )}
      <CSSTransition
        in={isOpen}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <SelectContainer
          selected={selectedIndex}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          onSetSelectedIndex={onSetSelectedIndex}
          selectRef={selectRef}
        >
          {children}
        </SelectContainer>
      </CSSTransition>
    </div>
  );
};

Select.displayName = "Select";
