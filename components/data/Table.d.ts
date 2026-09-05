import * as React from "react";

export interface TableColumn {
  key: string;
  label: string;
  /** index = gold mono numeral; mono = tracked caps metadata; default = Cormorant 16px */
  kind?: "index" | "mono" | "text";
  align?: "left" | "right";
  width?: number | string;
}

/**
 * Schedule, fee and document tables — mono caps header over a 1px ink rule, 0.5px rows, Cormorant values.
 * @startingPoint section="Core" subtitle="Data table, spec rows and meta row" viewport="700x320"
 */
export interface TableProps {
  columns?: TableColumn[];
  rows?: Record<string, React.ReactNode>[];
  /** Optional closing row, separated by a 1px #c8c4b8 rule */
  total?: Record<string, React.ReactNode>;
  /** Row index held in the tint state */
  activeIndex?: number;
  style?: React.CSSProperties;
}

export declare function Table(props: TableProps): JSX.Element;

export interface SpecRowsProps {
  rows?: { label: string; value: React.ReactNode }[];
  style?: React.CSSProperties;
}

/** 150px mono label column beside a Cormorant value — for project facts, not tabular data. */
export declare function SpecRows(props: SpecRowsProps): JSX.Element;

export interface MetaRowProps {
  items?: { label: string; value: React.ReactNode; sub?: string }[];
  style?: React.CSSProperties;
}

/** Equal columns split by 1px internal rules, capped top and bottom by 1px #c8c4b8. */
export declare function MetaRow(props: MetaRowProps): JSX.Element;
