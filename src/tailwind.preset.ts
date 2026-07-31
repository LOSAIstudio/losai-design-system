import type { Config } from 'tailwindcss';
import { color, font } from './tokens/index.js';

/** Optional: spread into tailwind.config.ts `presets: [losaiPreset]`.
 *  Tailwind is not required — losai.css stands alone. */
const losaiPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        paper: color.paper, desk: color.desk, tint: color.tint,
        ink: color.ink, prose: color.prose, label: color.label,
        faint: color.faint, hairline: color.ruleStrong, rule: color.rule,
        gold: color.gold, alert: color.alert,
      },
      fontFamily: { serif: [font.family.serif], mono: [font.family.mono] },
      letterSpacing: { losai: font.tracking.base, 'losai-wide': font.tracking.wide },
      borderRadius: { none: '0' },
    },
  },
};

export default losaiPreset;
