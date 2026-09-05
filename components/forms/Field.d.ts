import * as React from "react";

/**
 * Underlined text input with a mono label above and Cormorant value — the studio's default form control.
 * @startingPoint section="Core" subtitle="Underline field, textarea, checkbox and radio" viewport="700x260"
 */
export interface FieldProps {
  /** Mono 8px uppercase label rendered above the control */
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  /** Italic 12.5px helper text under the rule */
  help?: string;
  /** Error message — turns the underline and text #9c3f2c and adds a 4px square marker */
  error?: string;
  disabled?: boolean;
  /** underline = single hairline input; boxed = bordered textarea */
  variant?: "underline" | "boxed";
  rows?: number;
  style?: React.CSSProperties;
}

export declare function Field(props: FieldProps): JSX.Element;

export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
}

/** 16px square box that fills ink with a hairline tick when checked. */
export declare function Checkbox(props: CheckboxProps): JSX.Element;

export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
}

/** 14px circle with a 6px ink dot — the only round element in the system. */
export declare function Radio(props: RadioProps): JSX.Element;
