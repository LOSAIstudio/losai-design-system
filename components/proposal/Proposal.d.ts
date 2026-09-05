import * as React from "react";

export interface ProposalModule {
  id: string;
  /** Mono code, e.g. "PD-1" */
  code?: string;
  name: React.ReactNode;
  /** Italic Cormorant detail line */
  detail?: React.ReactNode;
  /** Mono duration, e.g. "1 week" */
  duration?: string;
  /** Numbered scope list revealed by the + toggle */
  included?: React.ReactNode[];
  /** Italic hand-over list revealed by the + toggle */
  deliverables?: React.ReactNode[];
  /** Fee in CENTS. Omit for a quoted line. */
  feeCents?: number;
  /** Derived from an unconfirmed figure — renders in --losai-cp-uncertain with a dashed rule */
  uncertain?: boolean;
  /** Selected by default; pass false to start unselected */
  selected?: boolean;
  /** Included and not togglable */
  required?: boolean;
}

export interface ProposalCard {
  id: string;
  /** Gold mono index, e.g. "01" */
  index?: string;
  /** Mono phase span beside the index rule, e.g. "SD / DD" */
  phase?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  modules: ProposalModule[];
}

/**
 * Modular fee schedule — selectable services whose subtotals and grand total recompute live.
 */
export interface ProposalProps {
  cards?: ProposalCard[];
  /** Italic note beside the grand total */
  note?: React.ReactNode;
  totalLabel?: string;
  /** Hide the grand total when the block sits inside a larger schedule */
  showTotal?: boolean;
  style?: React.CSSProperties;
}

export declare function Proposal(props: ProposalProps): JSX.Element;

/** Formats cents as "$29,700" — money is held in cents and formatted only at the edge. */
export declare function money(cents: number): string;
