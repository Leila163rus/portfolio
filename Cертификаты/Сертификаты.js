'use strict'

const image = document.querySelectorAll('img');

image.forEach((e) => {
  e.addEventListener('mouseover', () => {
    e.style.transform = 'scale(1.2)';
    e.style.boxShadow = '0 25px 23px rgba(0, 0, 0, 0.50)';
    e.style.transition = 'all 0.5s ease-out';
  });
})

image.forEach((e) => {
  e.addEventListener('mouseout', () => {
    e.style.transform = 'scale(1)';
    e.style.boxShadow = 'none';
    e.style.transition = 'all 0.7s ease-out';
  })
});

