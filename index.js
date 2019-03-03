const $ = query => document.querySelector(query);

const classMap = {
  twitter: 'tada',
  insta: 'fadeIn',
  medium: 'swing',
  github: 'jello',
  youtube: 'rubberBand',
  soundcloud: 'heartBeat',
  itch: 'wobble',
  apple: 'heartBeat',
  spotify: 'heartBeat'
};

Object.keys(classMap).forEach((icon) => {
  const el = $('.' + icon);
  const child = el.querySelector('i') || el.querySelector('img');
  // Remove, then add on mouseover.
  // This way, the animation can finish playing even if user mouses out of frame.
  // (As opposed to toggling onmouseover & onmouseout.)
  el.onmouseover = (e) => {
    child.classList.remove(classMap[icon]);
    setTimeout(() => {
      child.classList.add(classMap[icon]);
    });
  }
});
