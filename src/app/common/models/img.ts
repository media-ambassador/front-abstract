import {
  MaUrl,
  MaRwdThresholds
} from './common';

/**
 * Progi wyświetlania obrazków, jeśli szerokość wyświetlania <= index,
 * to używamy zadeklarowanego w url obrazka
 */
export type MaImgRwdThresholds = MaRwdThresholds<MaUrl>;

/**
 * Wspólny interfejs dla img
 */
export interface MaImg {
  src: MaUrl;
  alt?: string;
  title?: string;
}

/**
 * Domyślnie używamy src jako źródła obrazka,
 * jeśli szerokość wyświetlania zejdzie poniżej progu zdefiniowanego
 * w `rwdThresholds` wyświetlamy obrazek tam zdefiniowany
 */
export interface MaImgRwd extends MaImg {
  rwdThresholds?: MaImgRwdThresholds;
}
