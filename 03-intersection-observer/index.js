const text = document.querySelector('.scroll');
const button = document.querySelector('.btn');

const options = {
  root: text,
  threshold: 0.5,
};

const handleIntersect = payload => {
  if (payload[0].intersectionRatio > 0) {
    button.disabled = false;
  }
};

const observer = new IntersectionObserver(handleIntersect, options);

observer.observe(button);
