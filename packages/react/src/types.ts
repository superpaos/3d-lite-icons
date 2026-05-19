import type { CSSProperties, MouseEventHandler } from 'react';

export interface IconProps {
  /** Render size in px. Picks nearest available resolution (128/512). Default: 24 */
  size?: number;
  /** Enable CSS drop-shadow following the icon's transparent shape. Default: false */
  shadow?: boolean;
  /** Shadow color. Default: 'rgba(0,0,0,0.2)' */
  shadowColor?: string;
  /** Shadow horizontal offset in px. Default: 0 */
  shadowX?: number;
  /** Shadow vertical offset in px. Default: 4 */
  shadowY?: number;
  /** Shadow blur radius in px. Default: 8 */
  shadowBlur?: number;
  className?: string;
  style?: CSSProperties;
  alt?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}
