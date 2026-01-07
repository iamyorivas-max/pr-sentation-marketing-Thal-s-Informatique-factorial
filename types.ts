
export interface SlideProps {
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export enum SlideId {
  COVER = 0,
  ABOUT_THALES = 1,
  EXPERTISE = 2,
  MARKETS = 3,
  TRENDS = 4,
  WHY_FACTORIAL = 5,
  SYNERGY = 6,
  CASE_STUDIES = 7,
  COLLABORATION = 8,
  VISION = 9
}
