import * as React from "react";

/**
 * Full-bleed dark or photographic cover — reversed wordmark, tracked label, Cormorant Light title, hairline meta line.
 * @startingPoint section="Editorial" subtitle="Photographic and flat-dark cover panels" viewport="700x400"
 */
export interface CoverProps {
  /** Background photograph; a bottom-weighted scrim is applied automatically */
  image?: string;
  /** Tracked caps label, top right */
  label?: string;
  /** First line of the title, Cormorant Light 44px */
  title?: React.ReactNode;
  /** Second line, set italic */
  titleItalic?: React.ReactNode;
  /** Mono meta items shown under a hairline */
  meta?: string[];
  /** Mono caps discipline line beside the hairline — the mark never stands alone */
  discipline?: string;
  /** Second line of the lockup — the project, set in serif */
  project?: string;
  logoSrc?: string;
  height?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Cover(props: CoverProps): JSX.Element;
