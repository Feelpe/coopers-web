import { Checkbox, CheckboxProps } from "@chakra-ui/react";

interface CheckboxStyledProps extends CheckboxProps {
  children: string;
  rounded?: number | string;
  roundedFull?: boolean;
}

export const controlColor = "#A1A1A1";
const focusColor = "#A1A1A1";

const defaultClasses = ({ controlRadius = "1px", bgColor = controlColor }) => {
  return {
    "span[class*='checkbox__control']:not([data-disabled])": {
      borderColor: controlColor,
      borderRadius: controlRadius,
      _checked: {
        bg: bgColor,
        borderColor: controlColor,
      },
      _focus: {
        boxShadow: `0 0 0 2px ${focusColor}`,
        _checked: {
          boxShadow: `0 0 0 2px ${focusColor}`,
        },
      },
    },
  };
};

export const CheckboxStyled = ({
  children,
  rounded,
  roundedFull,
  ...rest
}: CheckboxStyledProps) => {
  let classes = defaultClasses({});
  if (roundedFull) {
    classes = defaultClasses({ controlRadius: "99px" });
  }
  if (rounded) {
    classes = defaultClasses({ controlRadius: "4px", bgColor: "white" });
  }

  return (
    <Checkbox __css={classes} defaultChecked {...rest}>
      {children}
    </Checkbox>
  );
};
