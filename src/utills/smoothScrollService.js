import { scroller } from 'react-scroll';

export const scrollToSection = (sectionId) => {
  scroller.scrollTo(sectionId, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};
