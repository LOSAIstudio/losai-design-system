import * as React from "react";

/**
 * Editorial asides — a ruled note, a caution, a pull quote or a single italic lead line.
 * @startingPoint section="Editorial" subtitle="Note, caution, pull quote and lead line" viewport="700x340"
 */
export interface CalloutProps {
  /** note = band between two 1px rules; caution = alert square + label; quote = pull quote; lead = one italic sentence */
  variant?: "note" | "caution" | "quote" | "lead";
  /** Mono eyebrow, e.g. "Note" or "Caution" */
  label?: string;
  children?: React.ReactNode;
  /** Pull-quote attribution, set after a 26px hairline */
  attribution?: string;
  /** false renders the pull quote's opening mark in ink instead of gold */
  accent?: boolean;
  style?: React.CSSProperties;
}

export declare function Callout(props: CalloutProps): JSX.Element;

export interface SectionHeadProps {
  /** Gold mono index, e.g. "01" */
  index?: string;
  /** Tracked mono caps label */
  label?: string;
  /** Italic-weight mono note at the far right */
  note?: string;
  style?: React.CSSProperties;
}

export declare function SectionHead(props: SectionHeadProps): JSX.Element;
