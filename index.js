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
  spotify: 'heartBeat',
  whoops: 'hinge'
};

Object.keys(classMap).forEach((icon) => {
  const el = $('.' + icon);
  // Remove, then add on mouseover.
  // This way, the animation can finish playing even if user mouses out of frame.
  // (As opposed to toggling onmouseover & onmouseout.)
  el.onmouseover = (e) => {
    el.classList.remove(classMap[icon]);
    setTimeout(() => {
      el.classList.add(classMap[icon]);
    });
  }
});
