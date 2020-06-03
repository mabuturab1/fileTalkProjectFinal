import React, { useState } from "react";

import { Button, Loader } from "semantic-ui-react";

interface ButtonProps {
  disabled?: boolean;
  label?: string;
  padding?: string[];
  width?: string;
  height?: string;
  type?: string;
  icon?: any;
  color?: string;
  style?: any;
  backgroundColor?: string;
  hoverColor?: string;
  onClick?: (event: any, data: any) => any;

  showLoader?: boolean;
  isErrorText?: boolean;
}
const MyButton = (props: ButtonProps) => {
  let style: { [key: string]: any } = {
    textAlign: "center",
  };
  let label = "";
  let iconObj = null;

  const [mouseHover, setMouseHover] = useState(false);
  if (props.label != null) label = props.label;
  if (props.padding != null && props.padding.length > 1) {
    style = {
      ...style,
      paddingTop: props.padding[0],
      paddingBottom: props.padding[0],
      paddingLeft: props.padding[1],
      paddingRight: props.padding[1],
    };
  }

  style = {
    ...style,
    width: props.width,
    height: props.height,
    color: props.color,
    backgroundColor: props.backgroundColor,
  };
  if (props.isErrorText)
    style = {
      ...style,
      color: "#ff604f",
    };
  if (props.showLoader) {
    label = "";

    iconObj = <Loader size="tiny" active inline inverted />;
  }
  style = {
    ...style,
    ...props.style,
  };
  if (props.type === "primary")
    return (
      <Button onClick={props.onClick} style={style} primary>
        {label}
        {iconObj}
      </Button>
    );

  if (props.type === "secondary")
    return (
      <Button onClick={props.onClick} style={style} secondary>
        {label}
        {iconObj}
      </Button>
    );

  if (props.type === "basic") {
    return (
      <Button onClick={props.onClick} style={style} basic>
        {label}
        {iconObj}
      </Button>
    );
  }
  const onHover = (val: boolean) => {
    setMouseHover(val);
  };
  const getBackgroundColor = () => {
    if (props.hoverColor != null && mouseHover) return props.hoverColor;

    if (props.backgroundColor != null && !mouseHover)
      return props.backgroundColor;

    return undefined;
  };
  return (
    <Button
      disabled={props.disabled}
      onClick={props.onClick}
      style={{ ...style, backgroundColor: getBackgroundColor() }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      primary
    >
      {label}
      {iconObj}
    </Button>
  );
};
export default MyButton;
