import * as React from "react";

/**
 * Square status marker in mono caps — the only place project state is named.
 * @startingPoint section="Core" subtitle="Status badges and toggleable filter tags" viewport="700x150"
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** awarded = ink fill; review = gold outline; draft = #c8c4b8 outline; closed = #e2dfd6 outline; live = 5px gold square + ink label */
  variant?: "awarded" | "review" | "draft" | "closed" | "live";
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;

export interface TagProps {
  children?: React.ReactNode;
  /** Selected tags take the ink fill; unselected stay hairline */
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;
