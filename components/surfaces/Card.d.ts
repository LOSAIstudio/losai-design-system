import * as React from "react";

/**
 * Image and hairline-bordered cards — the studio's unit for projects, drawings and documents.
 * @startingPoint section="Core" subtitle="Image card, bordered card, figure card, thumbnail" viewport="700x340"
 */
export interface CardProps {
  /** image = photo + filename caption; bordered = hairline box with gold index and footer */
  variant?: "image" | "bordered";
  /** Gold mono index numeral, e.g. "01" */
  index?: string;
  title?: React.ReactNode;
  /** Italic Cormorant subtitle */
  subtitle?: React.ReactNode;
  /** Mono caption under an image card, e.g. "W84_EXT_03.TIF" */
  filename?: string;
  image?: string;
  imageHeight?: number;
  /** Mono meta shown at the left of the footer rule */
  meta?: string;
  /** Footer action label, default "Open →" */
  action?: string;
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;

export interface FigureCardProps {
  label?: string;
  /** Large Cormorant Light figure, e.g. "$29,700" */
  figure?: React.ReactNode;
  unit?: string;
  breakdown?: { label: string; value: React.ReactNode }[];
  style?: React.CSSProperties;
}

/** 1px ink top rule, mono label, 44px Cormorant figure and hairline breakdown rows. */
export declare function FigureCard(props: FigureCardProps): JSX.Element;

export interface ThumbnailProps {
  image?: string;
  filename?: string;
  /** selected = 1px gold outline offset 3px + gold tick; excluded = 35% opacity */
  state?: "default" | "selected" | "excluded";
  /** false renders the selected state in ink instead of gold */
  accent?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function Thumbnail(props: ThumbnailProps): JSX.Element;
