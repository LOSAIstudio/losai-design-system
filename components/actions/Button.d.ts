import * as React from "react";

/**
 * The studio's single action control: mono uppercase label, square corners, hairline or ink fill.
 * @startingPoint section="Core" subtitle="Ink, outline and text actions in three sizes" viewport="700x180"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = ink fill; secondary = hairline outline; text = underlined link action */
  variant?: "primary" | "secondary" | "text";
  /** s = 9px/18px padding, m = 14px/30px, l = 19px/44px */
  size?: "s" | "m" | "l";
  disabled?: boolean;
  /** Renders an <a> instead of a <button> */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
